# -*- coding: utf-8 -*-
from django import forms


class TinyMCEWidget(forms.Textarea):
    """
    Textarea form widget with support TinyMCE.
    See: http://www.tinymce.com/wiki.php/TinyMCE
    """

    _css_class = 'b_tinymce'

    def __init__(self, attrs=None):
        attrs = attrs or {}
        css_class = attrs.get('class', '')
        attrs['class'] = ' '.join([css_class, self._css_class])
        super(TinyMCEWidget, self).__init__(attrs)

    class Media:
        js = [
            'django_tinymce_4/tinymce/tinymce.min.js',
            'django_tinymce_4/tinymce/settings/django-filebrowser.js',
        ]


class TinyMCEFullWidget(TinyMCEWidget):
    """
    Textarea form widget with support TinyMCE.
    See: http://www.tinymce.com/wiki.php/TinyMCE
    This is widget for full config TinyMCE.
    """

    class Media:
        js = [
            'django_tinymce_4/tinymce/settings/full.js',
        ]


class TinyMCESmallWidget(TinyMCEWidget):
    """
    Textarea form widget with support TinyMCE.
    See: http://www.tinymce.com/wiki.php/TinyMCE
    This is widget for small config TinyMCE.
    """

    class Media:
        js = [
            'django_tinymce_4/tinymce/settings/small.js',
        ]
