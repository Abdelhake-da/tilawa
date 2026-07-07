from django.db import models
from django.conf import settings


class Attendance(models.Model):
    student = models.ForeignKey("students.Student", on_delete=models.CASCADE, related_name="attendance_records")
    date = models.DateField()
    check_in_time = models.TimeField(null=True, blank=True)
    check_out_time = models.TimeField(null=True, blank=True)
    recorded_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    class Meta:
        unique_together = ("student", "date")
        ordering = ["-date"]