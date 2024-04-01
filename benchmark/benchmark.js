/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var Float64Array = require( '@stdlib/array-float64' );
var randu = require( '@stdlib/random-base-randu' );
var pkg = require( './../package.json' ).name;
var AccessorArray = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var arr;
	var o;
	var i;

	arr = new Float64Array( [ randu(), randu() ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] = i;
		o = new AccessorArray( arr );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !(o instanceof AccessorArray) ) {
		b.fail( 'should return an accessor array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':length', function benchmark( b ) {
	var arr;
	var o;
	var v;
	var i;

	arr = new Float64Array( [ randu(), randu() ] );
	o = new AccessorArray( arr );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] = i;
		v = o.length; // note: this benchmark may be optimized away
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':get', function benchmark( b ) {
	var arr;
	var o;
	var v;
	var i;

	arr = new Float64Array( [ randu(), randu() ] );
	o = new AccessorArray( arr );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] = i;
		v = o.get( i%arr.length );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':set', function benchmark( b ) {
	var arr;
	var o;
	var i;

	arr = new Float64Array( [ randu(), randu() ] );
	o = new AccessorArray( arr );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		o.set( i, i%arr.length );
		if ( arr[ 0 ] !== arr[ 0 ] ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( arr[ 1 ] !== arr[ 1 ] ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
