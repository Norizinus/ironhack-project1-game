class Player {
  constructor() {
    this.velocity = 0;
    this.gravity = 0.2;
  }

  setup(p5, canvasHeight, canvasWidth) {
    this.sound = p5.loadSound("././assets/sounds/player.ogg");
    this.image = p5.loadImage("././assets/player/llama.gif");

    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;

    this.height = this.canvasHeight * jumpRunGame.playerSize;
    this.width = this.canvasHeight * jumpRunGame.playerSize;

    this.x = 20;
    this.y = this.canvasHeight - this.height - 20;

    this.originY = this.y;
  }

  draw(p5) {
    // will set the falling speed of the character after it has jumped
    this.velocity += this.gravity;
    this.y += this.velocity;

    //prevents the character from falling out of the picture (due to the gravity settings above)
    if (this.y >= this.originY) {
      this.y = this.originY;
    }

    //prevents the character from leaving the top of the screen.
    if (this.y < 0) {
      this.y = 0;
    }

    //prevents the character from leaving the screen left or right.
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x > this.canvasWidth - this.width) {
      this.x = this.canvasWidth - this.width;
    }

    //draws the character;

    // p5.rect(this.x, this.y, this.height, this.width);
    p5.image(this.image, this.x, this.y, this.height, this.width);
  }

  jump() {
    //increase the velocity so that the player slowly starts falling
    this.sound.play();
    this.velocity = -6;
  }

  moveLeft() {
    this.x += 2;
  }

  moveRight() {
    this.x -= 2;
  }
}
