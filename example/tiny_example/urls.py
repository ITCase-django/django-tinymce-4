# -*- coding: utf-8 -*-

from django.conf import settings
from django.conf.urls import include, url
from django.contrib import admin
from django.shortcuts import render

from filebrowser.sites import site as fb_site

from .models import TestTiny


def get_context():
    return {'tiny_objects': TestTiny.objects.all()}


urlpatterns = [
    url(r'^grappelli/', include('grappelli.urls')),
    url(r'^admin/', include([
        url(r'^', include(admin.site.urls)),
        url(r'^filebrowser/', include(fb_site.urls)),
    ])),

    url(r'^$', lambda request: render(request, 'index.html', get_context())),
]

if settings.DEBUG:
    urlpatterns.extend([
        url(r'^media/(?P<path>.*)$', 'django.views.static.serve',
            {'document_root': settings.MEDIA_ROOT}),
        url(r'^static/(?P<path>.*)$', 'django.views.static.serve',
            {'document_root': settings.STATIC_ROOT}),
    ])
