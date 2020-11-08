from django.contrib import admin
from .models import Exams, Qna
# Register your models here.
@admin.register(Exams)
class ExamsEntryAdmin(admin.ModelAdmin):
    list_display = ['exam_name', 'exam_marks']
    list_filter = ['exam_date',]
    search_fields = ['exam_name',]

admin.site.register(Qna)
