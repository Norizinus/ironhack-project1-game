class Obstacle {
  constructor() {
    this.counter = 0;
  }
  setup(p5, canvasHeight, canvasWidth) {
    this.images = [
      p5.loadImage("././assets/obstacle/character_zombie_run0.png"),
      p5.loadImage("././assets/obstacle/character_zombie_run1.png"),
      p5.loadImage("././assets/obstacle/character_zombie_run2.png")
    ];

    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;

    this.height = this.canvasHeight * jumpRunGame.playerSize;
    this.width = this.canvasHeight * jumpRunGame.playerSize;
    this.x = this.canvasWidth;
    this.y = p5.random(0, this.canvasHeight - this.height - 20);
  }

  draw(p5) {
    console.log("Draw Obstacle was called");

    //moves through the images of the obstacle so that it appears moving
    if (p5.frameCount % 8 === 0) {
      this.counter = this.counter + 1;
      if (this.counter > this.images.length - 1) {
        this.counter = 0;
      }
    }

    //draws the image of the obstacle. based on the previous if statement, the value of the counter changes and the image printed changes)
    // p5.rect(this.x, this.y, this.height, this.width);

    p5.image(
      this.images[this.counter],
      this.x,
      this.y,
      this.height,
      this.width
    );
    this.x -= 3 * jumpRunGame.level;
  }

  collision(player) {
    //conditions for the two items not colliding;

    if (player.y + player.height < this.y || this.y + this.height < player.y) {
      return false;
    }
    if (player.x + player.width < this.x || this.x + this.width < player.x) {
      return false;
    }

    //if the conditions above are not true, the items collide
    return true;
  }
}
