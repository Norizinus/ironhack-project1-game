class Obstacle {
  constructor() {
    this.counter = 0;
  }
  setup(p5, canvasHeight, canvasWidth) {
    this.images = [
      p5.loadImage("../../assets/obstacle/character_zombie_run0.png"),
      p5.loadImage("../../assets/obstacle/character_zombie_run1.png"),
      p5.loadImage("../../assets/obstacle/character_zombie_run2.png")
    ];

    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;

    this.height = 100;
    this.width = 100;
    this.x = this.canvasWidth - this.width;
    this.y = p5.random(0, this.canvasHeight - this.height - 20);
  }

  draw(p5) {
    console.log("Draw Obstacle was called");

    if (p5.frameCount % 8 === 0) {
      this.counter = this.counter + 1;
      if (this.counter > this.images.length - 1) {
        this.counter = 0;
      }
    }
    p5.rect(this.x, this.y, this.height, this.width);

    p5.image(
      this.images[this.counter],
      this.x,
      this.y,
      this.height,
      this.width
    );
    this.x -= 1 * jumpRunGame.level;

    // p5.rect(30, 30, 30, 30);
  }

  collision(player) {
    console.log("Collision Check called");
    if (player.y + player.height < this.y || this.y + this.height < player.y) {
      return false;
    }

    if (player.x + player.width < this.x || this.x + this.width < player.x) {
      return false;
    }

    return true;
  }
}
