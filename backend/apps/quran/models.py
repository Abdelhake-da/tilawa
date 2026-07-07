from django.db import models
from django.conf import settings


class MemorizationRecord(models.Model):
    student = models.ForeignKey("students.Student", on_delete=models.CASCADE, related_name="memorization_records")
    date = models.DateField()
    surah_name = models.CharField(max_length=100)
    from_ayah = models.PositiveIntegerField()
    to_ayah = models.PositiveIntegerField()
    quality = models.CharField(max_length=20, choices=[
        ("excellent", "ممتاز"), ("good", "جيد"), ("needs_repeat", "يحتاج تكرار"),
    ])
    recorded_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    class Meta:
        ordering = ["-date"]
        verbose_name = "تسجيل تلاوة"
        verbose_name_plural = "سجلات التلاوة"


class ReviewRecord(models.Model):
    student = models.ForeignKey("students.Student", on_delete=models.CASCADE, related_name="review_records")
    date = models.DateField()
    review_type = models.CharField(max_length=10, choices=[
        ("daily", "يومي"), ("weekly", "أسبوعي"), ("monthly", "شهري"),
    ])
    content = models.CharField(max_length=200)
    quality = models.CharField(max_length=20, choices=[
        ("excellent", "ممتاز"), ("good", "جيد"), ("needs_repeat", "يحتاج تكرار"),
    ])
    recorded_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    class Meta:
        ordering = ["-date"]
        verbose_name = "تسجيل تلاوة"
        verbose_name_plural = "سجلات التلاوة"


class Note(models.Model):
    student = models.ForeignKey("students.Student", on_delete=models.CASCADE, related_name="notes")
    teacher = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    content = models.TextField()
    read_by_guardian = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "ملاحظة"
        verbose_name_plural = "الملاحظات"