from django.contrib import admin
from django.db import models
from unfold.admin import ModelAdmin
from django_ckeditor_5.widgets import CKEditor5Widget
from .models import UserProfile, MyService, Education, Experience, SkillCategory, Skill, Project, ProcessStep

@admin.register(UserProfile)
class UserProfileAdmin(ModelAdmin):
    list_display = ('name', 'designation', 'email', 'location', 'experience_years')
    search_fields = ('name', 'designation', 'email')
    
    fieldsets = (
        ("👤 Personal & Basic Information", {
            "fields": ("name", "designation", "location", "email", "profile_image", "resume_file"),
        }),
        ("✨ Hero Section Content", {
            "fields": ("note", "hero_tagline", "short_intro", "experience_years"),
        }),
        ("📝 About Me Section", {
            "fields": ("about_me",),
        }),
        ("🔗 Social Links", {
            "fields": ("github_url", "linkedin_url"),
        }),
        ("📌 Section Titles & Subtitles", {
            "fields": (
                "services_title", "services_subtitle",
                "works_title", "works_subtitle",
                "highlights_title", "highlights_subtitle",
                "tools_title", "tools_subtitle",
                "process_title", "process_subtitle",
            ),
        }),
        ("✉️ Contact Section Content", {
            "fields": ("contact_title", "contact_subtitle", "contact_heading", "contact_description"),
        }),
    )

@admin.register(MyService)
class MyServiceAdmin(ModelAdmin):
    list_display = ('title', 'is_active', 'display_order', 'is_featured')
    prepopulated_fields = {'slug': ('title',)}
    list_filter = ('is_active', 'is_featured')
    search_fields = ('title', 'short_title')
    formfield_overrides = {
        models.TextField: {'widget': CKEditor5Widget(config_name='default')},
    }

@admin.register(Education)
class EducationAdmin(ModelAdmin):
    list_display = ('degree', 'institution_name', 'start_date', 'end_date', 'is_active')
    list_filter = ('is_active',)
    search_fields = ('degree', 'institution_name')
    formfield_overrides = {
        models.TextField: {'widget': CKEditor5Widget(config_name='default')},
    }

@admin.register(Experience)
class ExperienceAdmin(ModelAdmin):
    list_display = ('title', 'company_name', 'start_date', 'end_date', 'is_current', 'is_active')
    list_filter = ('is_current', 'is_active', 'is_featured')
    search_fields = ('title', 'company_name')
    formfield_overrides = {
        models.TextField: {'widget': CKEditor5Widget(config_name='default')},
    }

@admin.register(SkillCategory)
class SkillCategoryAdmin(ModelAdmin):
    list_display = ('name', 'display_order', 'is_active')
    prepopulated_fields = {'slug': ('name',)}
    list_filter = ('is_active',)

@admin.register(Skill)
class SkillAdmin(ModelAdmin):
    list_display = ('name', 'category', 'skill_level', 'is_featured', 'is_active')
    prepopulated_fields = {'slug': ('name',)}
    list_filter = ('category', 'is_featured', 'is_active')
    search_fields = ('name',)

@admin.register(Project)
class ProjectAdmin(ModelAdmin):
    list_display = ('title', 'categories', 'highlight_row', 'is_active', 'display_order')
    prepopulated_fields = {'slug': ('title',)}
    list_filter = ('highlight_row', 'is_active')
    search_fields = ('title', 'description', 'categories')

@admin.register(ProcessStep)
class ProcessStepAdmin(ModelAdmin):
    list_display = ('title', 'icon_name', 'is_active', 'display_order')
    list_filter = ('is_active',)
    search_fields = ('title',)
