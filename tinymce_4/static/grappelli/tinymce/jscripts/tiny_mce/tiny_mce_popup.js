// overridden from "django-grappelli 2.9.1"

'use strict';

// Uncomment and change this document.domain value if you are loading the script cross subdomains
// document.domain = 'moxiecode.com';

var tinymce = null;
var tinyMCE;

var tinyMCEPopup = {
  init : function() {
    var self = this;
    var win;
    var c;
    win = self.getWin();
    tinymce = win.tinymce;
    tinyMCE = win.tinyMCE;
    self.editor = tinymce.EditorManager.activeEditor;
    self.params = {}; // self.editor.windowManager.getParams();
    self.dom = new tinymce.dom.DOMUtils(document, {
      ownEvents : true,
      proxy : tinyMCEPopup._eventProxy
    });
    self.dom.bind(window, "ready", self._onDOMLoaded, self);
    self.dom.loadCSS(self.editor.settings.popup_css);
    self.listeners = [];
    self.onInit = {
      add : function(SVGelem, events) {
        self.listeners.push({
          func : SVGelem,
          scope : events
        });
      }
    };
    self.isWindow = !self.getWindowArg("mce_inline");
    self.id = self.getWindowArg("mce_window_id");
  },
  getWin : function() {
    return !window.frameElement && window.dialogArguments || opener || parent || top;
  },
  getWindowArg : function(name, defaultValue) {
    var value = this.params[name];
    return tinymce.is(value) ? value : defaultValue;
  },
  getParam : function(name, defaultValue) {
    return this.editor.getParam(name, defaultValue);
  },
  getLang : function(name, defaultValue) {
    return this.editor.getLang(name, defaultValue);
  },
  execCommand : function(cmd, val, options, args) {
    args = args || {};
    args.skip_focus = 1;
    this.restoreSelection();
    return this.editor.execCommand(cmd, val, options, args);
  },
  resizeToInnerSize : function() {
    var editor = this;
    setTimeout(function() {
      var _webStorage = editor.dom.getViewPort(window);
    }, 10);
  },
  executeOnLoad : function(s$jscomp$2) {
    this.onInit.add(function() {
      eval(s$jscomp$2);
    });
  },
  storeSelection : function() {
    this.editor.windowManager.bookmark = tinyMCEPopup.editor.selection.getBookmark(1);
  },
  restoreSelection : function() {
    var self = tinyMCEPopup;
    if (!self.isWindow && tinymce.isIE) {
      self.editor.selection.moveToBookmark(self.editor.windowManager.bookmark);
    }
  },
  requireLangPack : function() {
    var self = this;
    var url = self.getWindowArg("plugin_url") || self.getWindowArg("theme_url");
    if (url && self.editor.settings.language && self.editor.settings.translate_i18n !== false && self.editor.settings.language_load !== false) {
      url = url + ("/langs/" + self.editor.settings.language + "_dlg.js");
      if (!tinymce.ScriptLoader.isDone(url)) {
        document.write('<script type="text/javascript" src="' + tinymce._addVer(url) + '">\x3c/script>');
        tinymce.ScriptLoader.markDone(url);
      }
    }
  },
  pickColor : function(e, element_id) {
    this.execCommand("mceColorPicker", true, {
      color : document.getElementById(element_id).value,
      func : function(declarations) {
        document.getElementById(element_id).value = declarations;
        try {
          document.getElementById(element_id).onchange();
        } catch (d) {
        }
      }
    });
  },
  openBrowser : function(element_id, type, url) {
    tinyMCEPopup.restoreSelection();
    this.editor.execCallback("file_browser_callback", element_id, document.getElementById(element_id).value, type, window);
  },
  confirm : function(win, loseX, args) {
    this.editor.windowManager.confirm(win, loseX, args, window);
  },
  alert : function(win, loseX, args) {
    this.editor.windowManager.alert(win, loseX, args, window);
  },
  close : function() {
    /**
     * @return {undefined}
     */
    function close() {
      self.editor.windowManager.close(window);
      tinymce = tinyMCE = self.editor = self.params = self.dom = self.dom.doc = null;
    }
    var self = this;
    if (tinymce.isOpera) {
      self.getWin().setTimeout(close, 0);
    } else {
      close();
    }
  },
  _restoreSelection : function() {
    var el = window.event.srcElement;
    if (el.nodeName == "INPUT" && (el.type == "submit" || el.type == "button")) {
      tinyMCEPopup.restoreSelection();
    }
  },
  _onDOMLoaded : function() {
    var t = tinyMCEPopup;
    var ti = document.title;
    var e;
    var h;
    var nv;
    if (t.editor.settings.translate_i18n !== false) {
      h = document.body.innerHTML;
      if (tinymce.isIE) {
        h = h.replace(/ (value|title|alt)=([^"][^\s>]+)/gi, ' $1="$2"');
      }
      document.dir = t.editor.getParam("directionality", "");
      if ((nv = t.editor.translate(h)) && nv != h) {
        document.body.innerHTML = nv;
      }
      if ((nv = t.editor.translate(ti)) && nv != ti) {
        document.title = ti = nv;
      }
    }
    if (!t.editor.getParam("browser_preferred_colors", false) || !t.isWindow) {
      t.dom.addClass(document.body, "forceColors");
    }
    document.body.style.display = "";
    if (tinymce.isIE) {
      document.attachEvent("onmouseup", tinyMCEPopup._restoreSelection);
      t.dom.add(t.dom.select("head")[0], "base", {
        target : "_self"
      });
    }
    t.restoreSelection();
    t.resizeToInnerSize();
    if (!t.isWindow) {
      t.editor.windowManager.setTitle(window, ti);
    } else {
      window.focus();
    }
    if (!tinymce.isIE && !t.isWindow) {
      t.dom.bind(document, "focus", function() {
        t.editor.windowManager.focus(t.id);
      });
    }
    tinymce.each(t.dom.select("select"), function(e) {
      e.onkeydown = tinyMCEPopup._accessHandler;
    });
    tinymce.each(t.listeners, function(queryItem) {
      queryItem.func.call(queryItem.scope, t.editor);
    });
    if (t.getWindowArg("mce_auto_focus", true)) {
      window.focus();
      tinymce.each(document.forms, function(rule) {
        tinymce.each(rule.elements, function(f) {
          if (t.dom.hasClass(f, "mceFocus") && !f.disabled) {
            f.focus();
            return false;
          }
        });
      });
    }
    document.onkeyup = tinyMCEPopup._closeWinKeyHandler;
  },
  _accessHandler : function(e) {
    e = e || window.event;
    if (e.keyCode == 13 || e.keyCode == 32) {
      var sel_services = e.target || e.srcElement;
      if (sel_services.onchange) {
        sel_services.onchange();
      }
      return tinymce.dom.Event.cancel(e);
    }
  },
  _closeWinKeyHandler : function(e) {
    e = e || window.event;
    if (e.keyCode == 27) {
      tinyMCEPopup.close();
    }
  },
  _eventProxy : function(id) {
    return function(evt) {
      tinyMCEPopup.dom.events.callNativeHandler(id, evt);
    };
  }
};

tinyMCEPopup.init();
