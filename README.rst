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

  pip install git+git://github.com/ITCase/django-tinymce-4#egg=django-tinymce=4


Add application in project settings:

.. code-block:: python

  INSTALLED_APPS = (
      ...
      'filebrowser',
      'django_tinymce',
      ...
  )

.. _Django: http://djangoproject.com/

.. _django-filebrowser: https://github.com/sehmaschine/django-filebrowser/

.. _TinyMCE: http://tinymce.com/
