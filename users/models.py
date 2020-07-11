import datetime

from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone
from django.conf import settings

from rest_framework.authtoken.models import Token

from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email Address'), unique=True)
    username = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=150, null=True, blank=True)
    last_name = models.CharField(max_length=150, null=True, blank=True)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    date_created = models.DateTimeField(default=timezone.now)
    date_updated = models.DateTimeField(default=timezone.now)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


    def __str__(self):
        return f"{self.email}"


    def get_token(self):
        """
            get or generate new token if token is expired
        """

        token, created = Token.objects.get_or_create(user=self)
        expiry_date = token.created + datetime.timedelta(days= settings.AUTH_TOKEN_EXPIRY_DATE)

        if not created and expiry_date < timezone.now():
            token.delete()

            token = Token.objects.create(user=self)

@receiver(post_save, sender=User)
def create_user_auth(instance=None, create=False, **kwargs):
    if create:
        instance.get_token()