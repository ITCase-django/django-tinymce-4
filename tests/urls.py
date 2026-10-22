from django.contrib import admin
from django.urls import include, path

from filebrowser.sites import site as fb_site

urlpatterns = [
    path('admin/', include([
        path('', admin.site.urls),
        path('filebrowser/', fb_site.urls),
        path('grappelli/', include('grappelli.urls')),
    ])),
]
