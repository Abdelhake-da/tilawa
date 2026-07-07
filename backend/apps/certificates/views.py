from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.utils.timezone import now

from .models import Certificate
from .serializers import CertificateSerializer
from .services import generate_certificate_pdf
from apps.accounts.permissions import IsManager
from apps.students.models import Teacher, Guardian


class CertificateViewSet(viewsets.ModelViewSet):
    serializer_class = CertificateSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ["get", "post", "patch", "delete"]

    def get_queryset(self):
        qs = Certificate.objects.filter(student__school=self.request.user.school)
        if self.request.user.role == "teacher":
            teacher = Teacher.objects.get(user=self.request.user)
            qs = qs.filter(student__teacher=teacher)
        elif self.request.user.role == "guardian":
            guardian = Guardian.objects.get(user=self.request.user)
            qs = qs.filter(student__guardian=guardian)
        return qs

    def perform_create(self, serializer):
        serializer.save(requested_by=self.request.user)

    @action(detail=True, methods=["patch"])
    def approve(self, request, pk=None):
        cert = self.get_object()
        cert.status = "approved"
        cert.approved_by = request.user
        cert.approved_at = now()
        cert.save()
        return Response({"status": "approved"})

    @action(detail=True, methods=["patch"])
    def reject(self, request, pk=None):
        cert = self.get_object()
        cert.status = "rejected"
        cert.approved_by = request.user
        cert.approved_at = now()
        cert.save()
        return Response({"status": "rejected"})

    @action(detail=True, methods=["get"])
    def pdf(self, request, pk=None):
        cert = self.get_object()
        if cert.status != "approved":
            return Response({"error": "الشهادة غير معتمدة"}, status=400)
        return generate_certificate_pdf(cert)