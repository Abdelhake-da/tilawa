from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Attendance
from .serializers import AttendanceSerializer
from apps.students.models import Teacher, Guardian


class AttendanceViewSet(viewsets.ModelViewSet):
    serializer_class = AttendanceSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ["get", "post", "patch", "delete"]

    def get_queryset(self):
        qs = Attendance.objects.filter(student__school=self.request.user.school)
        if self.request.user.role == "teacher":
            teacher = Teacher.objects.get(user=self.request.user)
            qs = qs.filter(student__teacher=teacher)
        elif self.request.user.role == "guardian":
            guardian = Guardian.objects.get(user=self.request.user)
            qs = qs.filter(student__guardian=guardian)
        return qs

    def perform_create(self, serializer):
        serializer.save(recorded_by=self.request.user)