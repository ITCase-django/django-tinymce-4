django-tinymce-4
================

Integrate `TinyMCE4`_ in `Django`_ projects.

Features
========
* Support only `TinyMCE4`_.
* Support `django-filebrowser`_.

Install
=======
Install package from current repo:

.. code-block:: bash

  pip install git+git://github.com/ITCase-django/django-tinymce-4


Add application in project settings **(order is important)**:

.. code-block:: python

  INSTALLED_APPS = (
      'filebrowser',
      'grappelli',
      'tinymce_4',
  )

.. _django-filebrowser: https://github.com/sehmaschine/django-filebrowser/
.. _Django: http://djangoproject.com/
.. _TinyMCE4: http://tinymce.com/


Usage
=====

.. code-block:: python

  from tinymce_4.fields import TinyMCEModelField
  from django.db import models

  class ModelFoo(models.Model):
      content = TinyMCEModelField('Foo content')
