class Obstacle {
  constructor() {
    this.counter = 0;
  }
  setup(p5, canvasHeight, canvasWidth) {
    if (obstacle.toLowerCase() === "zombie") {
      this.images = getZombie(p5);
    } else if (obstacle.toLowerCase() === "troll") {
      this.images = getTroll(p5);
    } else if (obstacle.toLowerCase() === "skeleton") {
      this.images = getSkeleton(p5);
    }

    this.sound = p5.loadSound("././assets/sounds/obstacle.wav");
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;

    this.height = this.canvasHeight * jumpRunGame.playerSize;
    this.width = this.canvasHeight * jumpRunGame.playerSize;
    this.x = this.canvasWidth;
    this.y = p5.random(0, this.canvasHeight - this.height - 20);
  }

  draw(p5) {
    // console.log("Draw Obstacle was called");

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
    this.x -= 2 * jumpRunGame.level;
  }

  collision(player) {
    //conditions for the two items not colliding;

    if (player.y + player.height < this.y || this.y + this.height < player.y) {
      return false;
    }
    if (player.x + player.width < this.x || this.x + this.width < player.x) {
      return false;
    }

    this.sound.play();
    //if the conditions above are not true, the items collide
    return true;
  }
}
