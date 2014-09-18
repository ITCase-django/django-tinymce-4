*****************
django-tinymce-4
*****************
Integrate `TinyMCE`_ in `Django`_ projects.

Features
========
* Support only `TinyMCE`_ 4.

* Support `django-filebrowser`_.

Install
=======
Install package from current repo:

.. code-block:: bash

  pip install git+git://github.com/ITCase/django-tinymce-4


Add application in project settings (**order is important**):

.. code-block:: python

  INSTALLED_APPS = (
      ...
      'tinymce_4',
      'filebrowser',
      ...
  )

.. _Django: http://djangoproject.com/

.. _django-filebrowser: https://github.com/sehmaschine/django-filebrowser/

.. _TinyMCE: http://tinymce.com/


USE
=======

.. code-block:: python

  from tinymce_4.fields import TinyMCEModelField
  from django.db import models

  class ModelFoo(models.Model):
      content = TinyMCEModelField('foo content')


if you using south you must use add_introspection_rules construction

.. code-block:: python

  from south.modelsinspector import add_introspection_rules
  add_introspection_rules([], ["^tinymce_4\.fields\.TinyMCEModelField"])

