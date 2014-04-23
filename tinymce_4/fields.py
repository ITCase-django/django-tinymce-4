# -*- coding: utf-8 -*-
# Django
from django import forms
from django.db import models

# in-module
from .widgets import TinyMCEFullWidget, TinyMCESmallWidget


class TinyMCEFormField(forms.CharField):

    """Form field with support TinyMCE."""

    widget = TinyMCEFullWidget

    def __init__(self, small_tiny=False, *args, **kwargs):
        if small_tiny:
            self.widget = TinyMCESmallWidget
        super(TinyMCEFormField, self).__init__(*args, **kwargs)


class TinyMCEModelField(models.TextField):

    """Model field with support TinyMCE."""

    def __init__(self, *args, **kwargs):
        self._small_tiny = kwargs.pop('small_tiny', False)
        super(TinyMCEModelField, self).__init__(*args, **kwargs)

    def formfield(self, **kwargs):
        kwargs['form_class'] = TinyMCEFormField
        kwargs['widget'] = TinyMCEFullWidget
        if self._small_tiny:
            kwargs['widget'] = TinyMCESmallWidget
        return super(TinyMCEModelField, self).formfield(**kwargs)
