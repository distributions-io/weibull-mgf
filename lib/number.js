'use strict';

// MODULES //

var gamma = require( 'gamma' );


// VARIABLES //

var EPSILON = 1e-12;


// MGF //

/**
* FUNCTION: mgf( x, lambda, k )
*	Evaluates the moment-generating function (MGF) for a Weibull distribution with scale paramater `lambda` and shape parameter `k` at a value `t`.
*
* @param {Number} t - input value
* @param {Number} lambda - scale paramater
* @param {Number} k - shape parameter
* @returns {Number} evaluated MGF
*/
function mgf( t, lambda, k ) {
	var sum = 1,
		summand,
		c = 1,
		n = 0;

	do {
		n += 1;
		c *= ( t * lambda ) / n;
		summand = c * gamma( 1 + n / k );
		sum += summand;
	} while ( summand / sum > EPSILON );

	return sum;
} // end FUNCTION mgf()


// EXPORTS //

module.exports = mgf;
