from rest_framework import serializers
from .models import Attendance


class AttendanceSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source="student.name", read_only=True)

    class Meta:
        model = Attendance
        fields = ("id", "student", "student_name", "date", "check_in_time", "check_out_time", "recorded_by")
        read_only_fields = ("id", "student_name", "recorded_by")