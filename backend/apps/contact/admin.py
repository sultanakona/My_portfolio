from django.contrib import admin
from unfold.admin import ModelAdmin
from .models import ContactMessage

@admin.register(ContactMessage)
class ContactMessageAdmin(ModelAdmin):
    list_display = ('name', 'email', 'service_interested', 'created_at')
