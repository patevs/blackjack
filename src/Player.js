/**
 *  * src/Player.js
 *
 * Resources:
 *  https://www.w3schools.com/js/js_classes.asp
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
 */

'use-strict'

class Player {
  constructor(hand) {
    this.hand = hand;
  }
  present() {
    return "Your hand : " + this.hand;
  }
}

// usage:
// player = new Player(["card0", "card1"]);
// console.log(player.present());

// EOF //
