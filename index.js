/**
 *  * index.js
 */

'use strict';

/*************
 * * IMPORTS *
 *************/

// Deck-o-cards
const doc = require('./src/deck');

// Shuffle
let deck = doc.randomizedDeck();

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
