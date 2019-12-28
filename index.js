/**
 *  * index.js
 */

'use strict';

/*************
 * * IMPORTS *
 *************/

// Deck-o-cards
const doc = require('./src/deck');

// Game model
const Game = require('./src/Game').Game;

/***************
 * * FUNCTIONS *
 ***************/

//

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
  game.play();
  //
})();

// EOF //
