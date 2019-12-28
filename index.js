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

let hand = 0;

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
	// let hand = 0;
  // Shuffle deck
  let deck = doc.randomizedDeck();
  while(playing && deck.length > 0){
		// hand++;
    // console.log("Hand Number : " + hand);
    // let card = deck.pop();
		// console.log(card);
    playHand(deck);
  }
	// ..
};

const playHand = (deck) => {
  // ..
  if(deck.length < 9) process.exit();
  hand++;
  console.log("\n Hand Number : " + hand + "\n");
  // burn a card
  deck.pop();
  // console.log(deck.length);

  let playerHand = [];
  let dealerHand = [];

  // deal the cards
  playerHand.push(deck.pop());
  dealerHand.push(deck.pop());
  playerHand.push(deck.pop());
  dealerHand.push(deck.pop());

  console.log(playerHand);
  // ..
};

/*
const dealHand = (deck) => {
  // ..
  deck.pop();

  let hand = deck.pop();

  console.log(hand);

	// ..
};
*/

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
