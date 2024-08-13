/* eslint-disable max-len */
/* Description

Twenty-One is a card game with a dealer and a player.
The participants try to get as close to 21 points as possible without going over.
The game starts by dealing cards from a 52-card deck consisting of cards from 4 suits of 13 ranks each.
Both participants receive two cards.
 - The dealer hides one of his cards (places it face-down) so that the player can't see what it is.
 - The player can see both of her cards.

The player takes the first turn, and can hit or stay.
 - If the player hits, she gets another card, and again has the opportunity to hit (get another card) or stay.
 - If the player goes over 21 points, she busts.
 - If the player stays, the dealer plays next.

If the player didn't bust, it's now the dealer's turn.
 - The dealer reveals his face-down card.
 - If the dealer's total points are less than 17, he must hit and receive another card.
 - If the dealer goes over 21 points, he busts.
 - If the dealer has 17 points or more, he must stay.

Results of the game are determined.


Nouns: game, player, dealer, participant, deck, card, score, points

Verbs: start, deal (cards), hit, stay, win, lose, tie, bust, hide, reveal (face down), draw (card), determine (results)

Game (n)
 - start (v)
 - determine results (v)

Deck (n)
 - deal (v) (should this be here or in Dealer?)

Card (n)

Participant (n)
 - hit (v)
  - draw card (v)
 - stay (v)
 - bust (state)
 - Score (n, state)

Player extends Participant (n)

Dealer extends Participant (n)
 - reveal (v) -> facedown card (should this be here?)


RR:
Welcome the player to the game, and say good bye when they quit.

Each time the player has an opportunity to hit or stay:

- Display the computer's hand; one card should remain hidden.
- Display the player's hand and her point total.

Dealers turn:

- The dealer doesn't play at all if the player busts.
- Display the dealer's hand, including the hidden card, and report his point total.
- Redisplay the dealer's hand and point total and each time he hits.
- Display the results when the dealer stays.

After each game is over, ask the player if they want to play again. Start a new game if they say yes, else end the game.

When the program starts, give the player 5 dollars with which to bet.
Deduct 1 dollar each time she loses, and add 1 dollar each time she wins.
The program should quit when she is broke (0 dollars) or rich (has a total of 10 dollars).

Be prepared to run out of cards.
You can either create a new deck for each game,
or keep track of how many cards remain and create a new deck as needed.
*/
const readline = require("readline-sync");

class Card {
  constructor(suit, rank) {
    this.rank = rank;
    this.suit = suit;
    this.name = suit + " " + rank;
    // this.points = null;  // maybe for participants?
  }
}

class Deck {
  static ACE = "A";
  static FACE10 = ["J", "Q", "K"];

  constructor() {
    this.cards = this.initializeDeck();
    //STUB
    // what state is needed?
    // 52 cards?
    // Data structure to keep track of cards:
    // Array, Obj, or sth. else?
  }

  deal() {
    //STUB
    // does the Dealer or the Deck deal?
  }

  shuffle(deck) {
    for (let index = deck.length - 1; index > 0; index--) {
      let otherIndex = Math.floor(Math.random() * (index + 1));  // num between 0 and index
      [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]];  //swap cards
    }
    return deck;
  }

  initializeDeck() {
    let deck = [];

    for (let cards = 1; cards <= 52; cards++) {
      if (cards <= 13) deck.push(["H", String(cards + 1)]);
      if (cards > 13 && cards <= 26) deck.push(["D", String(cards + 1 - 13)]);
      if (cards > 26 && cards <= 39) deck.push(["C", String(cards + 1 - 26)]);
      if (cards > 39 && cards <= 52) deck.push(["S", String(cards + 1 - 39)]);
    }
    deck.forEach(card => {
      if (card[1] === "11") card[1] = "J";
      if (card[1] === "12") card[1] = "Q";
      if (card[1] === "13") card[1] = "K";
      if (card[1] === "14") card[1] = "A";
    });

    return this.shuffle(deck);
  }

  draw() {
    //STUB
    let newCard = this.cards.pop();
    return new Card(...newCard);
  }
}

class Participant {
  constructor() {
    this.hand = [];
    //STUB
    // state that both participants share?
    // e.g. Score, Hand, money available?
  }

  hit() {
    //STUB
  }

  stay() {
    //STUB
  }

  isBusted() {
    //STUB
  }

  score() {
    //STUB
  }
}

class Player extends Participant {
  constructor() {
    super();
    //STUB
    // state that only belongs to Player
  }
}

class Dealer extends Participant {
  static MINIMUM_TOTAL_VALUE = 17;

  constructor() {
    super();
    //STUB
    // What sort of state does a dealer need?
    // Score? Hand? Deck of cards? Bow tie?
  }

  hide() {
    //STUB
  }

  reveal() {
    //STUB
  }

  // deal() {
  //   //STUB
  //   // does the dealer or the deck deal?
  // }
}

class TwentyOneGame {
  static HIT_OR_STAY = {hit: ["hit", "h"], stay: ["stay", "s"]};
  static TOTAL_VALUE_LIMIT = 21;

  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
    //STUB
    // state?
    // e.g. a Deck? Two participants?
  }

  start() {
    //SPIKE
    this.displayWelcomeMessage();
    this.dealCards();
    this.showCards();
    // this.playerTurn();
    // this.dealerTurn();
    // this.displayResult();
    // this.displayGoodbyeMessage();
  }

  dealCards() {
    //STUB
    while (this.player.hand.length < 2) {
      this.player.hand.push(this.deck.draw().name);
      this.dealer.hand.push(this.deck.draw().name);
    }
  }

  showCards() {
    console.log(`Dealer cards: 
  ${this.dealer.hand[0]}, N.N.`);
    console.log("");
    console.log("");
    console.log(`Your cards:
  ${this.player.hand.join(", ")}`);
  }

  getPlayerMove() {
    let hitOrStay;

    while (!TwentyOneGame.HIT_OR_STAY.includes(hitOrStay)) {
      hitOrStay = readline.question("Do you 'hit' (h) or 'stay' (s)").toLowerCase();
    }

    return hitOrStay;
  }

  playerTurn() {
    //SPIKE
    let playerMove = this.getPlayerMove();
    if (playerMove[0] === "h") this.player.hit();
    if (playerMove[0] === "s") this.player.stay();
  }

  dealerTurn() {
    //STUB
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Twenty-One!");
    console.log("");
  }

  displayGoodbyeMessage() {
    console.clear();
    console.log("Thanks for playing!");
  }

  displayResult() {
    //STUB
  }
}

let twenty1Game = new TwentyOneGame();
twenty1Game.start();
// let deck = new Deck();
// console.log(deck.draw());