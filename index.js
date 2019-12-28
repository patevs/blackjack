/**
 *  * index.js
 */

'use strict';

/*************
 * * IMPORTS *
 *************/

const deck = require('src/deck');

deck.randomizedDeck();

console.log(deck);

/*
module.exports = (input, {postfix = 'rainbows'} = {}) => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	return `${input} & ${postfix}`;
};
*/

// EOF //
