from django.db import models

class UserProfile(models.Model):
    name = models.CharField(max_length=150)
    designation = models.CharField(max_length=150)
    note = models.TextField(blank=True, null=True)
    experience_years = models.IntegerField(default=0)
    about_me = models.TextField(blank=True, null=True)
    profile_image = models.ImageField(upload_to='profile/', blank=True, null=True)
    location = models.CharField(max_length=200, blank=True, null=True)
    linkedin_url = models.URLField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    resume_file = models.FileField(upload_to='resume/', blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class MyService(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    short_title = models.CharField(max_length=100, blank=True, null=True)
    subtitle = models.CharField(max_length=200, blank=True, null=True)
    note = models.TextField(blank=True, null=True)
    description = models.TextField()
    icon = models.ImageField(upload_to='services/icons/', blank=True, null=True)
    thumbnail = models.ImageField(upload_to='services/thumbnails/', blank=True, null=True)
    accent_color = models.CharField(max_length=50, blank=True, null=True)
    layout_type = models.CharField(max_length=50, blank=True, null=True)
    display_order = models.IntegerField(default=0)
    project_url = models.URLField(blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['display_order']

    def __str__(self):
        return self.title

class Education(models.Model):
    degree = models.CharField(max_length=200)
    institution_name = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    cgpa = models.CharField(max_length=50, blank=True, null=True)
    achievement = models.TextField(blank=True, null=True)
    cv_file = models.FileField(upload_to='education_cv/', blank=True, null=True)
    display_order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['display_order', '-start_date']

    def __str__(self):
        return f"{self.degree} at {self.institution_name}"

class Experience(models.Model):
    title = models.CharField(max_length=200)
    company_name = models.CharField(max_length=200)
    company_logo = models.ImageField(upload_to='company_logos/', blank=True, null=True)
    employment_type = models.CharField(max_length=100, blank=True, null=True)
    location = models.CharField(max_length=200, blank=True, null=True)
    location_type = models.CharField(max_length=100, blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    is_current = models.BooleanField(default=False)
    short_description = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    highlight_color = models.CharField(max_length=50, blank=True, null=True)
    display_order = models.IntegerField(default=0)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['display_order', '-start_date']

    def __str__(self):
        return f"{self.title} at {self.company_name}"

class SkillCategory(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    icon = models.ImageField(upload_to='skill_categories/', blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    display_order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['display_order']

    def __str__(self):
        return self.name

class Skill(models.Model):
    category = models.ForeignKey(SkillCategory, on_delete=models.CASCADE, related_name='skills')
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    icon = models.ImageField(upload_to='skills/icons/', blank=True, null=True)
    logo = models.ImageField(upload_to='skills/logos/', blank=True, null=True)
    skill_level = models.IntegerField(default=50)
    experience_years = models.DecimalField(max_digits=4, decimal_places=1, default=0.0)
    color = models.CharField(max_length=50, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    official_url = models.URLField(blank=True, null=True)
    display_order = models.IntegerField(default=0)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['category', 'display_order']

    def __str__(self):
        return self.name
