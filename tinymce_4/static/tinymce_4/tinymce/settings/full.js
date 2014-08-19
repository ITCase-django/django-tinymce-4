/*global tinymce: false*/

tinymce.init({
    height: '350px',
    selector: 'textarea.tinymce',
    theme: 'modern',
    valid_elements: '*[*]',
    content_css: [
        '/static/tinymce_4/tinymce_content.css?' + new Date().getTime(),
        '/static/tinymce_4/tinymce_reset.css?'+ new Date().getTime()
    ],

    plugins: [
        'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
        'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
        'save table contextmenu directionality emoticons template paste textcolor'
    ],

    plugin_preview_width : "730",
    plugin_preview_height : "550",

    menu : {
        edit: {
            title : 'Edit',
            items : 'undo redo | cut copy paste pastetext | selectall'
        },
        insert : {
            title : 'Insert',
            items : 'link image media | template'
        },
        view: {
            title : 'View'  ,
            items : 'visualaid, visualblocks'
        },
        format: {
            title : 'Format',
            items : 'bold italic underline strikethrough superscript subscript | formats | removeformat'
        },
        table: {
            title : 'Table' ,
            items : 'inserttable tableprops deletetable | cell row column'
        },
    },

    toolbar1: 'insertfile undo redo | styleselect removeformat | link image media template | code | preview',
    toolbar2: 'fontsizeselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor',

    style_formats: [
        {title: "Headers", items: [
            {title: "Header 1", format: "h1"},
            {title: "Header 2", format: "h2"},
            {title: "Header 3", format: "h3"},
            {title: "Header 4", format: "h4"},
            {title: "Header 5", format: "h5"},
            {title: "Header 6", format: "h6"}
        ]},
        {title: "Inline", items: [
            {title: "Bold", icon: "bold", format: "bold"},
            {title: "Italic", icon: "italic", format: "italic"},
            {title: "Underline", icon: "underline", format: "underline"},
            {title: "Strikethrough", icon: "strikethrough", format: "strikethrough"},
            {title: "Superscript", icon: "superscript", format: "superscript"},
            {title: "Subscript", icon: "subscript", format: "subscript"},
            {title: "Code", icon: "code", format: "code"}
        ]},
        {title: "Blocks", items: [
            {title: "Paragraph", format: "p"},
            {title: "Blockquote", format: "blockquote"},
            {title: "Div", format: "div"},
            {title: "Pre", format: "pre"}
        ]},
        {title: "Alignment", items: [
            {title: "Left", icon: "alignleft", format: "alignleft"},
            {title: "Center", icon: "aligncenter", format: "aligncenter"},
            {title: "Right", icon: "alignright", format: "alignright"},
            {title: "Justify", icon: "alignjustify", format: "alignjustify"}
        ]},
    ],
    fontsize_formats:"8px 10px 12px 14px 16px 18px 20px 22px 24px 26px 28px 36px 48px 72px",

    // Callbacks
    file_browser_callback: DjangoFilebrowser
});