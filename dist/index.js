/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@cheprasov/data-structures/dist/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@cheprasov/data-structures/dist/index.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("(()=>{\"use strict\";var t={607:function(t,e,r){var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,\"default\",{enumerable:!0,value:e})}:function(t,e){t.default=e}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)\"default\"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&n(e,t,r);return o(e,t),e};Object.defineProperty(e,\"__esModule\",{value:!0}),e.Object=e.Observer=e.Stack=e.Queue=e.LinkedList=e.Tree=void 0,e.Tree=i(r(614)),e.LinkedList=i(r(838)),e.Queue=i(r(650)),e.Stack=i(r(931)),e.Observer=i(r(263)),e.Object=i(r(548))},382:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Class extends value \"+String(e)+\" is not a constructor or null\");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,\"__esModule\",{value:!0});var u=i(r(270)),s=i(r(978)),a=function(t){function e(e){void 0===e&&(e=[]);var r=t.call(this)||this;return r._firstNode=null,r._lastNode=null,r._count=0,e.forEach((function(t){return r.pushEnd(t)})),r}return o(e,t),e.prototype.pushBeg=function(){for(var t=this,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];e.forEach((function(e){var r=new s.default(e);t._firstNode&&t._lastNode?r.setNextNode(t._firstNode):t._lastNode=r,t._firstNode=r,t._count+=1}))},e.prototype.popBeg=function(){if(this._firstNode){var t=this._firstNode;return this._lastNode===t?(this._firstNode=null,this._lastNode=null):this._firstNode=t.getNextNode(),this._count-=1,t.getData()}},e.prototype.pushEnd=function(){for(var t=this,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];e.forEach((function(e){var r=new s.default(e);t._lastNode&&t._firstNode?t._lastNode.setNextNode(r):t._firstNode=r,t._lastNode=r,t._count+=1}))},e.prototype.popEnd=function(){if(this._firstNode&&this._lastNode){if(this._count-=1,this._firstNode===this._lastNode){var t=this._firstNode;return this._firstNode=null,this._lastNode=null,t.getData()}for(var e=this._firstNode;;){var r=e.getNextNode();if(!r||r===this._lastNode)break;e=r}var n=this._lastNode;return e.setNextNode(null),this._lastNode=e,n.getData()}},e.prototype.getSize=function(){return this._count},e.prototype.isEmpty=function(){return!this._firstNode&&!this._lastNode},e.prototype.toArray=function(){for(var t=[],e=this._firstNode;e;)t.push(e.getData()),e=e.getNextNode();return t},e}(u.default);e.default=a},270:(t,e)=>{Object.defineProperty(e,\"__esModule\",{value:!0});e.default=function(){}},978:(t,e)=>{Object.defineProperty(e,\"__esModule\",{value:!0});var r=function(){function t(t,e){void 0===e&&(e=null),this._nextNode=e,this._data=t}return t.prototype.getData=function(){return this._data},t.prototype.setNextNode=function(t){this._nextNode=t},t.prototype.getNextNode=function(){return this._nextNode},t}();e.default=r},838:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,\"__esModule\",{value:!0}),e.LinkedList=void 0;var o=r(382);Object.defineProperty(e,\"LinkedList\",{enumerable:!0,get:function(){return n(o).default}})},887:(t,e)=>{Object.defineProperty(e,\"__esModule\",{value:!0});var r=function(){function t(){}return t.reduce=function(t,e,r){var n=r;for(var o in t)t.hasOwnProperty(o)&&(n=e(n,t[o],o,t));return n},t.map=function(t,e){var r={};for(var n in t)t.hasOwnProperty(n)&&(r[n]=e(t[n],n,t));return r},t.filter=function(t,e){var r={};for(var n in t)t.hasOwnProperty(n)&&e(t[n],n,t)&&(r[n]=t[n]);return r},t.forEach=function(t,e){for(var r in t)t.hasOwnProperty(r)&&e(t[r],r,t)},t.some=function(t,e){for(var r in t)if(t.hasOwnProperty(r)&&e(t[r],r,t))return!0;return!1},t.every=function(t,e){for(var r in t)if(t.hasOwnProperty(r)&&!e(t[r],r,t))return!1;return!0},t.diffKeysByValue=function(t,e,r){void 0===r&&(r=[]);var n=new Set(r),o=[];return this.forEach(t,(function(t,r){n.has(r)||e.hasOwnProperty(r)&&e[r]===t||o.push(r)})),this.forEach(e,(function(e,r){n.has(r)||t.hasOwnProperty(r)||o.push(r)})),o},t}();e.default=r},548:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,\"__esModule\",{value:!0}),e.Helper=void 0;var o=r(887);Object.defineProperty(e,\"Helper\",{enumerable:!0,get:function(){return n(o).default}})},42:(t,e)=>{Object.defineProperty(e,\"__esModule\",{value:!0});var r=function(){function t(){this._listeners=new Set}return t.prototype.subscribe=function(t){var e=this;return this._listeners.add(t),function(){e.unsubscribe(t)}},t.prototype.unsubscribe=function(t){this._listeners.delete(t)},t.prototype.publish=function(t){this._listeners.forEach((function(e){try{e(t)}catch(t){console.error(t)}}))},t}();e.default=r},263:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,\"__esModule\",{value:!0}),e.Observer=void 0;var o=r(42);Object.defineProperty(e,\"Observer\",{enumerable:!0,get:function(){return n(o).default}})},114:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Class extends value \"+String(e)+\" is not a constructor or null\");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,\"__esModule\",{value:!0});var u=i(r(382)),s=function(t){function e(e){void 0===e&&(e=[]);var r=t.call(this)||this;return r._linkedList=new u.default(e),r}return o(e,t),e.prototype.push=function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];(t=this._linkedList).pushEnd.apply(t,e)},e.prototype.pop=function(){return this._linkedList.popBeg()},e.prototype.getSize=function(){return this._linkedList.getSize()},e.prototype.isEmpty=function(){return this._linkedList.isEmpty()},e.prototype.toArray=function(){return this._linkedList.toArray()},e}(i(r(372)).default);e.default=s},372:(t,e)=>{Object.defineProperty(e,\"__esModule\",{value:!0});e.default=function(){}},650:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,\"__esModule\",{value:!0}),e.Queue=void 0;var o=r(114);Object.defineProperty(e,\"Queue\",{enumerable:!0,get:function(){return n(o).default}})},848:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Class extends value \"+String(e)+\" is not a constructor or null\");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,\"__esModule\",{value:!0});var u=i(r(382)),s=function(t){function e(e){void 0===e&&(e=[]);var r=t.call(this)||this;return r._linkedList=new u.default,e.forEach((function(t){return r._linkedList.pushBeg(t)})),r}return o(e,t),e.prototype.push=function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];(t=this._linkedList).pushBeg.apply(t,e)},e.prototype.pop=function(){return this._linkedList.popBeg()},e.prototype.getSize=function(){return this._linkedList.getSize()},e.prototype.isEmpty=function(){return this._linkedList.isEmpty()},e.prototype.toArray=function(){return this._linkedList.toArray().reverse()},e}(i(r(206)).default);e.default=s},293:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Class extends value \"+String(e)+\" is not a constructor or null\");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,\"__esModule\",{value:!0});var s=function(t){function e(e){var r,n=t.call(this)||this;return n._items=[],Array.isArray(e)&&(r=n._items).push.apply(r,e),n}return o(e,t),e.prototype.push=function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];(t=this._items).push.apply(t,e)},e.prototype.pop=function(){return this._items.pop()},e.prototype.getSize=function(){return this._items.length},e.prototype.isEmpty=function(){return 0===this._items.length},e.prototype.toArray=function(){return i([],this._items,!0)},e}(u(r(206)).default);e.default=s},206:(t,e)=>{Object.defineProperty(e,\"__esModule\",{value:!0});e.default=function(){}},931:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,\"__esModule\",{value:!0}),e.StackArrayBased=e.Stack=void 0;var o=r(848);Object.defineProperty(e,\"Stack\",{enumerable:!0,get:function(){return n(o).default}});var i=r(293);Object.defineProperty(e,\"StackArrayBased\",{enumerable:!0,get:function(){return n(i).default}})},614:(t,e,r)=>{Object.defineProperty(e,\"__esModule\",{value:!0}),e.levelOrderTreeTraversal=void 0;var n=r(75);Object.defineProperty(e,\"levelOrderTreeTraversal\",{enumerable:!0,get:function(){return n.levelOrderTreeTraversal}})},75:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,\"__esModule\",{value:!0}),e.levelOrderTreeTraversal=void 0;var o=n(r(114));e.levelOrderTreeTraversal=function(t,e,r,n){for(var i=r(n,t),u=new o.default(e(t));!u.isEmpty();){var s=u.pop();s&&(i=r(i,s),u.push.apply(u,e(s)))}return i}}},e={},r=function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,r),i.exports}(607);module.exports=r})();\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./node_modules/@cheprasov/data-structures/dist/index.js?");

