# -*- coding: utf-8 -*-

from django.urls import reverse
from django.contrib.auth.models import User
from django.test import Client, TestCase

from tinymce_4.widgets import TinyMCEWidget


class TinyMCETestCase(TestCase):

    def setUp(self):
        self.client = Client()
        user = User.objects.first()
        self.client.force_login(user)

    def test(self):
        url = reverse('admin:tiny_example_tinyexample_add')
        response = self.client.get(url)

        self.assertContains(response, TinyMCEWidget.tiny_class)

        for media_attr, media_value in TinyMCEWidget.Media.__dict__.items():
            if media_attr == 'css':
                for css_group in media_value.values():
                    for css in css_group:
                        self.assertContains(response, css)
            if media_attr == 'js':
                for js in media_value:
                    self.assertContains(response, js)
