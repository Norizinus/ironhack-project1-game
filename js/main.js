let triviaGame = new Trivia();
let trueButton = document.getElementById("true");
let falseButton = document.getElementById("false");
let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let statement = document.getElementById("statement");
let score = document.getElementById("currentScore");
let countdown = document.getElementById("countdown");
let lives = document.getElementById("lives");
let jumpRunGame = null;

//loads the initial game when page loads
function loadTriviaGame() {
  console.log("Page loaded");
  triviaGame.init();
  printQuestion();
}

//updates the live on the page based on the current lives left in the game
function printLives() {
  lives.innerText = triviaGame.lives;
}

//checks if the answer given to a statement is correct
function checkAnswer(event) {
  clearInterval(triviaGame.interval);
  resetCountdown();
  if (
    event.target.getAttribute("id") ===
    triviaGame.questions[triviaGame.currentRound - 1].accuracy.toString()
  ) {
    console.log("The answer is correct!");
    triviaGame.increaseScore();
    printScore();
  } else {
    console.log("The answer is incorrect!");
    triviaGame.decreaseLives();
    printLives();
  }
  canPlayerContinue();
}

//checks the current status of the game and evaluates, if the player can continue (based on the amount of rounds/lives left)
function canPlayerContinue() {
  if (triviaGame.rounds === triviaGame.currentRound) {
    endQuiz();
  } else if (triviaGame.lives === 0) {
    document.getElementById("jump-run-starter").classList.remove("invisible");
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
  countdown.innerText = 10;
}

//prints a new question out of the selected questions for a game and starts the countdown
function printQuestion() {
  triviaGame.setTimer();
  statement.innerText =
    triviaGame.questions[triviaGame.currentRound - 1].statement;
}

//checks the decision of a player to run for their life and continues the game accoardingly (either opens a jump and run game or ends the game)
function runForYourLifeEvaluation(event) {
  console.log("runForYourLifeEvaluation called");

  if (event.target.getAttribute("id") === "yes") {
    //player has decided for the game, if this is the first time he plays, a new instance of the class runGame will be created

    console.log("Let's get running!");
    if (jumpRunGame === null) {
      jumpRunGame = new runGame();
    }
    jumpRunGame.initCanvas(document.getElementById("jump-run-game"));
    document.getElementById("jump-run-game").classList.remove("invisible");
    document.getElementById("trivia-game").classList.add("invisible");
    document.getElementById("jump-run-starter").classList.add("invisible");
  } else {
    console.log("You lazy bastard!");
    endQuiz();
  }
}

//ends the jump and run game and removes the canvas
function endJumpRun() {
  jumpRunGame.removeCanvas();
  document.getElementById("trivia-game").classList.remove("invisible");
  document.getElementById("jump-run-starter").classList.add("invisible");
}

//ends the current game
function endQuiz() {
  console.log("Done! The game is over. Nicely played!");
  printGameResults();
  triviaGame.reset();
}

//TODO!!!!
function printGameResults() {}

//TODO: manage what happens if jump & run is lost

//event management
document.getElementById("body").onload = loadTriviaGame;
trueButton.onclick = checkAnswer;
falseButton.onclick = checkAnswer;
yesButton.onclick = runForYourLifeEvaluation;
noButton.onclick = runForYourLifeEvaluation;

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

// jumpRunGame.myP5.draw()

// console.log(document.getElementById("canvas").style.height);

// let myCanvas = drawCanvas;

// function drawCanvas(blueprint) {
//   let colornora = blueprint.color(174, 222, 203);
//   blueprint.setup = function() {
//     blueprint.createCanvas(2000, 2000);

//     blueprint.background(colornora);
//   };

//   blueprint.draw = function() {

//     blueprint.rect(50, 50, 50, 50);
//   };
// }

// let myp5 = new p5(myCanvas);
