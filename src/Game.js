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

/*
const playGame = () => {
	//
  // Shuffle deck
  let deck = doc.randomizedDeck();
  dealHand(deck);
	//
};

const dealHand = (deck) => {
  //
  // Handle edge cases
  // if(deck.length < 9) process.exit();
  // Burn a card
  deck.pop();
  // console.log(deck.length);

  let playerHand = [];
  let dealerHand = [];

  // Deal the cards
  playerHand.push(deck.pop());
  dealerHand.push(deck.pop());
  playerHand.push(deck.pop());
  dealerHand.push(deck.pop());

  console.log(playerHand);
  // console.log(playerHand[0] + " " + playerHand[1]);
  //
};
*/

// EOF //
