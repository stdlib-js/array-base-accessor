<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# AccessorArray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a minimal array-like object supporting the accessor protocol from another array-like object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/array-base-accessor
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var AccessorArray = require( '@stdlib/array-base-accessor' );
```

<a name="constructor"></a>

#### AccessorArray( arr )

Creates a minimal array-like object supporting the accessor protocol from another array-like object.

```javascript
var arr = new AccessorArray( [ 1, 2, 3 ] );
// returns <AccessorArray>
```

* * *

### Properties

<a name="prop-length"></a>

#### AccessorArray.prototype.length

Number of array elements.

```javascript
var arr = new AccessorArray( [ 1, 2, 3 ] );
// returns <AccessorArray>

var len = arr.length;
// returns 3
```

* * *

### Methods

<a name="method-get"></a>

#### AccessorArray.prototype.get( i )

Returns an array element located at position (index) `i`.

```javascript
var arr = new AccessorArray( [ 1, 2, 3 ] );

// Get the first element:
var v = arr.get( 0 );
// returns 1
```

<a name="method-set"></a>

#### AccessorArray.prototype.set( v\[, i] )

Set an array element.

```javascript
var arr = new AccessorArray( [ 1, 2, 3 ] );

// Get the first element:
var v = arr.get( 0 );
// returns 1

// Set the first element:
arr.set( 5 );

// Get the first element:
v = arr.get( 0 );
// returns 5
```

By default, the method sets array elements starting at position (index) `i = 0`. To set elements starting elsewhere in the array, provide an index argument `i`.

```javascript
var arr = new AccessorArray( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] );

// Get the fifth element:
var v = arr.get( 4 );
// returns 5

// Set the fifth element:
arr.set( 11, 4 );

// Get the fifth element:
v = arr.get( 4 );
// returns 11
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

* * *

## Examples

<!-- eslint-disable no-restricted-syntax -->

<!-- eslint no-undef: "error" -->

```javascript
var AccessorArray = require( '@stdlib/array-base-accessor' );

// Define a class for creating a minimal sparse array-like object...
function SparseArray( len, values ) {
    this.length = len;
    this._data = values;
    return this;
}

SparseArray.prototype.get = function get( i ) {
    var v = this._data[ i ];
    if ( v === void 0 ) {
        return 0;
    }
    return v;
};

SparseArray.prototype.set = function set( v, i ) {
    this._data[ i ] = v;
};

// Define a function for printing the contents of an array and which assumes accessor protocol support:
function printArray( name, x ) {
    var i;
    for ( i = 0; i < x.length; i++ ) {
        console.log( '%s[%d] = %d', name, i, x.get( i ) );
    }
}

// Create a sparse array-like object:
var sparse = new SparseArray( 10, {
    '2': 1,
    '3': 2,
    '8': 3
});

// Create a dense array:
var arr = [ 0, 0, 1, 2, 0, 0, 0, 0, 3, 0 ];

// Convert the dense array to an accessor array to allow for uniform iteration:
var dense = new AccessorArray( arr );

// Print the contents of each array...
printArray( 'sparse', sparse );
printArray( 'dense', dense );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-accessor.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-accessor

[test-image]: https://github.com/stdlib-js/array-base-accessor/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/array-base-accessor/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-accessor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-accessor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-accessor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-accessor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-accessor/tree/deno
[umd-url]: https://github.com/stdlib-js/array-base-accessor/tree/umd
[esm-url]: https://github.com/stdlib-js/array-base-accessor/tree/esm
[branches-url]: https://github.com/stdlib-js/array-base-accessor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-accessor/main/LICENSE

</section>

<!-- /.links -->
