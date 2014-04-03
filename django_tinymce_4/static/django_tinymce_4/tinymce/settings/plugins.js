// tinymce.PluginManager.load('forms', '/static/tinymce/plugins/forms/forms.js');

(function($){
    $(document).ready(function() {
        $.ajax({
            type: "GET",
            url: '/get_tinymce_plugins/',
            // data: data,
            success: function(data){
                for (var plugin_key in data) {
                    var plugin = data[plugin_key];
                    add_tinymce_plugin(plugin_key, plugin['objects'], plugin['name']);
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });


        function add_tinymce_plugin(plugin_key, plugin_objects, plugin_name) {
            tinymce.PluginManager.add(plugin_key, function(editor, url) {
                var menuItems = [];
                for (object in plugin_objects){
                    menuItems.push({
                        text: object,
                        onclick: function(e) {
                            insertPluginContent(plugin_objects[$.trim($(e.target).text())]);
                        }
                    });
                }

                function insertPluginContent(include) {
                    var html = '<div class="content-"'+plugin_key+'>'
                        html += include;
                        html += '</div>';
                    editor.insertContent(html);
                }

                // Add a button that opens a window
                // editor.addButton(plugin_key, {
                //     text: 'My button',
                //     icon: false,
                // });

                // Adds a menu item to the insert menu
                editor.addMenuItem(plugin_key, {
                    text: plugin_name,
                    context: 'insert',
                    menu: menuItems,
                });
            });
        }
    });
}(django.jQuery));
