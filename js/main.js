let triviaGame = null;
let startButton = document.getElementById("start");
let trueButton = document.getElementById("true");
let falseButton = document.getElementById("false");
let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let restartButton = document.getElementById("restart");
let statement = document.getElementById("statement");
let score = document.getElementById("currentScore");
let countdown = document.getElementById("countdown");
let lives = document.getElementById("lives");
let jumpRunGame = null;
let myP5 = null;
let timeToAnswer = 20;
let lifeHeader = document.getElementById("life-header");
let currentRound = document.getElementById("currentRound");
let totalRounds = document.getElementById("totalRounds");
let gameOver = document.getElementById("gameOver");
let gameResults = document.getElementById("gameResults");
let jumpRunStarter = document.getElementById("jump-run-starter");
let theTriviaGame = document.getElementById("trivia-game");
let jumpgamePlaying = document.getElementById("jump-game-playing");
let gamePlaying = document.getElementById("game-playing");
let gameEnd = document.getElementById("game-end");
let gameStarter = document.getElementById("game-starter");

let finalScore = document.getElementById("final-score");
let potentialPoints = document.getElementById("potential-points");
let deathEscapes = document.getElementById("death-escapes");

//loads the initial game when page loads
function loadTriviaGame() {
  gameEnd.classList.add("invisible");
  triviaGame = new Trivia();
  triviaGame.init();
  printScore();
  if (lives.childElementCount < 3) {
    resetPrintedLives();
  }
  resetCountdown(timeToAnswer);
  printQuestion();
  gamePlaying.classList.remove("invisible");
  gameStarter.classList.add("invisible");
}

//updates the live on the page based on the current lives left in the game
function printLives() {
  lives.removeChild(lives.lastElementChild);
  if (lives.childElementCount === 0) {
    lifeHeader.innerText = "Hanging on to dear life...";
  }
}

function resetPrintedLives() {
  lifeHeader.innerText = "Lifes";
  for (let i = 0; i < triviaGame.lives; i++) {
    let newLife = document.createElement("span");
    newLife.innerText = "♥";
    lives.appendChild(newLife);
  }
}

//checks if the answer given to a statement is correct
function checkAnswer(event) {
  clearInterval(triviaGame.interval);
  resetCountdown();
  if (
    event.target.getAttribute("id") ===
    triviaGame.questions[triviaGame.currentRound - 1].accuracy.toString()
  ) {
    console.log("Yayyyyy");
    triviaGame.increaseScore();
    printScore();
  } else {
    console.log("Meeeeeeeeeeep");
    triviaGame.decreaseLives();
    printLives();
  }
  canPlayerContinue();
}

//checks the current status of the game and evaluates, if the player can continue (based on the amount of rounds/lives left)
function canPlayerContinue() {
  if (triviaGame.rounds === triviaGame.currentRound) {
    endQuiz(true);
  } else if (triviaGame.lives === 0) {
    jumpRunStarter.classList.remove("invisible");
    theTriviaGame.classList.add("invisible");
  } else {
    triviaGame.nextRound();
    printQuestion();
  }
}

//steps taken if the player didn't answer in time
function waitTooLong() {
  triviaGame.decreaseLives();
  printLives();
  canPlayerContinue();
}

//print the current score on the page
function printScore() {
  score.innerText = triviaGame.score;
}

//print the countdown on the page
function printCountdown(value) {
  countdown.innerText = value;
}

//reset the countdown to the original value (1)
function resetCountdown() {
  countdown.innerText = timeToAnswer;
}

//prints a new question out of the selected questions for a game and starts the countdown
function printQuestion() {
  triviaGame.setTimer();
  currentRound.innerText = triviaGame.currentRound;
  totalRounds.innerText = triviaGame.rounds;
  statement.innerText =
    triviaGame.questions[triviaGame.currentRound - 1].statement;
}

//checks the decision of a player to run for their life and continues the game accoardingly (either opens a jump and run game or ends the game)
function runForYourLifeEvaluation(event) {
  if (event.target.getAttribute("id") === "yes") {
    //player has decided for the game, if this is the first time he plays, a new instance of the class runGame will be created
    console.log("Let's get running!");
    if (jumpRunGame === null) {
      jumpRunGame = new runGame();
    }

    document.body.classList.add("jump-run-background");
    myP5 = new p5(myCanvas, jumpgamePlaying);
    jumpgamePlaying.classList.remove("invisible");
    gamePlaying.classList.add("invisible");
    jumpRunStarter.classList.add("invisible");
  } else {
    console.log("You lazy bastard!");
    endQuiz(true);
  }
}

//ends the jump and run game and removes the canvas
function endJumpRun(result) {
  myP5.remove();
  jumpRunStarter.classList.add("invisible");
  if (result) {
    console.log("The adventure continues");
    jumpgamePlaying.classList.add("invisible");
    gamePlaying.classList.remove("invisible");
    document.body.classList.remove("jump-run-background");
    theTriviaGame.classList.remove("invisible");
    // theTriviaGame.classList.remove("invisible");
    triviaGame.nextRound();
    triviaGame.resetLives();
    printQuestion();
  } else {
    endQuiz(false);
  }

  // check if the player survived the game, incease level of the game for the next round jumpRunGame.level++
}

//ends the current game
function endQuiz(won) {
  document.body.classList.remove("jump-run-background");

  if (!won) {
    // jumpRunStarter.classList.add("invisible");
    gamePlaying.classList.add("invisible");
    jumpgamePlaying.classList.add("invisible");
    gameEnd.classList.remove("invisible");
    gameOver.classList.remove("invisible");

    console.log("Meh ¯\_(ツ)_/¯");
  } else {
    if (jumpRunGame != null) {
      deathEscapes.innerText = jumpRunGame.level - 1;
    } else {
      deathEscapes.innerText = 0;
    }
    finalScore.innerText = triviaGame.score;
    potentialPoints.innerText =
      triviaGame.pointsForCorrectAnswer * triviaGame.rounds;
    gamePlaying.classList.add("invisible");
    gameEnd.classList.remove("invisible");
    gameResults.classList.remove("invisible");
    // theTriviaGame.classList.add("invisible");
    console.log("Done! The game is over. Nicely played!");
  }

  triviaGame.reset();
  jumpRunGame = null;
}

//TODO!!!!
function printGameResults() {}

//TODO: manage what happens if jump & run is lost

//event management
// document.getElementById("body").onload = loadTriviaGame;
startButton.onclick = loadTriviaGame;
trueButton.onclick = checkAnswer;
falseButton.onclick = checkAnswer;
yesButton.onclick = runForYourLifeEvaluation;
noButton.onclick = runForYourLifeEvaluation;
restartButton.onclick = loadTriviaGame;

// Questions needs to be displayed and the counter starts the countdown.
// On click of the True/False Buttons the answer needs to be evaluated
// If the answer is correct, points are added to the score, and the next questions is displayed.
// If the answer is incorrect or the countdown has reached 0, a life is taken.
// If the player has some lifes left the next question is displayed.
// If the player has lost all lives, he'll see the option "run for your life"
// If the player declines, the game ends and he'll receive the points he got from the quiz so fiar
// If the player accepts, a canvas is drawn with a game.
// If the player wins, the next questions will be displayed and he continues playing
// It the player looses, he will loose all points. GAME OVER!