/***/ }),

/***/ "./src/components/ComponentWrapper.tsx":
/*!*********************************************!*\
  !*** ./src/components/ComponentWrapper.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar ComponentWrapper = function (_a) {\n    var components = _a.components, children = _a.children;\n    return (0, react_1.useMemo)(function () {\n        var items = __spreadArray([], components, true);\n        var wrap = children;\n        while (items.length > 0) {\n            var Component = items.pop();\n            wrap = (react_1.default.createElement(Component, null, wrap));\n        }\n        return (react_1.default.createElement(react_1.default.Fragment, null, wrap));\n    }, [children, components]);\n};\nexports[\"default\"] = react_1.default.memo(ComponentWrapper);\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/components/ComponentWrapper.tsx?");

/***/ }),

/***/ "./src/global-scope/GlobalScopeWrapper.ts":
/*!************************************************!*\
  !*** ./src/global-scope/GlobalScopeWrapper.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GlobalScopeWrapper = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n;\nexports.GlobalScopeWrapper = react_1.default.createContext({\n    contextByScopeOrName: new Map(),\n});\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/global-scope/GlobalScopeWrapper.ts?");

/***/ }),

/***/ "./src/global-scope/Scope.ts":
/*!***********************************!*\
  !*** ./src/global-scope/Scope.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Scope = void 0;\nvar data_structures_1 = __webpack_require__(/*! @cheprasov/data-structures */ \"./node_modules/@cheprasov/data-structures/dist/index.js\");\nvar Scope = /** @class */ (function () {\n    function Scope(scope) {\n        this._observer = new data_structures_1.Observer.Observer();\n        this._settersByKey = null;\n        this._childrenScopesByKey = {};\n        this._data = scope;\n        this._childrenScopesByKey = data_structures_1.Object.Helper.filter(this._data, function (value) {\n            if (value instanceof Scope) {\n                return true;\n            }\n            return false;\n        });\n    }\n    Scope.prototype._getData = function () {\n        return this._data;\n    };\n    Scope.prototype._getObserver = function () {\n        return this._observer;\n    };\n    Scope.prototype._setSettersByKey = function (setters) {\n        this._settersByKey = setters;\n    };\n    Scope.prototype.getChildrenScopesByKey = function () {\n        return this._childrenScopesByKey;\n    };\n    Scope.prototype.setValue = function (key, value) {\n        if (!(key in this._data)) {\n            throw new Error(\"Key '\".concat(key, \"' not found in Scope\"));\n        }\n        if (key in this._childrenScopesByKey) {\n            return this._childrenScopesByKey[key].fromObject(value);\n        }\n        if (this._settersByKey) {\n            this._settersByKey[key](value);\n        }\n        else {\n            this._data[key] = value;\n        }\n    };\n    Scope.prototype.getValue = function (key) {\n        if (!(key in this._data)) {\n            throw new Error(\"Key '\".concat(key, \"' not found in Scope\"));\n        }\n        // if (key in this._childrenScopesByKey) {\n        //     return this._childrenScopesByKey[key].fromObject(value);\n        // }\n        return this._data[key];\n    };\n    Scope.prototype.toObject = function () {\n        return {};\n    };\n    Scope.prototype.fromObject = function (obj) {\n        var _this = this;\n        var isUpdated = false;\n        if (typeof obj !== 'object' || !obj) {\n            return false;\n        }\n        for (var key in this._data) {\n            if (!this._data.hasOwnProperty(key)) {\n                continue;\n            }\n            if (!(key in obj)) {\n                continue;\n            }\n            var newValue = obj[key];\n            var currentValue = this._data[key];\n            if (currentValue instanceof Scope) {\n                isUpdated = isUpdated || currentValue.fromObject(newValue);\n            }\n            else if (newValue !== currentValue) {\n                this._data[key] = newValue;\n                isUpdated = true;\n            }\n        }\n        new Promise(function () {\n            _this._observer.publish(__assign({}, _this._data));\n        });\n        return isUpdated;\n    };\n    Scope.prototype.addScopeUpdatesListener = function (listener) {\n        this._observer.subscribe(listener);\n    };\n    Scope.prototype.removeScopeUpdatesListener = function (listener) {\n    };\n    return Scope;\n}());\nexports.Scope = Scope;\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/global-scope/Scope.ts?");

