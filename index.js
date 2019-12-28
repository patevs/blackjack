/**
 *  * index.js
 */

'use strict';

/*************
 * * IMPORTS *
 *************/

// Deck-o-cards
// const doc = require('./src/deck');

// Game model
const game = require('src/Game');

/***************
 * * FUNCTIONS *
 ***************/

/*
const playGame = () => {
	//
  // Shuffle deck
  let deck = doc.randomizedDeck();
  dealHand(deck);
	//
};

const dealHand = (deck) => {
  //
  // Handle edge cases
  // if(deck.length < 9) process.exit();
  // Burn a card
  deck.pop();
  // console.log(deck.length);

  let playerHand = [];
  let dealerHand = [];

  // Deal the cards
  playerHand.push(deck.pop());
  dealerHand.push(deck.pop());
  playerHand.push(deck.pop());
  dealerHand.push(deck.pop());

  console.log(playerHand);
  // console.log(playerHand[0] + " " + playerHand[1]);
  //
};
*/

/*****************
 * * ENTRY POINT *
 *****************/

(() => {
  //
  console.log("\n --- BLACKJACK --- \n");
  // playGame();
  // Shuffle deck
  let deck = doc.randomizedDeck();
  // Create new game
  let game = new Game(deck);
  //
})();

// EOF //
