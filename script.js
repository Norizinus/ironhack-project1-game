// The game class will contain all the values of the current game.

class Trivia {
  constructor() {
    this.players = 1;
    this.rounds = 3;
  }

  init() {
    this.questions = pickRandomQuestions(this.rounds * this.players);
  }
}

let currentTrivia = new Trivia();
