from django.contrib import admin
from django.db import models

from tinymce_4.fields import TinyMCEModelField


class TinyExample(models.Model):

    tiny_field = TinyMCEModelField('TinyMCEModelField', blank=True)


admin.site.register(TinyExample)
