class Player {
  constructor() {
    this.velocity = 0;
    this.gravity = 0.2;
  }

  setup(p5) {
    this.image = p5.loadImage("../assets/llama.gif");
    console.log(this.image.height);

    this.height = 100;
    this.width = 100;

    this.x = 20;
    this.y = p5.windowHeight / 2 - 120;

    this.originY = this.y;
  }

  draw(p5) {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y >= this.originY) {
      this.y = this.originY;
    }

    if (this.y < 0) {
      this.y = 0;
    }
    p5.image(this.image, this.x, this.y, 100, this.width);
  }

  jump() {
    this.velocity = -6;
  }
}
