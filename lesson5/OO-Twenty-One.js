/* eslint-disable max-lines-per-function */
const readline = require("readline-sync");

class Card {
  constructor(suit, rank) {
    this.rank = rank;
    this.suit = suit;
    this.name = suit + " " + rank;
  }

  getName() {
    return this.name;
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
    this.winner = false;
  }

  hit(hand, deck) {
    let newCard = deck.draw().getName();
    hand.push(newCard);
  }

  stay() {
    console.clear();
    console.log(`=> ${this.constructor.name} chose "Stay"!`);
    this.displayHandValue();
    console.log("");
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
    this.money = 5;
  }

  showCards(clear) {
    if (clear) console.clear();
    console.log(`Player cards: 
  ${this.hand.join(", ")}`);
  }

  isBroke() {
    return this.money === 0;
  }

  isRich() {
    return this.money === 10;
  }
}

class Dealer extends Participant {
  static MINIMUM_TOTAL_VALUE = 17;

  constructor() {
    super();
  }

  showCards(clear) {  // if a truthy argument is provided, clears console
    if (clear) console.clear();
    console.log(`Dealer cards: 
  ${this.hand.join(", ")}`);
  }

  hit(hand, deck) {
    console.log('=> Dealer chose "hit!"');
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
  static PRESS_ENTER() {
    console.log("");
    readline.question("Press Enter to continue!");
  }

  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
  }

  start() {
    this.displayWelcomeMessage();
    do {
      this.play1Game();
      if (this.throwOut()) break;
    } while (this.playAgain());

    this.displayGoodbyeMessage();
  }

  play1Game() {
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
  }

  dealCards() {
    while (this.player.hand.length < 2) {
      this.player.hand.push(this.deck.draw().getName());
      this.dealer.hand.push(this.deck.draw().getName());
    }
  }

  showCards() {
    console.clear();
    this.displayMoney();
    console.log("");
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
    this.player.winner = false;
    this.dealer.winner = false;
  }

  getPlayerMove() {
    let hitOrStay;
    let validChoices = Object.values(TwentyOneGame.HIT_OR_STAY);

    while (!validChoices[0].includes(hitOrStay) &&
           !validChoices[1].includes(hitOrStay)) {
      hitOrStay = readline.question("\nDo you 'hit' (h) or 'stay' (s)\n").toLowerCase();

      if (!validChoices[0].includes(hitOrStay) &&
      !validChoices[1].includes(hitOrStay)) {
        this.showCards();
        this.player.displayHandValue();
      }
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
    this.dealer.showCards();
    this.dealer.displayHandValue();

    while (this.dealer.score < Dealer.MINIMUM_TOTAL_VALUE) {
      this.dealer.hit(this.dealer.hand, this.deck);
      TwentyOneGame.PRESS_ENTER();
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
    console.log('\x1b[5m%s\x1b[0m', "Welcome to Twenty-One!");
    this.displayRules();
  }

  displayGoodbyeMessage() {
    console.clear();
    console.log("Thanks for playing!");
  }

  displayRules() {
    console.log("=============================");
    console.log("");
    console.log(`The goal is to keep the value of your cards below 22 while
having a higher score than the dealer!`);
    console.log("");
    console.log(`1. Both players have a starting hand of two cards.`);
    console.log(`2. The dealer always plays with one open card!`);
    console.log(`3. You start by comparing your cards' values to your oponents card`);
    console.log(`4. If you think, you can beat your oponents hand, you "stay"
   => end your turn`);
    console.log(`5. Otherwise you "hit" => draw a card`);
    console.log(`6. if your cards' values surpass 21, you "bust" and 
lose the game. Same goes for the dealer.
    
Note: An "Ace" has a value of 1 if total values surpass 21; A value of 11 otherwise.`);
    console.log("");
    this.displaySecretClause();
    TwentyOneGame.PRESS_ENTER();

    console.clear();
  }

  displaySecretClause() {
    console.log("");
    console.log('\x1b[90m%s\x1b[0m', "If you are out of money, you will be asked to leave...");
    console.log("");
  }

  displayMoney() {
    console.log(`Current Money: ${this.player.money}$`);
  }

  displayResult() {
    if (this.player.busted) {
      console.log('\x1b[31m%s\x1b[0m', "Dealer won! you busted a bit too hard...");
      console.log("");
      this.displayScore();
    } else if (this.dealer.busted) {
      console.log('\x1b[32m%s\x1b[0m', "Dealer drank too much water and busted, Player wins!");
      console.log("");
      this.displayScore();
    } else if (this.dealer.score === this.player.score) {
      console.clear();
      console.log('\x1b[33m%s\x1b[0m', "Wow, a tie!");
      console.log("");
      this.displayScore();
    } else {
      console.clear();
      console.log('\x1b[36m%s\x1b[0m', this.player.score > this.dealer.score ?
        "Congratz, you win!" : "Dealer wins!");
      console.log("");
      this.displayScore();
    }
  }

  displayScore() {
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
      answer = readline.question("Play again? (y/n)\n").toLowerCase();
      if (!YES_OR_NO.includes(answer)) console.clear();
    }

    return answer[0] === "y";
  }

  calculateResult() {
    let playerScoreIsHigher = this.dealer.score < this.player.score;
    let dealerScoreIsHigher = this.player.score < this.dealer.score;

    if (this.player.busted) {
      this.dealer.winner = true;
    } else if (this.dealer.busted) {
      this.player.winner = true;
    } else if (playerScoreIsHigher) {
      this.player.winner = true;
    } else if (dealerScoreIsHigher) {
      this.dealer.winner = true;
    }
  }

  calculateMoney() {
    this.calculateResult();

    if (this.player.winner) this.player.money += 1;
    if (this.dealer.winner) this.player.money -= 1;
  }

  throwOut() {
    this.calculateMoney();
    let playerIsBroke = this.player.isBroke();
    let playerIsRich = this.player.isRich();

    if (playerIsBroke) {
      console.log("Oh, out of money, aren't we? Security! Get them outta here!");
      console.log("");
      readline.question("Run by pressing Enter!!");
    }
    if (playerIsRich) {
      console.log("SECURITY! They must be cheating, throw 'em out!");
      console.log("");
      readline.question("Run by pressing Enter!!");
    }

    return playerIsBroke || playerIsRich;
  }
}

let twenty1Game = new TwentyOneGame();
twenty1Game.start();