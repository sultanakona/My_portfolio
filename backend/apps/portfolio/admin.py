from django.contrib import admin
from unfold.admin import ModelAdmin
from .models import UserProfile, MyService, Education, Experience, SkillCategory, Skill

@admin.register(UserProfile)
class UserProfileAdmin(ModelAdmin):
    list_display = ('name', 'designation', 'email', 'experience_years')

@admin.register(MyService)
class MyServiceAdmin(ModelAdmin):
    list_display = ('title', 'slug', 'is_active', 'is_featured', 'display_order')
    prepopulated_fields = {'slug': ('title',)}

@admin.register(Education)
class EducationAdmin(ModelAdmin):
    list_display = ('degree', 'institution_name', 'start_date', 'end_date', 'is_active')

@admin.register(Experience)
class ExperienceAdmin(ModelAdmin):
    list_display = ('title', 'company_name', 'start_date', 'is_current', 'is_active')

@admin.register(SkillCategory)
class SkillCategoryAdmin(ModelAdmin):
    list_display = ('name', 'slug', 'is_active', 'display_order')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Skill)
class SkillAdmin(ModelAdmin):
    list_display = ('name', 'category', 'skill_level', 'is_active', 'is_featured')
    prepopulated_fields = {'slug': ('name',)}
