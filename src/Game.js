/**
 *  * src/Game.js
 *
 * Resources:
 *  https://www.w3schools.com/js/js_classes.asp
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

'use-strict'

/****************
 * * GAME CLASS *
 ****************/

class Game {
  constructor(deck) {
    this._deck = deck;
  }
  // Functions
  get deck() {
    return this._deck;
  }
  set deck(deck) {
    this._deck = deck;
  }
}

// EOF //
