from rest_framework import viewsets
from .models import UserProfile, MyService, Education, Experience, SkillCategory, Skill
from .serializers import (
    UserProfileSerializer, 
    MyServiceSerializer, 
    EducationSerializer, 
    ExperienceSerializer, 
    SkillCategorySerializer, 
    SkillSerializer
)

class UserProfileViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class MyServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MyService.objects.filter(is_active=True).order_by('display_order')
    serializer_class = MyServiceSerializer
    lookup_field = 'slug'

class EducationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Education.objects.filter(is_active=True).order_by('display_order', '-start_date')
    serializer_class = EducationSerializer

class ExperienceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Experience.objects.filter(is_active=True).order_by('display_order', '-start_date')
    serializer_class = ExperienceSerializer

class SkillCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SkillCategory.objects.filter(is_active=True).order_by('display_order')
    serializer_class = SkillCategorySerializer
    lookup_field = 'slug'

class SkillViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Skill.objects.filter(is_active=True).order_by('category', 'display_order')
    serializer_class = SkillSerializer
    lookup_field = 'slug'
