from django.contrib.auth.base_user import BaseUserManager 
from django.utils.translation import ugettext_lazy as _

class UserManager(BaseUserManager):
    """
    Manager for user model
    """
    def create_user(self, email, password, **kwargs):
        if not email:
            raise ValueError(_('The email is required'))

        email = self.normalize_email(email)
        user = self.model(email=email, **kwargs)
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, password=None, **kwargs):
        user = self.create_user(email, password, **kwargs)
        user.is_active  = True
        user.is_staff = True
        user.is_superuser = True
        user.save()

        return user