from django.contrib import admin

from .models import MemorizationRecord, ReviewRecord, Note


@admin.register(MemorizationRecord)
class MemorizationRecordAdmin(admin.ModelAdmin):
    list_display = ("student", "date", "surah_name", "from_ayah", "to_ayah", "quality", "recorded_by")
    list_filter = ("quality", "date")
    search_fields = ("student__name", "surah_name")


@admin.register(ReviewRecord)
class ReviewRecordAdmin(admin.ModelAdmin):
    list_display = ("student", "date", "review_type", "content", "quality", "recorded_by")
    list_filter = ("review_type", "quality", "date")
    search_fields = ("student__name", "content")


@admin.register(Note)
class NoteAdmin(admin.ModelAdmin):
    list_display = ("student", "teacher", "content", "read_by_guardian", "created_at")
    list_filter = ("read_by_guardian", "created_at")
    search_fields = ("student__name", "content")
