class Obstacle {
  constructor() {}

  setup(p5) {
    this.image = p5.loadImage("");
  }

  draw(p5) {
    console.log("Draw Obstacle was called");
    p5.rect(30, 30, 30, 30);
  }

  collision() {}
}
