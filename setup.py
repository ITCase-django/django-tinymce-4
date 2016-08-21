# -*- coding: utf-8 -*-

import os

from setuptools import setup, find_packages
from tinymce_4 import __version__


def read(name):
    with open(os.path.join(os.path.dirname(
            os.path.realpath(__file__)), name)) as file:
        return file.read()

setup(
    name='django-tinymce-4',

    description='Integrate TinyMCE 4 in Django projects.',
    long_description=read('README.rst'),

    version=__version__,
    url='https://github.com/ITCase-django/django-tinymce-4',

    author='Petr Zelenin, Arkadiy Zamaraev, Nikita Shalakov',
    author_email='po.zelenin@itcase.pro, arkadiy@bk.ru, ggift@mail.ru',

    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    install_requires=read('requirements.txt'),
    license='MIT',
    classifiers=[
        'Development Status :: 5 - Production/Stable',
        'Environment :: Web Environment',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'Natural Language :: English',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        "Programming Language :: Python :: 2.7",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.2",
        "Programming Language :: Python :: 3.3",
        "Programming Language :: Python :: 3.4",
        "Programming Language :: Python :: 3.5",
        "Programming Language :: JavaScript",
        'Topic :: Software Development :: Libraries :: Application Frameworks',
        'Topic :: Software Development :: Libraries :: Python Modules',
    ]
)
