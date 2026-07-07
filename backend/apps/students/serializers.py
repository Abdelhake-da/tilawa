from rest_framework import serializers
from .models import Teacher, Guardian, Student, TransferRequest


class TeacherSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source="user.username", read_only=True)
    first_name = serializers.CharField(source="user.first_name", read_only=True)
    last_name = serializers.CharField(source="user.last_name", read_only=True)

    class Meta:
        model = Teacher
        fields = ("id", "username", "first_name", "last_name", "bio")


class GuardianSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source="user.username", read_only=True)
    first_name = serializers.CharField(source="user.first_name", read_only=True)
    last_name = serializers.CharField(source="user.last_name", read_only=True)

    class Meta:
        model = Guardian
        fields = ("id", "username", "first_name", "last_name", "relationship")


class StudentSerializer(serializers.ModelSerializer):
    guardian_name = serializers.CharField(source="guardian.user.get_full_name", read_only=True)
    teacher_name = serializers.SerializerMethodField()

    class Meta:
        model = Student
        fields = ("id", "name", "guardian", "guardian_name", "teacher", "teacher_name",
                  "school", "birth_date", "enrollment_date", "is_active")
        read_only_fields = ("id", "enrollment_date", "guardian_name", "teacher_name")

    def get_teacher_name(self, obj):
        if obj.teacher:
            return obj.teacher.user.get_full_name() or obj.teacher.user.username
        return None


class TransferRequestSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source="student.name", read_only=True)
    from_teacher_name = serializers.SerializerMethodField()
    to_teacher_name = serializers.SerializerMethodField()

    class Meta:
        model = TransferRequest
        fields = ("id", "student", "student_name", "from_teacher", "from_teacher_name",
                  "to_teacher", "to_teacher_name", "reason", "status",
                  "requested_by", "created_at")
        read_only_fields = ("id", "status", "created_at", "student_name",
                            "from_teacher_name", "to_teacher_name", "requested_by")

    def get_from_teacher_name(self, obj):
        return obj.from_teacher.user.get_full_name() or obj.from_teacher.user.username

    def get_to_teacher_name(self, obj):
        return obj.to_teacher.user.get_full_name() or obj.to_teacher.user.username