
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import include, path
from django.views.generic.list import ListView

from filebrowser.sites import site as fb_site

from .models import TinyExample


class IndexView(ListView):

    context_object_name = 'tiny_objects'
    model = TinyExample
    template_name = 'index.html'


admin.site.register(TinyExample)

urlpatterns = [
    path('admin/', include([
        path('', admin.site.urls),
        path('filebrowser/', fb_site.urls),
        path('grappelli/', include('grappelli.urls')),
    ])),

    path('', IndexView.as_view()),
]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
