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
const Player = require('./Player').Player;

/****************
 * * GAME CLASS *
 ****************/

class Game {
  constructor() {
    this._deck = doc.randomizedDeck();
    this._dealer = new Player();
    this._player = new Player();
  }
  // Functions
  play() {
    console.log("\nPlaying game...\n");
    // Deal a hand
    this.dealHand();
  }
  dealHand() {
    // Handle edge cases
    // if(deck.length < 9) process.exit();
    // Burn a card
    this._deck.pop();
    // console.log(deck.length);

    // Deal to player first
    this._player.addCardToHand(this._deck.pop());
    // this._player.hand(this._deck.pop());
    // this._dealer.hand(this._deck.pop());
    // this._player.hand(this._deck.pop());
    // this._dealer.hand(this._deck.pop());

    console.log(this._player.getHand());

    // let playerHand = [];
    // let dealerHand = [];

    // Deal the cards
    // playerHand.push(this._deck.pop());
    // dealerHand.push(this._deck.pop());
    // playerHand.push(this._deck.pop());
    // dealerHand.push(this._deck.pop());

    // console.log(playerHand);
    // this.showHands(dealerHand, playerHand);
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
