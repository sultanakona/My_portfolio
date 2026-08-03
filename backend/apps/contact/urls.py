from django.urls import path
from .views import ContactMessageAPIView

urlpatterns = [
    path('messages/', ContactMessageAPIView.as_view(), name='contact-messages'),
]