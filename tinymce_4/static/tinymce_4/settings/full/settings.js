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

  plugin_preview_width : '730',
  plugin_preview_height : '550',

  toolbar1: 'example, insertfile undo redo | styleselect removeformat | link image media template anchor | code | preview | image_alignment',
  toolbar2: 'fontsizeselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor',

  style_formats: [
    { title: 'Headers', items: [
      { title: 'Header 1', format: 'h1' },
      { title: 'Header 2', format: 'h2' },
      { title: 'Header 3', format: 'h3' },
      { title: 'Header 4', format: 'h4' },
      { title: 'Header 5', format: 'h5' },
      { title: 'Header 6', format: 'h6' }
    ]},
    { title: 'Inline', items: [
      { title: 'Bold', icon: 'bold', format: 'bold' },
      { title: 'Italic', icon: 'italic', format: 'italic' },
      { title: 'Underline', icon: 'underline', format: 'underline' },
      { title: 'Strikethrough', icon: 'strikethrough', format: 'strikethrough' },
      { title: 'Superscript', icon: 'superscript', format: 'superscript' },
      { title: 'Subscript', icon: 'subscript', format: 'subscript' },
      { title: 'Code', icon: 'code', format: 'code' }
    ]},
    { title: 'Blocks', items: [
      { title: 'Paragraph', format: 'p' },
      { title: 'Blockquote', format: 'blockquote' },
      { title: 'Div', format: 'div' },
      { title: 'Pre', format: 'pre' }
    ]},
    { title: 'Alignment', items: [
      { title: 'Left', icon: 'alignleft', format: 'alignleft' },
      { title: 'Center', icon: 'aligncenter', format: 'aligncenter' },
      { title: 'Right', icon: 'alignright', format: 'alignright' },
      { title: 'Justify', icon: 'alignjustify', format: 'alignjustify' }
    ]},
    {
      title: "Таблицы", items: [
      { title: 'Таблица с рамкой', selector: 'table', classes: 'table_type_border'},
    ]},
    {
      title: "Меню", items: [
      { title: 'Меню на странице: (пункты меню)', selector: 'ul', classes: 'page-nav'},
      { title: 'Меню на странице: (якорь)', selector: '*', classes: 'page-nav__link'},
    ]},
  ],
  fontsize_formats: '8px 10px 12px 14px 16px 18px 20px 22px 24px 26px 28px 36px 48px 72px',

  // Callbacks
  file_browser_callback: DjangoFilebrowser
}
