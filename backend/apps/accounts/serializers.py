from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import School

User = get_user_model()

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'role', 'phone_number', 'school']
        read_only_fields = ['id','role']

class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = ("id", "name", "manager", "monthly_fee", "address", "phone", "created_at")
        read_only_fields = ("id", "manager", "created_at")