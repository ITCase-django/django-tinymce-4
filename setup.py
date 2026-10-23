#! /usr/bin/env python

import os

from setuptools import find_namespace_packages, setup

from tinymce_4 import __version__

AUTHOR = 'Petr Zelenin, Arkadiy Zamaraev, Nikita Shalakov'
DESCRIPTION = 'Integrate TinyMCE 4 in Django projects'
EMAIL = 'po.zelenin@itcase.pro, arkadiy@bk.ru, ggift@mail.ru'
NAME = 'django-tinymce-4'
URL = 'https://github.com/ITCase-django/django-tinymce-4'

REQUIRES = [
    'Django>=5.2,<6',
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

    packages=find_namespace_packages(include=['tinymce_4*']),
    include_package_data=True,
    zip_safe=False,
    install_requires=REQUIRES,
    python_requires='>=3.10',
    license='MIT',
    classifiers=[
        'Development Status :: 5 - Production/Stable',
        'Environment :: Web Environment',
        'Framework :: Django',
        'Framework :: Django :: 5.2',
        'Intended Audience :: Developers',
        'Natural Language :: English',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3.10',
        'Programming Language :: Python :: 3.11',
        'Programming Language :: Python :: 3.12',
        'Programming Language :: Python :: 3.13',
        'Programming Language :: Python :: 3.14',
        'Programming Language :: JavaScript',
        'Topic :: Software Development :: Libraries :: Application Frameworks',
        'Topic :: Software Development :: Libraries :: Python Modules',
    ]
)
