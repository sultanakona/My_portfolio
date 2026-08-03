from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import UserProfile, MyService, Education, Experience, SkillCategory, Skill, Project, ProcessStep
from .serializers import (
    UserProfileSerializer, 
    MyServiceSerializer, 
    EducationSerializer, 
    ExperienceSerializer, 
    SkillCategorySerializer, 
    SkillSerializer,
    ProjectSerializer,
    ProcessStepSerializer
)

class UserProfileAPIView(APIView):
    def get(self, request, *args, **kwargs):
        profiles = UserProfile.objects.all()
        serializer = UserProfileSerializer(profiles, many=True, context={'request': request})
        return Response(serializer.data)

class MyServiceAPIView(APIView):
    def get(self, request, slug=None, *args, **kwargs):
        if slug:
            service = get_object_or_404(MyService, slug=slug, is_active=True)
            serializer = MyServiceSerializer(service, context={'request': request})
            return Response(serializer.data)
        services = MyService.objects.filter(is_active=True).order_by('display_order')
        serializer = MyServiceSerializer(services, many=True, context={'request': request})
        return Response(serializer.data)

class EducationAPIView(APIView):
    def get(self, request, *args, **kwargs):
        educations = Education.objects.filter(is_active=True).order_by('display_order', '-start_date')
        serializer = EducationSerializer(educations, many=True, context={'request': request})
        return Response(serializer.data)

class ExperienceAPIView(APIView):
    def get(self, request, *args, **kwargs):
        experiences = Experience.objects.filter(is_active=True).order_by('display_order', '-start_date')
        serializer = ExperienceSerializer(experiences, many=True, context={'request': request})
        return Response(serializer.data)

class SkillCategoryAPIView(APIView):
    def get(self, request, slug=None, *args, **kwargs):
        if slug:
            category = get_object_or_404(SkillCategory, slug=slug, is_active=True)
            serializer = SkillCategorySerializer(category, context={'request': request})
            return Response(serializer.data)
        categories = SkillCategory.objects.filter(is_active=True).order_by('display_order')
        serializer = SkillCategorySerializer(categories, many=True, context={'request': request})
        return Response(serializer.data)

class SkillAPIView(APIView):
    def get(self, request, slug=None, *args, **kwargs):
        if slug:
            skill = get_object_or_404(Skill, slug=slug, is_active=True)
            serializer = SkillSerializer(skill, context={'request': request})
            return Response(serializer.data)
        skills = Skill.objects.filter(is_active=True).order_by('category', 'display_order')
        serializer = SkillSerializer(skills, many=True, context={'request': request})
        return Response(serializer.data)

class ProjectAPIView(APIView):
    def get(self, request, slug=None, *args, **kwargs):
        if slug:
            project = get_object_or_404(Project, slug=slug, is_active=True)
            serializer = ProjectSerializer(project, context={'request': request})
            return Response(serializer.data)
        projects = Project.objects.filter(is_active=True).order_by('display_order', '-created_at')
        serializer = ProjectSerializer(projects, many=True, context={'request': request})
        return Response(serializer.data)

class ProcessStepAPIView(APIView):
    def get(self, request, *args, **kwargs):
        steps = ProcessStep.objects.filter(is_active=True).order_by('display_order', 'id')
        serializer = ProcessStepSerializer(steps, many=True, context={'request': request})
        return Response(serializer.data)
