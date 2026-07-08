from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework_simplejwt.tokens import RefreshToken
from apps.accounts.models import User, School
from apps.students.models import Teacher, Guardian, Student


class BaseTestCase(TestCase):
    def setUp(self):
        self.manager = User.objects.create_user(
            username="manager1", password="test123", role="manager"
        )
        self.school = School.objects.create(name="مدرسة الاختبار", manager=self.manager)
        self.manager.school = self.school
        self.manager.save()

        self.teacher_user = User.objects.create_user(
            username="teacher1", password="test123", role="teacher", school=self.school
        )
        self.teacher = Teacher.objects.create(user=self.teacher_user)

        self.guardian_user = User.objects.create_user(
            username="guardian1", password="test123", role="guardian", school=self.school
        )
        self.guardian = Guardian.objects.create(user=self.guardian_user, relationship="father")

        self.student = Student.objects.create(
            name="طالب اختبار", guardian=self.guardian, teacher=self.teacher, school=self.school
        )

    def get_token(self, user):
        refresh = RefreshToken.for_user(user)
        return str(refresh.access_token)

    def api_client(self, user):
        client = APIClient()
        client.credentials(HTTP_AUTHORIZATION=f"Bearer {self.get_token(user)}")
        return client


class AuthTests(BaseTestCase):
    def test_login_success(self):
        client = APIClient()
        res = client.post("/api/auth/login/", {"username": "manager1", "password": "test123"})
        self.assertEqual(res.status_code, 200)
        self.assertIn("access", res.data)

    def test_login_wrong_password(self):
        client = APIClient()
        res = client.post("/api/auth/login/", {"username": "manager1", "password": "wrong"})
        self.assertEqual(res.status_code, 401)


class StudentAPITests(BaseTestCase):
    def test_manager_sees_all_students(self):
        client = self.api_client(self.manager)
        res = client.get("/api/students/students/")
        self.assertEqual(res.status_code, 200)
        self.assertEqual(len(res.data["results"]), 1)

    def test_teacher_sees_own_students(self):
        client = self.api_client(self.teacher_user)
        res = client.get("/api/students/students/")
        self.assertEqual(res.status_code, 200)
        self.assertEqual(len(res.data["results"]), 1)

    def test_guardian_sees_own_children(self):
        client = self.api_client(self.guardian_user)
        res = client.get("/api/students/students/")
        self.assertEqual(res.status_code, 200)
        self.assertEqual(len(res.data["results"]), 1)


class FinanceAPITests(BaseTestCase):
    def test_teacher_can_create_payment(self):
        client = self.api_client(self.teacher_user)
        res = client.post("/api/finance/", {
            "student": self.student.id,
            "amount": "200.00",
            "month": "2026-07",
        })
        self.assertEqual(res.status_code, 201)
        self.assertTrue(res.data["is_paid"])


class CertificateAPITests(BaseTestCase):
    def test_teacher_can_request_certificate(self):
        client = self.api_client(self.teacher_user)
        res = client.post("/api/certificates/", {
            "student": self.student.id,
            "title": "ختمة كاملة",
        })
        self.assertEqual(res.status_code, 201)
        self.assertEqual(res.data["status"], "pending")

    def test_manager_can_approve_certificate(self):
        client = self.api_client(self.teacher_user)
        res = client.post("/api/certificates/", {
            "student": self.student.id,
            "title": "ختمة كاملة",
        })
        cert_id = res.data["id"]

        manager_client = self.api_client(self.manager)
        res = manager_client.patch(f"/api/certificates/{cert_id}/approve/")
        self.assertEqual(res.status_code, 200)