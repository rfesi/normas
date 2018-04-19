"use strict";$.fn.each$=function(t){return this.each(function(e,n){t($(n),e)})},$.fn.filter$=function(t){return this.filter(function(e,n){return t($(n),e)})},$.fn.slideToggleByState=function(){if(this.length>0){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];e.length>0?e.shift()?this.slideDown.apply(this,e):this.slideUp.apply(this,e):this.slideToggle()}return this},$.fn.focusToEnd=function(){var t=this.first();if(t.is("select, :checkbox, :radio"))t.focus();else{var e=t.val();t.focus().val("").val(e)}return this},$.fn.focusTo=function(t){return this.each(function(e,n){if(n.createTextRange){var r=n.createTextRange();r.move("character",t),r.select()}else n.selectionStart?(n.focus(),n.setSelectionRange(t,t)):n.focus()})},$.fn.caretPosition=function(){var t=0,e=this[0];if(document.selection){e.focus();var n=document.selection.createRange();n.moveStart("character",-e.value.length),t=n.text.length}else null!=e.selectionStart&&(t=e.selectionStart);return t};var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},i=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(t){return Array.isArray(t)?t:Array.from(t)},l=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function u(e){if(null==e||"object"!==(void 0===e?"undefined":t(e)))return!1;var n=Object.getPrototypeOf(e);if(null===n)return!0;var r=Object.prototype.hasOwnProperty.call(n,"constructor")&&n.constructor;return"function"==typeof r&&r instanceof r}var s=Array.isArray;function c(t){return"function"==typeof t}function g(t,e){return m("filter",t,e)}function f(t,e){return m("find",t,e)}function h(t,e){return Array.prototype.forEach.call(t,e)}function v(t,e){return Object.keys(t).reduce(function(n,r){return n[r]=e(t[r],r),n},{})}function p(t,e){return g(t,function(t){return!y(e,t)})}function y(t,e){return-1!==Array.prototype.indexOf.call(t,e)}function d(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Array.prototype.reduce.call(t,function(t,r){var o=c(e)?e(r):r[e];return n(t,o,r),t},r)}function m(t,e,n){return Array.prototype[t].call(e,function(t){if(c(t))return t;var e=Object.keys(t);return function(n){return function(t,e,n){return void 0===n.find(function(n){return e[n]!==t[n]})}(n,t,e)}}(n))}var b=Object.freeze({isPlainObject:u,isArray:s,isFunction:c,isString:function(t){return"string"==typeof t},compact:function(t){return g(t,function(t){return t})},debounce:function(t,e){var n=void 0;return function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];n&&clearTimeout(n),n=setTimeout(function(){t.apply(void 0,o)},e)}},groupBy:function(t,e){return d(t,e,function(t,e,n){t[e]?t[e].push(n):t[e]=[n]})},countBy:function(t,e){return d(t,e,function(t,e){t[e]?t[e]++:t[e]=1})},groupByInArray:function(t,e){return d(t,e,function(t,e,n){var r=f(t,function(t){return i(t,1)[0]===e});r?r[1].push(n):t.push([e,[n]])},[])},flatten:function t(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.reduce(function(e,r){return s(r)?e.push.apply(e,l(n?t(r,!0):r)):e.push(r),e},[])},intersection:function(t,e){return s(e)||(e=[e]),(s(t)?t:[t]).reduce(function(t,n){return y(e,n)&&t.push(n),t},[])},deepMerge:function t(e,n){return Object.keys(n).reduce(function(r,o){if(n[o])return u(e[o])&&u(n[o])?r[o]=t(e[o],n[o]):r[o]=n[o],r},Object.assign({},e))},filter:g,find:f,findIndex:function(t,e){return m("find",t,e)},map:function(t,e){return Array.prototype.map.call(t,e)},each:h,mapValues:v,without:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return p(t,n)},difference:p,includes:y}),E={memoryData:function(t,e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];if(!(r.length>0))return t[e];this.elementsApply(t,function(t){t[e]=r[0]})},removeMemoryData:function(t,e){delete t[e]},data:function(t,e){var n=this;if(!((arguments.length<=2?0:arguments.length-2)>0))return e?this.dataParse(t.dataset[e]):v(t.dataset,function(t){return n.dataParse(t)});var r=this.dataStringify(arguments.length<=2?void 0:arguments[2]);this.elementsApply(t,function(t){t.dataset[e]=r})},removeData:function(t,e){delete t.dataset[e]},dataStringify:function(t){return s(t)||u(t)?JSON.stringify(t):t},dataParse:function(t){try{return JSON.parse(t)}catch(e){return this.lastDataParseError=e,t}},elementsApply:function(t,e){this.isElement(t)?e(t):h(t,e)},isElement:function(t){return t instanceof Element},contains:function(t,e){return(t===document?document.body:t).contains(e)}},k=Object.assign({},b),O=function(){function t(n){var r=n.el,o=void 0===r?document:r,i=n.instanceName,a=void 0===i?"NormasApp":i;e(this,t),Object.defineProperty(this,"helpers",{enumerable:!0,writable:!0,value:k}),Object.defineProperty(this,"dom",{enumerable:!0,writable:!0,value:E}),this.instanceName=a,this.el=o,this.$el=$(o)}return n(t,[{key:"$",value:function(){var t;return(t=this.$el).find.apply(t,arguments)}},{key:"log",value:function(){}},{key:"error",value:function(){}}],[{key:"readOptions",value:function(t,e,n){Object.keys(n).forEach(function(r){t[r]=e&&r in e?e[r]:n[r]})}}]),t}();Object.defineProperty(O,"version",{enumerable:!0,writable:!0,value:"0.4.0-rc1"}),Object.defineProperty(O,"helpers",{enumerable:!0,writable:!0,value:k}),Object.defineProperty(O,"dom",{enumerable:!0,writable:!0,value:E});var P=function(t){return function(u){function s(t){e(this,s);var n=o(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,t));return n.constructor.readOptions(n.logging,t.logging,{events:!0,eventsDebounced:!0,eventsTable:!1}),n.debugMode&&n.logging.events&&n.logging.eventsDebounced&&(n.eventsLogBuffer=[],n.logEventsDebounced=n.helpers.debounce(n.logEventsDebounced.bind(n),20)),n.log("info",["construct","events"],'🚦 "'+n.instanceName+'" events mixin activated.',"logging.events =",n.logging.events,"logging.eventsDebounced =",n.logging.eventsDebounced,"logging.eventsTable =",n.logging.eventsTable),n}return r(s,t),n(s,[{key:"trigger",value:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];this.$el.trigger(t,n)}},{key:"listenEvents",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.listenEventsOnElement.apply(this,[this.$el].concat(e))}},{key:"listenEventsOnElement",value:function(t){for(var e,n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var i=(e=this.constructor).listeningArguments.apply(e,r);return this.debugMode&&this.logging.events&&this.logEvents(t,i),i.forEach(function(e){var n=e.events,r=e.selector,o=e.handle;t.on(n,r,o)}),i}},{key:"forgetEvents",value:function(t){this.forgetEventsOnElement(this.$el,t)}},{key:"forgetEventsOnElement",value:function(t,e){this.logEventsOutput(t,e,!1),e.forEach(function(e){var n=e.events,r=e.selector,o=e.handle;t.off(n,r,o)})}},{key:"logEvents",value:function(t,e){if(this.logging.eventsDebounced){var n=t[0];e.forEach(function(t){t.element=n}),this.eventsLogBuffer=this.eventsLogBuffer.concat(e),this.logEventsDebounced()}else this.logEventsOutput(t,e,!0)}},{key:"logEventsDebounced",value:function(){var t=this;this.helpers.groupByInArray(this.eventsLogBuffer,"element").forEach(function(e){var n=i(e,2),r=n[0],o=n[1];t.logEventsOutput($(r),o,!0)}),this.eventsLogBuffer=[]}},{key:"logEventsOutput",value:function(t,e,n){if(this.logging.events){var r=t[0]===this.el?this.instanceName:this.constructor.contentName(t),o=e.length,i=this.constructor.logPlur("event%S%",o),u=o>1?this.constructor.logBold(o):[],s=a(u),c=s[0],g=s.slice(1),f=this.constructor.logCycle(n?"listen on":"forget from",n),h=a(f),v=h[0],p=h.slice(1),y=this.constructor.logBold(r),d=a(y),m=d[0],b=d.slice(1);this.log.apply(this,["events","🚦 "+(c?c+" ":"")+i+" "+v+' "'+m+'"'].concat(l(g),l(p),l(b),[t],l(this.logging.eventsTable?[]:[e]))),this.logging.eventsTable&&this.log("table",e.map(function(t){return{selector:t.selector,events:t.events}}))}}}],[{key:"listeningArguments",value:function(t,e,n){var r=this;if(this.helpers.isPlainObject(t)&&(e=t,t=""),this.helpers.isFunction(e)&&(n=e,e=t,t=""),this.helpers.isPlainObject(e))return this.helpers.flatten(Object.keys(e).map(function(n){var o=e[n];return r.helpers.isPlainObject(o)?r.listeningArguments(t?t+" "+n:n,o):r.listeningArguments(t,n,o)}));if(!this.helpers.isFunction(n))return console.error("handle isn't function in listening declaration! (selector: '"+t+"')"),[];if(!e)return console.error("eventRule not defined! (selector: '"+t+"')"),[];var o=e.split(/\s+/),i=o[0];return o[0]=t,i?[{events:i.replace(/\//g," "),selector:o.join(" ").trim(),handle:function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return n.apply(void 0,[$(t.currentTarget),t].concat(r))}}]:(console.error("bad eventName in listening declaration! (selector: '"+t+"')"),[])}}]),s}()}(function(t){var u,s;return s=u=function(u){function s(t){e(this,s);var n=o(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,t));n.constructor.readOptions(n,t,{debugMode:!0}),n.logging={},n.constructor.readOptions(n.logging,t.logging,{construct:!0,constructGrouping:!0,constructPrefix:"🏗️",hideInstancesOf:[]});var r=n.constructor.logColor("construct","green"),i=a(r),u=i[0],c=i.slice(1);return n.log.apply(n,[n.constructor.groupingMethod(n.logging.constructGrouping),"construct"].concat(l(n.constructor.logBold(n.logging.constructPrefix+' "%REPLACE%" '+u,n.instanceName)),l(c),[n])),n}return r(s,t),n(s,[{key:"log",value:function(){var t;if(this.debugMode){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=this.helpers.includes(this.constructor.consoleMethods,n[0])?n.shift():"log";this.helpers.intersection(Object.keys(this.logging),n[0]).length>0&&!this.logging[n.shift()]||(t=this.constructor).log.apply(t,[o].concat(l(this.filterLog(n))))}}},{key:"error",value:function(){for(var t,e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];(t=this.constructor).log.apply(t,["error"].concat(n))}},{key:"filterLog",value:function(t){var e=this;return 0===this.logging.hideInstancesOf.length?t:this.helpers.filter(t,function(t){return!e.helpers.find(e.logging.hideInstancesOf,function(e){return t instanceof e})})}}],[{key:"groupingMethod",value:function(t){return"string"==typeof t?t:t?"group":"log"}},{key:"log",value:function(t){if(console&&console[t]){for(var e,n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];(e=console)[t].apply(e,r)}}},{key:"logPlur",value:function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.replace("%COUNT%",n&&1===e?"":e).replace("%S%",1===e?"":"s")}},{key:"logCycle",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return this.logColor(t+" "+(e?">":"<").repeat(n),e?"green":"red")}},{key:"logColor",value:function(t,e,n){return n||(n=e,e=null),this.logStyle(t,e,{color:n})}},{key:"logBold",value:function(t,e){return this.logStyle(t,e,{"font-weight":"bold"})}},{key:"logStyle",value:function(t,e,n){this.helpers.isPlainObject(e)&&(n=e,e=null),e||(e=t,t=null);var r=Object.entries(n),o=r.map(function(t){return t.join(": ")}).join("; "),a=r.map(function(t){return[i(t,1)[0],"inherit"].join(": ")}).join("; ");return e="%c"+e+"%c",t&&(e=t.replace("%REPLACE%",e)),[e,o,a]}},{key:"contentName",value:function(t){var e=this,n=this.helpers.countBy(t,function(t){var n=t.classList?e.helpers.map(t.classList,function(t){return t}):[];return[t.tagName].concat(n).join(".")});return Object.keys(n).map(function(t){var e=n[t];return(e>1?e+" ":"")+t}).join(" + ")}},{key:"readmeLink",value:function(t){return"Read https://github.com/evrone/normas#"+t}}]),s}(),Object.defineProperty(u,"consoleMethods",{enumerable:!0,writable:!0,value:["log","group","groupEnd","groupCollapsed","info","table","warn"]}),s}(O)),A=function(t){return function(i){function a(t){e(this,a);var n=o(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,t));return Object.defineProperty(n,"checkMutations",{enumerable:!0,writable:!0,value:function(t){if(n.navigationStarted&&"childList"===t.type){var e=n.constructor.filterMutationNodes(t.removedNodes),r=n.constructor.filterMutationNodes(t.addedNodes,!0);e.length>0&&n.sayAboutContentLeave($(e)),r.length>0&&n.sayAboutContentEnter($(r))}}}),n.enablings||(n.enablings={}),n.constructor.readOptions(n.enablings,t.enablings,{mutations:!0}),n.log.apply(n,["info","construct"].concat(l(n.constructor.logColor('🤖 "'+n.instanceName+'" MutationObserver %REPLACE%.',n.enablings.mutations?"enabled":"disabled",n.enablings.mutations?"green":"blue")))),n.enablings.mutations&&(MutationObserver?n.observeMutations():n.log("warn","construct",'🤖 "'+n.instanceName+'" mutation observer NOT SUPPORTED!',n.constructor.readmeLink("-content-broadcasting"))),n}return r(a,t),n(a,[{key:"observeMutations",value:function(){var t=this;this.mutationObserver=new MutationObserver(function(e){return e.forEach(t.checkMutations)}),this.mutationObserver.observe(this.$el[0],{childList:!0,subtree:!0})}}],[{key:"filterMutationNodes",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.filter.call(t,function(t){return!(1!==t.nodeType||t.isPreview||["TITLE","META"].includes(t.tagName)||"turbolinks-progress-bar"===t.className||e&&!t.parentElement||t.parentElement&&"HEAD"===t.parentElement.tagName)})}}]),a}()}(function(t){var i,u;return u=i=function(i){function u(t){e(this,u);var n=o(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,t));return Object.defineProperty(n,"navigationStarted",{enumerable:!0,writable:!0,value:!1}),n.constructor.readOptions(n.logging,t.logging,{navigation:!0,navigationGrouping:!0}),n.bindPageEvents(t),n.log("info","construct",'🗺 "'+n.instanceName+'" navigation mixin activated. logging.navigation =',n.logging.navigation),n}return r(u,t),n(u,[{key:"onStart",value:function(t){this.$el.one(this.constructor.navigationStartedEventName,function(e,n){return t(n)})}},{key:"bindPageEvents",value:function(t){(t.Turbolinks||global.Turbolinks)&&this.log("warn","🗺 You have Turbolinks, but not use integration.",this.constructor.readmeLink("turbolinks-integration")),$(this.pageEnter.bind(this))}},{key:"listenToPage",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t&&this.$el.on(this.constructor.pageEnterEventName,function(e,n){return t(n)}),e&&this.$el.on(this.constructor.pageLeaveEventName,function(t,n){return e(n)})}},{key:"visit",value:function(t){window.location=t}},{key:"refreshPage",value:function(){this.visit(window.location)}},{key:"setHash",value:function(t){location.hash=t}},{key:"back",value:function(){global.history.back()}},{key:"replaceLocation",value:function(t){this.log("warn","🗺 `replaceLocation` works only with Turbolinks.")}},{key:"pushLocation",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;global.history&&global.history.pushState(n,e,t)}},{key:"sayAboutPageLoading",value:function(t){this.log("warn","🗺 `sayAboutPageLoading` works only with Turbolinks.")}},{key:"pageEnter",value:function(){this.navigationStarted||(this.navigationStarted=!0,this.trigger(this.constructor.navigationStartedEventName,t),this.logging.constructGrouping&&this.log("groupEnd","construct"));var t=this.$page();this.logPage("enter",t),this.trigger(this.constructor.pageEnterEventName,t),this.sayAboutContentEnter(t)}},{key:"pageLeave",value:function(){var t=this.$page();this.logPage("leave",t),this.sayAboutContentLeave(t),this.trigger(this.constructor.pageLeaveEventName,t)}},{key:"$page",value:function(){return this.$(this.constructor.pageSelector)}},{key:"logPage",value:function(t,e){var n=this;if(this.debugMode&&this.logging.navigation){var r="enter"===t,o=this.constructor.logCycle(t,r,10),i=a(o),u=i[0],s=i.slice(1);this.logging.navigationGrouping&&this.logPageGroupEnd(),this.log.apply(this,[this.constructor.groupingMethod(this.logging.navigationGrouping),"navigation","🗺 page "+u].concat(l(s),l(r?[window.location.href]:[]),[e])),this.navigationGroup=!0,r&&this.logging.navigationGrouping&&setTimeout(function(){return n.logPageGroupEnd()},25)}}},{key:"logPageGroupEnd",value:function(){this.navigationGroup&&(this.log("groupEnd","navigation"),this.navigationGroup=!1)}}]),u}(),Object.defineProperty(i,"pageEnterEventName",{enumerable:!0,writable:!0,value:"page:enter"}),Object.defineProperty(i,"pageLeaveEventName",{enumerable:!0,writable:!0,value:"page:leave"}),Object.defineProperty(i,"navigationStartedEventName",{enumerable:!0,writable:!0,value:"navigation:started"}),Object.defineProperty(i,"pageSelector",{enumerable:!0,writable:!0,value:"body"}),u}(function(t){var i,u;return u=i=function(i){function u(t){e(this,u);var n=o(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,t));return n.constructor.readOptions(n.logging,t.logging,{elements:!0}),n.log("info","construct",'💎 "'+n.instanceName+'" elements mixin activated.',"logging.elements =",n.logging.elements),n}return r(u,t),n(u,[{key:"listenToElement",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};r=Object.assign({delay:0,silent:!1},r),this.listenToContent(this.makeElementContentEnter(t,e,r),this.makeElementContentLeave(t,n,r))}},{key:"makeElementContentEnter",value:function(t,e,n){var r=this,o=n.delay,i=n.silent;return function(n){var a=r.constructor.contentElements(n,t);0!==a.length&&(o>0?r.dom.memoryData(a,r.constructor.elementEnterTimeoutIdDataName,setTimeout(function(){0!==(n=n.filter(function(t,e){return r.dom.contains(r.el,e)})).length&&0!==(a=r.constructor.contentElements(n,a)).length&&0!==(a=r.filterDelayedElements(a,!0)).length&&r.handleElements(a,t,e,"enter",i)},o)):r.handleElements(a,t,e,"enter",i))}}},{key:"makeElementContentLeave",value:function(t,e,n){var r=this,o=n.delay,i=n.silent;return e?function(n){var a=r.constructor.contentElements(n,t);0!==a.length&&(o>0&&0===(a=r.filterDelayedElements(a,!1)).length||r.handleElements(a,t,e,"leave",i))}:null}},{key:"filterDelayedElements",value:function(t,e){var n=this;return t.filter(function(t,r){var o=n.dom.memoryData(r,n.constructor.elementEnterTimeoutIdDataName);return o&&n.dom.removeMemoryData(r,n.constructor.elementEnterTimeoutIdDataName),!!o===e})}},{key:"handleElements",value:function(t,e,n,r,o){var i=this,a=[],l=this.helpers.filter(t,function(t){return!!i.canCycleElement(t,e,r)&&(i.constructor.preventEventForElement(t)?(a.push(t),!1):(n($(t)),!0))});o||this.logElements(l,a,e,r)}},{key:"canCycleElement",value:function(t,e,n){var r=this.dom.memoryData(t,"_normasElements"),o=r?r.indexOf(e):-1;return"enter"===n?-1!==o?(this.log.apply(this,["warn","elements"].concat(l(this.constructor.logBold('💎 element "%REPLACE%" already entered.',e)),[t])),!1):(r?r.push(e):this.dom.memoryData(t,"_normasElements",[e]),!0):-1!==o?(r.splice(o,1),!0):(this.log.apply(this,["warn","elements"].concat(l(this.constructor.logBold('💎 element "%REPLACE%" try leave, but did not enter.',e)),[t])),!1)}},{key:"logElements",value:function(t,e,n,r){var o=this.constructor.logBold(n),i=a(o),l=i[0],u=i.slice(1);if(t.length>0){var s=this.constructor.logCycle(r,"enter"===r,3),c=a(s),g=c[0],f=c.slice(1);this._logElements(t,"",g,l,f,u)}if(e.length>0){var h=this.constructor.logColor("prevent ","blue"),v=a(h),p=v[0],y=v.slice(1);this._logElements(e,p,r,l,y,u)}}},{key:"_logElements",value:function(t,e,n,r,o,i){var u=t.length,s=this.constructor.logPlur("element%S%",u),c=u>1?this.constructor.logBold(u):[],g=a(c),f=g[0],h=g.slice(1),v=[o];v[e?"push":"unshift"](h),this.log.apply(this,["elements","💎 "+e+(f?f+" ":"")+s+" "+n+' "'+r+'"'].concat(l(this.helpers.flatten(v)),l(i),[t]))}}],[{key:"contentElements",value:function(t,e){return t.filter(e).add(t.find(e))}},{key:"preventEventForElement",value:function(t){return $(t).closest("."+this.preventContentEventsClassName).length>0}}]),u}(),Object.defineProperty(i,"preventContentEventsClassName",{enumerable:!0,writable:!0,value:"js-prevent-normas"}),Object.defineProperty(i,"elementEnterTimeoutIdDataName",{enumerable:!0,writable:!0,value:"elementEnterTimeoutId"}),u}(function(t){var i,u;return u=i=function(i){function u(t){e(this,u);var n=o(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,t));return n.constructor.readOptions(n.logging,t.logging,{content:!1,contentGrouping:!0}),n.log("info","construct",'📰 "'+n.instanceName+'" content mixin activated.',"logging.content =",n.logging.content),n}return r(u,t),n(u,[{key:"listenToContent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t&&this.$el.on(this.constructor.contentEnterEventName,function(e,n){return t(n,e)}),e&&this.$el.on(this.constructor.contentLeaveEventName,function(t,n){return e(n,t)})}},{key:"sayAboutContentEnter",value:function(t){return this.sayAboutContentMove("enter",this.constructor.contentEnterEventName,t)}},{key:"sayAboutContentLeave",value:function(t){return this.sayAboutContentMove("leave",this.constructor.contentLeaveEventName,t)}},{key:"sayAboutContentMove",value:function(t,e,n){var r="enter"===t;return(n=this.constructor.filterContent(n,r?"normasEntered":"normasLeft",r)).length>0&&(this.logContent(t,n),this.trigger(e,n),this.logging.contentGrouping&&this.log("groupEnd","content")),n}},{key:"replaceContentInner",value:function(t,e){this.sayAboutContentLeave(t),t.html(e),this.sayAboutContentEnter(t)}},{key:"replaceContent",value:function(t,e){t.length>1&&(t=t.first()),this.sayAboutContentLeave(t),t.replaceWith(e),this.sayAboutContentEnter(e)}},{key:"logContent",value:function(t,e){var n=this.constructor.logCycle(t,"enter"===t,5),r=a(n),o=r[0],i=r.slice(1),u=this.constructor.logBold(this.constructor.contentName(e)),s=a(u),c=s[0],g=s.slice(1);this.log.apply(this,[this.constructor.groupingMethod(this.logging.contentGrouping),"content","📰 content "+o+' "'+c+'"'].concat(l(i),l(g),[e]))}}],[{key:"filterContent",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t.filter(function(t,r){return!(r[e]||n&&!r.parentElement||(r[e]=!0,0))})}}]),u}(),Object.defineProperty(i,"contentEnterEventName",{enumerable:!0,writable:!0,value:"content:enter"}),Object.defineProperty(i,"contentLeaveEventName",{enumerable:!0,writable:!0,value:"content:leave"}),u}(P))));A.NormasCore=P,module.exports=A;
//# sourceMappingURL=normas.js.map
