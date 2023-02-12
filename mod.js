// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,y,s;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(e,r,t.get),s&&a&&a.call(e,r,t.set),e};var l=r;function c(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function s(e){var r=y[e];return"function"==typeof r?r:y.default}var h={float64:function(e,r,t){e[r]=t},float32:function(e,r,t){e[r]=t},int32:function(e,r,t){e[r]=t},int16:function(e,r,t){e[r]=t},int8:function(e,r,t){e[r]=t},uint32:function(e,r,t){e[r]=t},uint16:function(e,r,t){e[r]=t},uint8:function(e,r,t){e[r]=t},uint8c:function(e,r,t){e[r]=t},generic:function(e,r,t){e[r]=t},default:function(e,r,t){e[r]=t}};function p(e){var r=h[e];return"function"==typeof r?r:h.default}var m={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function g(e){var r=m[e];return"function"==typeof r?r:m.default}var b={complex128:function(e,r,t){e.set(t,r)},complex64:function(e,r,t){e.set(t,r)},default:function(e,r,t){e.set(t,r)}};function w(e){var r=b[e];return"function"==typeof r?r:b.default}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return v&&"symbol"==typeof Symbol.toStringTag}var E=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;function A(e,r){return null!=e&&_.call(e,r)}var T="function"==typeof Symbol?Symbol.toStringTag:"";var j=d()?function(e){var r,t,n;if(null==e)return E.call(e);t=e[T],r=A(e,T);try{e[T]=void 0}catch(r){return E.call(e)}return n=E.call(e),r?e[T]=t:delete e[T],n}:function(e){return E.call(e)};var x=Array.isArray?Array.isArray:function(e){return"[object Array]"===j(e)};function B(e){return null!==e&&"object"==typeof e}function L(e){return B(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function R(){return/^\s*function\s*([^(]*)/i}c(B,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!x(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(B));var S=/^\s*function\s*([^(]*)/i;function V(e){var r,t,n;if(("Object"===(t=j(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=S.exec(n.toString()))return r[1]}return L(e)?"Buffer":t}c(R,"REGEXP",S);var k={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},I="function"==typeof Float64Array;var C="function"==typeof Float64Array?Float64Array:null;var O="function"==typeof Float64Array?Float64Array:void 0;var M=function(){var e,r,t;if("function"!=typeof C)return!1;try{r=new C([1,3.14,-3.14,NaN]),t=r,e=(I&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?O:function(){throw new Error("not implemented")},U="function"==typeof Float32Array;var N=Number.POSITIVE_INFINITY,P="function"==typeof Float32Array?Float32Array:null;var F="function"==typeof Float32Array?Float32Array:void 0;var Y=function(){var e,r,t;if("function"!=typeof P)return!1;try{r=new P([1,3.14,-3.14,5e40]),t=r,e=(U&&t instanceof Float32Array||"[object Float32Array]"===j(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===N}catch(r){e=!1}return e}()?F:function(){throw new Error("not implemented")},W="function"==typeof Uint32Array;var G="function"==typeof Uint32Array?Uint32Array:null;var J="function"==typeof Uint32Array?Uint32Array:void 0;var X=function(){var e,r,t;if("function"!=typeof G)return!1;try{r=new G(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(W&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?J:function(){throw new Error("not implemented")},q="function"==typeof Int32Array;var z="function"==typeof Int32Array?Int32Array:null;var D="function"==typeof Int32Array?Int32Array:void 0;var H=function(){var e,r,t;if("function"!=typeof z)return!1;try{r=new z([1,3.14,-3.14,2147483648]),t=r,e=(q&&t instanceof Int32Array||"[object Int32Array]"===j(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?D:function(){throw new Error("not implemented")},K="function"==typeof Uint16Array;var Q="function"==typeof Uint16Array?Uint16Array:null;var Z="function"==typeof Uint16Array?Uint16Array:void 0;var $=function(){var e,r,t;if("function"!=typeof Q)return!1;try{r=new Q(r=[1,3.14,-3.14,65536,65537]),t=r,e=(K&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Z:function(){throw new Error("not implemented")},ee="function"==typeof Int16Array;var re="function"==typeof Int16Array?Int16Array:null;var te="function"==typeof Int16Array?Int16Array:void 0;var ne=function(){var e,r,t;if("function"!=typeof re)return!1;try{r=new re([1,3.14,-3.14,32768]),t=r,e=(ee&&t instanceof Int16Array||"[object Int16Array]"===j(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?te:function(){throw new Error("not implemented")},oe="function"==typeof Uint8Array;var ie="function"==typeof Uint8Array?Uint8Array:null;var ae="function"==typeof Uint8Array?Uint8Array:void 0;var ue=function(){var e,r,t;if("function"!=typeof ie)return!1;try{r=new ie(r=[1,3.14,-3.14,256,257]),t=r,e=(oe&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?ae:function(){throw new Error("not implemented")},fe="function"==typeof Uint8ClampedArray;var le="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var ce="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var ye=function(){var e,r,t;if("function"!=typeof le)return!1;try{r=new le([-1,0,1,3.14,4.99,255,256]),t=r,e=(fe&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===j(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?ce:function(){throw new Error("not implemented")},se="function"==typeof Int8Array;var he="function"==typeof Int8Array?Int8Array:null;var pe="function"==typeof Int8Array?Int8Array:void 0;var me=function(){var e,r,t;if("function"!=typeof he)return!1;try{r=new he([1,3.14,-3.14,128]),t=r,e=(se&&t instanceof Int8Array||"[object Int8Array]"===j(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?pe:function(){throw new Error("not implemented")};function ge(e){return"number"==typeof e}var be=Number,we=be.prototype.toString;var ve=d();function de(e){return"object"==typeof e&&(e instanceof be||(ve?function(e){try{return we.call(e),!0}catch(e){return!1}}(e):"[object Number]"===j(e)))}function Ee(e){return ge(e)||de(e)}c(Ee,"isPrimitive",ge),c(Ee,"isObject",de);var _e=be.NEGATIVE_INFINITY,Ae=Math.floor;function Te(e){return Ae(e)===e}function je(e){return e<N&&e>_e&&Te(e)}function xe(e){return ge(e)&&je(e)}function Be(e){return de(e)&&je(e.valueOf())}function Le(e){return xe(e)||Be(e)}function Re(e){return xe(e)&&e>=0}function Se(e){return Be(e)&&e.valueOf()>=0}function Ve(e){return Re(e)||Se(e)}c(Le,"isPrimitive",xe),c(Le,"isObject",Be),c(Ve,"isPrimitive",Re),c(Ve,"isObject",Se);function ke(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Te(e.length)&&e.length>=0&&e.length<=4294967295}function Ie(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Te(e.length)&&e.length>=0&&e.length<=9007199254740991}var Ce="function"==typeof ArrayBuffer;function Oe(e){return Ce&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===j(e)}function Me(e){return"object"==typeof e&&null!==e&&!x(e)}var Ue=/./;function Ne(e){return"boolean"==typeof e}var Pe=Boolean.prototype.toString;var Fe=d();function Ye(e){return"object"==typeof e&&(e instanceof Boolean||(Fe?function(e){try{return Pe.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===j(e)))}function We(e){return Ne(e)||Ye(e)}function Ge(){return new Function("return this;")()}c(We,"isPrimitive",Ne),c(We,"isObject",Ye);var Je="object"==typeof self?self:null,Xe="object"==typeof window?window:null,qe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ze="object"==typeof qe?qe:null;var De=function(e){if(arguments.length){if(!Ne(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return Ge()}if(Je)return Je;if(Xe)return Xe;if(ze)return ze;throw new Error("unexpected error. Unable to resolve global object.")}(),He=De.document&&De.document.childNodes,Ke=Int8Array;var Qe="function"==typeof Ue||"object"==typeof Ke||"function"==typeof He?function(e){return V(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?V(e).toLowerCase():r};function Ze(e){return"function"===Qe(e)}function $e(e,r){if(!(this instanceof $e))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ge(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!ge(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}c($e,"BYTES_PER_ELEMENT",8),c($e.prototype,"BYTES_PER_ELEMENT",8),c($e.prototype,"byteLength",16),c($e.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c($e.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var er="function"==typeof Math.fround?Math.fround:null,rr=new Y(1);var tr="function"==typeof er?er:function(e){return rr[0]=e,rr[0]};function nr(e,r){if(!(this instanceof nr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ge(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!ge(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:tr(e)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:tr(r)}),this}function or(e){return e instanceof $e||e instanceof nr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function ir(e){return Te(e/2)}function ar(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&A(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}c(nr,"BYTES_PER_ELEMENT",4),c(nr.prototype,"BYTES_PER_ELEMENT",4),c(nr.prototype,"byteLength",8),c(nr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(nr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var ur=ar()?Symbol.iterator:null;function fr(e,r,t){l(e,r,{configurable:!1,enumerable:!1,get:t})}function lr(e){return e.re}function cr(e){return e.im}function yr(e,r){return new Y(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function sr(e,r){return new M(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function hr(e,r){return e[r]}function pr(e,r){return e.get(r)}function mr(e,r,t){e[r]=t}function gr(e,r,t){e.set(t,r)}function br(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?pr:hr,setter:r?gr:mr}}function wr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(ke(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!or(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(lr(n),cr(n))}return r}function vr(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,ke(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!or(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(lr(i),cr(i))}return n}function dr(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!or(n=r[o]))return null;e[i]=lr(n),e[i+1]=cr(n),i+=2}return e}var Er=2*Y.BYTES_PER_ELEMENT,_r=ar();function Ar(e){return e instanceof Br||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Tr(e){return e===Br||"Complex128Array"===e.name}function jr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Er}function xr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*Er}function Br(){var e,r,t,n;if(r=arguments.length,!(this instanceof Br))return 0===r?new Br:1===r?new Br(arguments[0]):2===r?new Br(arguments[0],arguments[1]):new Br(arguments[0],arguments[1],arguments[2]);if(0===r)t=new Y(0);else if(1===r)if(Re(arguments[0]))t=new Y(2*arguments[0]);else if(Ie(arguments[0]))if((n=(t=arguments[0]).length)&&x(t)&&or(t[0])){if(null===(t=dr(new Y(2*n),t))){if(!ir(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Y(arguments[0])}}else{if(jr(t))t=yr(t,0);else if(xr(t))t=sr(t,0);else if(!ir(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Y(t)}else if(Oe(arguments[0])){if(!Te((t=arguments[0]).byteLength/Er))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Er+". Byte length: `"+t.byteLength+"`.");t=new Y(t)}else{if(!Me(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===_r)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Ze(t[ur]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Ze((t=t[ur]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=wr(t))instanceof Error)throw t;t=new Y(t)}else{if(!Oe(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Re(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!Te(e/Er))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Er+". Value: `"+e+"`.");if(2===r){if(!Te((n=t.byteLength-e)/Er))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Er+". View byte length: `"+n+"`.");t=new Y(t,e)}else{if(!Re(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Er>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Er+"`.");t=new Y(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}function Lr(e){return e.re}function Rr(e){return e.im}function Sr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(ke(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!or(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(Lr(n),Rr(n))}return r}function Vr(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,ke(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!or(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(Lr(i),Rr(i))}return n}function kr(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!or(n=r[o]))return null;e[i]=Lr(n),e[i+1]=Rr(n),i+=2}return e}c(Br,"BYTES_PER_ELEMENT",Er),c(Br,"name","Complex64Array"),c(Br,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,y;if(!Ze(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ze(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(Ar(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(or(l=n.call(r,e.get(c),c)))i[y]=lr(l),i[y+1]=cr(l);else{if(!(ke(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Ie(e)){if(n){for(u=e.length,a=br(e),c=0;c<u;c++)if(!or(a.getter(e,c))){f=!0;break}if(f){if(!ir(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(or(l=n.call(r,a.getter(e,c),c)))i[y]=lr(l),i[y+1]=cr(l);else{if(!(ke(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Me(e)&&_r&&Ze(e[ur])){if(!Ze((i=e[ur]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?vr(i,n,r):wr(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(Br,"of",(function(){var e,r;if(!Ze(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),fr(Br.prototype,"buffer",(function(){return this._buffer.buffer})),fr(Br.prototype,"byteLength",(function(){return this._buffer.byteLength})),fr(Br.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Br.prototype,"BYTES_PER_ELEMENT",Br.BYTES_PER_ELEMENT),c(Br.prototype,"copyWithin",(function(e,r){if(!Ar(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(Br.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!Ar(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new nr(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),c(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),ur&&c(t,ur,(function(){return r.entries()})),t})),c(Br.prototype,"get",(function(e){var r;if(!Ar(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Re(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new nr((r=this._buffer)[e*=2],r[e+1])})),fr(Br.prototype,"length",(function(){return this._length})),c(Br.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!Ar(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Re(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(or(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=lr(e),void(n[t+1]=cr(e))}if(Ar(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Er,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new Y(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Ie(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!or(e[f])){i=!0;break}if(i){if(!ir(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Er,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new Y(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=lr(u),n[t+1]=cr(u),t+=2}}));var Ir=2*M.BYTES_PER_ELEMENT,Cr=ar();function Or(e){return e instanceof Pr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Mr(e){return e===Pr||"Complex64Array"===e.name}function Ur(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Ir/2}function Nr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Ir}function Pr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Pr))return 0===r?new Pr:1===r?new Pr(arguments[0]):2===r?new Pr(arguments[0],arguments[1]):new Pr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new M(0);else if(1===r)if(Re(arguments[0]))t=new M(2*arguments[0]);else if(Ie(arguments[0]))if((n=(t=arguments[0]).length)&&x(t)&&or(t[0])){if(null===(t=kr(new M(2*n),t))){if(!ir(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new M(arguments[0])}}else{if(Ur(t))t=yr(t,0);else if(Nr(t))t=sr(t,0);else if(!ir(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new M(t)}else if(Oe(arguments[0])){if(!Te((t=arguments[0]).byteLength/Ir))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Ir+". Byte length: `"+t.byteLength+"`.");t=new M(t)}else{if(!Me(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Cr)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Ze(t[ur]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Ze((t=t[ur]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Sr(t))instanceof Error)throw t;t=new M(t)}else{if(!Oe(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Re(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!Te(e/Ir))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Ir+". Value: `"+e+"`.");if(2===r){if(!Te((n=t.byteLength-e)/Ir))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Ir+". View byte length: `"+n+"`.");t=new M(t,e)}else{if(!Re(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Ir>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Ir+"`.");t=new M(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}c(Pr,"BYTES_PER_ELEMENT",Ir),c(Pr,"name","Complex128Array"),c(Pr,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,y;if(!Ze(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Mr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ze(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(Or(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(or(l=n.call(r,e.get(c),c)))i[y]=Lr(l),i[y+1]=Rr(l);else{if(!(ke(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Ie(e)){if(n){for(u=e.length,a=br(e),c=0;c<u;c++)if(!or(a.getter(e,c))){f=!0;break}if(f){if(!ir(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(or(l=n.call(r,a.getter(e,c),c)))i[y]=Lr(l),i[y+1]=Rr(l);else{if(!(ke(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Me(e)&&Cr&&Ze(e[ur])){if(!Ze((i=e[ur]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Vr(i,n,r):Sr(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(Pr,"of",(function(){var e,r;if(!Ze(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Mr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),fr(Pr.prototype,"buffer",(function(){return this._buffer.buffer})),fr(Pr.prototype,"byteLength",(function(){return this._buffer.byteLength})),fr(Pr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Pr.prototype,"BYTES_PER_ELEMENT",Pr.BYTES_PER_ELEMENT),c(Pr.prototype,"copyWithin",(function(e,r){if(!Or(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(Pr.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!Or(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new $e(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),c(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),ur&&c(t,ur,(function(){return r.entries()})),t})),c(Pr.prototype,"get",(function(e){var r;if(!Or(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Re(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new $e((r=this._buffer)[e*=2],r[e+1])})),fr(Pr.prototype,"length",(function(){return this._length})),c(Pr.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!Or(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Re(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(or(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Lr(e),void(n[t+1]=Rr(e))}if(Or(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Ir,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new M(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Ie(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!or(e[f])){i=!0;break}if(i){if(!ir(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Ir,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new M(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Lr(u),n[t+1]=Rr(u),t+=2}}));var Fr=[M,Y,H,X,ne,$,me,ue,ye,Br,Pr],Yr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Wr=Yr.length;function Gr(e){var r,t=function(e){var r;if(x(e))return"generic";if(L(e))return null;for(r=0;r<Wr;r++)if(e instanceof Fr[r])return Yr[r];return k[V(e)]||null}(e);return"function"==typeof(r=e).get&&"function"==typeof r.set?{accessorProtocol:!0,accessors:[g(t),w(t)]}:{accessorProtocol:!1,accessors:[s(t),p(t)]}}function Jr(e){var r;if(!(this instanceof Jr))return new Jr(e);if(!Ie(e))throw new TypeError(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("null36",e));return r=Gr(e),this._buffer=e,this._getter=r.accessors[0],this._setter=r.accessors[1],this}c(Jr,"name","AccessorArray"),function(e,r,t,n){l(e,r,{configurable:!1,enumerable:!1,get:t,set:n})}(Jr.prototype,"length",(function(){return this._buffer.length}),(function(e){this._buffer.length=e})),c(Jr.prototype,"get",(function(e){return this._getter(this._buffer,e)})),c(Jr.prototype,"set",(function(e,r){arguments.length<2?this._setter(this._buffer,0,e):this._setter(this._buffer,r,e)}));export{Jr as default};
//# sourceMappingURL=mod.js.map
