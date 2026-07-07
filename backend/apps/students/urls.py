from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import TeacherViewSet, GuardianViewSet, StudentViewSet, TransferRequestViewSet

router = DefaultRouter()
router.register("teachers", TeacherViewSet, basename="teacher")
router.register("guardians", GuardianViewSet, basename="guardian")
router.register("students", StudentViewSet, basename="student")
router.register("transfers", TransferRequestViewSet, basename="transfer")

urlpatterns = [
    path("", include(router.urls)),
]