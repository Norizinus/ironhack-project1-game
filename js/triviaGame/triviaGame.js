// The game class will contain all the values of the current game.

class Trivia {
  constructor() {
    this.players = 1;
    this.rounds = 10;
    this.currentRound = 1;
    this.lives = 3;
    this.score = 0;
    this.pointsForCorrectAnswer = 10
  }

  //upon initializaion, questions will be selected by the amount of rounds and the amount of players. Currently this will be set with a fixed value, but could be dynamic by user input in the future.
  init() {
    this.questions = pickRandomQuestions(this.rounds * this.players);
  }

  //sets the time the player has to answer a question
  setTimer() {
    let counter = 19;
    this.interval = setInterval(
      function() {
        printCountdown(counter);
        if (counter === 0) {
          clearInterval(this.interval);
          waitTooLong();
        }
        counter--;
      }.bind(this),
      1000
    );
  }

  //goes to the next round of the game
  nextRound() {
    this.currentRound++;
  }

  //increases the score of the current game
  increaseScore() {
    this.score += this.pointsForCorrectAnswer;
  }

  //decreases the lives for the current game
  decreaseLives() {
    this.lives--;
  }

  resetLives() {
    this.lives = 1;
    resetPrintedLives();
    console.log("done");
  }

  //resets the game so it can be replayed
  reset() {
    this.init();
    this.currentRound = 1;
    this.lives = 3;
    this.score = 0;
  }
}

let currentTrivia = new Trivia();
