/**
 *  * index.js
 */

'use strict';

/*************
 * * IMPORTS *
 *************/

const chalk = require('chalk');

const { Select } = require('enquirer');

// Deck-o-cards
// const doc = require('./src/deck');

// Player model
// const Player = require('./src/Player').Player;

// Game model
const Game = require('./src/Game').Game;

/***************
 * * CONSTANTS *
 ***************/

const log = console.log;
// const error = chalk.bold.red;
const title = chalk.bold.green;

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
  // console.log("\n --- BLACKJACK --- \n");
  log("\n --- " + title("BLACKJACK") + " --- \n");
  // Create new game
  // const game = new Game();
  // Start game
  // game.play();
  // new Game().play();
  const prompt = new Select({
    name: 'color',
    message: 'Pick a flavor',
    choices: ['apple', 'grape', 'watermelon', 'cherry', 'orange']
  });

  prompt.run()
    .then(answer => console.log('Answer:', answer))
    .catch(console.error);
  //
})();

// EOF //
