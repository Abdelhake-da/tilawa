from django.db import models
from django.conf import settings


class Notification(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="notifications")
    title = models.CharField(max_length=200)
    message = models.TextField()
    notification_type = models.CharField(max_length=20, choices=[
        ("check_in", "دخول"), ("check_out", "خروج"),
        ("memorization", "حفظ"), ("review", "مراجعة"),
        ("note", "ملاحظة"), ("payment", "دفع"),
        ("reminder", "تذكير"), ("transfer", "نقل"),
        ("certificate", "شهادة"),
    ])
    is_read = models.BooleanField(default=False)
    related_student = models.ForeignKey("students.Student", on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "إشعار"
        verbose_name_plural = "الإشعارات"