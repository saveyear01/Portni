from django.urls import path
from .views import Login, Register, AuthUser

urlpatterns = [
    path('auth/', AuthUser.as_view({
        'get': 'get'
    }), name="auth_user"),

    path('auth/login/', Login.as_view(), name="login"),
    path('auth/register/', Register.as_view(), name="register")
]