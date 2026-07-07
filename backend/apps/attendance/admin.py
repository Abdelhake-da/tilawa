from django.contrib import admin

from .models import Attendance


@admin.register(Attendance)
class AttendanceAdmin(admin.ModelAdmin):
    list_display = ("student", "date", "check_in_time", "check_out_time", "recorded_by")
    list_filter = ("date",)
    search_fields = ("student__name",)
