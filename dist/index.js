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

eval("(()=>{\"use strict\";var t={782:function(t,e,r){var o,n=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},o(t,e)},function(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Class extends value \"+String(e)+\" is not a constructor or null\");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,\"__esModule\",{value:!0});var u=i(r(476)),s=i(r(305)),a=function(t){function e(e){void 0===e&&(e=[]);var r=t.call(this)||this;return r._firstNode=null,r._lastNode=null,r._count=0,e.forEach((function(t){return r.pushEnd(t)})),r}return n(e,t),e.prototype.pushBeg=function(){for(var t=this,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];e.forEach((function(e){var r=new s.default(e);t._firstNode&&t._lastNode?r.setNextNode(t._firstNode):t._lastNode=r,t._firstNode=r,t._count+=1}))},e.prototype.popBeg=function(){if(this._firstNode){var t=this._firstNode;return this._lastNode===t?(this._firstNode=null,this._lastNode=null):this._firstNode=t.getNextNode(),this._count-=1,t.getData()}},e.prototype.pushEnd=function(){for(var t=this,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];e.forEach((function(e){var r=new s.default(e);t._lastNode&&t._firstNode?t._lastNode.setNextNode(r):t._firstNode=r,t._lastNode=r,t._count+=1}))},e.prototype.popEnd=function(){if(this._firstNode&&this._lastNode){if(this._count-=1,this._firstNode===this._lastNode){var t=this._firstNode;return this._firstNode=null,this._lastNode=null,t.getData()}for(var e=this._firstNode;;){var r=e.getNextNode();if(!r||r===this._lastNode)break;e=r}var o=this._lastNode;return e.setNextNode(null),this._lastNode=e,o.getData()}},e.prototype.getSize=function(){return this._count},e.prototype.isEmpty=function(){return!this._firstNode&&!this._lastNode},e.prototype.toArray=function(){for(var t=[],e=this._firstNode;e;)t.push(e.getData()),e=e.getNextNode();return t},e}(u.default);e.default=a},476:(t,e)=>{Object.defineProperty(e,\"__esModule\",{value:!0});e.default=function(){}},305:(t,e)=>{Object.defineProperty(e,\"__esModule\",{value:!0});var r=function(){function t(t,e){void 0===e&&(e=null),this._nextNode=e,this._data=t}return t.prototype.getData=function(){return this._data},t.prototype.setNextNode=function(t){this._nextNode=t},t.prototype.getNextNode=function(){return this._nextNode},t}();e.default=r},947:function(t,e,r){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,\"__esModule\",{value:!0}),e.LinkedList=void 0;var n=r(782);Object.defineProperty(e,\"LinkedList\",{enumerable:!0,get:function(){return o(n).default}})},546:function(t,e,r){var o,n=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},o(t,e)},function(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Class extends value \"+String(e)+\" is not a constructor or null\");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,\"__esModule\",{value:!0});var u=i(r(782)),s=function(t){function e(e){void 0===e&&(e=[]);var r=t.call(this)||this;return r._linkedList=new u.default(e),r}return n(e,t),e.prototype.push=function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];(t=this._linkedList).pushEnd.apply(t,e)},e.prototype.pop=function(){return this._linkedList.popBeg()},e.prototype.getSize=function(){return this._linkedList.getSize()},e.prototype.isEmpty=function(){return this._linkedList.isEmpty()},e.prototype.toArray=function(){return this._linkedList.toArray()},e}(i(r(787)).default);e.default=s},787:(t,e)=>{Object.defineProperty(e,\"__esModule\",{value:!0});e.default=function(){}},322:function(t,e,r){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,\"__esModule\",{value:!0}),e.Queue=void 0;var n=r(546);Object.defineProperty(e,\"Queue\",{enumerable:!0,get:function(){return o(n).default}})},30:function(t,e,r){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,\"__esModule\",{value:!0}),e.levelOrderTreeTraversal=void 0;var n=o(r(546));e.levelOrderTreeTraversal=function(t,e,r,o){for(var i=r(o,t),u=new n.default(e(t));!u.isEmpty();){var s=u.pop();s&&(i=r(i,s),u.push.apply(u,e(s)))}return i}},136:(t,e,r)=>{Object.defineProperty(e,\"__esModule\",{value:!0}),e.levelOrderTreeTraversal=void 0;var o=r(30);Object.defineProperty(e,\"levelOrderTreeTraversal\",{enumerable:!0,get:function(){return o.levelOrderTreeTraversal}})},607:function(t,e,r){var o=this&&this.__createBinding||(Object.create?function(t,e,r,o){void 0===o&&(o=r),Object.defineProperty(t,o,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,o){void 0===o&&(o=r),t[o]=e[r]}),n=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,\"default\",{enumerable:!0,value:e})}:function(t,e){t.default=e}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)\"default\"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&o(e,t,r);return n(e,t),e};Object.defineProperty(e,\"__esModule\",{value:!0}),e.Queue=e.LinkedList=e.Tree=void 0,e.Tree=i(r(136)),e.LinkedList=i(r(947)),e.Queue=i(r(322))}},e={},r=function r(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,r),i.exports}(607);module.exports=r})();\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./node_modules/@cheprasov/data-structures/dist/index.js?");

