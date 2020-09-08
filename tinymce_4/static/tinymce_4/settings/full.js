/* eslint-disable */

'use strict';

if ($ === undefined) $ = django.jQuery;

if (typeof tinySettings !== 'undefined') {
  if (typeof tinySetup !== 'undefined') {
    tinySettings.setup = tinySetup;
  }

  if (typeof tinyMenubar !== 'undefined') {
    tinySettings.menubar = tinyMenubar;
  }

  if (typeof tinyMenu !== 'undefined') {
    tinySettings.menu = tinyMenu;
  }

  if (typeof tinyToolbar !== 'undefined') {
    tinySettings.toolbar = tinyToolbar;
  }

  if (typeof tinyPlugins !== 'undefined') {
    tinySettings.plugins = tinyPlugins;
  }

  if (typeof tinyExternalPlugins !== 'undefined') {
    tinySettings.external_plugins = tinyExternalPlugins;
  }

  if (typeof tinyImageClassList !== 'undefined') {
    tinySettings.image_class_list = tinyImageClassList;
  }

  if (typeof tinyLanguage !== 'undefined') {
    tinySettings.language = tinyLanguage;
  }

  if (typeof tinyLanguageUrl !== 'undefined') {
    tinySettings.language_url = tinyLanguageUrl;
  }

  if (typeof tinyTableClassList !== 'undefined') {
    tinySettings.table_class_list = tinyTableClassList;
  }

  if (typeof tinyStyleFormats !== 'undefined') {
    if (typeof tinyCustomStyleFormats !== 'undefined') {
      tinyStyleFormats = tinyStyleFormats.concat(tinyCustomStyleFormats);
    }
    tinySettings.style_formats = tinyStyleFormats;
  }

  if (typeof tinyTemplates !== 'undefined') {
    tinySettings.templates = tinyTemplates;
  }

  if (typeof DjangoFilebrowser !== 'undefined') {
    tinySettings.file_picker_callback = DjangoFilebrowser;
  }
} else {
  console.warn('tinyMCE 4 Settings is not exists');
}
