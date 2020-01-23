let myCanvas = drawCanvas;
let soundtrack = "Markus";

function drawCanvas(p5Canvas) {
  //setup of the canvas
  let canvasHeight = p5Canvas.windowHeight * 0.7;
  let canvasWidth = p5Canvas.windowWidth * 0.7;

  p5Canvas.preload = function() {
    console.log("preload");
    soundtrack = p5Canvas.loadSound("././assets/sounds/background-music.mp3");
  };

  // console.log(soundtrack);
  //initialize the game assets
  jumpRunGame.setup(p5Canvas, canvasHeight, canvasWidth);

  p5Canvas.setup = function() {
    console.log("setup");
    p5Canvas.createCanvas(canvasWidth, canvasHeight);
  };

  //drawing on the canvas
  p5Canvas.draw = function() {
    if (soundtrack.buffer && !soundtrack.isPlaying()) {
      soundtrack.loop();
      if (jumpRunGame.level > 1) {
        soundtrack.rate(1 + jumpRunGame.level * 0.05);
      }
    }
    if (jumpRunGame != null) {
      jumpRunGame.draw(p5Canvas);

      if (p5Canvas.keyIsDown(37)) {
        jumpRunGame.player.moveRight();
      } else if (p5Canvas.keyIsDown(39)) {
        jumpRunGame.player.moveLeft();
      }
    }
  };

  p5Canvas.keyPressed = function() {
    if (p5Canvas.keyCode === 32) {
      jumpRunGame.player.jump();
    }
  };
}
