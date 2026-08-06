from django.apps import AppConfig


class PortfolioConfig(AppConfig):
    name = 'apps.portfolio'

    def ready(self):
        try:
            from django.contrib.auth import get_user_model
            User = get_user_model()
            if not User.objects.filter(is_superuser=True).exists():
                User.objects.create_superuser('admin', 'sultanakona259@gmail.com', 'Kona12345#')
                print("Auto created superuser: admin / Kona12345#")
        except Exception:
            pass