/***/ }),

/***/ "./src/ComponentsWrapper/ComponentWrapper.tsx":
/*!****************************************************!*\
  !*** ./src/ComponentsWrapper/ComponentWrapper.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar ComponentWrapper = function (_a) {\n    var components = _a.components, children = _a.children;\n    return (0, react_1.useMemo)(function () {\n        var items = __spreadArray([], components, true);\n        var wrap = children;\n        while (items.length > 0) {\n            var Component = items.pop();\n            wrap = (react_1.default.createElement(Component, null, wrap));\n        }\n        return (react_1.default.createElement(react_1.default.Fragment, null, wrap));\n    }, [children, components]);\n};\nexports[\"default\"] = react_1.default.memo(ComponentWrapper);\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/ComponentsWrapper/ComponentWrapper.tsx?");

/***/ }),

/***/ "./src/GlobalState/GlobalState.tsx":
/*!*****************************************!*\
  !*** ./src/GlobalState/GlobalState.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.withGlobalScope = exports.useGlobalScope = exports.createMultiGlobalScopes = exports.createGlobalScope = exports.contextByScopeName = exports.useGlobalReducer = exports.createGlobalReducer = exports.contextByReducerName = exports.useGlobalState = exports.createGlobalState = exports.contextByStateName = exports.createStateDefiner = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar stringify_1 = __webpack_require__(/*! ../string/stringify */ \"./src/string/stringify.ts\");\nvar data_structures_1 = __webpack_require__(/*! @cheprasov/data-structures */ \"./node_modules/@cheprasov/data-structures/dist/index.js\");\nvar ComponentWrapper_1 = __importDefault(__webpack_require__(/*! ../ComponentsWrapper/ComponentWrapper */ \"./src/ComponentsWrapper/ComponentWrapper.tsx\"));\nvar Scope_1 = __webpack_require__(/*! ./Scope */ \"./src/GlobalState/Scope.ts\");\nvar isFunction_1 = __webpack_require__(/*! ../variables/isFunction */ \"./src/variables/isFunction.ts\");\nvar Reducer_1 = __webpack_require__(/*! ./Reducer */ \"./src/GlobalState/Reducer.ts\");\nvar createStateDefiner = function (obj) {\n    var body = [\"var n = {};\"];\n    for (var key in obj) {\n        if (!obj.hasOwnProperty(key) || key === '$$_scopeType') {\n            continue;\n        }\n        var k = (0, stringify_1.stringify)(key);\n        body.push(\"n[\".concat(k, \"] = u(o[\").concat(k, \"]);\"));\n    }\n    body.push('return n;');\n    return new Function('o', 'u', body.join('\\n'));\n};\nexports.createStateDefiner = createStateDefiner;\nexports.contextByStateName = new Map();\nvar createGlobalState = function (name, initialState) {\n    if (exports.contextByStateName.has(name)) {\n        throw new Error(\"GlobalState '\".concat(name, \"' already exists\"));\n    }\n    var init = (0, isFunction_1.isFunction)(initialState) ? initialState() : initialState;\n    var Context = react_1.default.createContext([init, undefined]);\n    exports.contextByStateName.set(name, Context);\n    var ContextNode = function (_a) {\n        var children = _a.children;\n        var state = (0, react_1.useState)(initialState);\n        return (react_1.default.createElement(Context.Provider, { value: state }, children));\n    };\n    return react_1.default.memo(ContextNode);\n};\nexports.createGlobalState = createGlobalState;\nvar useGlobalState = function (name) {\n    var Context = exports.contextByStateName.get(name);\n    if (!Context) {\n        throw new Error(\"Global State '\".concat(name, \"' is not exist\"));\n    }\n    return (0, react_1.useContext)(Context);\n};\nexports.useGlobalState = useGlobalState;\nexports.contextByReducerName = new Map();\nvar createGlobalReducer = function (name, reducer, initialState, initializer) {\n    if (exports.contextByReducerName.has(name)) {\n        throw new Error(\"Global Reducer '\".concat(name, \"' already exists\"));\n    }\n    var init = (0, isFunction_1.isFunction)(initializer) ? initializer(initialState) : initialState;\n    var Context = react_1.default.createContext([init, undefined]);\n    exports.contextByReducerName.set(name, Context);\n    var ContextNode = function (_a) {\n        var children = _a.children;\n        var state = (0, react_1.useReducer)(reducer, initialState);\n        return (react_1.default.createElement(Context.Provider, { value: state }, children));\n    };\n    return react_1.default.memo(ContextNode);\n};\nexports.createGlobalReducer = createGlobalReducer;\nvar useGlobalReducer = function (name) {\n    var Context = exports.contextByReducerName.get(name);\n    if (!Context) {\n        throw new Error(\"Global Reducer '\".concat(name, \"' is not exist\"));\n    }\n    return (0, react_1.useContext)(Context);\n};\nexports.useGlobalReducer = useGlobalReducer;\nexports.contextByScopeName = new Map();\nvar createGlobalScope = function (name, scope, useScope, useReducer) {\n    if (useScope === void 0) { useScope = {}; }\n    if (useReducer === void 0) { useReducer = {}; }\n    if (exports.contextByScopeName.has(name)) {\n        throw new Error(\"Global Scope '\".concat(name, \"' already exists\"));\n    }\n    console.log(name, scope, useScope, useReducer);\n    var scopeCopy = __assign({}, scope);\n    var initScope = Object.entries(scopeCopy).reduce(function (acc, _a) {\n        var key = _a[0], value = _a[1];\n        acc[key] = [value, undefined];\n        return acc;\n    }, {});\n    var initUseScope = Object.entries(useScope);\n    initUseScope.forEach(function (_a) {\n        var key = _a[0];\n        delete scopeCopy[key];\n        delete initScope[key];\n    });\n    var initUseReducer = Object.entries(useReducer);\n    initUseReducer.forEach(function (_a) {\n        var key = _a[0];\n        delete scopeCopy[key];\n        delete initScope[key];\n    });\n    var Context = react_1.default.createContext(initScope);\n    exports.contextByScopeName.set(name, Context);\n    var stateDefiner = (0, exports.createStateDefiner)(scopeCopy);\n    var ContextNode = function (_a) {\n        var children = _a.children;\n        var scopeValues = stateDefiner(scopeCopy, react_1.useState);\n        initUseScope.forEach(function (_a) {\n            var key = _a[0], scopeName = _a[1];\n            scopeValues[key] = (0, exports.useGlobalScope)(scopeName);\n        });\n        initUseReducer.forEach(function (_a) {\n            var key = _a[0], scopeName = _a[1];\n            scopeValues[key] = (0, exports.useGlobalReducer)(scopeName);\n        });\n        return (react_1.default.createElement(Context.Provider, { value: new Scope_1.Scope(scopeValues) }, children));\n    };\n    return react_1.default.memo(ContextNode);\n};\nexports.createGlobalScope = createGlobalScope;\nvar isNode = function (node) {\n    return node.$$__nodeType === 'scope' || node.$$__nodeType === 'reducer';\n};\nvar createMultiGlobalScopes = function (scopes) {\n    var linerScopes = data_structures_1.Tree.levelOrderTreeTraversal(scopes, function (node) {\n        var children = [];\n        var scopeOrReducer;\n        var isItNode = isNode(node);\n        if (isItNode) {\n            scopeOrReducer = node.data;\n        }\n        else {\n            scopeOrReducer = node;\n        }\n        for (var key in scopeOrReducer) {\n            if (!scopeOrReducer.hasOwnProperty(key)) {\n                continue;\n            }\n            if ((0, Scope_1.isGlobalScope)(scopeOrReducer[key])) {\n                children.push({\n                    $$__nodeType: 'scope',\n                    name: key,\n                    data: scopeOrReducer[key].scope,\n                    parent: isItNode ? node : null,\n                    useScopes: {},\n                    useReducer: {},\n                });\n                if (isItNode) {\n                    node.useScopes[key] = key;\n                }\n            }\n            if ((0, Reducer_1.isGlobalReducer)(scopeOrReducer[key])) {\n                children.push({\n                    $$__nodeType: 'reducer',\n                    name: key,\n                    data: scopeOrReducer[key],\n                    parent: isItNode ? node : null,\n                    useScopes: {},\n                    useReducer: {},\n                });\n                if (isItNode) {\n                    node.useReducer[key] = key;\n                }\n            }\n        }\n        return children;\n    }, function (result, node) {\n        if (isNode(node)) {\n            result.push(node);\n        }\n        return result;\n    }, []);\n    var globalScopes = linerScopes.reverse().map(function (scopeNode) {\n        console.log(scopeNode);\n        if (scopeNode.$$__nodeType === 'scope') {\n            return (0, exports.createGlobalScope)(scopeNode.name, scopeNode.data, scopeNode.useScopes, scopeNode.useReducer);\n        }\n        if (scopeNode.$$__nodeType === 'reducer' && (0, Reducer_1.isGlobalReducer)(scopeNode.data)) {\n            var globalReducer = scopeNode.data;\n            return (0, exports.createGlobalReducer)(scopeNode.name, globalReducer.reducer, globalReducer.initialState, globalReducer.initializer);\n        }\n        return function (_a) {\n            var children = _a.children;\n            return children;\n        };\n    });\n    var ContextNode = function (_a) {\n        var children = _a.children;\n        return (react_1.default.createElement(ComponentWrapper_1.default, { components: globalScopes }, children));\n    };\n    return react_1.default.memo(ContextNode);\n};\nexports.createMultiGlobalScopes = createMultiGlobalScopes;\nvar useGlobalScope = function (name) {\n    var Context = exports.contextByScopeName.get(name);\n    if (!Context) {\n        throw new Error(\"GlobalState scope '\".concat(name, \"' is not exist\"));\n    }\n    return (0, react_1.useContext)(Context);\n};\nexports.useGlobalScope = useGlobalScope;\nvar withGlobalScope = function (Component, scopeToProp) {\n    return new Function('u', 'c', 'C', 's', 'p', \"\\n        var o = {};\\n        for (let k in s) {\\n            if (!s.hasOwnProperty(k)) {\\n                continue;\\n            }\\n            o[s[k]] = u(k);\\n        }\\n        var n = Object.assign(o, p);\\n        delete n.children;\\n        return c(C, n, p.children);\\n    \").bind(null, exports.useGlobalScope, react_1.createElement, Component, __assign({}, scopeToProp));\n};\nexports.withGlobalScope = withGlobalScope;\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/GlobalState/GlobalState.tsx?");

