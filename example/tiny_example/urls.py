# -*- coding: utf-8 -*-

from django.conf import settings
from django.conf.urls import include, static, url
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.generic.list import ListView

from filebrowser.sites import site as fb_site

from .models import TinyExample


class IndexView(ListView):

    context_object_name = 'tiny_objects'
    model = TinyExample
    template_name = 'index.html'


admin.site.register(TinyExample)

urlpatterns = [
    url(r'^admin/', include([
        url(r'^', admin.site.urls),
        url(r'^filebrowser/', fb_site.urls),
        url(r'^grappelli/', include('grappelli.urls')),
    ])),

    url(r'^$', IndexView.as_view()),
]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static.static(settings.MEDIA_URL,
                             document_root=settings.MEDIA_ROOT)
