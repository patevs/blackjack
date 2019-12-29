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

const boxen = require('boxen');

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
    // console.log("Playing Hand...");
    console.log(boxen('unicorn', {padding: 1, margin: 1, borderStyle: 'double'}));
  }
}

/*************
 * * EXPORTS *
 *************/

module.exports = {
  Game
};

// EOF //