/***/ }),

/***/ "./src/global-scope/ScopeVariablesWrapper.ts":
/*!***************************************************!*\
  !*** ./src/global-scope/ScopeVariablesWrapper.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isScopeWrapperInstance = exports.ScopeVariablesWrapper = void 0;\nexports.ScopeVariablesWrapper = /** @class */ (function () {\n    function ScopeVariablesWrapper(data) {\n        Object.assign(this, data);\n    }\n    ScopeVariablesWrapper.prototype.toObject = function () {\n        var result = {};\n        for (var key in this) {\n            if (!this.hasOwnProperty(key)) {\n                continue;\n            }\n            var value = this[key];\n            if ((0, exports.isScopeWrapperInstance)(value)) {\n                result[key] = value.toObject();\n            }\n            else {\n                result[key] = value.value;\n            }\n        }\n        return result;\n    };\n    return ScopeVariablesWrapper;\n}());\nvar isScopeWrapperInstance = function (value) {\n    return value instanceof exports.ScopeVariablesWrapper;\n};\nexports.isScopeWrapperInstance = isScopeWrapperInstance;\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/global-scope/ScopeVariablesWrapper.ts?");

/***/ }),

/***/ "./src/global-scope/createGlobalScope.tsx":
/*!************************************************!*\
  !*** ./src/global-scope/createGlobalScope.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createGlobalScope = void 0;\nvar data_structures_1 = __webpack_require__(/*! @cheprasov/data-structures */ \"./node_modules/@cheprasov/data-structures/dist/index.js\");\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar createGlobalScopeContext_1 = __webpack_require__(/*! ./createGlobalScopeContext */ \"./src/global-scope/createGlobalScopeContext.tsx\");\nvar GlobalScopeWrapper_1 = __webpack_require__(/*! ./GlobalScopeWrapper */ \"./src/global-scope/GlobalScopeWrapper.ts\");\nvar ComponentWrapper_1 = __importDefault(__webpack_require__(/*! ../components/ComponentWrapper */ \"./src/components/ComponentWrapper.tsx\"));\n;\nvar createGlobalScope = function (scope) {\n    var contextByScopeOrName = new Map();\n    var scopeNodes = data_structures_1.Tree.levelOrderTreeTraversal({ key: '', scope: scope, parent: null, type: 'scope' }, function (node) {\n        var keyPrefix = node.key ? \"\".concat(node.key, \".\") : '';\n        return data_structures_1.Object.Helper.reduce(node.scope.getChildrenScopesByKey(), function (res, scope, key) {\n            res.push({ key: \"\".concat(keyPrefix).concat(key), scope: scope, parent: node.scope, type: 'scope' });\n            return res;\n        }, []);\n    }, function (result, node) {\n        result.push(node);\n        return result;\n    }, []);\n    var globalScopes = scopeNodes.reverse().map(function (node) {\n        if (node.type === 'scope') {\n            return (0, createGlobalScopeContext_1.createGlobalScopeContext)(node.scope, node.key, contextByScopeOrName);\n        }\n        return function (_a) {\n            var children = _a.children;\n            return children;\n        }; // why i did this?\n    });\n    var ContextNode = function (_a) {\n        var children = _a.children;\n        return (react_1.default.createElement(GlobalScopeWrapper_1.GlobalScopeWrapper.Provider, { value: { contextByScopeOrName: contextByScopeOrName } },\n            react_1.default.createElement(ComponentWrapper_1.default, { components: globalScopes }, children)));\n    };\n    return react_1.default.memo(ContextNode);\n};\nexports.createGlobalScope = createGlobalScope;\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/global-scope/createGlobalScope.tsx?");

