from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import Payment
from apps.notifications.models import Notification


@receiver(post_save, sender=Payment)
def create_payment_notification(sender, instance, created, **kwargs):
    if not created:
        return

    guardian = instance.student.guardian
    if not guardian:
        return

    Notification.objects.create(
        user=guardian.user,
        title="تسجيل دفعة",
        message=f"تم تسجيل دفعة بقيمة {instance.amount} لطالب {instance.student.name} لشهر {instance.month}",
        notification_type="payment",
        related_student=instance.student,
    )