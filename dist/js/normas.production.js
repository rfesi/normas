"use strict";$.fn.each$=function(e){return this.each(function(t,n){e($(n),t)})},$.fn.filter$=function(e){return this.filter(function(t,n){return e($(n),t)})},$.fn.slideToggleByState=function(){if(this.length>0){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];t.length>0?t.shift()?this.slideDown.apply(this,t):this.slideUp.apply(this,t):this.slideToggle()}return this},$.fn.focusToEnd=function(){var e=this.first();if(e.is("select, :checkbox, :radio"))e.focus();else{var t=e.val();e.focus().val("").val(t)}return this},$.fn.focusTo=function(e){return this.each(function(t,n){if(n.createTextRange){var r=n.createTextRange();r.move("character",e),r.select()}else n.selectionStart?(n.focus(),n.setSelectionRange(e,e)):n.focus()})},$.fn.caretPosition=function(){var e=0,t=this[0];if(document.selection){t.focus();var n=document.selection.createRange();n.moveStart("character",-t.value.length),e=n.text.length}else null!=t.selectionStart&&(e=t.selectionStart);return e};var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},i=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function u(t){if(null==t||"object"!==(void 0===t?"undefined":e(t)))return!1;var n=Object.getPrototypeOf(t);if(null===n)return!0;var r=Object.prototype.hasOwnProperty.call(n,"constructor")&&n.constructor;return"function"==typeof r&&r instanceof r}var l=Array.isArray;function c(e){return"function"==typeof e}function s(e,t){return d("filter",e,t)}function f(e,t){return d("find",e,t)}function v(e,t){return Array.prototype.forEach.call(e,t)}function h(e,t){return Object.keys(e).reduce(function(n,r){return n[r]=t(e[r],r),n},{})}function y(e,t){return s(e,function(e){return!m(t,e)})}function m(e,t){return-1!==Array.prototype.indexOf.call(e,t)}function p(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Array.prototype.reduce.call(e,function(e,r){var o=c(t)?t(r):r[t];return n(e,o,r),e},r)}function d(e,t,n){return Array.prototype[e].call(t,function(e){if(c(e))return e;var t=Object.keys(e);return function(n){return function(e,t,n){return void 0===n.find(function(n){return t[n]!==e[n]})}(n,e,t)}}(n))}var g=Object.freeze({isPlainObject:u,isArray:l,isFunction:c,isString:function(e){return"string"==typeof e},compact:function(e){return s(e,function(e){return e})},debounce:function(e,t){var n=void 0;return function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];n&&clearTimeout(n),n=setTimeout(function(){e.apply(void 0,o)},t)}},groupBy:function(e,t){return p(e,t,function(e,t,n){e[t]?e[t].push(n):e[t]=[n]})},countBy:function(e,t){return p(e,t,function(e,t){e[t]?e[t]++:e[t]=1})},groupByInArray:function(e,t){return p(e,t,function(e,t,n){var r=f(e,function(e){return i(e,1)[0]===t});r?r[1].push(n):e.push([t,[n]])},[])},flatten:function e(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t.reduce(function(t,r){return l(r)?t.push.apply(t,a(n?e(r,!0):r)):t.push(r),t},[])},intersection:function(e,t){return l(t)||(t=[t]),(l(e)?e:[e]).reduce(function(e,n){return m(t,n)&&e.push(n),e},[])},deepMerge:function e(t,n){return Object.keys(n).reduce(function(r,o){if(n[o])return u(t[o])&&u(n[o])?r[o]=e(t[o],n[o]):r[o]=n[o],r},Object.assign({},t))},filter:s,find:f,findIndex:function(e,t){return d("find",e,t)},map:function(e,t){return Array.prototype.map.call(e,t)},each:v,mapValues:h,without:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return y(e,n)},difference:y,includes:m}),b={memoryData:function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];if(!(r.length>0))return e[t];this.elementsApply(e,function(e){e[t]=r[0]})},removeMemoryData:function(e,t){var n=e[t];return delete e[t],n},data:function(e,t){var n=this;if(!((arguments.length<=2?0:arguments.length-2)>0))return t?this.dataParse(e.dataset[t]):h(e.dataset,function(e){return n.dataParse(e)});var r=this.dataStringify(arguments.length<=2?void 0:arguments[2]);this.elementsApply(e,function(e){e.dataset[t]=r})},removeData:function(e,t){var n=e.dataset[t];return delete e.dataset[t],n},dataStringify:function(e){return l(e)||u(e)?JSON.stringify(e):e},dataParse:function(e){try{return JSON.parse(e)}catch(t){return this.lastDataParseError=t,e}},elementsApply:function(e,t){this.isElement(e)?t(e):v(e,t)},isElement:function(e){return e instanceof Element},contains:function(e,t){return(e===document?document.body:e).contains(t)},remove:function(e){e.parentNode.removeChild(e)}},E=Object.assign({},g),k=function(){function e(n){var r=n.el,o=void 0===r?document:r,i=n.instanceName,a=void 0===i?"NormasApp":i;t(this,e),Object.defineProperty(this,"helpers",{enumerable:!0,writable:!0,value:E}),Object.defineProperty(this,"dom",{enumerable:!0,writable:!0,value:b}),this.instanceName=a,this.el=o,this.$el=$(o)}return n(e,[{key:"$",value:function(){var e;return(e=this.$el).find.apply(e,arguments)}},{key:"log",value:function(){}},{key:"error",value:function(){}}],[{key:"readOptions",value:function(e,t,n){Object.keys(n).forEach(function(r){e[r]=t&&r in t?t[r]:n[r]})}}]),e}();Object.defineProperty(k,"version",{enumerable:!0,writable:!0,value:"0.4.0-rc1"}),Object.defineProperty(k,"helpers",{enumerable:!0,writable:!0,value:E}),Object.defineProperty(k,"dom",{enumerable:!0,writable:!0,value:b});var O=function(e){return function(i){function a(e){t(this,a);var n=o(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return n}return r(a,e),n(a,[{key:"trigger",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.$el.trigger(e,n)}},{key:"listenEvents",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.listenEventsOnElement.apply(this,[this.$el].concat(t))}},{key:"listenEventsOnElement",value:function(e){for(var t,n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var i=(t=this.constructor).listeningArguments.apply(t,r);return i.forEach(function(t){var n=t.events,r=t.selector,o=t.handle;e.on(n,r,o)}),i}},{key:"forgetEvents",value:function(e){this.forgetEventsOnElement(this.$el,e)}},{key:"forgetEventsOnElement",value:function(e,t){t.forEach(function(t){var n=t.events,r=t.selector,o=t.handle;e.off(n,r,o)})}},{key:"logEvents",value:function(e,t){}},{key:"logEventsDebounced",value:function(){}},{key:"logEventsOutput",value:function(e,t,n){}}],[{key:"listeningArguments",value:function(e,t,n){var r=this;if(this.helpers.isPlainObject(e)&&(t=e,e=""),this.helpers.isFunction(t)&&(n=t,t=e,e=""),this.helpers.isPlainObject(t))return this.helpers.flatten(Object.keys(t).map(function(n){var o=t[n];return r.helpers.isPlainObject(o)?r.listeningArguments(e?e+" "+n:n,o):r.listeningArguments(e,n,o)}));if(!this.helpers.isFunction(n))return[];if(!t)return[];var o=t.split(/\s+/),i=o[0];return o[0]=e,i?[{events:i.replace(/\//g," "),selector:o.join(" ").trim(),handle:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return n.apply(void 0,[$(e.currentTarget),e].concat(r))}}]:[]}}]),a}()}(k),A=function(e){return function(i){function a(e){t(this,a);var n=o(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return Object.defineProperty(n,"checkMutations",{enumerable:!0,writable:!0,value:function(e){if(n.navigationStarted&&"childList"===e.type){var t=n.constructor.filterMutationNodes(e.removedNodes),r=n.constructor.filterMutationNodes(e.addedNodes,!0);t.length>0&&n.sayAboutContentLeave($(t)),r.length>0&&n.sayAboutContentEnter($(r))}}}),n.enablings||(n.enablings={}),n.constructor.readOptions(n.enablings,e.enablings,{mutations:!0}),n.enablings.mutations&&MutationObserver&&n.observeMutations(),n}return r(a,e),n(a,[{key:"observeMutations",value:function(){var e=this;this.mutationObserver=new MutationObserver(function(t){return t.forEach(e.checkMutations)}),this.mutationObserver.observe(this.$el[0],{childList:!0,subtree:!0})}}],[{key:"filterMutationNodes",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.filter.call(e,function(e){return!(1!==e.nodeType||e.isPreview||["TITLE","META"].includes(e.tagName)||"turbolinks-progress-bar"===e.className||t&&!e.parentElement||e.parentElement&&"HEAD"===e.parentElement.tagName)})}}]),a}()}(function(e){var i,a;return a=i=function(i){function a(e){t(this,a);var n=o(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return Object.defineProperty(n,"navigationStarted",{enumerable:!0,writable:!0,value:!1}),n.bindPageEvents(e),n}return r(a,e),n(a,[{key:"onStart",value:function(e){this.$el.one(this.constructor.navigationStartedEventName,function(t,n){return e(n)})}},{key:"bindPageEvents",value:function(e){$(this.pageEnter.bind(this))}},{key:"listenToPage",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e&&this.$el.on(this.constructor.pageEnterEventName,function(t,n){return e(n)}),t&&this.$el.on(this.constructor.pageLeaveEventName,function(e,n){return t(n)})}},{key:"visit",value:function(e){window.location=e}},{key:"refreshPage",value:function(){this.visit(window.location)}},{key:"setHash",value:function(e){location.hash=e}},{key:"back",value:function(){global.history.back()}},{key:"replaceLocation",value:function(e){}},{key:"pushLocation",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;global.history&&global.history.pushState(n,t,e)}},{key:"sayAboutPageLoading",value:function(e){}},{key:"pageEnter",value:function(){this.navigationStarted||(this.navigationStarted=!0,this.trigger(this.constructor.navigationStartedEventName,e));var e=this.$page();this.trigger(this.constructor.pageEnterEventName,e),this.sayAboutContentEnter(e)}},{key:"pageLeave",value:function(){var e=this.$page();this.sayAboutContentLeave(e),this.trigger(this.constructor.pageLeaveEventName,e)}},{key:"$page",value:function(){return this.$(this.constructor.pageSelector)}},{key:"logPage",value:function(e,t){}},{key:"logPageGroupEnd",value:function(){}}]),a}(),Object.defineProperty(i,"pageEnterEventName",{enumerable:!0,writable:!0,value:"page:enter"}),Object.defineProperty(i,"pageLeaveEventName",{enumerable:!0,writable:!0,value:"page:leave"}),Object.defineProperty(i,"navigationStartedEventName",{enumerable:!0,writable:!0,value:"navigation:started"}),Object.defineProperty(i,"pageSelector",{enumerable:!0,writable:!0,value:"body"}),a}(function(e){var i,a;return a=i=function(i){function a(e){t(this,a);var n=o(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return n}return r(a,e),n(a,[{key:"listenToElement",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};r=Object.assign({delay:0,silent:!1},r),this.listenToContent(this.makeElementContentEnter(e,t,r),this.makeElementContentLeave(e,n,r))}},{key:"makeElementContentEnter",value:function(e,t,n){var r=this,o=n.delay,i=n.silent;return function(n){var a=r.constructor.contentElements(n,e);0!==a.length&&(o>0?r.dom.memoryData(a,r.constructor.elementEnterTimeoutIdDataName,setTimeout(function(){0!==(n=n.filter(function(e,t){return r.dom.contains(r.el,t)})).length&&0!==(a=r.constructor.contentElements(n,a)).length&&0!==(a=r.filterDelayedElements(a,!0)).length&&r.handleElements(a,e,t,"enter",i)},o)):r.handleElements(a,e,t,"enter",i))}}},{key:"makeElementContentLeave",value:function(e,t,n){var r=this,o=n.delay,i=n.silent;return t?function(n){var a=r.constructor.contentElements(n,e);0!==a.length&&(o>0&&0===(a=r.filterDelayedElements(a,!1)).length||r.handleElements(a,e,t,"leave",i))}:null}},{key:"filterDelayedElements",value:function(e,t){var n=this;return e.filter(function(e,r){var o=n.dom.memoryData(r,n.constructor.elementEnterTimeoutIdDataName);return o&&n.dom.removeMemoryData(r,n.constructor.elementEnterTimeoutIdDataName),!!o===t})}},{key:"handleElements",value:function(e,t,n,r,o){var i=this,a=[];this.helpers.filter(e,function(e){return!!i.canCycleElement(e,t,r)&&(i.constructor.preventEventForElement(e)?(a.push(e),!1):(n($(e)),!0))})}},{key:"canCycleElement",value:function(e,t,n){var r=this.dom.memoryData(e,"_normasElements"),o=r?r.indexOf(t):-1;return"enter"===n?-1===o&&(r?r.push(t):this.dom.memoryData(e,"_normasElements",[t]),!0):-1!==o&&(r.splice(o,1),!0)}},{key:"logElements",value:function(e,t,n,r){}},{key:"_logElements",value:function(e,t,n,r,o,i){}}],[{key:"contentElements",value:function(e,t){return e.filter(t).add(e.find(t))}},{key:"preventEventForElement",value:function(e){return $(e).closest("."+this.preventContentEventsClassName).length>0}}]),a}(),Object.defineProperty(i,"preventContentEventsClassName",{enumerable:!0,writable:!0,value:"js-prevent-normas"}),Object.defineProperty(i,"elementEnterTimeoutIdDataName",{enumerable:!0,writable:!0,value:"elementEnterTimeoutId"}),a}(function(e){var i,a;return a=i=function(i){function a(e){t(this,a);var n=o(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return n}return r(a,e),n(a,[{key:"listenToContent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e&&this.$el.on(this.constructor.contentEnterEventName,function(t,n){return e(n,t)}),t&&this.$el.on(this.constructor.contentLeaveEventName,function(e,n){return t(n,e)})}},{key:"sayAboutContentEnter",value:function(e){return this.sayAboutContentMove("enter",this.constructor.contentEnterEventName,e)}},{key:"sayAboutContentLeave",value:function(e){return this.sayAboutContentMove("leave",this.constructor.contentLeaveEventName,e)}},{key:"sayAboutContentMove",value:function(e,t,n){var r="enter"===e;return(n=this.constructor.filterContent(n,r?"normasEntered":"normasLeft",r)).length>0&&this.trigger(t,n),n}},{key:"replaceContentInner",value:function(e,t){this.sayAboutContentLeave(e),e.html(t),this.sayAboutContentEnter(e)}},{key:"replaceContent",value:function(e,t){e.length>1&&(e=e.first()),this.sayAboutContentLeave(e),e.replaceWith(t),this.sayAboutContentEnter(t)}},{key:"logContent",value:function(e,t){}}],[{key:"filterContent",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e.filter(function(e,r){return!(r[t]||n&&!r.parentElement||(r[t]=!0,0))})}}]),a}(),Object.defineProperty(i,"contentEnterEventName",{enumerable:!0,writable:!0,value:"content:enter"}),Object.defineProperty(i,"contentLeaveEventName",{enumerable:!0,writable:!0,value:"content:leave"}),a}(O))));A.NormasCore=O,module.exports=A;
//# sourceMappingURL=normas.production.js.map
