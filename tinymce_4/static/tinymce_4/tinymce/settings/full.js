/*global tinymce: false*/

tinymce.init({
    height: '350px',
    selector: 'textarea.tinymce',
    theme: 'modern',
    valid_elements: '*[*]',
    content_css: [
        '/static/tinymce_4/tinymce_content.css' + new Date().getTime(),
        '/static/tinymce_4/tinymce_reset.css'+ new Date().getTime()
    ],
    plugins: [
        'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
        'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
        'save table contextmenu directionality emoticons template paste textcolor'
    ],
    toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons',
    style_formats: [
        {title: 'Bold text', inline: 'b'},
        {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
        {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
        {title: 'Example 1', inline: 'span', classes: 'example1'},
        {title: 'Example 2', inline: 'span', classes: 'example2'},
        {title: 'Table styles'},
        {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
    ],
    // Callbacks
    file_browser_callback: DjangoFilebrowser
});