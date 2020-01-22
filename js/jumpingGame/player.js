class Player {
  constructor() {
    this.velocity = 0;
    this.gravity = 0.2;
  }

  setup(p5, canvasHeight, canvasWidth) {
    this.image = p5.loadImage("../../assets/player/llama.gif");
    console.log(this.image.height);

    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;

    this.height = 100;
    this.width = 100;

    this.x = 20;
    this.y = this.canvasHeight - this.height - 20;

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
    p5.rect(this.x, this.y, this.height, this.width);
    p5.image(this.image, this.x, this.y, this.height, this.width);
  }

  jump() {
    this.velocity = -6;
  }

  moveLeft() {
    this.x += 1;
  }

  moveRight() {
    this.x -= 1;
  }
}
