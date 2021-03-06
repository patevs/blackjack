/**
 *  * src/Deck.js
 *  https://github.com/DanielDwyer/deck-o-cards
 */

'use-strict'

// IMPORTS //

// ..

// FUNCTIONS //

const randomizedDeck = () => {

  var deck = [
      ["❤️", "Ace", 11],
      ["❤️", "Two", 2],
      ["❤️", "Three", 3],
      ["❤️", "Four", 4],
      ["❤️", "Five", 5],
      ["❤️", "Six", 6],
      ["❤️", "Seven", 7],
      ["❤️", "Eight", 8],
      ["❤️", "Nine", 9],
      ["❤️", "Ten", 10],
      ["❤️", "Jack", 10],
      ["❤️", "Queen", 10],
      ["❤️", "King", 10],
      ["♠️", "Ace", 11],
      ["♠️", "Two", 2],
      ["♠️", "Three", 3],
      ["♠️", "Four", 4],
      ["♠️", "Five", 5],
      ["♠️", "Six", 6],
      ["♠️", "Seven", 7],
      ["♠️", "Eight", 8],
      ["♠️", "Nine", 9],
      ["♠️", "Ten", 10],
      ["♠️", "Jack", 10],
      ["♠️", "Queen", 10],
      ["♠️", "King", 10],
      ["♦️", "Ace", 11],
      ["♦️", "Two", 2],
      ["♦️", "Three", 3],
      ["♦️", "Four", 4],
      ["♦️", "Five", 5],
      ["♦️", "Six", 6],
      ["♦️", "Seven", 7],
      ["♦️", "Eight", 8],
      ["♦️", "Nine", 9],
      ["♦️", "Ten", 10],
      ["♦️", "Jack", 10],
      ["♦️", "Queen", 10],
      ["♦️", "King", 10],
      ["♣️", "Ace", 11],
      ["♣️", "Two", 2],
      ["♣️", "Three", 3],
      ["♣️", "Four", 4],
      ["♣️", "Five", 5],
      ["♣️", "Six", 6],
      ["♣️", "Seven", 7],
      ["♣️", "Eight", 8],
      ["♣️", "Nine", 9],
      ["♣️", "Ten", 10],
      ["♣️", "Jack", 10],
      ["♣️", "Queen", 10],
      ["♣️", "King", 10],
  ]

  return shuffleDeck(deck);
};

const shuffleDeck = (deck) => {
  var i = 0
    , j = 0
    , temp = null

  for (i = deck.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }
  // console.log(deck)  --uncomment for testing (when using $ node index.js)
  return deck
};

// EXPORTS //

// randomizedDeck()  --uncomment for testing (when using node index.js)

module.exports = {
  randomizedDeck:randomizedDeck
}

// EOF //
