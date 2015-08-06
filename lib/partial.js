'use strict';

// MODULES //

var gamma = require( 'gamma' );


// VARIABLES //

var EPSILON = 1e-12;


// PARTIAL //

/**
* FUNCTION: partial( lambda, k )
*	Partially applies scale paramater `lambda` and shape parameter `k` and returns a function for evaluating the moment-generating function (MGF) for a Weibull distribution.
*
* @param {Number} lambda - scale paramater
* @param {Number} k - shape parameter
* @returns {Function} MGF
*/
function partial( lambda, k ) {

	/**
	* FUNCTION: mgf( t )
	*	Evaluates the moment-generating function (MGF) for a Weibull distribution.
	*
	* @private
	* @param {Number} t - input value
	* @returns {Number} evaluated MGF
	*/
	return function mgf( t ) {
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
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
