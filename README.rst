django-tinymce-4
================

Integrate `TinyMCE4`_ in `Django`_ projects with `Django Filebrowser`_

Features
========

* Support only `TinyMCE4`_.
* Support `Django Filebrowser`_.

Install
=======

.. code-block:: bash

  pip install django-tinymce-4


Add applications to INSTALLED_APPS in settings.py for your project **(order is important)**:

.. code-block:: python

  INSTALLED_APPS = (
      'tinymce_4',
      'grappelli',
      'filebrowser',
      'django.contrib.admin',
  )

Add the `Django Filebrowser`_ site to your url-patterns (before any admin-urls):

.. code-block:: python

    url(r'^grappelli/', include('grappelli.urls')),
    url(r'^admin/', include([
        url(r'^', include(admin.site.urls)),
        url(r'^filebrowser/', include(fb_site.urls)),
    ])),


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
* `External plugins`_: /tinymce_4/static/tinymce_4/settings/full/external_plugins.js
* `Templates`_: /tinymce_4/static/tinymce_4/settings/full/templates.js

Demo
====

.. code-block:: bash

  cd django-tinymce-4/example/
  pip install -r requirements.txt
  python manage.py runserver


Contributing
============

#. Create an issue to discuss about your idea
#. Fork it
#. Create your feature branch: **git checkout -b new-feature**
#. Commit your changes: **git commit -am 'Add some feature'**
#. Push to the branch: **git push origin new-feature**
#. Create a new  **Pull Request**
#. Profit!

Setup environment
-----------------

**Install npm packages**

.. code-block:: bash

  cd django-tinymce-4/
  npm install

**Run example**

.. code-block:: bash

  cd django-tinymce-4/example/tiny_example/
  python manage.py runserver

**Build css**

.. code-block:: bash

  gulp css


Branches
--------

* master - latest release branch
* develop - development branch for new releases


.. _Django Filebrowser: https://github.com/sehmaschine/django-filebrowser/
.. _Django: http://djangoproject.com/
.. _TinyMCE4: http://tinymce.com/
.. _`Base Settings`: https://www.tinymce.com/docs/demo/full-featured/
.. _`External plugins`: https://www.tinymce.com/docs/configure/integration-and-setup/#external_plugins
.. _Templates: https://www.tinymce.com/docs/plugins/template/
