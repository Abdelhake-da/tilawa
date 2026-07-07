from rest_framework import serializers
from .models import Payment


class PaymentSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source="student.name", read_only=True)

    class Meta:
        model = Payment
        fields = ("id", "student", "student_name", "amount", "month", "is_paid", "received_by", "date")
        read_only_fields = ("id", "date", "student_name", "received_by")
        