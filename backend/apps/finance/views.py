from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Payment
from .serializers import PaymentSerializer
from apps.students.models import Teacher, Guardian


class PaymentViewSet(viewsets.ModelViewSet):
    serializer_class = PaymentSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ["get", "post", "patch", "delete"]
    filterset_fields = ["student", "month", "is_paid"]

    def get_queryset(self):
        qs = Payment.objects.filter(student__school=self.request.user.school)
        if self.request.user.role == "teacher":
            teacher = Teacher.objects.get(user=self.request.user)
            qs = qs.filter(student__teacher=teacher)
        elif self.request.user.role == "guardian":
            guardian = Guardian.objects.get(user=self.request.user)
            qs = qs.filter(student__guardian=guardian)
        return qs

    def perform_create(self, serializer):
        serializer.save(received_by=self.request.user)