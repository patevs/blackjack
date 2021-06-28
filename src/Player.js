/**
 *  * src/Player.js
 *
 * Resources:
 *  https://www.w3schools.com/js/js_classes.asp
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

'use-strict'

// IMPORTS //

const boxen = require('boxen');

// PLAYER CLASS //

class Player {
  constructor() {
    this._hand = [];
    // this._actions = [];
    // this._history = [];
  }
  // Functions
  addCardToHand(card) {
    this._hand.push(card);
  }
  getHand() {
    return this._hand;
  }
  scoreHand() {
    // const score = this._hand[0][2] + this._hand[1][2];
    // console.log(score);
    return this._hand[0][2] + this._hand[1][2];
  }
  printHand() {
    console.log("\n YOUR HAND : ");
    let card0 = this._hand[0][2] + " " + this._hand[0][0];
    let card1 = this._hand[1][2] + " " + this._hand[1][0];
    console.log(boxen(card0, {float: 'left', margin: 1}) + boxen(card1, {float: 'left', margin: 1}));
    // console.log("  ------   ------ ");
    // console.log(" | " + card0 + " | | " + card1 + " | ");
    // console.log("  ------   ------ ");
    console.log("\n You have : " + this.scoreHand() + "\n");
  }
}

// DEALER CLASS //

class Dealer extends Player {
  constructor(){
    super();
    this.isDealer = true;
  }
  scoreHand() {
    return this._hand[0][2]; // + this._hand[1][2];
  }
  printHand() {
    console.log(" DEALERS HAND : ");
    let card0 = this._hand[0][2] + " " + this._hand[0][0];
    console.log(boxen(card0, {float: 'left', margin: 1}));
    // console.log("  ------ ");
    // console.log(" | " + card0 + " | ");
    // console.log("  ------ ");
    console.log("\n Dealer has : " + this.scoreHand() + "\n");
  }
}

// EXPORTS //

module.exports = {
  Player,
  Dealer
};

// EOF //
