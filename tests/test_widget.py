from django.contrib.auth import get_user_model
from django.test import Client, TestCase
from django.urls import reverse

from tinymce_4.widgets import TinyMCEWidget


class TinyMCETestCase(TestCase):

    def setUp(self):
        self.client = Client()
        user = get_user_model().objects.create_user(
            username='admin',
            password='password',
            is_staff=True,
            is_superuser=True,
        )
        self.client.force_login(user)

    def test_admin_add_includes_tinymce_media(self):
        url = reverse('admin:tests_tinyexample_add')
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
