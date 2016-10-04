var tinySettings = {
  selector: 'textarea.tinymce',
  // language_url : '/static/tinymce_4/langs/ru.js',
  theme: 'modern',
  relative_urls: false,
  convert_urls: false,
  valid_elements: '*[*]',
  height: '350px',

  content_css: [
    '/static/tinymce_4/css/__tinymce_4.css?' + new Date().getTime()
  ],

  plugin_preview_width: '730',
  plugin_preview_height: '550',

  toolbar1: 'example, insertfile undo redo | styleselect removeformat | link image media template anchor | code | preview | image_alignment',
  toolbar2: 'fontsizeselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor',

  fontsize_formats: '8px 10px 12px 14px 16px 18px 20px 22px 24px 26px 28px 36px 48px 72px',

  file_browser_callback: DjangoFilebrowser
}
