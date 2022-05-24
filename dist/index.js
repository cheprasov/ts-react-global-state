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

/***/ "../ts-data-structures/dist/index.js":
/*!*******************************************!*\
  !*** ../ts-data-structures/dist/index.js ***!
  \*******************************************/
/***/ ((module) => {

eval("(()=>{\"use strict\";var e={30:(e,r)=>{Object.defineProperty(r,\"__esModule\",{value:!0}),r.levelOrderTreeTraversal=void 0,r.levelOrderTreeTraversal=function(e,r,t,n){for(var l=t(n,e),o=r(e);o.length>0;){var a=o.shift();a&&(l=t(l,a),o.push.apply(o,r(a)))}return l}},136:(e,r,t)=>{Object.defineProperty(r,\"__esModule\",{value:!0}),r.levelOrderTreeTraversal=void 0;var n=t(30);Object.defineProperty(r,\"levelOrderTreeTraversal\",{enumerable:!0,get:function(){return n.levelOrderTreeTraversal}})},607:function(e,r,t){var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),l=this&&this.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,\"default\",{enumerable:!0,value:r})}:function(e,r){e.default=r}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)\"default\"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(r,e,t);return l(r,e),r};Object.defineProperty(r,\"__esModule\",{value:!0}),r.Tree=void 0,r.Tree=o(t(136))}},r={},t=function t(n){var l=r[n];if(void 0!==l)return l.exports;var o=r[n]={exports:{}};return e[n].call(o.exports,o,o.exports,t),o.exports}(607);module.exports=t})();\n\n//# sourceURL=webpack://@cheprasov/react-global-state/../ts-data-structures/dist/index.js?");

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
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.withGlobalState = exports.useGlobalState = exports.createMultiGlobalStates = exports.createGlobalState = exports.contextByName = exports.createStateDefiner = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar stringify_1 = __webpack_require__(/*! ../string/stringify */ \"./src/string/stringify.ts\");\nvar data_structures_1 = __webpack_require__(/*! @cheprasov/data-structures */ \"../ts-data-structures/dist/index.js\");\nvar ComponentWrapper_1 = __importDefault(__webpack_require__(/*! ../ComponentsWrapper/ComponentWrapper */ \"./src/ComponentsWrapper/ComponentWrapper.tsx\"));\nvar createStateDefiner = function (obj) {\n    var body = [\"var n = {};\"];\n    for (var key in obj) {\n        if (!obj.hasOwnProperty(key)) {\n            continue;\n        }\n        var k = (0, stringify_1.stringify)(key);\n        body.push(\"n[\".concat(k, \"] = u(o[\").concat(k, \"]);\"));\n    }\n    body.push('return n;');\n    return new Function('o', 'u', body.join('\\n'));\n};\nexports.createStateDefiner = createStateDefiner;\nexports.contextByName = new Map();\nvar createGlobalState = function (name, scope, useScope) {\n    if (useScope === void 0) { useScope = {}; }\n    // console.log('createGlobalState', name, scope, useScope);\n    if (exports.contextByName.has(name)) {\n        throw new Error(\"GlobalState scope '\".concat(name, \"' already exists\"));\n    }\n    var initScope = __assign({}, scope);\n    var initUseScope = Object.entries(useScope);\n    initUseScope.forEach(function (_a) {\n        var key = _a[0];\n        delete initScope[key];\n    });\n    var Context = react_1.default.createContext(initScope);\n    exports.contextByName.set(name, Context);\n    var stateDefiner = (0, exports.createStateDefiner)(initScope);\n    var ContextNode = function (_a) {\n        var children = _a.children;\n        var scopeValues = stateDefiner(initScope, react_1.useState);\n        initUseScope.forEach(function (_a) {\n            var key = _a[0], scopeName = _a[1];\n            scopeValues[key] = (0, exports.useGlobalState)(scopeName);\n        });\n        return (react_1.default.createElement(Context.Provider, { value: scopeValues }, children));\n    };\n    return react_1.default.memo(ContextNode);\n};\nexports.createGlobalState = createGlobalState;\nvar isScopeNode = function (node) {\n    return node.$$_scopeType === 'scope';\n};\nvar createMultiGlobalStates = function (scopes) {\n    var linerScopes = data_structures_1.Tree.levelOrderTreeTraversal(scopes, function (node) {\n        var children = [];\n        var scope;\n        if (isScopeNode(node)) {\n            scope = node.scope;\n        }\n        else {\n            scope = node;\n        }\n        for (var key in scope) {\n            if (!scope.hasOwnProperty(key) || typeof (scope[key]) !== 'object' || !scope[key] || Array.isArray(scope[key])) {\n                continue;\n            }\n            children.push({\n                $$_scopeType: 'scope',\n                name: key,\n                scope: scope[key],\n                parent: isScopeNode(node) ? node : null,\n                useScopes: {},\n            });\n            if (isScopeNode(node)) {\n                node.useScopes[key] = key;\n            }\n        }\n        return children;\n    }, function (result, node) {\n        if (node.$$_scopeType === 'scope') {\n            result.push(node);\n        }\n        return result;\n    }, []);\n    var globalScopes = linerScopes.reverse().map(function (scopeNode) {\n        return (0, exports.createGlobalState)(scopeNode.name, scopeNode.scope, scopeNode.useScopes);\n    });\n    console.log('contextByName', exports.contextByName);\n    // //@ts-ignore\n    // return (({children}) => (<div>{children}</div>));\n    var ContextNode = function (_a) {\n        var children = _a.children;\n        return (react_1.default.createElement(ComponentWrapper_1.default, { components: globalScopes }, children));\n    };\n    return react_1.default.memo(ContextNode);\n};\nexports.createMultiGlobalStates = createMultiGlobalStates;\nvar useGlobalState = function (name) {\n    // export const useGlobalState = <T extends Record<string, any>>\n    // (name: string): {\n    //     [P in keyof T]:\n    //     T[P] extends ScopeInf\n    //         ? { [K in keyof T[P]]: [T[P][K], SetStateType<T[P][K]>] }\n    //         : [T[P], SetStateType<T[P]>]\n    // } => {\n    var Context = exports.contextByName.get(name);\n    if (!Context) {\n        throw new Error(\"GlobalState scope '\".concat(name, \"' is not exist\"));\n    }\n    return (0, react_1.useContext)(Context);\n};\nexports.useGlobalState = useGlobalState;\nvar withGlobalState = function (Component, scopeToProp) {\n    return new Function('u', 'c', 'C', 's', 'p', \"\\n        var o = {};\\n        for (let k in s) {\\n            if (!s.hasOwnProperty(k)) {\\n                continue;\\n            }\\n            o[s[k]] = u(k);\\n        }\\n        var n = Object.assign(o, p);\\n        delete n.children;\\n        return c(C, n, p.children);\\n    \").bind(null, exports.useGlobalState, react_1.createElement, Component, __assign({}, scopeToProp));\n};\nexports.withGlobalState = withGlobalState;\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/GlobalState/GlobalState.tsx?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.withGlobalState = exports.useGlobalState = exports.createGlobalState = void 0;\nvar GlobalState_1 = __webpack_require__(/*! ./GlobalState/GlobalState */ \"./src/GlobalState/GlobalState.tsx\");\nObject.defineProperty(exports, \"createGlobalState\", ({ enumerable: true, get: function () { return GlobalState_1.createGlobalState; } }));\nObject.defineProperty(exports, \"useGlobalState\", ({ enumerable: true, get: function () { return GlobalState_1.useGlobalState; } }));\nObject.defineProperty(exports, \"withGlobalState\", ({ enumerable: true, get: function () { return GlobalState_1.withGlobalState; } }));\n\n\n//# sourceURL=webpack://@cheprasov/react-global-state/./src/index.ts?");

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