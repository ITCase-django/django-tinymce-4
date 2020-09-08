var tinySettings = {
  theme: 'silver',

  relative_urls: false,
  convert_urls: false,

  valid_elements: '*[*]',
  valid_children: '+a[h1|h2|h3|h4|h5|h6|p|span|div|img]',
  forced_root_block: 'p',

  height: '350px',
  body_class: 'content',

  plugin_preview_width: '730',
  plugin_preview_height: '550',

  language: '',
  language_url: '',

  content_css: [
    '/static/tinymce_4/css/__tinymce_4.css?' + new Date().getTime(),
  ],

  image_class_list: [],
  table_class_list: [],

  fontsize_formats: '8px 10px 12px 14px 16px 18px 20px 22px 24px 26px 28px 36px 48px 72px',

  toolbar_mode: 'sliding',

  contextmenu: 'link image imagetools table',

  file_picker_types: 'file image media',
}
