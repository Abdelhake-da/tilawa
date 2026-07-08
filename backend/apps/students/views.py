from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import Teacher, Guardian, Student, TransferRequest
from .serializers import (TeacherSerializer, GuardianSerializer,
                          StudentSerializer, TransferRequestSerializer)
from apps.accounts.permissions import IsManager


class TeacherViewSet(viewsets.ModelViewSet):
    serializer_class = TeacherSerializer
    permission_classes = [IsAuthenticated, IsManager]

    def get_queryset(self):
        return Teacher.objects.filter(user__school=self.request.user.school)


class GuardianViewSet(viewsets.ModelViewSet):
    serializer_class = GuardianSerializer
    permission_classes = [IsAuthenticated, IsManager]

    def get_queryset(self):
        return Guardian.objects.filter(user__school=self.request.user.school)

    @action(detail=True, methods=["get"])
    def children(self, request, pk=None):
        guardian = self.get_object()
        students = Student.objects.filter(guardian=guardian)
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)


class StudentViewSet(viewsets.ModelViewSet):
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        qs = Student.objects.filter(school=self.request.user.school)
        if self.request.user.role == "teacher":
            teacher = Teacher.objects.get(user=self.request.user)
            qs = qs.filter(teacher=teacher)
        elif self.request.user.role == "guardian":
            guardian = Guardian.objects.get(user=self.request.user)
            qs = qs.filter(guardian=guardian)
        return qs

    def perform_create(self, serializer):
        serializer.save(school=self.request.user.school)


class TransferRequestViewSet(viewsets.ModelViewSet):
    serializer_class = TransferRequestSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        qs = TransferRequest.objects.filter(student__school=self.request.user.school)
        if self.request.user.role == "teacher":
            teacher = Teacher.objects.get(user=self.request.user)
            qs = qs.filter(from_teacher=teacher)
        return qs

    def perform_create(self, serializer):
        teacher = Teacher.objects.get(user=self.request.user)
        serializer.save(requested_by=self.request.user, from_teacher=teacher)

    @action(detail=True, methods=["patch"])
    def approve(self, request, pk=None):
        transfer = self.get_object()
        to_teacher_id = request.data.get("to_teacher")
        if not to_teacher_id:
            return Response({"error": "يجب تحديد المعلم الجديد"}, status=400)
        try:
            to_teacher = Teacher.objects.get(id=to_teacher_id, user__school=request.user.school)
        except Teacher.DoesNotExist:
            return Response({"error": "المعلم غير موجود"}, status=400)
        transfer.status = "approved"
        transfer.to_teacher = to_teacher
        transfer.save()
        transfer.student.teacher = to_teacher
        transfer.student.save()
        return Response({"status": "approved"})

    @action(detail=True, methods=["patch"])
    def reject(self, request, pk=None):
        transfer = self.get_object()
        transfer.status = "rejected"
        transfer.save()
        return Response({"status": "rejected"})