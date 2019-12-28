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
// const Game = require('./src/Game').Game;

const Player = require('./src/Player').Player;

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
  // Create dealer and player
  let dealer = new Player();
  // Shuffle deck
  // let deck = doc.randomizedDeck();
  // Create new game
  // let game = new Game(deck);
  // game.play();
  //
})();

// EOF //
