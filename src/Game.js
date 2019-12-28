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

/****************
 * * GAME CLASS *
 ****************/

class Game {
  // constructor() { }
  // Functions
  play() {
    console.log("\nPlaying game...\n");
    // this.dealHand();
  }
  dealHand() {
    // Handle edge cases
    // if(deck.length < 9) process.exit();
    // Burn a card
    this._deck.pop();
    // console.log(deck.length);

    let playerHand = [];
    let dealerHand = [];

    // Deal the cards
    playerHand.push(this._deck.pop());
    dealerHand.push(this._deck.pop());
    playerHand.push(this._deck.pop());
    dealerHand.push(this._deck.pop());

    // console.log(playerHand);
    this.showHands(dealerHand, playerHand);
  }
  showHands(dealer, player) {
    console.log("Your Hand : " + player);
    console.log("Dealer's Hand : " + dealer);
  }
  scoreHand(hand) {
    // Calculate hand value
  }
  // Getters & Setters
  get deck() {
    return this._deck;
  }
  set deck(deck) {
    this._deck = deck;
  }
}

/*************
 * * EXPORTS *
 *************/

module.exports = {
  Game
};

// EOF //
