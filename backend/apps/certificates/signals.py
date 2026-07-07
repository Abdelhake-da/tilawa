from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import Certificate
from apps.notifications.models import Notification


@receiver(post_save, sender=Certificate)
def create_certificate_notification(sender, instance, created, **kwargs):
    if created:
        guardian = instance.student.guardian
        if guardian:
            Notification.objects.create(
                user=guardian.user,
                title="طلب شهادة",
                message=f"تم طلب شهادة لطالب {instance.student.name}",
                notification_type="certificate",
                related_student=instance.student,
            )
    elif instance.status == "approved":
        guardian = instance.student.guardian
        if guardian:
            Notification.objects.create(
                user=guardian.user,
                title="شهادة معتمدة",
                message=f"تم اعتماد شهادة {instance.title} لطالب {instance.student.name}",
                notification_type="certificate",
                related_student=instance.student,
            )