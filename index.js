/**
 *  * index.js
 */

'use strict';

/*************
 * * IMPORTS *
 *************/

// Deck-o-cards
// const doc = require('./src/deck');

// Player model
// const Player = require('./src/Player').Player;

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
  require('clear')();
  console.log("\n --- BLACKJACK --- \n");
  // Create new game
  // const game = new Game();
  // Start game
  // game.play();
  new Game().play();
  // Create dealer and player
  // let dealer = new Player();
  // let player = new Player();
  // Shuffle deck
  // let deck = doc.randomizedDeck();
  // Create new game
  // let game = new Game(deck);
  // game.play();
  //
})();

// EOF //
