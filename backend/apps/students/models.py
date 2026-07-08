from django.db import models
from django.conf import settings


class Teacher(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)


class Guardian(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    relationship = models.CharField(
        max_length=20,
        choices=[("father", "أب"), ("mother", "أم"), ("other", "أخرى")],
    )

class Student(models.Model):
    name = models.CharField(max_length=200)
    guardian = models.ForeignKey("Guardian", on_delete=models.CASCADE, related_name="children")
    teacher = models.ForeignKey("Teacher", on_delete=models.SET_NULL, null=True, related_name="students")
    school = models.ForeignKey("accounts.School", on_delete=models.CASCADE)
    birth_date = models.DateField(null=True, blank=True)
    enrollment_date = models.DateField(auto_now_add=True)
    is_active = models.BooleanField(default=True)


class TransferRequest(models.Model):
    student = models.ForeignKey("Student", on_delete=models.CASCADE, related_name="transfers")
    from_teacher = models.ForeignKey("Teacher", on_delete=models.CASCADE, related_name="outgoing_transfers")
    to_teacher = models.ForeignKey("Teacher", on_delete=models.SET_NULL, null=True, blank=True, related_name="incoming_transfers")
    reason = models.TextField()
    status = models.CharField(
        max_length=10,
        choices=[("pending", "معلق"), ("approved", "موافق"), ("rejected", "مرفوض")],
        default="pending",
    )
    requested_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="requested_transfers")
    created_at = models.DateTimeField(auto_now_add=True)