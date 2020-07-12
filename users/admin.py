from django.contrib import admin
from .models import User

@admin.register(User)
class Author(admin.ModelAdmin):
    pass

# Register your models here.
