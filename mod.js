// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(e){return"string"==typeof e}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,h=/e\+(\d)$/,p=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function d(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=y.call(n,v,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=y.call(n,h,"e+0$1"),n=y.call(n,p,"e-0$1"),e.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):c.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function A(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var _=String.fromCharCode,T=isNaN,x=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,o,a,l,c,s,y;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",c=1,s=0;s<e.length;s++)if(f(n=e[s]))l+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,T(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function R(e){var r,t,n,i;for(t=[],i=0,n=V.exec(e);n;)(r=e.slice(i,V.lastIndex-n[0].length)).length&&t.push(r),t.push(L(n)),i=V.lastIndex,n=V.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function S(e){return"string"==typeof e}function B(e){var r,t,n;if(!S(e))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=R(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var I,C=Object.prototype,F=C.toString,O=C.__defineGetter__,M=C.__defineSetter__,U=C.__lookupGetter__,N=C.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(U.call(e,r)||N.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&O&&O.call(e,r,t.get),a&&M&&M.call(e,r,t.set),e};var P=I;function Y(e,r,t){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function $(e){var r=W[e];return"function"==typeof r?r:W.default}var G={float64:function(e,r,t){e[r]=t},float32:function(e,r,t){e[r]=t},int32:function(e,r,t){e[r]=t},int16:function(e,r,t){e[r]=t},int8:function(e,r,t){e[r]=t},uint32:function(e,r,t){e[r]=t},uint16:function(e,r,t){e[r]=t},uint8:function(e,r,t){e[r]=t},uint8c:function(e,r,t){e[r]=t},generic:function(e,r,t){e[r]=t},default:function(e,r,t){e[r]=t}};function Z(e){var r=G[e];return"function"==typeof r?r:G.default}var X={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function J(e){var r=X[e];return"function"==typeof r?r:X.default}var z={complex128:function(e,r,t){e.set(t,r)},complex64:function(e,r,t){e.set(t,r)},default:function(e,r,t){e.set(t,r)}};function q(e){var r=z[e];return"function"==typeof r?r:z.default}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function H(){return D&&"symbol"==typeof Symbol.toStringTag}var K=Object.prototype.toString;var Q=Object.prototype.hasOwnProperty;function ee(e,r){return null!=e&&Q.call(e,r)}var re="function"==typeof Symbol?Symbol:void 0,te="function"==typeof re?re.toStringTag:"";var ne=H()?function(e){var r,t,n;if(null==e)return K.call(e);t=e[te],r=ee(e,te);try{e[te]=void 0}catch(r){return K.call(e)}return n=K.call(e),r?e[te]=t:delete e[te],n}:function(e){return K.call(e)};var ie=Array.isArray?Array.isArray:function(e){return"[object Array]"===ne(e)};function oe(e){return null!==e&&"object"==typeof e}function ae(e){return oe(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function ue(){return/^\s*function\s*([^(]*)/i}Y(oe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ie(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(oe));var fe=/^\s*function\s*([^(]*)/i;function le(e){var r,t,n;if(("Object"===(t=ne(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=fe.exec(n.toString()))return r[1]}return ae(e)?"Buffer":t}Y(ue,"REGEXP",fe);var ce={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},se="function"==typeof Float64Array;var ye="function"==typeof Float64Array?Float64Array:null;var he="function"==typeof Float64Array?Float64Array:void 0;var pe=function(){var e,r,t;if("function"!=typeof ye)return!1;try{r=new ye([1,3.14,-3.14,NaN]),t=r,e=(se&&t instanceof Float64Array||"[object Float64Array]"===ne(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?he:function(){throw new Error("not implemented")},ge="function"==typeof Float32Array;var me=Number.POSITIVE_INFINITY,we="function"==typeof Float32Array?Float32Array:null;var be="function"==typeof Float32Array?Float32Array:void 0;var ve=function(){var e,r,t;if("function"!=typeof we)return!1;try{r=new we([1,3.14,-3.14,5e40]),t=r,e=(ge&&t instanceof Float32Array||"[object Float32Array]"===ne(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===me}catch(r){e=!1}return e}()?be:function(){throw new Error("not implemented")},de="function"==typeof Uint32Array;var Ee="function"==typeof Uint32Array?Uint32Array:null;var Ae="function"==typeof Uint32Array?Uint32Array:void 0;var _e=function(){var e,r,t;if("function"!=typeof Ee)return!1;try{r=new Ee(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(de&&t instanceof Uint32Array||"[object Uint32Array]"===ne(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ae:function(){throw new Error("not implemented")},Te="function"==typeof Int32Array;var xe="function"==typeof Int32Array?Int32Array:null;var je="function"==typeof Int32Array?Int32Array:void 0;var ke=function(){var e,r,t;if("function"!=typeof xe)return!1;try{r=new xe([1,3.14,-3.14,2147483648]),t=r,e=(Te&&t instanceof Int32Array||"[object Int32Array]"===ne(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?je:function(){throw new Error("not implemented")},Ve="function"==typeof Uint16Array;var Le="function"==typeof Uint16Array?Uint16Array:null;var Re="function"==typeof Uint16Array?Uint16Array:void 0;var Se=function(){var e,r,t;if("function"!=typeof Le)return!1;try{r=new Le(r=[1,3.14,-3.14,65536,65537]),t=r,e=(Ve&&t instanceof Uint16Array||"[object Uint16Array]"===ne(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Re:function(){throw new Error("not implemented")},Be="function"==typeof Int16Array;var Ie="function"==typeof Int16Array?Int16Array:null;var Ce="function"==typeof Int16Array?Int16Array:void 0;var Fe=function(){var e,r,t;if("function"!=typeof Ie)return!1;try{r=new Ie([1,3.14,-3.14,32768]),t=r,e=(Be&&t instanceof Int16Array||"[object Int16Array]"===ne(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?Ce:function(){throw new Error("not implemented")},Oe="function"==typeof Uint8Array;var Me="function"==typeof Uint8Array?Uint8Array:null;var Ue="function"==typeof Uint8Array?Uint8Array:void 0;var Ne=function(){var e,r,t;if("function"!=typeof Me)return!1;try{r=new Me(r=[1,3.14,-3.14,256,257]),t=r,e=(Oe&&t instanceof Uint8Array||"[object Uint8Array]"===ne(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ue:function(){throw new Error("not implemented")},Pe="function"==typeof Uint8ClampedArray;var Ye="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var We="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var $e=function(){var e,r,t;if("function"!=typeof Ye)return!1;try{r=new Ye([-1,0,1,3.14,4.99,255,256]),t=r,e=(Pe&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===ne(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?We:function(){throw new Error("not implemented")},Ge="function"==typeof Int8Array;var Ze="function"==typeof Int8Array?Int8Array:null;var Xe="function"==typeof Int8Array?Int8Array:void 0;var Je=function(){var e,r,t;if("function"!=typeof Ze)return!1;try{r=new Ze([1,3.14,-3.14,128]),t=r,e=(Ge&&t instanceof Int8Array||"[object Int8Array]"===ne(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?Xe:function(){throw new Error("not implemented")};function ze(e){return"number"==typeof e}var qe=Number,De=qe.prototype.toString;var He=H();function Ke(e){return"object"==typeof e&&(e instanceof qe||(He?function(e){try{return De.call(e),!0}catch(e){return!1}}(e):"[object Number]"===ne(e)))}function Qe(e){return ze(e)||Ke(e)}Y(Qe,"isPrimitive",ze),Y(Qe,"isObject",Ke);var er=qe.NEGATIVE_INFINITY,rr=Math.floor;function tr(e){return rr(e)===e}function nr(e){return e<me&&e>er&&tr(e)}function ir(e){return ze(e)&&nr(e)}function or(e){return Ke(e)&&nr(e.valueOf())}function ar(e){return ir(e)||or(e)}function ur(e){return ir(e)&&e>=0}function fr(e){return or(e)&&e.valueOf()>=0}function lr(e){return ur(e)||fr(e)}Y(ar,"isPrimitive",ir),Y(ar,"isObject",or),Y(lr,"isPrimitive",ur),Y(lr,"isObject",fr);function cr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&tr(e.length)&&e.length>=0&&e.length<=4294967295}function sr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&tr(e.length)&&e.length>=0&&e.length<=9007199254740991}var yr="function"==typeof ArrayBuffer;function hr(e){return yr&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===ne(e)}function pr(e){return"object"==typeof e&&null!==e&&!ie(e)}var gr=/./;function mr(e){return"boolean"==typeof e}var wr=Boolean,br=Boolean.prototype.toString;var vr=H();function dr(e){return"object"==typeof e&&(e instanceof wr||(vr?function(e){try{return br.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ne(e)))}function Er(e){return mr(e)||dr(e)}function Ar(){return new Function("return this;")()}Y(Er,"isPrimitive",mr),Y(Er,"isObject",dr);var _r="object"==typeof self?self:null,Tr="object"==typeof window?window:null,xr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},jr="object"==typeof xr?xr:null,kr="object"==typeof globalThis?globalThis:null;var Vr=function(e){if(arguments.length){if(!mr(e))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ar()}if(kr)return kr;if(_r)return _r;if(Tr)return Tr;if(jr)return jr;throw new Error("unexpected error. Unable to resolve global object.")}(),Lr=Vr.document&&Vr.document.childNodes,Rr=Int8Array;var Sr="function"==typeof gr||"object"==typeof Rr||"function"==typeof Lr?function(e){return le(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?le(e).toLowerCase():r};function Br(e){return"function"===Sr(e)}function Ir(e,r){if(!(this instanceof Ir))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ze(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!ze(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Y(Ir,"BYTES_PER_ELEMENT",8),Y(Ir.prototype,"BYTES_PER_ELEMENT",8),Y(Ir.prototype,"byteLength",16),Y(Ir.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Ir.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Cr="function"==typeof Math.fround?Math.fround:null,Fr=new ve(1);var Or="function"==typeof Cr?Cr:function(e){return Fr[0]=e,Fr[0]};function Mr(e,r){if(!(this instanceof Mr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ze(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!ze(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Or(e)}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Or(r)}),this}function Ur(e){return e instanceof Ir||e instanceof Mr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Nr(e){return tr(e/2)}function Pr(){return"function"==typeof re&&"symbol"==typeof re("foo")&&ee(re,"iterator")&&"symbol"==typeof re.iterator}Y(Mr,"BYTES_PER_ELEMENT",4),Y(Mr.prototype,"BYTES_PER_ELEMENT",4),Y(Mr.prototype,"byteLength",8),Y(Mr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Mr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Yr=Pr()?Symbol.iterator:null;function Wr(e,r,t){P(e,r,{configurable:!1,enumerable:!1,get:t})}function $r(e){return e.re}function Gr(e){return e.im}function Zr(e,r){return new ve(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Xr(e,r){return new pe(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Jr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(cr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Ur(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push($r(n),Gr(n))}return r}function zr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,cr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ur(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push($r(o),Gr(o))}return n}function qr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Ur(n=r[i]))return null;e[o]=$r(n),e[o+1]=Gr(n),o+=2}return e}var Dr=2*ve.BYTES_PER_ELEMENT,Hr=Pr();function Kr(e){return e instanceof tt||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Qr(e){return e===tt||"Complex128Array"===e.name}function et(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Dr}function rt(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*Dr}function tt(){var e,r,t,n;if(r=arguments.length,!(this instanceof tt))return 0===r?new tt:1===r?new tt(arguments[0]):2===r?new tt(arguments[0],arguments[1]):new tt(arguments[0],arguments[1],arguments[2]);if(0===r)t=new ve(0);else if(1===r)if(ur(arguments[0]))t=new ve(2*arguments[0]);else if(sr(arguments[0]))if((n=(t=arguments[0]).length)&&ie(t)&&Ur(t[0])){if(null===(t=qr(new ve(2*n),t))){if(!Nr(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new ve(arguments[0])}}else{if(et(t))t=Zr(t,0);else if(rt(t))t=Xr(t,0);else if(!Nr(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new ve(t)}else if(hr(arguments[0])){if(!tr((t=arguments[0]).byteLength/Dr))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Dr,t.byteLength));t=new ve(t)}else{if(!pr(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Hr)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Br(t[Yr]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Br((t=t[Yr]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Jr(t))instanceof Error)throw t;t=new ve(t)}else{if(!hr(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ur(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!tr(e/Dr))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Dr,e));if(2===r){if(!tr((n=t.byteLength-e)/Dr))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Dr,n));t=new ve(t,e)}else{if(!ur(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Dr>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Dr));t=new ve(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function nt(e){return e.re}function it(e){return e.im}function ot(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(cr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Ur(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(nt(n),it(n))}return r}function at(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,cr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ur(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(nt(o),it(o))}return n}function ut(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Ur(n=r[i]))return null;e[o]=nt(n),e[o+1]=it(n),o+=2}return e}Y(tt,"BYTES_PER_ELEMENT",Dr),Y(tt,"name","Complex64Array"),Y(tt,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!Br(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Qr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Br(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(Kr(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ur(c=n.call(r,e.get(s),s)))o[y]=$r(c),o[y+1]=Gr(c);else{if(!(cr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(sr(e)){if(n){for(f=e.length,u=e.get&&e.set?J("default"):$("default"),s=0;s<f;s++)if(!Ur(u(e,s))){l=!0;break}if(l){if(!Nr(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ur(c=n.call(r,u(e,s),s)))o[y]=$r(c),o[y+1]=Gr(c);else{if(!(cr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(pr(e)&&Hr&&Br(e[Yr])){if(!Br((o=e[Yr]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?zr(o,n,r):Jr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(tt,"of",(function(){var e,r;if(!Br(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Qr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Wr(tt.prototype,"buffer",(function(){return this._buffer.buffer})),Wr(tt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Wr(tt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(tt.prototype,"BYTES_PER_ELEMENT",tt.BYTES_PER_ELEMENT),Y(tt.prototype,"copyWithin",(function(e,r){if(!Kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(tt.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!Kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new Mr(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),Y(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Yr&&Y(t,Yr,(function(){return r.entries()})),t})),Y(tt.prototype,"get",(function(e){var r;if(!Kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ur(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Mr((r=this._buffer)[e*=2],r[e+1])})),Wr(tt.prototype,"length",(function(){return this._length})),Y(tt.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!Kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ur(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ur(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=$r(e),void(n[t+1]=Gr(e))}if(Kr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Dr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new ve(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!sr(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Ur(e[f])){o=!0;break}if(o){if(!Nr(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Dr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new ve(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=$r(u),n[t+1]=Gr(u),t+=2}}));var ft=2*pe.BYTES_PER_ELEMENT,lt=Pr();function ct(e){return e instanceof pt||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function st(e){return e===pt||"Complex64Array"===e.name}function yt(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===ft/2}function ht(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===ft}function pt(){var e,r,t,n;if(r=arguments.length,!(this instanceof pt))return 0===r?new pt:1===r?new pt(arguments[0]):2===r?new pt(arguments[0],arguments[1]):new pt(arguments[0],arguments[1],arguments[2]);if(0===r)t=new pe(0);else if(1===r)if(ur(arguments[0]))t=new pe(2*arguments[0]);else if(sr(arguments[0]))if((n=(t=arguments[0]).length)&&ie(t)&&Ur(t[0])){if(null===(t=ut(new pe(2*n),t))){if(!Nr(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new pe(arguments[0])}}else{if(yt(t))t=Zr(t,0);else if(ht(t))t=Xr(t,0);else if(!Nr(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new pe(t)}else if(hr(arguments[0])){if(!tr((t=arguments[0]).byteLength/ft))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ft,t.byteLength));t=new pe(t)}else{if(!pr(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===lt)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Br(t[Yr]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Br((t=t[Yr]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=ot(t))instanceof Error)throw t;t=new pe(t)}else{if(!hr(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ur(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!tr(e/ft))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ft,e));if(2===r){if(!tr((n=t.byteLength-e)/ft))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ft,n));t=new pe(t,e)}else{if(!ur(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*ft>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*ft));t=new pe(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(pt,"BYTES_PER_ELEMENT",ft),Y(pt,"name","Complex128Array"),Y(pt,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!Br(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!st(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Br(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(ct(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ur(c=n.call(r,e.get(s),s)))o[y]=nt(c),o[y+1]=it(c);else{if(!(cr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(sr(e)){if(n){for(f=e.length,u=e.get&&e.set?J("default"):$("default"),s=0;s<f;s++)if(!Ur(u(e,s))){l=!0;break}if(l){if(!Nr(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ur(c=n.call(r,u(e,s),s)))o[y]=nt(c),o[y+1]=it(c);else{if(!(cr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(pr(e)&&lt&&Br(e[Yr])){if(!Br((o=e[Yr]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?at(o,n,r):ot(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(pt,"of",(function(){var e,r;if(!Br(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!st(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Wr(pt.prototype,"buffer",(function(){return this._buffer.buffer})),Wr(pt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Wr(pt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(pt.prototype,"BYTES_PER_ELEMENT",pt.BYTES_PER_ELEMENT),Y(pt.prototype,"copyWithin",(function(e,r){if(!ct(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(pt.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!ct(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new Ir(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),Y(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Yr&&Y(t,Yr,(function(){return r.entries()})),t})),Y(pt.prototype,"get",(function(e){var r;if(!ct(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ur(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Ir((r=this._buffer)[e*=2],r[e+1])})),Wr(pt.prototype,"length",(function(){return this._length})),Y(pt.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!ct(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ur(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ur(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=nt(e),void(n[t+1]=it(e))}if(ct(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*ft,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new pe(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!sr(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Ur(e[f])){o=!0;break}if(o){if(!Nr(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*ft,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new pe(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=nt(u),n[t+1]=it(u),t+=2}}));var gt=[pe,ve,ke,_e,Fe,Se,Je,Ne,$e,tt,pt],mt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],wt=mt.length;function bt(e){var r,t=function(e){var r;if(ie(e))return"generic";if(ae(e))return null;for(r=0;r<wt;r++)if(e instanceof gt[r])return mt[r];return ce[le(e)]||null}(e);return"function"==typeof(r=e).get&&"function"==typeof r.set?{accessorProtocol:!0,accessors:[J(t),q(t)]}:{accessorProtocol:!1,accessors:[$(t),Z(t)]}}function vt(e){var r;if(!(this instanceof vt))return new vt(e);if(!sr(e))throw new TypeError(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("1Yn2u,F5",e));return r=bt(e),this._buffer=e,this._getter=r.accessors[0],this._setter=r.accessors[1],this}Y(vt,"name","AccessorArray"),function(e,r,t,n){P(e,r,{configurable:!1,enumerable:!1,get:t,set:n})}(vt.prototype,"length",(function(){return this._buffer.length}),(function(e){this._buffer.length=e})),Y(vt.prototype,"get",(function(e){return this._getter(this._buffer,e)})),Y(vt.prototype,"set",(function(e,r){arguments.length<2?this._setter(this._buffer,0,e):this._setter(this._buffer,r,e)}));export{vt as default};
//# sourceMappingURL=mod.js.map