/***/ }),

/***/ "./src/global-scope/createGlobalScopeContext.tsx":
/*!*******************************************************!*\
  !*** ./src/global-scope/createGlobalScopeContext.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createGlobalScopeContext = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar Scope_1 = __webpack_require__(/*! ./Scope */ \"./src/global-scope/Scope.ts\");\nvar createStateDefiner_1 = __webpack_require__(/*! ./createStateDefiner */ \"./src/global-scope/createStateDefiner.ts\");\nvar useGlobalScope_1 = __webpack_require__(/*! ./useGlobalScope */ \"./src/global-scope/useGlobalScope.ts\");\nvar useEffectNoInit_1 = __webpack_require__(/*! ../hooks/useEffectNoInit */ \"./src/hooks/useEffectNoInit.ts\");\nvar ScopeVariablesWrapper_1 = __webpack_require__(/*! ./ScopeVariablesWrapper */ \"./src/global-scope/ScopeVariablesWrapper.ts\");\nvar createGlobalScopeContext = function (scope, key, contextByScopeOrName) {\n    if (contextByScopeOrName.has(scope) || contextByScopeOrName.has(key)) {\n        throw new Error(\"Scope '\".concat(key, \"' already exists\"));\n    }\n    var scopeData = scope._getData();\n    var subScopes = [];\n    var depKeys = [];\n    var localKeys = [];\n    var initScope = Object.entries(scopeData).reduce(function (acc, _a) {\n        var key = _a[0], value = _a[1];\n        depKeys.push(key);\n        if (value instanceof Scope_1.Scope) {\n            subScopes.push({ key: key, scope: value });\n        }\n        else {\n            localKeys.push(key);\n            acc[key] = [value, function () { }];\n        }\n        return acc;\n    }, {});\n    var Context = react_1.default.createContext(initScope);\n    contextByScopeOrName.set(scope, Context);\n    contextByScopeOrName.set(key, Context);\n    var stateDefiner = (0, createStateDefiner_1.createStateDefiner)(scopeData);\n    var ContextNode = function (_a) {\n        var children = _a.children;\n        var scopeValueByKey = stateDefiner(scopeData, react_1.useState);\n        subScopes.forEach(function (_a) {\n            var key = _a.key, scope = _a.scope;\n            scopeValueByKey[key] = (0, useGlobalScope_1.useGlobalScope)(scope);\n        });\n        var depValues = depKeys.map(function (key) {\n            return scopeValueByKey[key].value;\n        });\n        var scopeWrapper = new ScopeVariablesWrapper_1.ScopeVariablesWrapper(scopeValueByKey);\n        (0, react_1.useEffect)(function () {\n            var settersByKey = localKeys.reduce(function (res, key) {\n                res[key] = scopeValueByKey[key].setValue;\n                return res;\n            }, {});\n            scope._setSettersByKey(settersByKey);\n        }, []);\n        (0, useEffectNoInit_1.useEffectNoInit)(function () {\n            console.log('scopeWrapper object', scopeWrapper, scopeWrapper.toObject());\n            scope.fromObject(scopeWrapper.toObject());\n        }, depValues);\n        return (react_1.default.createElement(Context.Provider, { value: scopeWrapper }, children));\n    };\n    return react_1.default.memo(ContextNode);\n};\nexports.createGlobalScopeContext = createGlobalScopeContext;\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/global-scope/createGlobalScopeContext.tsx?");

