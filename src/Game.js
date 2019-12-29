/**
 *  * src/Game.js
 *
 * Resources:
 *  https://www.w3schools.com/js/js_classes.asp
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

'use-strict'

/*************
 * * IMPORTS *
 *************/

// Deck of cards
const doc = require('./Deck');

// Player model
const Dealer = require('./Player').Dealer;
const Player = require('./Player').Player;

/****************
 * * GAME CLASS *
 ****************/

class Game {
  constructor() {
    this._deck = doc.randomizedDeck();
    this._dealer = new Dealer();
    this._player = new Player();
  }
  // Functions
  play() {
    // console.log("\nPlaying game...\n");
    // Deal a hand
    this.dealHand();
    this.playHand();
  }
  dealHand() {
    // Handle edge cases
    // if(deck.length < 9) process.exit();
    // Burn a card
    this._deck.pop();
    // console.log(deck.length);

    // Deal to player first
    this._player.addCardToHand(this._deck.pop());
    this._dealer.addCardToHand(this._deck.pop());
    this._player.addCardToHand(this._deck.pop());
    this._dealer.addCardToHand(this._deck.pop());

    // Display dealers hand
    this._dealer.printHand();
    // Display players hand
    this._player.printHand();
  }
  playHand() {
    // prompt user input
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'theme',
          message: 'What do you want to do?',
          choices: [
            'Order a pizza',
            'Make a reservation',
          ]
        }
      ])
      .then(answers => {
        console.log(JSON.stringify(answers, null, '  '));
      });
  }
}

/*************
 * * EXPORTS *
 *************/

module.exports = {
  Game
};

// EOF //
