from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import School, User


@admin.register(School)
class SchoolAdmin(admin.ModelAdmin):
    list_display = ("name", "manager", "monthly_fee", "phone", "created_at")
    search_fields = ("name", "manager__username", "phone")


@admin.register(User)
class CustomUserAdmin(UserAdmin):
    list_display = ("username", "email", "first_name", "last_name", "role", "school", "is_staff")
    list_filter = ("role", "school", "is_staff", "is_superuser")
    fieldsets = UserAdmin.fieldsets + (
        ("معلومات إضافية", {"fields": ("role", "phone_number", "school")}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        ("معلومات إضافية", {"fields": ("role", "phone_number", "school")}),
    )
