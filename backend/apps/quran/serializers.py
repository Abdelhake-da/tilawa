from rest_framework import serializers
from .models import MemorizationRecord, ReviewRecord, Note


class MemorizationRecordSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source="student.name", read_only=True)

    class Meta:
        model = MemorizationRecord
        fields = ("id", "student", "student_name", "date", "surah_name",
                  "from_ayah", "to_ayah", "quality", "recorded_by")
        read_only_fields = ("id", "student_name", "recorded_by")


class ReviewRecordSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source="student.name", read_only=True)

    class Meta:
        model = ReviewRecord
        fields = ("id", "student", "student_name", "date", "review_type",
                  "content", "quality", "recorded_by")
        read_only_fields = ("id", "student_name", "recorded_by")


class NoteSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source="student.name", read_only=True)
    teacher_name = serializers.SerializerMethodField()

    class Meta:
        model = Note
        fields = ("id", "student", "student_name", "teacher", "teacher_name",
                  "content", "read_by_guardian", "created_at")
        read_only_fields = ("id", "student_name", "teacher_name", "teacher", "created_at")

    def get_teacher_name(self, obj):
        return obj.teacher.get_full_name() or obj.teacher.username