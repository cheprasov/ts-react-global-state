(()=>{var e={82:e=>{(()=>{"use strict";var t={607:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Object=t.Observer=t.Stack=t.Queue=t.LinkedList=t.Tree=void 0,t.Tree=i(r(614)),t.LinkedList=i(r(838)),t.Queue=i(r(650)),t.Stack=i(r(931)),t.Observer=i(r(263)),t.Object=i(r(548))},382:function(e,t,r){var n,o=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=i(r(270)),a=i(r(978)),c=function(e){function t(t){void 0===t&&(t=[]);var r=e.call(this)||this;return r._firstNode=null,r._lastNode=null,r._count=0,t.forEach((function(e){return r.pushEnd(e)})),r}return o(t,e),t.prototype.pushBeg=function(){for(var e=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];t.forEach((function(t){var r=new a.default(t);e._firstNode&&e._lastNode?r.setNextNode(e._firstNode):e._lastNode=r,e._firstNode=r,e._count+=1}))},t.prototype.popBeg=function(){if(this._firstNode){var e=this._firstNode;return this._lastNode===e?(this._firstNode=null,this._lastNode=null):this._firstNode=e.getNextNode(),this._count-=1,e.getData()}},t.prototype.pushEnd=function(){for(var e=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];t.forEach((function(t){var r=new a.default(t);e._lastNode&&e._firstNode?e._lastNode.setNextNode(r):e._firstNode=r,e._lastNode=r,e._count+=1}))},t.prototype.popEnd=function(){if(this._firstNode&&this._lastNode){if(this._count-=1,this._firstNode===this._lastNode){var e=this._firstNode;return this._firstNode=null,this._lastNode=null,e.getData()}for(var t=this._firstNode;;){var r=t.getNextNode();if(!r||r===this._lastNode)break;t=r}var n=this._lastNode;return t.setNextNode(null),this._lastNode=t,n.getData()}},t.prototype.getSize=function(){return this._count},t.prototype.isEmpty=function(){return!this._firstNode&&!this._lastNode},t.prototype.toArray=function(){for(var e=[],t=this._firstNode;t;)e.push(t.getData()),t=t.getNextNode();return e},t}(u.default);t.default=c},270:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){}},978:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){void 0===t&&(t=null),this._nextNode=t,this._data=e}return e.prototype.getData=function(){return this._data},e.prototype.setNextNode=function(e){this._nextNode=e},e.prototype.getNextNode=function(){return this._nextNode},e}();t.default=r},838:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LinkedList=void 0;var o=r(382);Object.defineProperty(t,"LinkedList",{enumerable:!0,get:function(){return n(o).default}})},887:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.reduce=function(e,t,r){var n=r;for(var o in e)e.hasOwnProperty(o)&&(n=t(n,e[o],o,e));return n},e.map=function(e,t){var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]=t(e[n],n,e));return r},e.filter=function(e,t){var r={};for(var n in e)e.hasOwnProperty(n)&&t(e[n],n,e)&&(r[n]=e[n]);return r},e.forEach=function(e,t){for(var r in e)e.hasOwnProperty(r)&&t(e[r],r,e)},e.some=function(e,t){for(var r in e)if(e.hasOwnProperty(r)&&t(e[r],r,e))return!0;return!1},e.every=function(e,t){for(var r in e)if(e.hasOwnProperty(r)&&!t(e[r],r,e))return!1;return!0},e.diffKeysByValue=function(e,t,r){void 0===r&&(r=[]);var n=new Set(r),o=[];return this.forEach(e,(function(e,r){n.has(r)||t.hasOwnProperty(r)&&t[r]===e||o.push(r)})),this.forEach(t,(function(t,r){n.has(r)||e.hasOwnProperty(r)||o.push(r)})),o},e}();t.default=r},548:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Helper=void 0;var o=r(887);Object.defineProperty(t,"Helper",{enumerable:!0,get:function(){return n(o).default}})},42:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this._listeners=new Set}return e.prototype.subscribe=function(e){var t=this;return this._listeners.add(e),function(){t.unsubscribe(e)}},e.prototype.unsubscribe=function(e){this._listeners.delete(e)},e.prototype.publish=function(e){this._listeners.forEach((function(t){try{t(e)}catch(e){console.error(e)}}))},e}();t.default=r},263:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Observer=void 0;var o=r(42);Object.defineProperty(t,"Observer",{enumerable:!0,get:function(){return n(o).default}})},114:function(e,t,r){var n,o=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=i(r(382)),a=function(e){function t(t){void 0===t&&(t=[]);var r=e.call(this)||this;return r._linkedList=new u.default(t),r}return o(t,e),t.prototype.push=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];(e=this._linkedList).pushEnd.apply(e,t)},t.prototype.pop=function(){return this._linkedList.popBeg()},t.prototype.getSize=function(){return this._linkedList.getSize()},t.prototype.isEmpty=function(){return this._linkedList.isEmpty()},t.prototype.toArray=function(){return this._linkedList.toArray()},t}(i(r(372)).default);t.default=a},372:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){}},650:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Queue=void 0;var o=r(114);Object.defineProperty(t,"Queue",{enumerable:!0,get:function(){return n(o).default}})},848:function(e,t,r){var n,o=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=i(r(382)),a=function(e){function t(t){void 0===t&&(t=[]);var r=e.call(this)||this;return r._linkedList=new u.default,t.forEach((function(e){return r._linkedList.pushBeg(e)})),r}return o(t,e),t.prototype.push=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];(e=this._linkedList).pushBeg.apply(e,t)},t.prototype.pop=function(){return this._linkedList.popBeg()},t.prototype.getSize=function(){return this._linkedList.getSize()},t.prototype.isEmpty=function(){return this._linkedList.isEmpty()},t.prototype.toArray=function(){return this._linkedList.toArray().reverse()},t}(i(r(206)).default);t.default=a},293:function(e,t,r){var n,o=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),i=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t){var r,n=e.call(this)||this;return n._items=[],Array.isArray(t)&&(r=n._items).push.apply(r,t),n}return o(t,e),t.prototype.push=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];(e=this._items).push.apply(e,t)},t.prototype.pop=function(){return this._items.pop()},t.prototype.getSize=function(){return this._items.length},t.prototype.isEmpty=function(){return 0===this._items.length},t.prototype.toArray=function(){return i([],this._items,!0)},t}(u(r(206)).default);t.default=a},206:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){}},931:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.StackArrayBased=t.Stack=void 0;var o=r(848);Object.defineProperty(t,"Stack",{enumerable:!0,get:function(){return n(o).default}});var i=r(293);Object.defineProperty(t,"StackArrayBased",{enumerable:!0,get:function(){return n(i).default}})},614:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.levelOrderTreeTraversal=void 0;var n=r(75);Object.defineProperty(t,"levelOrderTreeTraversal",{enumerable:!0,get:function(){return n.levelOrderTreeTraversal}})},75:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.levelOrderTreeTraversal=void 0;var o=n(r(114));t.levelOrderTreeTraversal=function(e,t,r,n){for(var i=r(n,e),u=new o.default(t(e));!u.isEmpty();){var a=u.pop();a&&(i=r(i,a),u.push.apply(u,t(a)))}return i}}},r={},n=function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n].call(i.exports,i,i.exports,e),i.exports}(607);e.exports=n})()},920:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},u=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(313));t.default=a.default.memo((function(e){var t=e.components,r=e.children;return(0,a.useMemo)((function(){for(var e=u([],t,!0),n=r;e.length>0;){var o=e.pop();n=a.default.createElement(o,null,n)}return a.default.createElement(a.default.Fragment,null,n)}),[r,t])}))},581:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalScopeWrapper=void 0;var o=n(r(313));t.GlobalScopeWrapper=o.default.createContext({contextByScopeOrName:new Map})},385:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function u(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,a)}c((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(u=0)),u;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,n=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=t.call(e,u)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.Scope=void 0;var i=r(82),u=function(){function e(t){this._observer=new i.Observer.Observer,this._settersByKey=null,this._childrenScopesByKey={},this._data=t,this._childrenScopesByKey=i.Object.Helper.filter(this._data,(function(t){return t instanceof e}))}return e.prototype._getData=function(){return this._data},e.prototype._getObserver=function(){return this._observer},e.prototype._setSettersByKey=function(e){this._settersByKey=e},e.prototype.getChildrenScopesByKey=function(){return this._childrenScopesByKey},e.prototype.setValue=function(e,t){if(!(e in this._data))throw new Error("Key '".concat(e,"' not found in Scope"));if(e in this._childrenScopesByKey)return this._childrenScopesByKey[e].updateByObject(t);this._settersByKey?this._settersByKey[e](t):this._data[e]="function"==typeof t?t(this._data[e]):t},e.prototype.getValue=function(e){if(!(e in this._data))throw new Error("Key '".concat(e,"' not found in Scope"));return this._data[e]},e.prototype.toObject=function(){var t={};for(var r in this._data)if(this._data.hasOwnProperty(r)){var n=this._data[r];t[r]=n instanceof e?n.toObject():n}return t},e.prototype.updateByObject=function(t){var r="react-context"===t.$$__GlobalScope_updater;if(delete t.$$__gs_updater,"object"!=typeof t||!t)return!1;for(var i in this._data)if(this._data.hasOwnProperty(i)&&i in t){var u=t[i],a=this._data[i];a instanceof e?a.updateByObject(u):u!==a&&(this.setValue(i,u),this._data[i]=u)}r&&n(this,void 0,void 0,(function(){return o(this,(function(e){return this._observer.publish(this),[2]}))}))},e.prototype.addScopeUpdatesListener=function(e){this._observer.subscribe(e)},e.prototype.removeScopeUpdatesListener=function(e){},e}();t.Scope=u},618:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isScopeWrapperInstance=t.ScopeVariablesWrapper=void 0,t.ScopeVariablesWrapper=function(){function e(e){Object.assign(this,e)}return e.prototype.toObject=function(){var e={};for(var r in this)if(this.hasOwnProperty(r)){var n=this[r];(0,t.isScopeWrapperInstance)(n)?e[r]=n.toObject():e[r]=n.value}return e},e}(),t.isScopeWrapperInstance=function(e){return e instanceof t.ScopeVariablesWrapper}},94:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.createGlobalScope=void 0;var o=n(r(313)),i=r(82),u=r(584),a=r(581),c=n(r(920));t.createGlobalScope=function(e){var t=new Map,r=i.Tree.levelOrderTreeTraversal({key:"",scope:e,parent:null,type:"scope"},(function(e){var t=e.key?"".concat(e.key,"."):"";return i.Object.Helper.reduce(e.scope.getChildrenScopesByKey(),(function(r,n,o){return r.push({key:"".concat(t).concat(o),scope:n,parent:e.scope,type:"scope"}),r}),[])}),(function(e,t){return e.push(t),e}),[]),n=r.reverse().map((function(e){return"scope"===e.type?(0,u.createGlobalScopeContext)(e.scope,e.key,t):function(e){return e.children}}));return o.default.memo((function(e){var r=e.children;return o.default.createElement(a.GlobalScopeWrapper.Provider,{value:{contextByScopeOrName:t}},o.default.createElement(c.default,{components:n},r))}))}},584:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&o(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.createGlobalScopeContext=void 0;var a=u(r(313)),c=r(385),s=r(597),l=r(335),f=r(795),p=r(618);t.createGlobalScopeContext=function(e,t,r){if(r.has(e)||r.has(t))throw new Error("Scope '".concat(t,"' already exists"));var o=e._getData(),i=[],u=[],d=[],_=Object.entries(o).reduce((function(e,t){var r=t[0],n=t[1];return u.push(r),n instanceof c.Scope?i.push({key:r,scope:n}):(d.push(r),e[r]=[n,function(){}]),e}),{}),h=a.default.createContext(_);r.set(e,h),r.set(t,h);var y=(0,s.createStateDefiner)(o);return a.default.memo((function(t){var r=t.children,c=y(o,a.useState);i.forEach((function(e){var t=e.key,r=e.scope;c[t]=(0,l.useGlobalScope)(r)}));var s=u.map((function(e){return c[e]instanceof p.ScopeVariablesWrapper?c[e]:c[e].value})),_=new p.ScopeVariablesWrapper(c);return(0,a.useEffect)((function(){var t=d.reduce((function(e,t){return e[t]=c[t].setValue,e}),{});e._setSettersByKey(t)}),[]),(0,f.useEffectNoInit)((function(){var t=n(n({},_.toObject()),{$$__GlobalScope_updater:"react-context"});e.updateByObject(t)}),s),a.default.createElement(h.Provider,{value:_},r)}))}},597:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createStateDefiner=void 0;var n=r(755),o=r(385);t.createStateDefiner=function(e){var t=["var n = {};"];for(var r in e)if(e.hasOwnProperty(r)&&!(e[r]instanceof o.Scope)){var i=(0,n.stringify)(r);t.push("n[".concat(i,"] = useState(o[").concat(i,"]);")),t.push("n[".concat(i,"].value = n[").concat(i,"][0];")),t.push("n[".concat(i,"].setValue = n[").concat(i,"][1];"))}return t.push("return n;"),new Function("o","useState",t.join("\n"))}},335:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useGlobalScope=void 0;var n=r(313),o=r(581);t.useGlobalScope=function(e){void 0===e&&(e="");var t=(0,n.useContext)(o.GlobalScopeWrapper).contextByScopeOrName.get(e);if(!t)throw new Error("Global Scope is not defined");return(0,n.useContext)(t)}},673:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.withGlobalScope=void 0;var o=r(313),i=r(335);t.withGlobalScope=function(e,t){return new Function("useGlobalScope","createElement","Component","scope","props","\n        var o = {};\n        for (let key in scope) {\n            if (!scope.hasOwnProperty(key)) {\n                continue;\n            }\n            o[scope[key]] = useGlobalScope(key);\n        }\n        var n = Object.assign(o, props);\n        delete n.children;\n        return createElement(Component, n, props.children);\n    ").bind(null,i.useGlobalScope,o.createElement,e,n({},t))}},795:function(e,t,r){"use strict";var n=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.useEffectNoInit=void 0;var o=r(313),i=r(313);t.useEffectNoInit=function(e,t){var r=(0,o.useRef)(!0);(0,i.useEffect)((function(){if(!0!==r.current)return e();r.current=!1}),n(n([],t,!0),[r],!1))}},755:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.stringify=void 0,t.stringify=function(e){return JSON.stringify(e)}},313:e=>{"use strict";e.exports=require("react")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}var n={};(()=>{"use strict";var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.Scope=e.withGlobalScope=e.createGlobalScope=e.useGlobalScope=void 0;var t=r(335);Object.defineProperty(e,"useGlobalScope",{enumerable:!0,get:function(){return t.useGlobalScope}});var o=r(94);Object.defineProperty(e,"createGlobalScope",{enumerable:!0,get:function(){return o.createGlobalScope}});var i=r(673);Object.defineProperty(e,"withGlobalScope",{enumerable:!0,get:function(){return i.withGlobalScope}});var u=r(385);Object.defineProperty(e,"Scope",{enumerable:!0,get:function(){return u.Scope}})})();var o=exports;for(var i in n)o[i]=n[i];n.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();