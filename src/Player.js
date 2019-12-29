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
}

/*************
 * * EXPORTS *
 *************/

module.exports = {
  Player
};

// EOF //
