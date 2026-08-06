from django.urls import reverse_lazy

UNFOLD = {
    "SITE_HEADER": "Portfolio Admin Panel",
    "SITE_TITLE": "Portfolio Admin",
    "SITE_SYMBOL": "dashboard",
    "SHOW_HISTORY": True,
    "SHOW_VIEW_ON_SITE": True,
    "SIDEBAR": {
        "show_search": True,
        "show_all_applications": False,
        "navigation": [
            {
                "title": "Portfolio Content",
                "separator": True,
                "collapsible": False,
                "items": [
                    {
                        "title": "User Profile Settings",
                        "icon": "person",
                        "link": reverse_lazy("admin:portfolio_userprofile_changelist"),
                    },
                    {
                        "title": "Projects",
                        "icon": "folder",
                        "link": reverse_lazy("admin:portfolio_project_changelist"),
                    },
                    {
                        "title": "Services",
                        "icon": "auto_awesome",
                        "link": reverse_lazy("admin:portfolio_myservice_changelist"),
                    },
                    {
                        "title": "Skills & Tech Stack",
                        "icon": "star",
                        "link": reverse_lazy("admin:portfolio_skill_changelist"),
                    },
                    {
                        "title": "Skill Categories",
                        "icon": "category",
                        "link": reverse_lazy("admin:portfolio_skillcategory_changelist"),
                    },
                    {
                        "title": "Work Experience Records",
                        "icon": "work",
                        "link": reverse_lazy("admin:portfolio_experience_changelist"),
                    },
                    {
                        "title": "Education Records",
                        "icon": "school",
                        "link": reverse_lazy("admin:portfolio_education_changelist"),
                    },
                    {
                        "title": "Process Steps",
                        "icon": "schema",
                        "link": reverse_lazy("admin:portfolio_processstep_changelist"),
                    },
                ],
            },
            {
                "title": "Communication",
                "separator": True,
                "collapsible": False,
                "items": [
                    {
                        "title": "Received Contact Messages",
                        "icon": "mail",
                        "link": reverse_lazy("admin:contact_contactmessage_changelist"),
                    },
                ],
            },
            {
                "title": "Users & Security",
                "separator": True,
                "collapsible": True,
                "items": [
                    {
                        "title": "Users",
                        "icon": "group",
                        "link": reverse_lazy("admin:auth_user_changelist"),
                    },
                    {
                        "title": "Groups",
                        "icon": "badge",
                        "link": reverse_lazy("admin:auth_group_changelist"),
                    },
                ],
            },
        ],
    },
}