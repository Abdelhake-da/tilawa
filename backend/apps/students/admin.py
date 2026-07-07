from django.contrib import admin

from .models import Teacher, Guardian, Student, TransferRequest


@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display = ("user",)
    search_fields = ("user__username", "user__first_name", "user__last_name")


@admin.register(Guardian)
class GuardianAdmin(admin.ModelAdmin):
    list_display = ("user", "relationship")
    search_fields = ("user__username", "user__first_name", "user__last_name")
    list_filter = ("relationship",)


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ("name", "guardian", "teacher", "school", "is_active")
    search_fields = ("name", "guardian__user__username", "teacher__user__username")
    list_filter = ("school", "teacher", "is_active")


@admin.register(TransferRequest)
class TransferRequestAdmin(admin.ModelAdmin):
    list_display = ("student", "from_teacher", "to_teacher", "status", "requested_by", "created_at")
    list_filter = ("status",)
    search_fields = ("student__name",)