/***/ }),

/***/ "./src/global-scope/createStateDefiner.ts":
/*!************************************************!*\
  !*** ./src/global-scope/createStateDefiner.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createStateDefiner = void 0;\nvar stringify_1 = __webpack_require__(/*! ../string/stringify */ \"./src/string/stringify.ts\");\nvar Scope_1 = __webpack_require__(/*! ./old/Scope */ \"./src/global-scope/old/Scope.ts\");\nvar createStateDefiner = function (obj) {\n    var body = [\"var n = {};\"];\n    for (var key in obj) {\n        if (!obj.hasOwnProperty(key)\n            || obj[key] instanceof Scope_1.Scope) {\n            continue;\n        }\n        var k = (0, stringify_1.stringify)(key);\n        body.push(\"n[\".concat(k, \"] = useState(o[\").concat(k, \"]);\"));\n        body.push(\"n[\".concat(k, \"].value = n[\").concat(k, \"][0];\"));\n        body.push(\"n[\".concat(k, \"].setValue = n[\").concat(k, \"][1];\"));\n        //body.push(`n[${k}].globalState = true;`);\n    }\n    body.push('return n;');\n    return new Function('o', 'useState', body.join('\\n'));\n};\nexports.createStateDefiner = createStateDefiner;\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/global-scope/createStateDefiner.ts?");

