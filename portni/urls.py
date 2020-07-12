from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic.base import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns += [
    path('api/users/', include('users.urls'))
]

urlpatterns += [
    re_path('(.*)', TemplateView.as_view(
        template_name='base.html'), name='base'
    )
]