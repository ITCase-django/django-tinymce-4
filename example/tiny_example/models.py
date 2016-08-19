# -*- coding: utf-8 -*-

from django.db import models

from tinymce_4.fields import TinyMCEModelField


class TestTiny(models.Model):
    tiny_field = TinyMCEModelField('TinyMCEModelField', blank=True, null=True)
