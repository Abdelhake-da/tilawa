from django.db import models
from django.conf import settings


class Certificate(models.Model):
    student = models.ForeignKey("students.Student", on_delete=models.CASCADE, related_name="certificates")
    title = models.CharField(max_length=200)
    status = models.CharField(
        max_length=10,
        choices=[("pending", "معلق"), ("approved", "موافق"), ("rejected", "مرفوض")],
        default="pending",
    )
    requested_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="requested_certificates")
    approved_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, related_name="approved_certificates")
    created_at = models.DateTimeField(auto_now_add=True)
    approved_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "شهادة"
        verbose_name_plural = "الشهادات"