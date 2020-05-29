!function(e,d,p,m){var s=[],t={_version:"3.11.2",_config:{classPrefix:"modernizr-",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){s.push({name:e,fn:t,options:n})},addAsyncTest:function(e){s.push({name:null,fn:e})}},l=function(){};l.prototype=t,l=new l;var c=[];function h(e,t){return typeof e===t}var i,n,v=p.documentElement,g="svg"===v.nodeName.toLowerCase();function a(e){var t=v.className,n=l._config.classPrefix||"";if(g&&(t=t.baseVal),l._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}l._config.enableClasses&&(0<e.length&&(t+=" "+n+e.join(" "+n)),g?v.className.baseVal=t:v.className=t)}function u(e,t){if("object"==typeof e)for(var n in e)i(e,n)&&u(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),o=l[r[0]];if(2===r.length&&(o=o[r[1]]),void 0!==o)return l;t="function"==typeof t?t():t,1===r.length?l[r[0]]=t:(!l[r[0]]||l[r[0]]instanceof Boolean||(l[r[0]]=new Boolean(l[r[0]])),l[r[0]][r[1]]=t),a([(t&&!1!==t?"":"no-")+r.join("-")]),l._trigger(e,t)}return l}i=h(n={}.hasOwnProperty,"undefined")||h(n.call,"undefined")?function(e,t){return t in e&&h(e.constructor.prototype[t],"undefined")}:function(e,t){return n.call(e,t)},t._l={},t.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),l.hasOwnProperty(e)&&setTimeout(function(){l._trigger(e,l[e])},0)},t._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},l._q.push(function(){t.addTest=u});var r="Moz O ms Webkit",f=t._config.usePrefixes?r.split(" "):[];t._cssomPrefixes=f;var o=function(e){var t,n=L.length,r=d.CSSRule;if(void 0===r)return m;if(!e)return!1;if((t=(e=e.replace(/^@/,"")).replace(/-/g,"_").toUpperCase()+"_RULE")in r)return"@"+e;for(var o=0;o<n;o++){var i=L[o];if(i.toUpperCase()+"_"+t in r)return"@-"+i.toLowerCase()+"-"+e}return!1};t.atRule=o;var A=t._config.usePrefixes?r.toLowerCase().split(" "):[];function y(){return"function"!=typeof p.createElement?p.createElement(arguments[0]):g?p.createElementNS.call(p,"http://www.w3.org/2000/svg",arguments[0]):p.createElement.apply(p,arguments)}t._domPrefixes=A;var C,b=(C=!("onblur"in v),function(e,t){var n;return!!e&&(t&&"string"!=typeof t||(t=y(t||"div")),!(n=(e="on"+e)in t)&&C&&(t.setAttribute||(t=y("div")),t.setAttribute(e,""),n="function"==typeof t[e],t[e]!==m&&(t[e]=m),t.removeAttribute(e)),n)});t.hasEvent=b,g||function(e,a){var o,s,t=e.html5||{},i=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,l=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,n="_html5shiv",r=0,c={};function f(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function d(){var e=h.elements;return"string"==typeof e?e.split(" "):e}function p(e){var t=c[e[n]];return t||(t={},r++,e[n]=r,c[r]=t),t}function u(e,t,n){return t||(t=a),s?t.createElement(e):(n||(n=p(t)),!(r=n.cache[e]?n.cache[e].cloneNode():l.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren||i.test(e)||r.tagUrn?r:n.frag.appendChild(r));var r}function m(e){e||(e=a);var t,n,r=p(e);return!h.shivCSS||o||r.hasCSS||(r.hasCSS=!!f(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),s||(t=e,(n=r).cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return h.shivMethods?u(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(h,n.frag)),e}!function(){try{var e=a.createElement("a");e.innerHTML="<xyz></xyz>",o="hidden"in e,s=1==e.childNodes.length||function(){a.createElement("a");var e=a.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){s=o=!0}}();var h={elements:t.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==t.shivCSS,supportsUnknownElements:s,shivMethods:!1!==t.shivMethods,type:"default",shivDocument:m,createElement:u,createDocumentFragment:function(e,t){if(e||(e=a),s)return e.createDocumentFragment();for(var n=(t=t||p(e)).frag.cloneNode(),r=0,o=d(),i=o.length;r<i;r++)n.createElement(o[r]);return n},addElements:function(e,t){var n=h.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),h.elements=n+" "+e,m(t)}};e.html5=h,m(a);var v,g=/^$|\b(?:all|print)\b/,A="html5shiv",y=!(s||(v=a.documentElement,void 0===a.namespaces||void 0===a.parentWindow||void 0===v.applyElement||void 0===v.removeNode||void 0===e.attachEvent));function C(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(A+":"+e.nodeName);r--;)(t=n[r]).specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function b(s){var l,c,e=p(s),t=s.namespaces,n=s.parentWindow;if(!y||s.printShived)return s;function u(){clearTimeout(e._removeSheetTimer),l&&l.removeNode(!0),l=null}return void 0===t[A]&&t.add(A),n.attachEvent("onbeforeprint",function(){u();for(var e,t,n,r=s.styleSheets,o=[],i=r.length,a=Array(i);i--;)a[i]=r[i];for(;n=a.pop();)if(!n.disabled&&g.test(n.media)){try{t=(e=n.imports).length}catch(e){t=0}for(i=0;i<t;i++)a.push(e[i]);try{o.push(n.cssText)}catch(e){}}o=function(e){for(var t,n=e.split("{"),r=n.length,o=RegExp("(^|[\\s,>+~])("+d().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),i="$1"+A+"\\:$2";r--;)(t=n[r]=n[r].split("}"))[t.length-1]=t[t.length-1].replace(o,i),n[r]=t.join("}");return n.join("{")}(o.reverse().join("")),c=function(e){for(var t,n=e.getElementsByTagName("*"),r=n.length,o=RegExp("^(?:"+d().join("|")+")$","i"),i=[];r--;)t=n[r],o.test(t.nodeName)&&i.push(t.applyElement(C(t)));return i}(s),l=f(s,o)}),n.attachEvent("onafterprint",function(){!function(e){for(var t=e.length;t--;)e[t].removeNode()}(c),clearTimeout(e._removeSheetTimer),e._removeSheetTimer=setTimeout(u,500)}),s.printShived=!0,s}h.type+=" print",(h.shivPrint=b)(a),"object"==typeof module&&module.exports&&(module.exports=h)}(void 0!==d?d:this,p);var E=function(){},S=function(){};function w(e,t,n,r){var o,i,a,s,l,c="modernizr",u=y("div"),f=((l=p.body)||((l=y(g?"svg":"body")).fake=!0),l);if(parseInt(n,10))for(;n--;)(a=y("div")).id=r?r[n]:c+(n+1),u.appendChild(a);return(o=y("style")).type="text/css",o.id="s"+c,(f.fake?f:u).appendChild(o),f.appendChild(u),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(p.createTextNode(e)),u.id=c,f.fake&&(f.style.background="",f.style.overflow="hidden",s=v.style.overflow,v.style.overflow="hidden",v.appendChild(f)),i=t(u,e),f.fake?(f.parentNode.removeChild(f),v.style.overflow=s,v.offsetHeight):u.parentNode.removeChild(u),!!i}function _(e,t,n){var r;if("getComputedStyle"in d){r=getComputedStyle.call(d,e,t);var o=d.console;if(null!==r)n&&(r=r.getPropertyValue(n));else if(o)o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else r=!t&&e.currentStyle&&e.currentStyle[n];return r}d.console&&(E=function(){var e=console.error?"error":"log";d.console[e].apply(d.console,Array.prototype.slice.call(arguments))},S=function(){var e=console.warn?"warn":"log";d.console[e].apply(d.console,Array.prototype.slice.call(arguments))}),t.load=function(){"yepnope"in d?(S("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. yepnope appears to be available on the page, so we’ll use it to handle this call to Modernizr.load, but please update your code to use yepnope directly.\n See http://github.com/Modernizr/Modernizr/issues/1182 for more information."),d.yepnope.apply(d,[].slice.call(arguments,0))):E("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. Get it from http://yepnopejs.com. See http://github.com/Modernizr/Modernizr/issues/1182 for more information.")};var x,T=(x=d.matchMedia||d.msMatchMedia)?function(e){var t=x(e);return t&&t.matches||!1}:function(e){var t=!1;return w("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"===_(e,null,"position")}),t};t.mq=T;var z={elem:y("modernizr")};l._q.push(function(){delete z.elem});var j={style:z.elem.style};function N(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function M(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function P(e,t,n,r){if(r=!h(r,"undefined")&&r,!h(n,"undefined")){var o=function(e,t){var n=e.length;if("CSS"in d&&"supports"in d.CSS){for(;n--;)if(d.CSS.supports(N(e[n]),t))return!0;return!1}if("CSSSupportsRule"in d){for(var r=[];n--;)r.push("("+N(e[n])+":"+t+")");return w("@supports ("+(r=r.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"===_(e,null,"position")})}return m}(e,n);if(!h(o,"undefined"))return o}for(var i,a,s,l,c,u=["modernizr","tspan","samp"];!j.style&&u.length;)i=!0,j.modElem=y(u.shift()),j.style=j.modElem.style;function f(){i&&(delete j.style,delete j.modElem)}for(s=e.length,a=0;a<s;a++)if(l=e[a],c=j.style[l],~(""+l).indexOf("-")&&(l=M(l)),j.style[l]!==m){if(r||h(n,"undefined"))return f(),"pfx"!==t||l;try{j.style[l]=n}catch(e){}if(j.style[l]!==c)return f(),"pfx"!==t||l}return f(),!1}function k(e,t){return function(){return e.apply(t,arguments)}}function B(e,t,n,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+f.join(i+" ")+i).split(" ");return h(t,"string")||h(t,"undefined")?P(a,t,r,o):function(e,t,n){var r;for(var o in e)if(e[o]in t)return!1===n?e[o]:h(r=t[e[o]],"function")?k(r,n||t):r;return!1}(a=(e+" "+A.join(i+" ")+i).split(" "),t,n)}l._q.unshift(function(){delete j.style}),t.testAllProps=B;var D=t.prefixed=function(e,t,n){return 0===e.indexOf("@")?o(e):(-1!==e.indexOf("-")&&(e=M(e)),t?B(e,t,n):B(e,"pfx"))},L=t._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];t._prefixes=L;t.prefixedCSS=function(e){var t=D(e);return t&&N(t)};t.testAllProps=function(e,t,n){return B(e,m,m,t,n)};t.testProp=function(e,t,n){return P([e],m,t,n)},t.testStyles=w;var O="CSS"in d&&"supports"in d.CSS,F="supportsCSS"in d;l.addTest("supports",O||F),l.addAsyncTest(function(){var e,t,n=y("img"),r="sizes"in n;!r&&"srcset"in n?("data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=function(){u("sizes",2===n.width)},n.onload=t,n.onerror=t,n.setAttribute("sizes","9px"),n.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 8w",n.src=e):u("sizes",r)}),l.addTest("srcset","srcset"in y("img")),l.addTest("serviceworker","serviceWorker"in navigator),l.addTest("touchevents",function(){if("ontouchstart"in d||d.TouchEvent||d.DocumentTouch&&p instanceof DocumentTouch)return!0;var e=["(",L.join("touch-enabled),("),"heartz",")"].join("");return T(e)}),function(){var e,t,n,r,o,i;for(var a in s)if(s.hasOwnProperty(a)){if(e=[],(t=s[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=h(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)1===(i=e[o].split(".")).length?l[i[0]]=r:(l[i[0]]&&(!l[i[0]]||l[i[0]]instanceof Boolean)||(l[i[0]]=new Boolean(l[i[0]])),l[i[0]][i[1]]=r),c.push((r?"":"no-")+i.join("-"))}}(),a(c),delete t.addTest,delete t.addAsyncTest;for(var R=0;R<l._q.length;R++)l._q[R]();e.Modernizr=l}(window,window,document);