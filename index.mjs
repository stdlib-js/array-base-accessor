// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessors@v0.0.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function i(t){var e;if(!(this instanceof i))return new i(t);if(!r(t))throw new TypeError(n("1Yn2u,F5",t));return e=s(t),this._buffer=t,this._getter=e.accessors[0],this._setter=e.accessors[1],this}e(i,"name","AccessorArray"),t(i.prototype,"length",(function(){return this._buffer.length}),(function(t){this._buffer.length=t})),e(i.prototype,"get",(function(t){return this._getter(this._buffer,t)})),e(i.prototype,"set",(function(t,e){arguments.length<2?this._setter(this._buffer,0,t):this._setter(this._buffer,e,t)}));export{i as default};
//# sourceMappingURL=index.mjs.map
