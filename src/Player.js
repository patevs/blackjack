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
  constructor(isDealer) {
    this._isDealer = isDealer;
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
    if (this._isDealer) {
      console.log(" DEALERS HAND : ");
    } else {
      console.log(" YOUR HAND : ");
      let card0 = this._hand[0][2] + " " + this._hand[0][0];
      let card1 = this._hand[1][2] + " " + this._hand[1][0];
      console.log("  ------   ------ ");
      console.log(" | " + card0 + " | | " + card1 + " | ");
      console.log("  ------   ------ ");
      console.log("\n You Have : " + this.scoreHand() + "\n");
    }
  }
}

/*************
 * * EXPORTS *
 *************/

module.exports = {
  Player
};

// EOF //
