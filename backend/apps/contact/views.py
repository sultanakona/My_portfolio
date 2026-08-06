import logging
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .serializers import ContactMessageSerializer

logger = logging.getLogger(__name__)

class ContactMessageAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            contact_instance = serializer.save()

            # Send Email Notification to Admin
            try:
                admin_email = getattr(settings, 'ADMIN_EMAIL', 'sultanakona259@gmail.com')
                subject = f"New Portfolio Inquiry from {contact_instance.name}"
                message_body = (
                    f"Hello,\n\n"
                    f"You have received a new contact message from your portfolio website:\n\n"
                    f"Name: {contact_instance.name}\n"
                    f"Email: {contact_instance.email}\n"
                    f"Phone Number: {contact_instance.phone_number or 'N/A'}\n"
                    f"Service Interested: {contact_instance.service_interested or 'N/A'}\n\n"
                    f"Message:\n{contact_instance.message}\n\n"
                    f"---\nSent via Portfolio Contact Form"
                )

                send_mail(
                    subject=subject,
                    message=message_body,
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[admin_email],
                    fail_silently=False,
                )
            except Exception as e:
                print(f"Email sending error: {e}")
                logger.error(f"Failed to send email notification: {e}")

            return Response(
                {"message": "Thank you! Your message has been sent successfully."}, 
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

