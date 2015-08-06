'use strict';

// FUNCTIONS //


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

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
