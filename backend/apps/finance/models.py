from django.db import models
from django.conf import settings


class Payment(models.Model):
    student = models.ForeignKey("students.Student", on_delete=models.CASCADE, related_name="payments")
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    month = models.CharField(max_length=7)  # Format: "2026-07"
    is_paid = models.BooleanField(default=True)
    received_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True)
    date = models.DateField(auto_now_add=True)

    class Meta:
        ordering = ["-date"]
        verbose_name = "دفعة"
        verbose_name_plural = "المدفوعات"
        unique_together = ("student", "month")