/***/ }),

/***/ "./src/GlobalState/Reducer.ts":
/*!************************************!*\
  !*** ./src/GlobalState/Reducer.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isGlobalReducer = exports.GlobalReducer = void 0;\nvar GlobalReducer = /** @class */ (function () {\n    function GlobalReducer(reducer, initialState, initializer) {\n        this.reducer = reducer;\n        this.initialState = initialState;\n        this.initializer = initializer;\n    }\n    return GlobalReducer;\n}());\nexports.GlobalReducer = GlobalReducer;\nvar isGlobalReducer = function (value) {\n    return value instanceof GlobalReducer;\n};\nexports.isGlobalReducer = isGlobalReducer;\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/GlobalState/Reducer.ts?");

/***/ }),

/***/ "./src/GlobalState/Scope.ts":
/*!**********************************!*\
  !*** ./src/GlobalState/Scope.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Scope = exports.isGlobalScope = exports.GlobalScope = void 0;\nvar GlobalScope = /** @class */ (function () {\n    function GlobalScope(scope) {\n        this.scope = scope;\n    }\n    return GlobalScope;\n}());\nexports.GlobalScope = GlobalScope;\n// export function GlobalScope<T extends Record<string, any> = {}>(this: any, scope: T): T {\n//     if (this instanceof GlobalScope) {\n//         for (let key in scope) {\n//             if (!scope.hasOwnProperty(key)) {\n//                 continue;\n//             }\n//             (this as any)[key] = scope[key];\n//         }\n//         return this as T;\n//     } else {\n//         return new (GlobalScope as any)(scope);\n//     }\n// }\nvar isGlobalScope = function (value) {\n    return value instanceof GlobalScope;\n};\nexports.isGlobalScope = isGlobalScope;\nvar Scope = /** @class */ (function () {\n    function Scope(scope) {\n        for (var key in scope) {\n            this[key] = scope[key];\n        }\n    }\n    Scope.prototype.toObject = function () {\n        var result = {};\n        for (var key in this) {\n            if (!this.hasOwnProperty(key)) {\n                continue;\n            }\n            var value = this[key];\n            if (value instanceof Scope) {\n                result[key] = value.toObject();\n            }\n            else if (Array.isArray(value)) {\n                result[key] = value[0]; // state & reducer\n            }\n        }\n        return result;\n    };\n    return Scope;\n}());\nexports.Scope = Scope;\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/GlobalState/Scope.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GlobalScope = exports.isScope = exports.Scope = exports.withGlobalScope = exports.useGlobalScope = exports.createMultiGlobalScopes = exports.createGlobalScope = void 0;\nvar GlobalState_1 = __webpack_require__(/*! ./GlobalState/GlobalState */ \"./src/GlobalState/GlobalState.tsx\");\nObject.defineProperty(exports, \"createGlobalScope\", ({ enumerable: true, get: function () { return GlobalState_1.createGlobalScope; } }));\nObject.defineProperty(exports, \"createMultiGlobalScopes\", ({ enumerable: true, get: function () { return GlobalState_1.createMultiGlobalScopes; } }));\nObject.defineProperty(exports, \"useGlobalScope\", ({ enumerable: true, get: function () { return GlobalState_1.useGlobalScope; } }));\nObject.defineProperty(exports, \"withGlobalScope\", ({ enumerable: true, get: function () { return GlobalState_1.withGlobalScope; } }));\nvar Scope_1 = __webpack_require__(/*! ./GlobalState/Scope */ \"./src/GlobalState/Scope.ts\");\nObject.defineProperty(exports, \"Scope\", ({ enumerable: true, get: function () { return Scope_1.Scope; } }));\nObject.defineProperty(exports, \"isScope\", ({ enumerable: true, get: function () { return Scope_1.isGlobalScope; } }));\nObject.defineProperty(exports, \"GlobalScope\", ({ enumerable: true, get: function () { return Scope_1.GlobalScope; } }));\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/index.ts?");

/***/ }),

/***/ "./src/string/stringify.ts":
/*!*********************************!*\
  !*** ./src/string/stringify.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.stringify = void 0;\nvar stringify = function (value) {\n    return JSON.stringify(value);\n};\nexports.stringify = stringify;\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/string/stringify.ts?");

/***/ }),

/***/ "./src/variables/isFunction.ts":
/*!*************************************!*\
  !*** ./src/variables/isFunction.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isFunction = void 0;\nvar isFunction = function (value) {\n    return typeof (value) === 'function';\n};\nexports.isFunction = isFunction;\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/variables/isFunction.ts?");

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