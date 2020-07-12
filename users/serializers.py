import datetime

from django.conf import settings
from django.contrib.auth import authenticate, get_user_model
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _

from rest_framework import serializers
from rest_framework.authtoken.models import Token

from .models import User


class AuthTokenSerializer(serializers.Serializer):
    user = None
    email = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True)

    def __init__(self, *args, **kwargs):
        self.request = kwargs.pop('request', None)
        super(AuthTokenSerializer, self).__init__(*args, **kwargs)
    
    def validate(self, data):
        
        email, password = data.values()

        if not email or not password:
            msg = _('"email" and "password" is required')
            raise serializers.ValidationError(msg, code='authorization')

        self.user = authenticate(
                request=self.request,
                email=email,
                password=password
            )
        
        if not self.user:
            msg= _("This is not a valid credentials.")
            raise serializers.ValidationError(msg, code='authorization')
        
        return data


    def get_token(self):

        if not self.user:
            msg= _("This is not a valid credentials.")
            raise serializers.ValidationError(msg, code='authorization')

        token, created = Token.objects.get_or_create(user=self.user)
        expiry_date = token.created + datetime.timedelta(days= settings.AUTH_TOKEN_EXPIRY_DATE)

        if not created and expiry_date < timezone.now():
            token.delete()

            token = Token.objects.create(user=self)

        return token

class BaseUserSerializer(serializers.ModelSerializer):
    """
        Base user serializer
    """
    class Meta:
        model = get_user_model()
        fields = (
            'id',
            'email',
            'username',
            'first_name',
            'last_name'
        )
        
class RegisterSerializer(serializers.ModelSerializer):
    """
        Register serializer
    """
    user = None 
    password = serializers.CharField(
        write_only=True,
        required=True,
        style={'input_type':'password', 'placeholder':'Password'}
    )


    class Meta:
        model = User
        fields = (
            'id',
            'email',
            'username',
            'first_name',
            'last_name',
            'password',
        )

    def __init__(self, *args, **kwargs):
        self.request = kwargs.pop('request', None)
        super(RegisterSerializer, self).__init__(*args, **kwargs)

    def validate(self, data):
        email = data.pop('email')

        if self.Meta.model.objects.filter(email=email).exists():
            raise serializers.ValidationError("Email already used")

        self.user = self.Meta.model.objects.create_user(email=email, **data)

        return data

class UserSerializer(BaseUserSerializer):
    """
        User serializer
    """
    class Meta:
        model = get_user_model()
        fields = (
            'id',
            'email',
            'username',
            'first_name',
            'last_name',
        )

    def __init__(self, *args, **kwargs):
        super(UserSerializer, self).__init__(*args, **kwargs)