/***/ }),

/***/ "./src/global-scope/old/Scope.ts":
/*!***************************************!*\
  !*** ./src/global-scope/old/Scope.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isScopeInstance = exports.Scope = void 0;\nvar types_1 = __webpack_require__(/*! ./types */ \"./src/global-scope/old/types.ts\");\nexports.Scope = /** @class */ (function () {\n    function class_1(data) {\n        Object.assign(this, data);\n    }\n    class_1.prototype.toObject = function () {\n        var result = {};\n        for (var key in this) {\n            if (!this.hasOwnProperty(key)) {\n                continue;\n            }\n            var value = this[key];\n            if ((0, exports.isScopeInstance)(value)) {\n                result[key] = value.toObject();\n            }\n            else if ((0, types_1.isReducerTupleExtendedType)(value)) {\n                result[key] = 'toObject' in value.stateValue ? value.stateValue.toObject() : value.stateValue;\n            }\n            else if ((0, types_1.isStateTupleExtendedType)(value)) {\n                result[key] = value.stateValue; // state & reducer\n            }\n        }\n        return result;\n    };\n    class_1.prototype.fromObject = function (obj) {\n        if (typeof obj !== 'object' || !obj) {\n            return;\n        }\n        for (var key in this) {\n            if (!this.hasOwnProperty(key)) {\n                continue;\n            }\n            if (!(key in obj)) {\n                continue;\n            }\n            var objValue = obj[key];\n            var value = this[key];\n            if ((0, exports.isScopeInstance)(value)) {\n                value.fromObject(objValue);\n            }\n            else if ((0, types_1.isReducerTupleExtendedType)(value)) {\n                value.dispatchStateValue({ type: 'init', init: objValue });\n            }\n            else if ((0, types_1.isStateTupleExtendedType)(value)) {\n                value.setStateValue(objValue);\n            }\n        }\n    };\n    return class_1;\n}());\nvar isScopeInstance = function (value) {\n    return value instanceof exports.Scope;\n};\nexports.isScopeInstance = isScopeInstance;\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/global-scope/old/Scope.ts?");

/***/ }),

/***/ "./src/global-scope/old/types.ts":
/*!***************************************!*\
  !*** ./src/global-scope/old/types.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isReducerTupleExtendedType = exports.isStateTupleExtendedType = void 0;\nvar isStateTupleExtendedType = function (value) {\n    return Array.isArray(value) && value.length === 2 && 'globalState' in value;\n};\nexports.isStateTupleExtendedType = isStateTupleExtendedType;\nvar isReducerTupleExtendedType = function (value) {\n    return Array.isArray(value) && value.length === 2 && 'globalReducer' in value;\n};\nexports.isReducerTupleExtendedType = isReducerTupleExtendedType;\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/global-scope/old/types.ts?");

/***/ }),

