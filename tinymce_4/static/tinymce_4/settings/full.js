/* eslint-disable */

'use strict';

if ($ === undefined) $ = django.jQuery;

if (typeof tinySettings !== 'undefined') {
  if (typeof setup !== 'undefined') {
    tinySettings.setup = setup;
  }

  if (typeof menubar !== 'undefined') {
    tinySettings.menubar = menubar;
  }

  if (typeof menu !== 'undefined') {
    tinySettings.menu = menu;
  }

  if (typeof plugins !== 'undefined') {
    tinySettings.plugins = plugins;
  }

  if (typeof externalPlugins !== 'undefined') {
    tinySettings.external_plugins = externalPlugins;
  }

  if (typeof imageClassList !== 'undefined') {
    tinySettings.image_class_list = imageClassList;
  }

  if (typeof languageUrl !== 'undefined') {
    tinySettings.language_url = languageUrl
  }

  if (typeof tableClassList !== 'undefined') {
    tinySettings.table_class_list = imageClassList;
  }

  if (typeof styleFormats !== 'undefined') {
    tinySettings.style_formats = styleFormats.concat(customStyleFormats);
  }

  if (typeof templates !== 'undefined') {
    tinySettings.templates = templates;
  }
} else {
  console.warn('tinyMCE 4 Settings is not exists');
}
