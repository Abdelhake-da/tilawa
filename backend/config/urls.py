from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/auth/", include("apps.accounts.urls")),
    path("api/students/", include("apps.students.urls")),
    path("api/notifications/", include("apps.notifications.urls")),
    path("api/attendance/", include("apps.attendance.urls")),
    path("api/quran/", include("apps.quran.urls")),
    path("api/finance/", include("apps.finance.urls")),
    path("api/certificates/", include("apps.certificates.urls")),
]