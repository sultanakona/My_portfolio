from django.contrib import admin
from unfold.admin import ModelAdmin
from .models import UserProfile, MyService, Education, Experience, SkillCategory, Skill, Project, ProcessStep

@admin.register(UserProfile)
class UserProfileAdmin(ModelAdmin):
    list_display = ('name', 'designation', 'email', 'experience_years')
    search_fields = ('name', 'designation', 'email')

@admin.register(MyService)
class MyServiceAdmin(ModelAdmin):
    list_display = ('title', 'is_active', 'display_order', 'is_featured')
    prepopulated_fields = {'slug': ('title',)}
    list_filter = ('is_active', 'is_featured')
    search_fields = ('title', 'short_title')

@admin.register(Education)
class EducationAdmin(ModelAdmin):
    list_display = ('degree', 'institution_name', 'start_date', 'end_date', 'is_active')
    list_filter = ('is_active',)
    search_fields = ('degree', 'institution_name')

@admin.register(Experience)
class ExperienceAdmin(ModelAdmin):
    list_display = ('title', 'company_name', 'start_date', 'end_date', 'is_current', 'is_active')
    list_filter = ('is_current', 'is_active', 'is_featured')
    search_fields = ('title', 'company_name')

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
