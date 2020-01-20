class Player {
  constructor() {
    this.image = "test";
  }
  draw(p5) {
    p5.rect(100, 100, 100, 100);
  }
}

class runGame {
  constructor() {
    this.canvas = null;
    this.player = new Player();
    this.level = 1;
  }

  drawCanvas(blueprint) {
    let backcolor = blueprint.color(174, 222, 203);

    //setup of the canvas
    blueprint.setup = function() {
      blueprint.createCanvas(
        blueprint.windowWidth / 2,
        blueprint.windowHeight / 2
      );
      blueprint.background(backcolor);
    };

    //drawing on the canvas
    blueprint.draw = function() {
      console.log("Hello");
      blueprint.rect(50, 50, 50, 50);
      console.log(this.player);
      this.player.draw(blueprint);
    }.bind(this);
  }

  initCanvas(location) {
    // this.canvas = this.drawCanvas;
    this.myP5 = new p5(this.drawCanvas, location);
  }

  removeCanvas() {
    this.myP5.remove();
  }
}
