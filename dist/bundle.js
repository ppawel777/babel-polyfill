/*! For license information please see bundle.js.LICENSE.txt */
!function(){var t={964:function(t,e,r){t.exports=function(){"use strict";function t(t){return"function"==typeof t}var e=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},n=0,o=void 0,i=void 0,s=function(t,e){d[n]=t,d[n+1]=e,2===(n+=2)&&(i?i(p):w())};var a="undefined"!=typeof window?window:void 0,u=a||{},c=u.MutationObserver||u.WebKitMutationObserver,f="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),l="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function h(){var t=setTimeout;return function(){return t(p,1)}}var d=new Array(1e3);function p(){for(var t=0;t<n;t+=2)(0,d[t])(d[t+1]),d[t]=void 0,d[t+1]=void 0;n=0}var y,v,b,m,w=void 0;function g(t,e){var r=this,n=new this.constructor(A);void 0===n[E]&&C(n);var o=r._state;if(o){var i=arguments[o-1];s((function(){return U(o,n,i,r._result)}))}else k(r,n,t,e);return n}function _(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(A);return P(e,t),e}w=f?function(){return process.nextTick(p)}:c?(v=0,b=new c(p),m=document.createTextNode(""),b.observe(m,{characterData:!0}),function(){m.data=v=++v%2}):l?((y=new MessageChannel).port1.onmessage=p,function(){return y.port2.postMessage(0)}):void 0===a?function(){try{var t=Function("return this")().require("vertx");return void 0!==(o=t.runOnLoop||t.runOnContext)?function(){o(p)}:h()}catch(t){return h()}}():h();var E=Math.random().toString(36).substring(2);function A(){}var x=void 0,T=1,O=2;function j(e,r,n){r.constructor===e.constructor&&n===g&&r.constructor.resolve===_?function(t,e){e._state===T?L(t,e._result):e._state===O?B(t,e._result):k(e,void 0,(function(e){return P(t,e)}),(function(e){return B(t,e)}))}(e,r):void 0===n?L(e,r):t(n)?function(t,e,r){s((function(t){var n=!1,o=function(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}(r,e,(function(r){n||(n=!0,e!==r?P(t,r):L(t,r))}),(function(e){n||(n=!0,B(t,e))}),t._label);!n&&o&&(n=!0,B(t,o))}),t)}(e,r,n):L(e,r)}function P(t,e){if(t===e)B(t,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(n=e),null===n||"object"!==o&&"function"!==o)L(t,e);else{var r=void 0;try{r=e.then}catch(e){return void B(t,e)}j(t,e,r)}var n,o}function S(t){t._onerror&&t._onerror(t._result),I(t)}function L(t,e){t._state===x&&(t._result=e,t._state=T,0!==t._subscribers.length&&s(I,t))}function B(t,e){t._state===x&&(t._state=O,t._result=e,s(S,t))}function k(t,e,r,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+T]=r,o[i+O]=n,0===i&&t._state&&s(I,t)}function I(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)n=e[s],o=e[s+r],n?U(r,n,o,i):o(i);t._subscribers.length=0}}function U(e,r,n,o){var i=t(n),s=void 0,a=void 0,u=!0;if(i){try{s=n(o)}catch(t){u=!1,a=t}if(r===s)return void B(r,new TypeError("A promises callback cannot return that same promise."))}else s=o;r._state!==x||(i&&u?P(r,s):!1===u?B(r,a):e===T?L(r,s):e===O&&B(r,s))}var R=0;function C(t){t[E]=R++,t._state=void 0,t._result=void 0,t._subscribers=[]}var D=function(){function t(t,r){this._instanceConstructor=t,this.promise=new t(A),this.promise[E]||C(this.promise),e(r)?(this.length=r.length,this._remaining=r.length,this._result=new Array(this.length),0===this.length?L(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),0===this._remaining&&L(this.promise,this._result))):B(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===x&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===_){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(t){s=!0,i=t}if(o===g&&t._state!==x)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(r===F){var a=new r(A);s?B(a,i):j(a,t,o),this._willSettleAt(a,e)}else this._willSettleAt(new r((function(e){return e(t)})),e)}else this._willSettleAt(n(t),e)},t.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===x&&(this._remaining--,t===O?B(n,r):this._result[e]=r),0===this._remaining&&L(n,this._result)},t.prototype._willSettleAt=function(t,e){var r=this;k(t,void 0,(function(t){return r._settledAt(T,e,t)}),(function(t){return r._settledAt(O,e,t)}))},t}();var F=function(){function e(t){this[E]=R++,this._result=this._state=void 0,this._subscribers=[],A!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){P(t,e)}),(function(e){B(t,e)}))}catch(e){B(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var r=this,n=r.constructor;return t(e)?r.then((function(t){return n.resolve(e()).then((function(){return t}))}),(function(t){return n.resolve(e()).then((function(){throw t}))})):r.then(e,e)},e}();return F.prototype.then=g,F.all=function(t){return new D(this,t).promise},F.race=function(t){var r=this;return e(t)?new r((function(e,n){for(var o=t.length,i=0;i<o;i++)r.resolve(t[i]).then(e,n)})):new r((function(t,e){return e(new TypeError("You must pass an array to race."))}))},F.resolve=_,F.reject=function(t){var e=new this(A);return B(e,t),e},F._setScheduler=function(t){i=t},F._setAsap=function(t){s=t},F._asap=s,F.polyfill=function(){var t=void 0;if(void 0!==r.g)t=r.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=F},F.Promise=F,F}()}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,r),i.exports}r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";var t="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==r.g&&r.g||{},e="URLSearchParams"in t,n="Symbol"in t&&"iterator"in Symbol,o="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in t,s="ArrayBuffer"in t;if(s)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(t){return t&&a.indexOf(Object.prototype.toString.call(t))>-1};function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function f(t){return"string"!=typeof t&&(t=String(t)),t}function l(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n&&(e[Symbol.iterator]=function(){return e}),e}function h(t){this.map={},t instanceof h?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){if(2!=t.length)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+t.length);this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function d(t){if(!t._noBody)return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function p(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function y(t){var e=new FileReader,r=p(e);return e.readAsArrayBuffer(t),r}function v(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(t){var r;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:o&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:e&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():s&&o&&(r=t)&&DataView.prototype.isPrototypeOf(r)?(this._bodyArrayBuffer=v(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(t)||u(t))?this._bodyArrayBuffer=v(t):this._bodyText=t=Object.prototype.toString.call(t):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var t=d(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer)return d(this)||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer));if(o)return this.blob().then(y);throw new Error("could not read as ArrayBuffer")},this.text=function(){var t,e,r,n,o,i=d(this);if(i)return i;if(this._bodyBlob)return t=this._bodyBlob,r=p(e=new FileReader),o=(n=/charset=([A-Za-z0-9_-]+)/.exec(t.type))?n[1]:"utf-8",e.readAsText(t,o),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(t,e){t=c(t),e=f(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},h.prototype.delete=function(t){delete this.map[c(t)]},h.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},h.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},h.prototype.set=function(t,e){this.map[c(t)]=f(e)},h.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},h.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),l(t)},h.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),l(t)},h.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),l(t)},n&&(h.prototype[Symbol.iterator]=h.prototype.entries);var m=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function w(e,r){if(!(this instanceof w))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var n,o,i=(r=r||{}).body;if(e instanceof w){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,r.headers||(this.headers=new h(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,i||null==e._bodyInit||(i=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=r.credentials||this.credentials||"same-origin",!r.headers&&this.headers||(this.headers=new h(r.headers)),this.method=(o=(n=r.method||this.method||"GET").toUpperCase(),m.indexOf(o)>-1?o:n),this.mode=r.mode||this.mode||null,this.signal=r.signal||this.signal||function(){if("AbortController"in t)return(new AbortController).signal}(),this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(i),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==r.cache&&"no-cache"!==r.cache)){var s=/([?&])_=[^&]*/;s.test(this.url)?this.url=this.url.replace(s,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}function g(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function _(t,e){if(!(this instanceof _))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new h(e.headers),this.url=e.url||"",this._initBody(t)}w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},b.call(w.prototype),b.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},_.error=function(){var t=new _(null,{status:200,statusText:""});return t.ok=!1,t.status=0,t.type="error",t};var E=[301,302,303,307,308];_.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new _(null,{status:e,headers:{location:t}})};var A=t.DOMException;try{new A}catch(t){(A=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),A.prototype.constructor=A}function x(e,r){return new Promise((function(n,i){var a=new w(e,r);if(a.signal&&a.signal.aborted)return i(new A("Aborted","AbortError"));var u=new XMLHttpRequest;function l(){u.abort()}if(u.onload=function(){var t,e,r={statusText:u.statusText,headers:(t=u.getAllResponseHeaders()||"",e=new h,t.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();try{e.append(n,o)}catch(t){console.warn("Response "+t.message)}}})),e)};0===a.url.indexOf("file://")&&(u.status<200||u.status>599)?r.status=200:r.status=u.status,r.url="responseURL"in u?u.responseURL:r.headers.get("X-Request-URL");var o="response"in u?u.response:u.responseText;setTimeout((function(){n(new _(o,r))}),0)},u.onerror=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},u.ontimeout=function(){setTimeout((function(){i(new TypeError("Network request timed out"))}),0)},u.onabort=function(){setTimeout((function(){i(new A("Aborted","AbortError"))}),0)},u.open(a.method,function(e){try{return""===e&&t.location.href?t.location.href:e}catch(t){return e}}(a.url),!0),"include"===a.credentials?u.withCredentials=!0:"omit"===a.credentials&&(u.withCredentials=!1),"responseType"in u&&(o?u.responseType="blob":s&&(u.responseType="arraybuffer")),r&&"object"==typeof r.headers&&!(r.headers instanceof h||t.Headers&&r.headers instanceof t.Headers)){var d=[];Object.getOwnPropertyNames(r.headers).forEach((function(t){d.push(c(t)),u.setRequestHeader(t,f(r.headers[t]))})),a.headers.forEach((function(t,e){-1===d.indexOf(e)&&u.setRequestHeader(e,t)}))}else a.headers.forEach((function(t,e){u.setRequestHeader(e,t)}));a.signal&&(a.signal.addEventListener("abort",l),u.onreadystatechange=function(){4===u.readyState&&a.signal.removeEventListener("abort",l)}),u.send(void 0===a._bodyInit?null:a._bodyInit)}))}x.polyfill=!0,t.fetch||(t.fetch=x,t.Headers=h,t.Request=w,t.Response=_)}(),function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,s=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",f=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(r){l=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),a=new k(n||[]);return s(i,"_invoke",{value:P(t,r,a)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var p="suspendedStart",y="suspendedYield",v="executing",b="completed",m={};function w(){}function g(){}function _(){}var E={};l(E,u,(function(){return this}));var A=Object.getPrototypeOf,x=A&&A(A(I([])));x&&x!==o&&i.call(x,u)&&(E=x);var T=_.prototype=w.prototype=Object.create(E);function O(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(e,r){function n(o,s,a,u){var c=d(e[o],e,s);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"==t(l)&&i.call(l,"__await")?r.resolve(l.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):r.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}var o;s(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function P(t,e,n){var o=p;return function(i,s){if(o===v)throw Error("Generator is already running");if(o===b){if("throw"===i)throw s;return{value:r,done:!0}}for(n.method=i,n.arg=s;;){var a=n.delegate;if(a){var u=S(a,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=b,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var c=d(t,e,n);if("normal"===c.type){if(o=n.done?b:y,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=b,n.method="throw",n.arg=c.arg)}}}function S(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,S(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=d(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var s=i.arg;return s?s.done?(e[t.resultName]=s.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function B(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function I(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,s=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return s.next=s}}throw new TypeError(t(e)+" is not iterable")}return g.prototype=_,s(T,"constructor",{value:_,configurable:!0}),s(_,"constructor",{value:g,configurable:!0}),g.displayName=l(_,f,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,l(t,f,"GeneratorFunction")),t.prototype=Object.create(T),t},n.awrap=function(t){return{__await:t}},O(j.prototype),l(j.prototype,c,(function(){return this})),n.AsyncIterator=j,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var s=new j(h(t,e,r,o),i);return n.isGeneratorFunction(e)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},O(T),l(T,f,"Generator"),l(T,u,(function(){return this})),l(T,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=I,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(B),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var u=i.call(s,"catchLoc"),c=i.call(s,"finallyLoc");if(u&&c){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),B(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;B(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},n}function n(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=o(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw s}}}}function o(t,e){if(t){if("string"==typeof t)return i(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e,r,n,o,i,s){try{var a=t[i](s),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){s(i,n,o,a,u,"next",t)}function u(t){s(i,n,o,a,u,"throw",t)}a(void 0)}))}}function u(t){return c.apply(this,arguments)}function c(){return(c=a(e().mark((function t(r){var n,o,i,s;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(h,"/automation/scripts/script_result_on_cluster/?task_id=").concat(r),console.log("script_result_on_cluster url",n),o={headers:d},t.next=5,fetch(n,o);case 5:return i=t.sent,t.next=8,i.json();case 8:if(s=t.sent,!i.ok){t.next=13;break}return t.abrupt("return",s);case 13:alert("Произошла ошибка при запросе:\n".concat(i.detail));case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=a(e().mark((function t(r){var n,o,i,s;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("runScript(scriptMeta)"),n="".concat(h,"/automation/scripts/script_start_on_cluster/"),o={method:"POST",headers:d,body:JSON.stringify(r)},t.next=5,fetch(n,o);case 5:return i=t.sent,t.next=8,i.json();case 8:if(s=t.sent,!i.ok){t.next=13;break}return t.abrupt("return",s);case 13:alert("Произошла ошибка при запросе:\n".concat(i.detail));case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}r(964).Promise;var h=window.location.origin;console.log("window.location.origin",h);var d={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(function(){var t="access_token=";if(document.cookie.length>0){var e=document.cookie.indexOf(t);if(-1!=e){e+=13;var r=document.cookie.indexOf(";",e);return-1==r&&(r=document.cookie.length),unescape(document.cookie.substring(e,r))}}}())};window.onload=a(e().mark((function t(){var r,i,s,c,l,h,d,p,y,v,b,m,w;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Run on onload"),r=new URLSearchParams(window.location.search),i=n(r.entries());try{for(i.s();!(s=i.n()).done;)g=s.value,_=2,c=function(t){if(Array.isArray(t))return t}(g)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,s,a=[],u=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{if(!u&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(c)throw o}}return a}}(g,_)||o(g,_)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),l=c[0],h=c[1],"RegionID"==l&&(d=h),"SiteID"==l&&(p=h)}catch(t){i.e(t)}finally{i.f()}if(!d||!p){t.next=20;break}return console.log("start >>"),document.title="Данные о площадке "+d+"-"+p,(y=document.getElementById("header_div"))&&(y.innerHTML=document.title),(v=document.getElementById("tabs"))&&(v.style.display="block"),b={name:"Opview_Show_Contacts_on_site",need_result:!0,exec_timeout:15,params:{RegionID:d,SiteID:p}},console.log(b),t.next=15,f(b);case 15:null!=(m=t.sent)&&m.task_id&&(w=setTimeout(a(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=setInterval(a(e().mark((function t(){var n,o,i,s,a,c,f,l,h;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(m.task_id);case 2:if(!(n=t.sent)||null!=n&&n.ready){if(clearInterval(r),clearTimeout(w),console.log(n),o=document.getElementById("site_info"),n.result){if(i=n.result.site_info,o)if(i.length>0){for(s="<table border='1' bordercolor='black' cellpadding='4' style='border-collapse:collapse'>",s+="<tr><th>Имя площадки</th><th>VIP</th><th>Телефон</th><th>Маршрут</th><th>Место</th></tr>",a=0;a<i.length;a++)s=(s=(s=(s=(s=(s+="<tr>")+"<td>"+i[a].NAME_RUS+"</td>")+"<td>"+i[a].VIP+"</td>")+"<td>"+i[a].PHONE+"</td>")+"<td>"+i[a].ROUTE+"</td>")+"<td>"+i[a].PLACE+"</td>",s+="</tr>";s+="</table>",o.innerHTML=s}else o.innerHTML="Нет данных"}else o&&(o.innerHTML="Что-то пошло не так...");if(c=document.getElementById("contact_info"),n.result){if(f=n.result.contact_info,c)if(f.length>0){for(l="<table border='1' bordercolor='black' cellpadding='4' style='border-collapse:collapse'>",l+="<tr><th>Имя</th><th>Должность</th><th>Телефон</th><th>Тип контакта</th></tr>",h=0;h<f.length;h++)l=(l=(l=(l=(l+="<tr>")+"<td>"+f[h].NAME+"</td>")+"<td>"+f[h].POSITION+"</td>")+"<td>"+f[h].PHONE+"</td>")+"<td>"+f[h].CONTACT_TYPE+"</td>",l+="</tr>";l+="</table>",c.innerHTML=l}else c.innerHTML="Нет данных"}else c&&(c.innerHTML="Что-то пошло не так...")}case 4:case"end":return t.stop()}}),t)}))),1e3);case 1:case"end":return t.stop()}}),t)}))),b.exec_timeout)),console.log("<< end"),t.next=21;break;case 20:y&&(y.innerHTML="Недостаточно параметров. Укажите регион и номер площадки");case 21:case"end":return t.stop()}var g,_}),t)})))}()}();