from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *
from django.utils.translation import gettext_lazy as _

class AppUserAdmin(UserAdmin):
    pass

admin.site.register(User, AppUserAdmin)
