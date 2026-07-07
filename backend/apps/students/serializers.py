from rest_framework import serializers
from .models import Teacher, Guardian, Student, TransferRequest
from django.contrib.auth import get_user_model

User = get_user_model()

class TeacherSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source="user.username")
    first_name = serializers.CharField(source="user.first_name", required=False)
    last_name = serializers.CharField(source="user.last_name", required=False)
    password = serializers.CharField(write_only=True, required=True)
    bio = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = Teacher
        fields = ("id", "username", "first_name", "last_name", "password", "bio")
        read_only_fields = ("id",)

    def create(self, validated_data):
        user_data = {
            "username": validated_data.get("user", {}).get("username", ""),
            "first_name": validated_data.get("user", {}).get("first_name", ""),
            "last_name": validated_data.get("user", {}).get("last_name", ""),
            "role": "teacher",
            "school": self.context["request"].user.school,
        }
        password = validated_data.pop("password")
        user = User.objects.create_user(**user_data, password=password)
        return Teacher.objects.create(user=user, bio=validated_data.get("bio", ""))


class GuardianSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source="user.username")
    first_name = serializers.CharField(source="user.first_name", required=False)
    last_name = serializers.CharField(source="user.last_name", required=False)
    password = serializers.CharField(write_only=True, required=True)
    relationship = serializers.CharField(required=True)

    class Meta:
        model = Guardian
        fields = ("id", "username", "first_name", "last_name", "password", "relationship")
        read_only_fields = ("id",)

    def create(self, validated_data):
        user_data = {
            "username": validated_data.get("user", {}).get("username", ""),
            "first_name": validated_data.get("user", {}).get("first_name", ""),
            "last_name": validated_data.get("user", {}).get("last_name", ""),
            "role": "guardian",
            "school": self.context["request"].user.school,
        }
        password = validated_data.pop("password")
        user = User.objects.create_user(**user_data, password=password)
        return Guardian.objects.create(
            user=user,
            relationship=validated_data.get("relationship", "father"),
        )

class StudentSerializer(serializers.ModelSerializer):
    guardian_name = serializers.CharField(source="guardian.user.get_full_name", read_only=True)
    teacher_name = serializers.SerializerMethodField()

    class Meta:
        model = Student
        fields = ("id", "name", "guardian", "guardian_name", "teacher", "teacher_name",
                  "school", "birth_date", "enrollment_date", "is_active")
        read_only_fields = ("id", "enrollment_date", "guardian_name", "teacher_name", "school", "is_active")

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