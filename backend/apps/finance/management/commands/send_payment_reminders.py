from django.core.management.base import BaseCommand
from django.utils.timezone import now
from apps.students.models import Student
from apps.notifications.models import Notification


class Command(BaseCommand):
    help = "إرسال تذكير بالمدفوعات غير المسددة لأولياء الأمور"

    def handle(self, *args, **options):
        current_month = now().strftime("%Y-%m")
        students = Student.objects.filter(is_active=True)

        count = 0
        for student in students:
            has_paid = student.payments.filter(month=current_month, is_paid=True).exists()
            if not has_paid and student.guardian:
                Notification.objects.create(
                    user=student.guardian.user,
                    title="تذكير بالدفع",
                    message=f"يرجى تسديد اشتراك {student.name} لشهر {current_month}",
                    notification_type="reminder",
                    related_student=student,
                )
                count += 1

        self.stdout.write(self.style.SUCCESS(f"تم إرسال {count} تذكير"))