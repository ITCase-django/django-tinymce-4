#!/usr/bin/env python
import os
from setuptools import setup, find_packages
from tinymce_4 import __version__


def read(fname):
    return open(os.path.join(os.path.dirname(__file__), fname)).read()

setup(
    name='django-tinymce-4',
    version=__version__,
    packages=find_packages(),
    include_package_data=True,
    license='BSD License',  # example license
    description='Integrate TinyMCE 4 in Django projects.',
    long_description=read('README.rst'),
    url='http://www.itcase.pro/',
    author='Petr Zelenin',
    author_email='po.zelenin@itcase.pro',
    classifiers=[
        'Development Status :: 0 - Development/Unstable',
        'Environment :: Web Environment',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
    ],
    install_requires=[
        'django-filebrowser',
    ]
)
