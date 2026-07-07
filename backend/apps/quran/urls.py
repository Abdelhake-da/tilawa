from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import MemorizationViewSet, ReviewViewSet, NoteViewSet

router = DefaultRouter()
router.register("memorization", MemorizationViewSet, basename="memorization")
router.register("reviews", ReviewViewSet, basename="review")
router.register("notes", NoteViewSet, basename="note")

urlpatterns = [
    path("", include(router.urls)),
]