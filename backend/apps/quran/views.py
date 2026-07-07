from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import MemorizationRecord, ReviewRecord, Note
from .serializers import (MemorizationRecordSerializer, ReviewRecordSerializer, NoteSerializer)
from apps.students.models import Teacher, Guardian


class MemorizationViewSet(viewsets.ModelViewSet):
    serializer_class = MemorizationRecordSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ["get", "post", "patch", "delete"]

    def get_queryset(self):
        qs = MemorizationRecord.objects.filter(student__school=self.request.user.school)
        if self.request.user.role == "teacher":
            teacher = Teacher.objects.get(user=self.request.user)
            qs = qs.filter(student__teacher=teacher)
        elif self.request.user.role == "guardian":
            guardian = Guardian.objects.get(user=self.request.user)
            qs = qs.filter(student__guardian=guardian)
        return qs

    def perform_create(self, serializer):
        serializer.save(recorded_by=self.request.user)


class ReviewViewSet(viewsets.ModelViewSet):
    serializer_class = ReviewRecordSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ["get", "post", "patch", "delete"]

    def get_queryset(self):
        qs = ReviewRecord.objects.filter(student__school=self.request.user.school)
        if self.request.user.role == "teacher":
            teacher = Teacher.objects.get(user=self.request.user)
            qs = qs.filter(student__teacher=teacher)
        elif self.request.user.role == "guardian":
            guardian = Guardian.objects.get(user=self.request.user)
            qs = qs.filter(student__guardian=guardian)
        return qs

    def perform_create(self, serializer):
        serializer.save(recorded_by=self.request.user)


class NoteViewSet(viewsets.ModelViewSet):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ["get", "post", "patch", "delete"]

    def get_queryset(self):
        qs = Note.objects.filter(student__school=self.request.user.school)
        if self.request.user.role == "teacher":
            teacher = Teacher.objects.get(user=self.request.user)
            qs = qs.filter(teacher=self.request.user)
        elif self.request.user.role == "guardian":
            guardian = Guardian.objects.get(user=self.request.user)
            qs = qs.filter(student__guardian=guardian)
        return qs

    def perform_create(self, serializer):
        serializer.save(teacher=self.request.user)