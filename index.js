/**
 *  * index.js
 */

'use strict';

/*************
 * * IMPORTS *
 *************/

// Deck-o-cards
const doc = require('./src/deck');

/*************
 * * GLOBALS *
 *************/

let playing = true;

/***************
 * * FUNCTIONS *
 ***************/

/*
const setup = () => {
	// ..
	//
	// ..
}
*/

const loop = () => {
	// ..
	let hand = 0;
	while(playing && deck.length > 0){
		hand++;
    console.log("Hand Number : " + hand);
    // Shuffle deck
    let deck = doc.randomizedDeck();
		let card = deck.pop();
		console.log(card);
    // dealHand(deck);
  }
	// ..
};

const dealHand = (deck) => {
  // ..
  deck.pop();

  let hand = deck.pop();

  console.log(hand);

	// ..
};

/*****************
 * * ENTRY POINT *
 *****************/

(() => {
	console.log("\n --- BLACKJACK --- \n");
	// Shuffle
	// let deck = doc.randomizedDeck();
	// console.log(deck);
	// console.log(deck[0]);
	loop();
})();

/*
module.exports = (input, {postfix = 'rainbows'} = {}) => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	return `${input} & ${postfix}`;
};
*/

// EOF //
