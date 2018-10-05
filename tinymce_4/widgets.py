# -*- coding: utf-8 -*-

from django import forms


class TinyMCEWidget(forms.Textarea):
    '''
    Textarea form widget with support TinyMCE.
    See: http://www.tinymce.com/wiki.php/TinyMCE
    '''

    tiny_class = 'tinymce4'

    def __init__(self, attrs={}):
        css_class = attrs.get('class', '')
        attrs['class'] = ' '.join([self.tiny_class, css_class])
        super().__init__(attrs)

    class Media:
        css = {
            'all': ('tinymce_4/settings/django-grapelli.css',)
        }
        js = [
            'tinymce_4/tinymce/tinymce.min.js',
            'tinymce_4/tinymce/tinymce_initialization.js',
            'tinymce_4/settings/django-filebrowser.js',
        ]


class TinyMCEFullWidget(TinyMCEWidget):
    '''
    Textarea form widget with support TinyMCE.
    See: http://www.tinymce.com/wiki.php/TinyMCE
    This is widget for full config TinyMCE.
    '''

    class Media:
        js = [
            'tinymce_4/settings/full/settings.js',
            'tinymce_4/settings/full/custom_style_formats.js',
            'tinymce_4/settings/full/external_plugins.js',
            'tinymce_4/settings/full/image_class_list.js',
            'tinymce_4/settings/full/menu.js',
            'tinymce_4/settings/full/language_url.js',
            'tinymce_4/settings/full/plugins.js',
            'tinymce_4/settings/full/style_formats.js',
            'tinymce_4/settings/full/table_class_list.js',
            'tinymce_4/settings/full/templates.js',
            'tinymce_4/settings/full.js',
        ]


class TinyMCESmallWidget(TinyMCEWidget):
    """
    Textarea form widget with support TinyMCE.
    See: http://www.tinymce.com/wiki.php/TinyMCE
    This is widget for small config TinyMCE.
    """

    class Media:
        js = [
            'tinymce_4/settings/small.js',
        ]
