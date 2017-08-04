from django.contrib import admin
from .models import Task
# Register your models here.
class TaskAdmin(admin.ModelAdmin):
    list_display = ('title','created_at','deadline','priority','text','done')
    search_fields = ['title', 'text']

admin.site.register(Task, TaskAdmin)
