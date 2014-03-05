#!/usr/bin/env python
from setuptools import setup, find_packages

setup(
    name='django-tinymce',
    version='0.0.1',
    packages=find_packages(),
    include_package_data=True,
    license='BSD License',  # example license
    description='Integrate TinyMCE 4 in Django projects.',
    long_description='README.rst',
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
