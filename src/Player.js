/**
 *  * src/Player.js
 *
 * Resources:
 *  https://www.w3schools.com/js/js_classes.asp
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

'use-strict'

/******************
 * * PLAYER CLASS *
 ******************/

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
    // let sum = -1;
    // let value = this._hand[0][2];

    const score = this._hand[0][2] + this._hand[1][2];

    console.log(score);
  }
}

/*************
 * * EXPORTS *
 *************/

module.exports = {
  Player
};

// EOF //
