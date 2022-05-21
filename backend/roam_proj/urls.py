from django.contrib import admin
from django.urls import path, re_path, include
from django.conf import settings
from django.conf.urls.static import static
from .view import send_the_homepage

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('roam_app.urls')),
    re_path(r'.*', send_the_homepage), #re path so react_router can do its thing
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,
                              document_root=settings.MEDIA_ROOT)
