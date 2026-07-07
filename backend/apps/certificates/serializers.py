from rest_framework import serializers
from .models import Certificate


class CertificateSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source="student.name", read_only=True)
    requested_by_name = serializers.SerializerMethodField()
    approved_by_name = serializers.SerializerMethodField()

    class Meta:
        model = Certificate
        fields = ("id", "student", "student_name", "title", "status",
                  "requested_by", "requested_by_name", "approved_by", "approved_by_name",
                  "created_at", "approved_at")
        read_only_fields = ("id", "status", "approved_by", "approved_at",
                            "student_name", "requested_by_name", "approved_by_name", "requested_by")

    def get_requested_by_name(self, obj):
        return obj.requested_by.get_full_name() or obj.requested_by.username

    def get_approved_by_name(self, obj):
        if obj.approved_by:
            return obj.approved_by.get_full_name() or obj.approved_by.username
        return None