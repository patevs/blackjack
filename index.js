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

const playGame = () => {
	// ..
	// let hand = 0;
  // Shuffle deck
  let deck = doc.randomizedDeck();
  dealHand(deck);
  // while(playing && deck.length > 8){
		// hand++;
    // console.log("Hand Number : " + hand);
    // let card = deck.pop();
		// console.log(card);
    // dealHand(deck);
  // }
	// ..
};

const dealHand = (deck) => {
  // ..
  // if(deck.length < 9) process.exit();
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

  // playHand(dealerHand, playerHand);
  console.log(playerHand);
  // console.log(playerHand[0] + " " + playerHand[1]);
  // ..
};

/*
const playHand = (dealer, player) => {
  //
  // console.log(playerHand);
  console.log("Your Hand : " + player);
  //
  console.log("Dealer Hand : " + dealer);
  // var name = window.
  // let action = prompt("[C]heck, [B]et 10, or [F]old");
  // console.log(" > " + action);
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question(`[C]heck, [B]et 10, or [F]old`, (name) => {
    console.log(`You ${name}!`)
    readline.close()
  })
};
*/

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
	playGame();
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
