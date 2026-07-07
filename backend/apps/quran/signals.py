from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import MemorizationRecord, ReviewRecord, Note
from apps.notifications.models import Notification


@receiver(post_save, sender=MemorizationRecord)
def memorization_notification(sender, instance, created, **kwargs):
    if not created:
        return
    guardian = instance.student.guardian
    if not guardian:
        return
    Notification.objects.create(
        user=guardian.user,
        title="حفظ جديد",
        message=f"حفظ {instance.student.name}: {instance.surah_name} ({instance.from_ayah}-{instance.to_ayah})",
        notification_type="memorization",
        related_student=instance.student,
    )


@receiver(post_save, sender=ReviewRecord)
def review_notification(sender, instance, created, **kwargs):
    if not created:
        return
    guardian = instance.student.guardian
    if not guardian:
        return
    Notification.objects.create(
        user=guardian.user,
        title="مراجعة جديدة",
        message=f"مراجعة {instance.student.name}: {instance.content}",
        notification_type="review",
        related_student=instance.student,
    )


@receiver(post_save, sender=Note)
def note_notification(sender, instance, created, **kwargs):
    if not created:
        return
    guardian = instance.student.guardian
    if not guardian:
        return
    Notification.objects.create(
        user=guardian.user,
        title="ملاحظة جديدة",
        message=f"ملاحظة على {instance.student.name}: {instance.content[:50]}",
        notification_type="note",
        related_student=instance.student,
    )