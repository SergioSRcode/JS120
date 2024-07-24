/* eslint-disable max-len */
// Suppose we have the following classes:

class Game {
  play() {
    return 'Start the game!';
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }
}

/*
What would happen if we added a play method to the Bingo class,
keeping in mind that there is already a method of this name in the Game class
from which the Bingo class inherits? Explain your answer.
What do we call it when we define a method like this?

If we were to instantiate an object from the Bingo class, the
newly added play method would be prioritized as it is at a lower part in
the prototype chain of Bingo (namely inside the Bingo.prototype itself).
Hence the play method initialized on inside the Game class, would not be called.

This overriding of a method defined in a superclass is called "method overriding"

e.g.
class Game {
  play() {
    return 'Start the game!';
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }

  play() {
    return 'Eyes down';
  }
}

let bingo = new Bingo();
bingo.play(); // 'Eyes down'.
*/