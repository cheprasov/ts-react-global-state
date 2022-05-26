(()=>{var e={851:e=>{(()=>{"use strict";var t={30:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.levelOrderTreeTraversal=void 0,t.levelOrderTreeTraversal=function(e,t,r,n){for(var o=r(n,e),a=t(e);a.length>0;){var i=a.shift();i&&(o=r(o,i),a.push.apply(a,t(i)))}return o}},136:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.levelOrderTreeTraversal=void 0;var n=r(30);Object.defineProperty(t,"levelOrderTreeTraversal",{enumerable:!0,get:function(){return n.levelOrderTreeTraversal}})},607:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Tree=void 0,t.Tree=a(r(136))}},r={},n=function e(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return t[n].call(a.exports,a,a.exports,e),a.exports}(607);e.exports=n})()},192:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},i=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0});var u=a(r(313));t.default=u.default.memo((function(e){var t=e.components,r=e.children;return(0,u.useMemo)((function(){for(var e=i([],t,!0),n=r;e.length>0;){var o=e.pop();n=u.default.createElement(o,null,n)}return u.default.createElement(u.default.Fragment,null,n)}),[r,t])}))},137:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&o(t,e,r);return a(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.withGlobalState=t.useGlobalState=t.createMultiGlobalStates=t.createGlobalState=t.contextByName=t.createStateDefiner=void 0;var c=i(r(313)),l=r(755),s=r(851),f=u(r(192)),p=r(356);t.createStateDefiner=function(e){var t=["var n = {};"];for(var r in e)if(e.hasOwnProperty(r)&&"$$_scopeType"!==r){var n=(0,l.stringify)(r);t.push("n[".concat(n,"] = u(o[").concat(n,"]);"))}return t.push("return n;"),new Function("o","u",t.join("\n"))},t.contextByName=new Map,t.createGlobalState=function(e,r,o){if(void 0===o&&(o={}),t.contextByName.has(e))throw new Error("GlobalState scope '".concat(e,"' already exists"));var a=n({},r),i=Object.entries(o);i.forEach((function(e){var t=e[0];delete a[t]}));var u=c.default.createContext(a);t.contextByName.set(e,u);var l=(0,t.createStateDefiner)(a);return c.default.memo((function(e){var r=e.children,n=l(a,c.useState);return i.forEach((function(e){var r=e[0],o=e[1];n[r]=(0,t.useGlobalState)(o)})),c.default.createElement(u.Provider,{value:n},r)}))};var d=function(e){return"scope"===e.$$_scopeType};t.createMultiGlobalStates=function(e){var r=s.Tree.levelOrderTreeTraversal(e,(function(e){var t,r=[];for(var n in t=d(e)?e.scope:e)t.hasOwnProperty(n)&&(0,p.isScope)(t[n])&&(r.push({$$_scopeType:"scope",name:n,scope:t[n],parent:d(e)?e:null,useScopes:{}}),d(e)&&(e.useScopes[n]=n));return r}),(function(e,t){return"scope"===t.$$_scopeType&&e.push(t),e}),[]).reverse().map((function(e){return(0,t.createGlobalState)(e.name,e.scope,e.useScopes)}));return c.default.memo((function(e){var t=e.children;return c.default.createElement(f.default,{components:r},t)}))},t.useGlobalState=function(e){var r=t.contextByName.get(e);if(!r)throw new Error("GlobalState scope '".concat(e,"' is not exist"));return(0,c.useContext)(r)},t.withGlobalState=function(e,r){return new Function("u","c","C","s","p","\n        var o = {};\n        for (let k in s) {\n            if (!s.hasOwnProperty(k)) {\n                continue;\n            }\n            o[s[k]] = u(k);\n        }\n        var n = Object.assign(o, p);\n        delete n.children;\n        return c(C, n, p.children);\n    ").bind(null,t.useGlobalState,c.createElement,e,n({},r))}},356:function(e,t){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.Scope=t.isScope=void 0,t.isScope=function(e){return!!e&&"object"==typeof e&&!Array.isArray(e)&&"scope"===e.$$_scopeType},t.Scope=function(e){return r(r({},e),{$$_scopeType:"scope"})}},755:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.stringify=void 0,t.stringify=function(e){return JSON.stringify(e)}},313:e=>{"use strict";e.exports=require("react")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}var n={};(()=>{"use strict";var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.isScope=e.Scope=e.withGlobalState=e.useGlobalState=e.createMultiGlobalStates=e.createGlobalState=void 0;var t=r(137);Object.defineProperty(e,"createGlobalState",{enumerable:!0,get:function(){return t.createGlobalState}}),Object.defineProperty(e,"createMultiGlobalStates",{enumerable:!0,get:function(){return t.createMultiGlobalStates}}),Object.defineProperty(e,"useGlobalState",{enumerable:!0,get:function(){return t.useGlobalState}}),Object.defineProperty(e,"withGlobalState",{enumerable:!0,get:function(){return t.withGlobalState}});var o=r(356);Object.defineProperty(e,"Scope",{enumerable:!0,get:function(){return o.Scope}}),Object.defineProperty(e,"isScope",{enumerable:!0,get:function(){return o.isScope}})})();var o=exports;for(var a in n)o[a]=n[a];n.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();