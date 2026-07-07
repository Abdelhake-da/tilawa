from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils.timezone import now

from .models import Attendance
from apps.notifications.models import Notification


@receiver(post_save, sender=Attendance)
def create_attendance_notification(sender, instance, created, **kwargs):
    if not created:
        return

    guardian = instance.student.guardian
    if not guardian:
        return

    if instance.check_in_time and not instance.check_out_time:
        Notification.objects.create(
            user=guardian.user,
            title="تسجيل دخول",
            message=f"وصل {instance.student.name} إلى المدرسة",
            notification_type="check_in",
            related_student=instance.student,
        )
    elif instance.check_out_time:
        Notification.objects.create(
            user=guardian.user,
            title="تسجيل خروج",
            message=f"غادر {instance.student.name} المدرسة",
            notification_type="check_out",
            related_student=instance.student,
        )