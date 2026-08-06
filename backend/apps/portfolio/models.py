from django.db import models

class UserProfile(models.Model):
    name = models.CharField(max_length=150)
    designation = models.CharField(max_length=150)
    note = models.TextField(blank=True, null=True)
    hero_tagline = models.CharField(max_length=255, blank=True, null=True, help_text="Short tagline for Hero section")
    experience_years = models.IntegerField(default=0)
    short_intro = models.TextField(blank=True, null=True, help_text="Short text for the Hero section")
    about_me = models.TextField(blank=True, null=True, help_text="Detailed text for the About section")
    profile_image = models.ImageField(upload_to='profile/', blank=True, null=True)
    location = models.CharField(max_length=200, blank=True, null=True)
    linkedin_url = models.URLField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    resume_file = models.FileField(upload_to='resume/', blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    services_title = models.CharField(max_length=200, default="My Services")
    services_subtitle = models.TextField(blank=True, null=True, help_text="Subtitle for the Services section")
    works_title = models.CharField(max_length=200, default="Selected Projects")
    works_subtitle = models.TextField(blank=True, null=True, help_text="Subtitle for the Works section")
    highlights_title = models.CharField(max_length=200, default="Project Highlights")
    highlights_subtitle = models.TextField(blank=True, null=True, help_text="Subtitle for the Highlights section")
    tools_title = models.CharField(max_length=200, default="Tools I Work With")
    tools_subtitle = models.TextField(blank=True, null=True, help_text="Subtitle for the Tools section")
    process_title = models.CharField(max_length=200, default="My Development Process")
    process_subtitle = models.TextField(blank=True, null=True, help_text="Subtitle for the Process section")
    contact_title = models.CharField(max_length=200, default="Get In Touch")
    contact_subtitle = models.TextField(blank=True, null=True, help_text="Subtitle for the Contact section")
    contact_heading = models.CharField(max_length=255, default="Let's create something extraordinary")
    contact_description = models.TextField(blank=True, null=True, help_text="Description for the Contact section card")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "User Profile"
        verbose_name_plural = "User Profiles"

    def __str__(self):
        return self.name

class ProcessStep(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon_name = models.CharField(max_length=100, default="Layers", help_text="Name of the Lucide React icon (e.g., Search, Layers, Server, Code, Activity)")
    display_order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['display_order']
        verbose_name = "Process Step"
        verbose_name_plural = "Process Steps"

    def __str__(self):
        return f"{self.display_order} - {self.title}"

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
        verbose_name = "Service"
        verbose_name_plural = "Services"

    def __str__(self):
        return self.title

class Education(models.Model):
    degree = models.CharField(max_length=200)
    institution_name = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    cgpa = models.CharField(max_length=50, blank=True, null=True)
    achievement = models.TextField(blank=True, null=True)
    display_order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['display_order', '-start_date']
        verbose_name = "Education Record"
        verbose_name_plural = "Education Records"

    def __str__(self):
        return f"{self.degree} at {self.institution_name}"

class Experience(models.Model):
    title = models.CharField(max_length=200)
    company_name = models.CharField(max_length=200)
    location = models.CharField(max_length=200, blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    is_current = models.BooleanField(default=False)
    description = models.TextField(blank=True, null=True)
    display_order = models.IntegerField(default=0)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['display_order', '-start_date']
        verbose_name = "Work Experience"
        verbose_name_plural = "Work Experience Records"

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
        verbose_name = "Skill Category"
        verbose_name_plural = "Skill Categories"

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
        verbose_name = "Skill"
        verbose_name_plural = "Skills & Tech Stack"

    def __str__(self):
        return self.name

class Project(models.Model):
    HIGHLIGHT_CHOICES = [
        (0, 'Do Not Highlight'),
        (1, 'Highlight in Row 1'),
        (2, 'Highlight in Row 2'),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    categories = models.CharField(max_length=255, help_text="Enter categories separated by commas (e.g. 'React, UI/UX, Mobile App')")
    description = models.TextField(blank=True, null=True)
    thumbnail = models.ImageField(upload_to='projects/', blank=True, null=True)
    project_url = models.URLField(blank=True, null=True)
    highlight_row = models.IntegerField(choices=HIGHLIGHT_CHOICES, default=0, help_text="Select a row to feature this project's thumbnail in the Highlights section.")
    display_order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['display_order', '-created_at']
        verbose_name = "Project"
        verbose_name_plural = "Projects"

    def __str__(self):
        return self.title
