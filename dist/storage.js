!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.StoragePolyfill=t()}(this,function(){function e(e,t,i){var a=this;a.fileName=e||"",a.expiresDay=t||0,a.isIE=-1!=navigator.userAgent.indexOf("MSIE")&&!window.opera,a.isInit=!1,a.target=document.documentElement,a.type=i||"json",a.init()}return e.prototype={init:function(){var e=this;!window.localStorage&&e.isIE&&(e.isInit||(document.documentElement.addBehavior("#default#userdata"),e.isInit=!0))},set:function(e,t,i){var a=this;if("json"==(i=i||a.type)&&(t=JSON.stringify(t)),window.localStorage)localStorage.setItem(e,t);else if(a.isIE){var o=a.target,r=a.fileName;o.load(r),o.setAttribute(e,t),o.expires=new Date((new Date).getTime()+864e5*a.expiresDay).toUTCString(),o.save(r)}},get:function(e,t){var i=this;if(t=t||i.type,window.localStorage)return"json"==t?JSON.parse(localStorage.getItem(e)):localStorage.getItem(e);if(i.isIE){var a=i.target,o=i.fileName;try{return a.load(o),"json"==t?JSON.parse(i.target.getAttribute(e)):i.target.getAttribute(e)}catch(e){return null}}},remove:function(e){var t=this;if(window.localStorage)localStorage.removeItem(e);else if(t.isIE){var i=t.target,a=t.fileName;i.load(a),i.removeAttribute(e),i.expires=new Date((new Date).getTime()-1).toUTCString(),i.save(a)}}},e});