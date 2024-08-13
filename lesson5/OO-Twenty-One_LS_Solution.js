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

class Card {
  constructor() {
    //STUB
    // What state is needed for a card?
    // Rank? Suit? Points?
  }
}

class Deck {
  constructor() {
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
}

class Participant {
  constructor() {
    //STUB
    // state that both participants share?
    // e.g. Score, Hand, money available?
  }
}

class Player extends Participant {
  constructor() {
    super();
    //STUB
    // state that only belongs to Player
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

class Dealer extends Participant {
  // Very similar to a Player; do we need this?

  constructor() {
    super();
    //STUB
    // What sort of state does a dealer need?
    // Score? Hand? Deck of cards? Bow tie?
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

  hide() {
    //STUB
  }

  reveal() {
    //STUB
  }

  deal() {
    //STUB
    // does the dealer or the deck deal?
  }
}

class TwentyOneGame {
  constructor() {
    //STUB
    // state?
    // e.g. a Deck? Two participants?
  }

  start() {
    //SPIKE
    this.displayWelcomeMessage();
    this.dealCards();
    this.showCards();
    this.playerTurn();
    this.dealerTurn();
    this.displayResult();
    this.displayGoodbyeMessage();
  }

  dealCards() {
    //STUB
  }

  showCards() {
    //STUB
  }

  playerTurn() {
    //STUB
  }

  dealerTurn() {
    //STUB
  }

  displayWelcomeMessage() {
    //STUB
  }

  displayGoodbyeMessage() {
    //STUB
  }

  displayResult() {
    //STUB
  }
}

let twenty1Game = new TwentyOneGame();
twenty1Game.start();