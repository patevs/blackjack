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
  constructor(hand) {
    this._hand = hand;
    this._actions = [];
    this._history = [];
  }
  present() {
    return "Your hand : " + this.hand;
  }
}

/*
class Model extends Player {
  constructor(hand, name) {
    super(hand);
    this._name = name;
  }
  show() {
    return this.present() + ', name is ' + this._name;
  }
  get name() {
    return this._name;
  }
  set name(x) {
    this._name = x;
  }
}
*/

// Usage:
// player = new Player(["card0", "card1"]);
// console.log(player.present());

// EOF //
