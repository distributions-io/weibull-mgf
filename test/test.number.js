/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Check whether an element is a finite number
	isFiniteNumber = require( 'validate.io-finite' ),

	// Check whether an element is `NaN`
	isnan = require( 'validate.io-nan' ),

	// Module to be tested:
	mgf = require( './../lib/number.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'number mgf', function tests() {

	var	validationData = require( './fixtures/number.json' ),
		data = validationData.data,
		expected = validationData.expected.map( function( d ) {
			return d === 'Inf' ? Infinity : d;
		}),
		lambda = validationData.lambda,
		k = validationData.k;

	it( 'should export a function', function test() {
		expect( mgf ).to.be.a( 'function' );
	});

	it( 'should evaluate the moment-generating function', function test() {
		var actual;
		for ( var i = 0; i < data.length; i++ ) {
			actual =  mgf( data[ i ], lambda, k );
			if ( isFiniteNumber( actual ) && isFiniteNumber( expected[ i ] ) ) {
				assert.closeTo( actual, expected[ i ] , 1e-14 );
			}
		}
	});

	it( 'should return `NaN` if provided `NaN` as input', function test() {
		assert.isTrue( isnan( mgf( NaN, lambda, k ) ) );
	});

});
