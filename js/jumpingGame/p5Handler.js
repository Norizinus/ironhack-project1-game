let myCanvas = drawCanvas;

function drawCanvas(p5Canvas) {
  //setup of the canvas
  p5Canvas.setup = function() {
    p5Canvas.createCanvas(p5Canvas.windowWidth / 2, p5Canvas.windowHeight / 2);
  };

  //initialize the game assets
  jumpRunGame.setup(p5Canvas);

  //drawing on the canvas
  p5Canvas.draw = function() {
    jumpRunGame.draw(p5Canvas);
  };

  p5Canvas.keyPressed = function() {
    if (p5Canvas.keyCode === 32) {
      jumpRunGame.player.jump();
    }
  };
}
