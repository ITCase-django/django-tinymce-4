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
      ...,
      'tinymce_4',
      'grappelli',
      'filebrowser',
      'django.contrib.admin',
      ...
  )

Usage
=====

.. code-block:: python

  from tinymce_4.fields import TinyMCEModelField
  from django.db import models

  class ModelFoo(models.Model):
      content = TinyMCEModelField('Foo content')

Custom Settings
===============

* `Base Settings`_: /tinymce_4/static/tinymce_4/settings/full/setings.js
*  Menu: /tinymce_4/static/tinymce_4/settings/full/menu.js
*  Plugins: /tinymce_4/static/tinymce_4/settings/full/plugins.js
* `External plugin`_: /tinymce_4/static/tinymce_4/settings/full/external_plugins.js
* `Templates`_: /tinymce_4/static/tinymce_4/settings/full/templates.js


.. _django-filebrowser: https://github.com/sehmaschine/django-filebrowser/
.. _Django: http://djangoproject.com/
.. _TinyMCE4: http://tinymce.com/
.. _`Base Settings`: https://www.tinymce.com/docs/demo/full-featured/
.. _`External plugin`: https://www.tinymce.com/docs/configure/integration-and-setup/#external_plugins
.. _Templates: https://www.tinymce.com/docs/plugins/template/
