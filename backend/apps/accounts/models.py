from django.db import models
from django.contrib.auth.models import AbstractUser



class School(models.Model):
    name = models.CharField(max_length=200)
    manager = models.OneToOneField("accounts.User", on_delete=models.CASCADE, related_name="managed_school")
    monthly_fee = models.DecimalField(max_digits=8, decimal_places=2, default=200)
    address = models.TextField(blank=True)
    phone = models.CharField(max_length=20, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class User(AbstractUser):
    class Role(models.TextChoices):
        MANAGER  = "manager",  "مدير"
        TEACHER  = "teacher",  "معلم"
        GUARDIAN = "guardian", "ولي أمر"

    role = models.CharField(max_length=10, choices=Role.choices)
    phone_number = models.CharField(max_length=20, blank=True)
    school = models.ForeignKey("accounts.School", on_delete=models.CASCADE, null=True, blank=True)