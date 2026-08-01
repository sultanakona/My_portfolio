from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserProfileViewSet, 
    MyServiceViewSet, 
    EducationViewSet, 
    ExperienceViewSet, 
    SkillCategoryViewSet, 
    SkillViewSet
)

router = DefaultRouter()
router.register(r'profile', UserProfileViewSet, basename='profile')
router.register(r'services', MyServiceViewSet, basename='services')
router.register(r'education', EducationViewSet, basename='education')
router.register(r'experience', ExperienceViewSet, basename='experience')
router.register(r'skill-categories', SkillCategoryViewSet, basename='skill-categories')
router.register(r'skills', SkillViewSet, basename='skills')

urlpatterns = [
    path('', include(router.urls)),
]