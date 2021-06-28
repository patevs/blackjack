/**
 *  * index.js
 */

'use strict';

// IMPORTS //

const chalk = require('chalk');

// Deck-o-cards
// const doc = require('./src/deck');

// Player model
// const Player = require('./src/Player').Player;

// Game model
const Game = require('./src/Game').Game;

// CONSTANTS //

const log = console.log;
// const error = chalk.bold.red;
const title = chalk.bold.green;

// FUNCTIONS //

// ..

// ENTRY POINT //

(() => {
  //
  require('clear')();
  // console.log("\n --- BLACKJACK --- \n");
  log("\n --- " + title("BLACKJACK") + " --- \n");
  // Create new game
  // const game = new Game();
  // Start game
  // game.play();
  new Game().play();
  //
})();

// EOF //
