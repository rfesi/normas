"use strict";$.fn.each$=function(t){return this.each(function(e,n){t($(n),e)})},$.fn.filter$=function(t){return this.filter(function(e,n){return t($(n),e)})},$.fn.slideToggleByState=function(){if(this.length>0){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];e.length>0?e.shift()?this.slideDown.apply(this,e):this.slideUp.apply(this,e):this.slideToggle()}return this},$.fn.focusToEnd=function(){var t=this.first();if(t.is("select, :checkbox, :radio"))t.focus();else{var e=t.val();t.focus().val("").val(e)}return this},$.fn.focusTo=function(t){return this.each(function(e,n){if(n.createTextRange){var o=n.createTextRange();o.move("character",t),o.select()}else n.selectionStart?(n.focus(),n.setSelectionRange(t,t)):n.focus()})},$.fn.caretPosition=function(){var t=0,e=this[0];if(document.selection){e.focus();var n=document.selection.createRange();n.moveStart("character",-e.value.length),t=n.text.length}else null!=e.selectionStart&&(t=e.selectionStart);return t};var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},n=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),o=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},i=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,l=t[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&l.return&&l.return()}finally{if(r)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(t){return Array.isArray(t)?t:Array.from(t)},l=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function u(e){if(null==e||"object"!==(void 0===e?"undefined":t(e)))return!1;var n=Object.getPrototypeOf(e);if(null===n)return!0;var o=Object.prototype.hasOwnProperty.call(n,"constructor")&&n.constructor;return"function"==typeof o&&o instanceof o}var s=Array.isArray;function c(t){return"function"==typeof t}function g(t,e){return p("filter",t,e)}function f(t,e){return p("find",t,e)}function h(t,e){return-1!==Array.prototype.indexOf.call(t,e)}function v(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Array.prototype.reduce.call(t,function(t,o){var r=c(e)?e(o):o[e];return n(t,r,o),t},o)}function p(t,e,n){return Array.prototype[t].call(e,function(t){if(c(t))return t;var e=Object.keys(t);return function(n){return function(t,e,n){return void 0===n.find(function(n){return e[n]!==t[n]})}(n,t,e)}}(n))}var y=Object.freeze({isPlainObject:u,isArray:s,isFunction:c,isString:function(t){return"string"==typeof t},compact:function(t){return g(t,function(t){return t})},debounce:function(t,e){var n=void 0;return function(){for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];n&&clearTimeout(n),n=setTimeout(function(){t.apply(void 0,r)},e)}},groupBy:function(t,e){return v(t,e,function(t,e,n){t[e]?t[e].push(n):t[e]=[n]})},countBy:function(t,e){return v(t,e,function(t,e){t[e]?t[e]++:t[e]=1})},groupByInArray:function(t,e){return v(t,e,function(t,e,n){var o=f(t,function(t){return i(t,1)[0]===e});o?o[1].push(n):t.push([e,[n]])},[])},flatten:function t(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.reduce(function(e,o){return s(o)?e.push.apply(e,l(n?t(o,!0):o)):e.push(o),e},[])},intersection:function(t,e){return s(e)||(e=[e]),(s(t)?t:[t]).reduce(function(t,n){return h(e,n)&&t.push(n),t},[])},deepMerge:function t(e,n){return Object.keys(n).reduce(function(o,r){if(n[r])return u(e[r])&&u(n[r])?o[r]=t(e[r],n[r]):o[r]=n[r],o},Object.assign({},e))},filter:g,find:f,map:function(t,e){return Array.prototype.map.call(t,e)},mapValues:function(t,e){return Object.keys(t).reduce(function(n,o){return n[o]=e(t[o]),n},{})},without:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return g(t,function(t){return!h(n,t)})},includes:h}),d=function(){function t(n){var o=n.$el,r=void 0===o?$(document):o,i=n.instanceName,a=void 0===i?"NormasApp":i;e(this,t),Object.defineProperty(this,"helpers",{enumerable:!0,writable:!0,value:y}),this.instanceName=a,this.$el=r,this.el=r[0]}return n(t,[{key:"$",value:function(){var t;return(t=this.$el).find.apply(t,arguments)}},{key:"log",value:function(){}},{key:"error",value:function(){}}],[{key:"readOptions",value:function(t,e,n){Object.keys(n).forEach(function(o){t[o]=e&&o in e?e[o]:n[o]})}}]),t}();Object.defineProperty(d,"version",{enumerable:!0,writable:!0,value:"0.4.0-rc1"}),Object.defineProperty(d,"helpers",{enumerable:!0,writable:!0,value:y});var m=function(t){return function(u){function s(t){e(this,s);var n=r(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,t));return n.constructor.readOptions(n.logging,t.logging,{events:!0,eventsDebounced:!0,eventsTable:!1}),n.debugMode&&n.logging.events&&n.logging.eventsDebounced&&(n.eventsLogBuffer=[],n.logEventsDebounced=n.helpers.debounce(n.logEventsDebounced.bind(n),20)),n.log("info",["construct","events"],'🚦 "'+n.instanceName+'" events mixin activated.',"logging.events =",n.logging.events,"logging.eventsDebounced =",n.logging.eventsDebounced,"logging.eventsTable =",n.logging.eventsTable),n}return o(s,t),n(s,[{key:"trigger",value:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];this.$el.trigger(t,n)}},{key:"listenEvents",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.listenEventsOnElement.apply(this,[this.$el].concat(e))}},{key:"listenEventsOnElement",value:function(t){for(var e,n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];var i=(e=this.constructor).listeningArguments.apply(e,o);return this.debugMode&&this.logging.events&&this.logEvents(t,i),i.forEach(function(e){var n=e.events,o=e.selector,r=e.handle;t.on(n,o,r)}),i}},{key:"forgetEvents",value:function(t){this.forgetEventsOnElement(this.$el,t)}},{key:"forgetEventsOnElement",value:function(t,e){this.logEventsOutput(t,e,!1),e.forEach(function(e){var n=e.events,o=e.selector,r=e.handle;t.off(n,o,r)})}},{key:"logEvents",value:function(t,e){if(this.logging.eventsDebounced){var n=t[0];e.forEach(function(t){t.element=n}),this.eventsLogBuffer=this.eventsLogBuffer.concat(e),this.logEventsDebounced()}else this.logEventsOutput(t,e,!0)}},{key:"logEventsDebounced",value:function(){var t=this;this.helpers.groupByInArray(this.eventsLogBuffer,"element").forEach(function(e){var n=i(e,2),o=n[0],r=n[1];t.logEventsOutput($(o),r,!0)}),this.eventsLogBuffer=[]}},{key:"logEventsOutput",value:function(t,e,n){if(this.logging.events){var o=t[0]===this.el?this.instanceName:this.constructor.contentName(t),r=e.length,i=this.constructor.logPlur("event%S%",r),u=r>1?this.constructor.logBold(r):[],s=a(u),c=s[0],g=s.slice(1),f=this.constructor.logCycle(n?"listen on":"forget from",n),h=a(f),v=h[0],p=h.slice(1),y=this.constructor.logBold(o),d=a(y),m=d[0],b=d.slice(1);this.log.apply(this,["events","🚦 "+(c?c+" ":"")+i+" "+v+' "'+m+'"'].concat(l(g),l(p),l(b),[t],l(this.logging.eventsTable?[]:[e]))),this.logging.eventsTable&&this.log("table",e.map(function(t){return{selector:t.selector,events:t.events}}))}}}],[{key:"listeningArguments",value:function(t,e,n){var o=this;if(this.helpers.isPlainObject(t)&&(e=t,t=""),this.helpers.isFunction(e)&&(n=e,e=t,t=""),this.helpers.isPlainObject(e))return this.helpers.flatten(Object.keys(e).map(function(n){var r=e[n];return o.helpers.isPlainObject(r)?o.listeningArguments(t?t+" "+n:n,r):o.listeningArguments(t,n,r)}));if(!this.helpers.isFunction(n))return console.error("handle isn't function in listening declaration! (selector: '"+t+"')"),[];if(!e)return console.error("eventRule not defined! (selector: '"+t+"')"),[];var r=e.split(/\s+/),i=r[0];return r[0]=t,i?[{events:i.replace(/\//g," "),selector:r.join(" ").trim(),handle:function(t){for(var e=arguments.length,o=Array(e>1?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];return n.apply(void 0,[$(t.currentTarget),t].concat(o))}}]:(console.error("bad eventName in listening declaration! (selector: '"+t+"')"),[])}}]),s}()}(function(t){var u,s;return s=u=function(u){function s(t){e(this,s);var n=r(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,t));n.constructor.readOptions(n,t,{debugMode:!0}),n.logging={},n.constructor.readOptions(n.logging,t.logging,{construct:!0,constructGrouping:!0,constructPrefix:"🏗️",hideInstancesOf:[]});var o=n.constructor.logColor("construct","green"),i=a(o),u=i[0],c=i.slice(1);return n.log.apply(n,[n.constructor.groupingMethod(n.logging.constructGrouping),"construct"].concat(l(n.constructor.logBold(n.logging.constructPrefix+' "%REPLACE%" '+u,n.instanceName)),l(c),[n])),n}return o(s,t),n(s,[{key:"log",value:function(){var t;if(this.debugMode){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];var r=this.helpers.includes(this.constructor.consoleMethods,n[0])?n.shift():"log";this.helpers.intersection(Object.keys(this.logging),n[0]).length>0&&!this.logging[n.shift()]||(t=this.constructor).log.apply(t,[r].concat(l(this.filterLog(n))))}}},{key:"error",value:function(){for(var t,e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];(t=this.constructor).log.apply(t,["error"].concat(n))}},{key:"filterLog",value:function(t){var e=this;return 0===this.logging.hideInstancesOf.length?t:this.helpers.filter(t,function(t){return!e.helpers.find(e.logging.hideInstancesOf,function(e){return t instanceof e})})}}],[{key:"groupingMethod",value:function(t){return"string"==typeof t?t:t?"group":"log"}},{key:"log",value:function(t){if(console&&console[t]){for(var e,n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];(e=console)[t].apply(e,o)}}},{key:"logPlur",value:function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.replace("%COUNT%",n&&1===e?"":e).replace("%S%",1===e?"":"s")}},{key:"logCycle",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return this.logColor(t+" "+(e?">":"<").repeat(n),e?"green":"red")}},{key:"logColor",value:function(t,e,n){return n||(n=e,e=null),this.logStyle(t,e,{color:n})}},{key:"logBold",value:function(t,e){return this.logStyle(t,e,{"font-weight":"bold"})}},{key:"logStyle",value:function(t,e,n){this.helpers.isPlainObject(e)&&(n=e,e=null),e||(e=t,t=null);var o=Object.entries(n),r=o.map(function(t){return t.join(": ")}).join("; "),a=o.map(function(t){return[i(t,1)[0],"inherit"].join(": ")}).join("; ");return e="%c"+e+"%c",t&&(e=t.replace("%REPLACE%",e)),[e,r,a]}},{key:"contentName",value:function(t){var e=this.helpers.countBy(t,function(t){var e=t.classList?Array.prototype.map.call(t.classList,function(t){return t}):[];return[t.tagName].concat(e).join(".")});return Object.keys(e).map(function(t){var n=e[t];return(n>1?n+" ":"")+t}).join(" + ")}},{key:"readmeLink",value:function(t){return"Read https://github.com/evrone/normas#"+t}}]),s}(),Object.defineProperty(u,"consoleMethods",{enumerable:!0,writable:!0,value:["log","group","groupEnd","groupCollapsed","info","table","warn"]}),s}(d)),b=function(t){return function(i){function a(t){e(this,a);var n=r(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,t));return Object.defineProperty(n,"checkMutations",{enumerable:!0,writable:!0,value:function(t){if(n.navigationStarted&&"childList"===t.type){var e=n.constructor.filterMutationNodes(t.removedNodes),o=n.constructor.filterMutationNodes(t.addedNodes,!0);e.length>0&&n.sayAboutContentLeave($(e)),o.length>0&&n.sayAboutContentEnter($(o))}}}),n.enablings||(n.enablings={}),n.constructor.readOptions(n.enablings,t.enablings,{mutations:!0}),n.log.apply(n,["info","construct"].concat(l(n.constructor.logColor('🤖 "'+n.instanceName+'" MutationObserver %REPLACE%.',n.enablings.mutations?"enabled":"disabled",n.enablings.mutations?"green":"blue")))),n.enablings.mutations&&(MutationObserver?n.observeMutations():n.log("warn","construct",'🤖 "'+n.instanceName+'" mutation observer NOT SUPPORTED!',n.constructor.readmeLink("-content-broadcasting"))),n}return o(a,t),n(a,[{key:"observeMutations",value:function(){var t=this;this.mutationObserver=new MutationObserver(function(e){return e.forEach(t.checkMutations)}),this.mutationObserver.observe(this.$el[0],{childList:!0,subtree:!0})}}],[{key:"filterMutationNodes",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.filter.call(t,function(t){return!(1!==t.nodeType||t.isPreview||["TITLE","META"].includes(t.tagName)||"turbolinks-progress-bar"===t.className||e&&!t.parentElement||t.parentElement&&"HEAD"===t.parentElement.tagName)})}}]),a}()}(function(t){var i,u;return u=i=function(i){function u(t){e(this,u);var n=r(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,t));return Object.defineProperty(n,"navigationStarted",{enumerable:!0,writable:!0,value:!1}),n.constructor.readOptions(n.logging,t.logging,{navigation:!0,navigationGrouping:!0}),n.bindPageEvents(t),n.log("info","construct",'🗺 "'+n.instanceName+'" navigation mixin activated. logging.navigation =',n.logging.navigation),n}return o(u,t),n(u,[{key:"bindPageEvents",value:function(t){(t.Turbolinks||global.Turbolinks)&&this.log("warn","🗺 You have Turbolinks, but not use integration.",this.constructor.readmeLink("turbolinks-integration")),$(this.pageEnter.bind(this))}},{key:"listenToPage",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t&&this.$el.on(this.constructor.pageEnterEventName,function(e,n){return t(n)}),e&&this.$el.on(this.constructor.pageLeaveEventName,function(t,n){return e(n)})}},{key:"visit",value:function(t){window.location=t}},{key:"refreshPage",value:function(){this.visit(window.location)}},{key:"setHash",value:function(t){location.hash=t}},{key:"back",value:function(){global.history.back()}},{key:"replaceLocation",value:function(t){this.log("warn","🗺 `replaceLocation` works only with Turbolinks.")}},{key:"pushLocation",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;global.history&&global.history.pushState(n,e,t)}},{key:"sayAboutPageLoading",value:function(t){this.log("warn","🗺 `sayAboutPageLoading` works only with Turbolinks.")}},{key:"pageEnter",value:function(){this.navigationStarted||(this.navigationStarted=!0,this.logging.constructGrouping&&this.log("groupEnd","construct"));var t=this.$page();this.logPage("enter",t),this.trigger(this.constructor.pageEnterEventName,t),this.sayAboutContentEnter(t)}},{key:"pageLeave",value:function(){var t=this.$page();this.logPage("leave",t),this.sayAboutContentLeave(t),this.trigger(this.constructor.pageLeaveEventName,t)}},{key:"$page",value:function(){return this.$(this.constructor.pageSelector)}},{key:"logPage",value:function(t,e){var n=this;if(this.debugMode&&this.logging.navigation){var o="enter"===t,r=this.constructor.logCycle(t,o,10),i=a(r),u=i[0],s=i.slice(1);this.logging.navigationGrouping&&this.logPageGroupEnd(),this.log.apply(this,[this.constructor.groupingMethod(this.logging.navigationGrouping),"navigation","🗺 page "+u].concat(l(s),l(o?[window.location.href]:[]),[e])),this.navigationGroup=!0,o&&this.logging.navigationGrouping&&setTimeout(function(){return n.logPageGroupEnd()},25)}}},{key:"logPageGroupEnd",value:function(){this.navigationGroup&&(this.log("groupEnd","navigation"),this.navigationGroup=!1)}}]),u}(),Object.defineProperty(i,"pageEnterEventName",{enumerable:!0,writable:!0,value:"page:enter"}),Object.defineProperty(i,"pageLeaveEventName",{enumerable:!0,writable:!0,value:"page:leave"}),Object.defineProperty(i,"pageSelector",{enumerable:!0,writable:!0,value:"body"}),u}(function(t){var i,u;return u=i=function(i){function u(t){e(this,u);var n=r(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,t));return n.constructor.readOptions(n.logging,t.logging,{elements:!0}),n.log("info","construct",'💎 "'+n.instanceName+'" elements mixin activated.',"logging.elements =",n.logging.elements),n}return o(u,t),n(u,[{key:"listenToElement",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};o=Object.assign({delay:0,silent:!1},o),this.listenToContent(this.makeElementContentEnter(t,e,o),this.makeElementContentLeave(t,n,o))}},{key:"makeElementContentEnter",value:function(t,e,n){var o=this,r=n.delay,i=n.silent;return function(n){var a=o.constructor.contentElements(n,t);0!==a.length&&(r>0?a.data(o.constructor.elementEnterTimeoutIdDataName,setTimeout(function(){if(0!==(n=n.filter(function(t){return t.parentElement})).length){var r=o.constructor.contentElements(n,a);r.removeData(o.constructor.elementEnterTimeoutIdDataName),o.handleElements(r,t,e,"enter",i)}},r)):o.handleElements(a,t,e,"enter",i))}}},{key:"makeElementContentLeave",value:function(t,e,n){var o=this,r=n.delay,i=n.silent;return e?function(n){var a=o.constructor.contentElements(n,t);0!==a.length&&(r>0&&(a=a.filter$(function(t){return!t.data(o.elementEnterTimeoutIdDataName)})),0!==a.length&&o.handleElements(a,t,e,"leave",i))}:null}},{key:"handleElements",value:function(t,e,n,o,r){var i=this,a=[],l=t.filter$(function(t){return!!i.canCycleElement(t,e,o)&&(i.constructor.preventEventForElement(t)?(a.push(t[0]),!1):(n(t),!0))});r||this.logElements(l,$(a),e,o)}},{key:"canCycleElement",value:function(t,e,n){var o=t.data("normasElements"),r=o?o.indexOf(e):-1;return"enter"===n?-1!==r?(this.log.apply(this,["warn","elements"].concat(l(this.constructor.logBold('💎 element "%REPLACE%" already entered.',e)))),!1):(o?o.push(e):t.data("normasElements",[e]),!0):-1!==r?(o.splice(r,1),!0):(this.log.apply(this,["warn","elements"].concat(l(this.constructor.logBold('💎 element "%REPLACE%" try leave, but did not enter.',e)))),!1)}},{key:"logElements",value:function(t,e,n,o){var r=this.constructor.logBold(n),i=a(r),l=i[0],u=i.slice(1);if(t.length>0){var s=this.constructor.logCycle(o,"enter"===o,3),c=a(s),g=c[0],f=c.slice(1);this._logElements(t,"",g,l,f,u)}if(e.length>0){var h=this.constructor.logColor("prevent ","blue"),v=a(h),p=v[0],y=v.slice(1);this._logElements(e,p,o,l,y,u)}}},{key:"_logElements",value:function(t,e,n,o,r,i){var u=t.length,s=this.constructor.logPlur("element%S%",u),c=u>1?this.constructor.logBold(u):[],g=a(c),f=g[0],h=g.slice(1),v=[r];v[e?"push":"unshift"](h),this.log.apply(this,["elements","💎 "+e+(f?f+" ":"")+s+" "+n+' "'+o+'"'].concat(l(this.helpers.flatten(v)),l(i),[t]))}}],[{key:"contentElements",value:function(t,e){return t.filter(e).add(t.find(e))}},{key:"preventEventForElement",value:function(t){return t.closest("."+this.preventContentEventsClassName).length>0}}]),u}(),Object.defineProperty(i,"preventContentEventsClassName",{enumerable:!0,writable:!0,value:"js-prevent-normas"}),Object.defineProperty(i,"elementEnterTimeoutIdDataName",{enumerable:!0,writable:!0,value:"elementEnterTimeoutId"}),u}(function(t){var i,u;return u=i=function(i){function u(t){e(this,u);var n=r(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,t));return n.constructor.readOptions(n.logging,t.logging,{content:!1,contentGrouping:!0}),n.log("info","construct",'📰 "'+n.instanceName+'" content mixin activated.',"logging.content =",n.logging.content),n}return o(u,t),n(u,[{key:"listenToContent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t&&this.$el.on(this.constructor.contentEnterEventName,function(e,n){return t(n,e)}),e&&this.$el.on(this.constructor.contentLeaveEventName,function(t,n){return e(n,t)})}},{key:"sayAboutContentEnter",value:function(t){return this.sayAboutContentMove("enter",this.constructor.contentEnterEventName,t)}},{key:"sayAboutContentLeave",value:function(t){return this.sayAboutContentMove("leave",this.constructor.contentLeaveEventName,t)}},{key:"sayAboutContentMove",value:function(t,e,n){var o="enter"===t;return(n=this.constructor.filterContent(n,o?"normasEntered":"normasLeft",o)).length>0&&(this.logContent(t,n),this.trigger(e,n),this.logging.contentGrouping&&this.log("groupEnd","content")),n}},{key:"replaceContentInner",value:function(t,e){this.sayAboutContentLeave(t),t.html(e),this.sayAboutContentEnter(t)}},{key:"replaceContent",value:function(t,e){t.length>1&&(t=t.first()),this.sayAboutContentLeave(t),t.replaceWith(e),this.sayAboutContentEnter(e)}},{key:"logContent",value:function(t,e){var n=this.constructor.logCycle(t,"enter"===t,5),o=a(n),r=o[0],i=o.slice(1),u=this.constructor.logBold(this.constructor.contentName(e)),s=a(u),c=s[0],g=s.slice(1);this.log.apply(this,[this.constructor.groupingMethod(this.logging.contentGrouping),"content","📰 content "+r+' "'+c+'"'].concat(l(i),l(g),[e]))}}],[{key:"filterContent",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t.filter(function(t,o){return!(o[e]||n&&!o.parentElement||(o[e]=!0,0))})}}]),u}(),Object.defineProperty(i,"contentEnterEventName",{enumerable:!0,writable:!0,value:"content:enter"}),Object.defineProperty(i,"contentLeaveEventName",{enumerable:!0,writable:!0,value:"content:leave"}),u}(m))));b.NormasCore=m,module.exports=b;
//# sourceMappingURL=normas.js.map
