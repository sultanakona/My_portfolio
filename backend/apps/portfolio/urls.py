from django.urls import path
from .views import (
    UserProfileAPIView, 
    MyServiceAPIView, 
    EducationAPIView, 
    ExperienceAPIView, 
    SkillCategoryAPIView, 
    SkillAPIView,
    ProjectAPIView,
    ProcessStepAPIView
)

urlpatterns = [
    path('profile/', UserProfileAPIView.as_view(), name='profile-list'),
    
    path('services/', MyServiceAPIView.as_view(), name='services-list'),
    path('services/<slug:slug>/', MyServiceAPIView.as_view(), name='services-detail'),
    
    path('education/', EducationAPIView.as_view(), name='education-list'),
    
    path('experience/', ExperienceAPIView.as_view(), name='experience-list'),
    
    path('skill-categories/', SkillCategoryAPIView.as_view(), name='skill-categories-list'),
    path('skill-categories/<slug:slug>/', SkillCategoryAPIView.as_view(), name='skill-categories-detail'),
    
    path('skills/', SkillAPIView.as_view(), name='skills-list'),
    path('skills/<slug:slug>/', SkillAPIView.as_view(), name='skills-detail'),

    path('projects/', ProjectAPIView.as_view(), name='projects-list'),
    path('projects/<slug:slug>/', ProjectAPIView.as_view(), name='projects-detail'),

    path('process-steps/', ProcessStepAPIView.as_view(), name='process-steps-list'),
]