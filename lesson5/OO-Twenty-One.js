/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
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
    let newCard = this.cards.pop();
    return new Card(...newCard);
  }
}

class Participant {
  constructor() {
    this.hand = [];
    this.score = 0;
    this.busted = false;
    //STUB
    // state that both participants share?
    // e.g. Score, Hand, money available?
  }

  hit(hand, deck) {
    let newCard = deck.draw().name;
    hand.push(newCard);
  }

  stay() {  // needs check
    console.log("");
    console.log(`=> ${this.constructor.name} chose "Stay"!`);
    this.displayHandValue();
  }

  displayHandValue() {
    console.log("");
    console.log(`${this.constructor.name}s current value is:`);
    console.log(this.score);
  }

  calculateScore() {
    let handValues = this.hand.map(card => {
      let arr = card.split(" ");
      if (Deck.FACE10.includes(arr[1])) return 10;
      if (Deck.ACE.includes(arr[1])) return 11;

      return Number(arr[1]);
    });

    let acesInHand = handValues.filter(val => val === 11).length;
    let rawScore = handValues.reduce((acc, num) => acc + num, 0);

    while (acesInHand > 1) {
      rawScore -= 10;
      acesInHand -= 1;
    }

    this.score = rawScore;
  }
}

class Player extends Participant {
  constructor() {
    super();
  }

  showCards(clear) {
    if (clear) console.clear();
    console.log(`Player cards: 
  ${this.hand.join(", ")}`);
  }
}

class Dealer extends Participant {
  static MINIMUM_TOTAL_VALUE = 17;

  constructor() {
    super();
  }

  showCards(clear) {
    if (clear) console.clear();
    console.log(`Dealer cards: 
  ${this.hand.join(", ")}`);
  }

  hit(hand, deck) {
    console.log("=> Dealer chose 'hit!");
    console.log("");
    let newCard = deck.draw().name;
    hand.push(newCard);
  }

  stay() {
    console.clear();
    this.showCards();
    this.displayHandValue();
    console.log(`
=> ${this.constructor.name} chose "Stay"!`);
  }
}

class TwentyOneGame {
  static HIT_OR_STAY = {hit: ["hit", "h"], stay: ["stay", "s"]};
  static TOTAL_VALUE_LIMIT = 21;

  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
  }

  start() {
    this.displayWelcomeMessage();
    do {
      this.deck = new Deck();
      this.resetParticipants();
      this.dealCards();
      this.showCards();
      this.playerTurn();

      if (this.player.busted) {
        console.clear();
        console.log(`You busted with ${this.player.score}!`);
      } else {
        this.dealerTurn();

        if (this.dealer.busted) {
          console.clear();
          console.log("Dealer busted!");
        }
      }
      this.displayResult();
    } while (this.playAgain());

    this.displayGoodbyeMessage();
  }

  dealCards() {
    while (this.player.hand.length < 2) {
      this.player.hand.push(this.deck.draw().name);
      this.dealer.hand.push(this.deck.draw().name);
    }
  }

  showCards() {
    console.clear();
    console.log(`Dealer cards: 
  ${this.dealer.hand[0]}, N.N.`);
    console.log("");
    console.log("");
    console.log(`Player cards:
  ${this.player.hand.join(", ")}`);
  }

  isBusted(score) {
    return score > TwentyOneGame.TOTAL_VALUE_LIMIT;
  }

  resetParticipants() {
    this.player.hand = [];
    this.dealer.hand = [];
    this.player.score = 0;
    this.dealer.score = 0;
    this.player.busted = false;
    this.dealer.busted = false;
  }

  getPlayerMove() {
    let hitOrStay;
    let validChoices = Object.values(TwentyOneGame.HIT_OR_STAY);

    while (!validChoices[0].includes(hitOrStay) &&
           !validChoices[1].includes(hitOrStay)) {
      hitOrStay = readline.question("\nDo you 'hit' (h) or 'stay' (s)\n").toLowerCase();
    }

    return hitOrStay;
  }

  playerTurn() {
    this.dealer.calculateScore();
    this.player.calculateScore();
    this.player.displayHandValue();
    let playerMove = this.getPlayerMove();

    while (playerMove[0] === "h") {
      this.player.hit(this.player.hand, this.deck);
      this.player.calculateScore();
      this.showCards();
      this.player.displayHandValue();

      if (this.isBusted(this.player.score)) break;
      playerMove = this.getPlayerMove();
    }
    if (this.isBusted(this.player.score)) this.player.busted = true;

    if (playerMove[0] === "s") this.player.stay();
  }

  dealerTurn() {
    this.dealer.showCards(true);
    this.dealer.displayHandValue();

    while (this.dealer.score < Dealer.MINIMUM_TOTAL_VALUE) {
      this.dealer.hit(this.dealer.hand, this.deck);
      readline.question("Press Enter to continue!");
      this.dealer.calculateScore();
      this.dealer.showCards(true);
      this.dealer.displayHandValue();

      if (this.isBusted(this.dealer.score)) break;
    }

    if (this.isBusted(this.dealer.score)) {
      this.dealer.busted = true;
    } else {
      this.dealer.stay();
      readline.question("Press Enter!");
    }
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Twenty-One!");
    console.log("");
    this.displayRules();
  }

  displayGoodbyeMessage() {
    console.clear();
    console.log("Thanks for playing!");
  }

  displayRules() {
    console.log(`Welcome to "Twenty One"!`);
    console.log("=============================");
    console.log("");
    console.log(`The goal is to keep the value of your cards below 22 while having a higher score than the dealer!`);
    console.log("");
    console.log(`1. Both players have a starting hand of two cards.`);
    console.log(`2. The dealer always plays with one open card!`);
    console.log(`3. You start by comparing your cards' values to your oponents card`);
    console.log(`4. If you think, you can beat your oponents hand, you "stay" => end your turn`);
    console.log(`5. Otherwise you "hit" => draw a card`);
    console.log(`6. if your cards' values surpass 21, you "bust" and lose the game. Same goes for the dealer.
    
Note: An "Ace" has a value of 1 if total values surpass 21; A value of 11 otherwise.`);
    console.log("");
    readline.question("Press Enter to continue!");
    console.clear();
  }

  displayResult() {
    if (this.player.busted) {
      console.log("Dealer won! you busted a bit too hard...");
      console.log("");
      this.displayScore();
    } else if (this.dealer.busted) {
      console.log("Dealer drank too much water and busted, Player wins!");
      console.log("");
      this.displayScore();
    } else {
      console.clear();
      console.log(this.player.score > this.dealer.score ?
        "Congratz, you win" : "Dealer wins!");
      console.log("");
      this.displayScore();
    }
  }

  displayScore() {
    // console.clear();
    this.player.showCards();
    console.log("");
    console.log("Player score is:");
    console.log(this.player.score);
    console.log("");
    this.dealer.showCards();
    console.log("");
    console.log("Dealer score is:");
    console.log(this.dealer.score);
    console.log("");
  }

  playAgain() {
    const YES_OR_NO = ["yes", "y", "no", "n"];
    let answer;

    while (!YES_OR_NO.includes(answer)) {
      answer = readline.question("Play again? (y/n)").toLowerCase();
    }

    return answer[0] === "y";
  }
}

let twenty1Game = new TwentyOneGame();
twenty1Game.start();