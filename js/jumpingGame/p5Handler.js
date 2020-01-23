let myCanvas = drawCanvas;

function drawCanvas(p5Canvas) {
  //setup of the canvas
  let canvasHeight = p5Canvas.windowHeight * 0.7;
  let canvasWidth = p5Canvas.windowWidth * 0.7;

  p5Canvas.setup = function() {
    p5Canvas.createCanvas(canvasWidth, canvasHeight);
  };

  //initialize the game assets
  jumpRunGame.setup(p5Canvas, canvasHeight, canvasWidth);

  //drawing on the canvas
  p5Canvas.draw = function() {
    jumpRunGame.draw(p5Canvas);
    if (p5Canvas.keyIsDown(37)) {
      jumpRunGame.player.moveRight();
    } else if (p5Canvas.keyIsDown(39)) {
      jumpRunGame.player.moveLeft();
    }
  };

  p5Canvas.keyPressed = function() {
    switch (p5Canvas.keyCode) {
      case 32:
        jumpRunGame.player.jump();
        break;
      case 37:
        jumpRunGame.player.moveRight();
        break;
      case 39:
        jumpRunGame.player.moveLeft();
        break;
    }

    // if (p5Canvas.keyCode === 32) {
    //   jumpRunGame.player.jump();
    // }
    // } else if()

    // if(){}

    // if(){}

    // if(){}
  };
}