/***/ "./src/global-scope/useGlobalScope.ts":
/*!********************************************!*\
  !*** ./src/global-scope/useGlobalScope.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useGlobalScope = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar GlobalScopeWrapper_1 = __webpack_require__(/*! ./GlobalScopeWrapper */ \"./src/global-scope/GlobalScopeWrapper.ts\");\nvar useGlobalScope = function (scope) {\n    var wrapperData = (0, react_1.useContext)(GlobalScopeWrapper_1.GlobalScopeWrapper);\n    var context = wrapperData.contextByScopeOrName.get(scope);\n    if (!context) {\n        throw new Error(\"Global Scope is not defined\");\n    }\n    return (0, react_1.useContext)(context);\n};\nexports.useGlobalScope = useGlobalScope;\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/global-scope/useGlobalScope.ts?");

/***/ }),

/***/ "./src/hooks/useEffectNoInit.ts":
/*!**************************************!*\
  !*** ./src/hooks/useEffectNoInit.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useEffectNoInit = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar react_2 = __webpack_require__(/*! react */ \"react\");\nvar useEffectNoInit = function (useEffectCallback, deps) {\n    var initRef = (0, react_1.useRef)(true);\n    (0, react_2.useEffect)(function () {\n        if (initRef.current === true) {\n            initRef.current = false;\n            return;\n        }\n        return useEffectCallback();\n    }, __spreadArray(__spreadArray([], deps, true), [initRef], false));\n};\nexports.useEffectNoInit = useEffectNoInit;\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/hooks/useEffectNoInit.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GlobalReducer = exports.hydrateGlobalScope = exports.GlobalScope = exports.Scope = exports.withGlobalScope = exports.useGlobalScope = exports.createGlobalStates = exports.useGlobalReducer = void 0;\nvar GlobalState_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './global-scope/GlobalState'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nObject.defineProperty(exports, \"useGlobalReducer\", ({ enumerable: true, get: function () { return GlobalState_1.useGlobalReducer; } }));\nObject.defineProperty(exports, \"createGlobalStates\", ({ enumerable: true, get: function () { return GlobalState_1.createGlobalStates; } }));\nObject.defineProperty(exports, \"useGlobalScope\", ({ enumerable: true, get: function () { return GlobalState_1.useGlobalScope; } }));\nObject.defineProperty(exports, \"withGlobalScope\", ({ enumerable: true, get: function () { return GlobalState_1.withGlobalScope; } }));\nvar Scope_1 = __webpack_require__(/*! ./global-scope/Scope */ \"./src/global-scope/Scope.ts\");\nObject.defineProperty(exports, \"Scope\", ({ enumerable: true, get: function () { return Scope_1.Scope; } }));\nvar createGlobalScope_1 = __webpack_require__(/*! ./global-scope/createGlobalScope */ \"./src/global-scope/createGlobalScope.tsx\");\nObject.defineProperty(exports, \"GlobalScope\", ({ enumerable: true, get: function () { return createGlobalScope_1.GlobalScope; } }));\nObject.defineProperty(exports, \"hydrateGlobalScope\", ({ enumerable: true, get: function () { return createGlobalScope_1.hydrateGlobalScope; } }));\nvar GlobalReducer_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './global-scope/GlobalReducer'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nObject.defineProperty(exports, \"GlobalReducer\", ({ enumerable: true, get: function () { return GlobalReducer_1.GlobalReducer; } }));\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/index.ts?");

/***/ }),

/***/ "./src/string/stringify.ts":
/*!*********************************!*\
  !*** ./src/string/stringify.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.stringify = void 0;\nvar stringify = function (value) {\n    return JSON.stringify(value);\n};\nexports.stringify = stringify;\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/string/stringify.ts?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;