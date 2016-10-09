class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }
}

class Deck {
  constructor() {
    this.deck = [];
  }

  makeDeck() {
    const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Joker', 'Queen', 'King'];
    const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    ranks.map((rank, i) => {
      suits.map((suit, j) => {
        this.deck.push(new Card(rank, suit));
      });
    });
    console.log(this.deck);
  }

  toString() {

  }
}

const deck = new Deck();

console.log(deck.makeDeck());
