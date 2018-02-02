//本地存储
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node, CommonJS
    module.exports = factory();
  } else {
    // 浏览器全局变量(root 即 window)
    root.StoragePolyfill = factory();
  }
}(this, function() {
  function StoragePolyfill(fileName, expires, type) {
    var T = this;
    T.fileName = fileName || "",
      T.expiresDay = expires || 0,
      T.isIE = navigator.userAgent.indexOf("MSIE") != -1 && !window.opera,
      T.isInit = !1,
      T.target = document.documentElement,
      T.type = type || "json",
      T.init();
  };

  StoragePolyfill.prototype = {
    init: function() {
      var e = this;
      !window.localStorage && e.isIE && (e.isInit || (document.documentElement.addBehavior("#default#userdata"), e.isInit = !0))
    },
    set: function(key, value, type) {
      var T = this;
      type = type || T.type, type == "json" && (value = JSON.stringify(value));
      if (window.localStorage)
        localStorage.setItem(key, value);
      else if (T.isIE) {
        var target = T.target,
          s = T.fileName;
        target.load(s),
          target.setAttribute(key, value),
          target.expires = (new Date((new Date).getTime() + T.expiresDay * 864e5)).toUTCString(),
          target.save(s);
      }
    },
    get: function(e, t) {
      var n = this;
      t = t || n.type;
      if (window.localStorage)
        return t == "json" ? JSON.parse(localStorage.getItem(e)) : localStorage.getItem(e);
      if (n.isIE) {
        var r = n.target,
          i = n.fileName;
        try {
          return r.load(i), t == "json" ? JSON.parse(n.target.getAttribute(e)) : n.target.getAttribute(e);
        } catch (s) {
          return null;
        }
      }
    },
    remove: function(e) {
      var t = this;
      if (window.localStorage)
        localStorage.removeItem(e);
      else if (t.isIE) {
        var n = t.target,
          r = t.fileName;
        n.load(r);
        n.removeAttribute(e);
        n.expires = (new Date((new Date).getTime() - 1)).toUTCString();
        n.save(r);
      }
    }
  };
  return StoragePolyfill;
}));
