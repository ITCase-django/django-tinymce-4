#! /usr/bin/env python
# -*- coding: utf-8 -*-

import os

from setuptools import find_packages, setup

from tinymce_4 import __version__

AUTHOR = 'Petr Zelenin, Arkadiy Zamaraev, Nikita Shalakov'
DESCRIPTION = 'Integrate TinyMCE 4 in Django projects'
EMAIL = 'po.zelenin@itcase.pro, arkadiy@bk.ru, ggift@mail.ru'
NAME = 'django-tinymce-4'
URL = 'https://github.com/ITCase-django/django-tinymce-4'

REQUIRES = [
    'django',
    'django-filebrowser',

    'pillow',
]

here = os.path.abspath(os.path.dirname(__file__))
with open(os.path.join(here, 'README.rst'), encoding='utf-8') as f:
    long_description = '\n' + f.read()


setup(
    name=NAME,

    description=DESCRIPTION,
    long_description=long_description,

    version=__version__,
    url=URL,

    author=AUTHOR,
    author_email=EMAIL,

    packages=find_packages(exclude=['example']),
    include_package_data=True,
    zip_safe=False,
    install_requires=REQUIRES,
    license='MIT',
    classifiers=[
        'Development Status :: 5 - Production/Stable',
        'Environment :: Web Environment',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Natural Language :: English',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: JavaScript',
        'Framework :: Django',
        'Framework :: Django :: 1.9',
        'Framework :: Django :: 1.10',
        'Framework :: Django :: 1.11',
        'Topic :: Software Development :: Libraries :: Application Frameworks',
        'Topic :: Software Development :: Libraries :: Python Modules',
    ]
)
