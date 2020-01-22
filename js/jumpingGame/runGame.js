class runGame {
  constructor() {
    this.level = 1;
    this.background = new Background();
    this.player = new Player();
    console.log("obstacle creation");
    this.obstacle = [new Obstacle()];
    this.gameTimer = 15;
    this.resetTimer = 5;
  }

  setup(p5, canvasHeight, canvasWidth) {
    this.width = canvasWidth;
    this.height = canvasHeight;
    this.background.setup(p5, canvasHeight, canvasWidth);
    this.player.setup(p5, canvasHeight, canvasWidth);
    for (let obstacle of this.obstacle) {
      obstacle.setup(p5, canvasHeight, canvasWidth);
    }
    console.log("obstacle setup");
  }

  draw(p5) {
    this.background.draw(p5);

    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.textSize(50);

    if (this.gameTimer != 0) {
      p5.text(this.gameTimer, 30, 30);
      this.player.draw(p5);
      if (p5.frameCount % 60 === 0) {
        this.gameTimer--;
      }
      if (p5.frameCount % (400 - this.level * 100) === 0) {
        this.obstacle.push(new Obstacle());
        this.obstacle[this.obstacle.length - 1].setup(
          p5,
          this.height,
          this.width
        );
      }
      for (let obstacle of this.obstacle) {
        obstacle.draw(p5);
      }
      for (let obstacle of this.obstacle) {
        if (obstacle.collision(this.player)) {
          console.log("Game ended, value passed to endJumpRun:", false);
          endJumpRun(false);
        }
      }
    }

    // if (p5.frameCount % 60 === 0) {
    //   if (this.gameTimer != 0) {
    //     this.gameTimer--;
    //   }
    // }

    if (this.gameTimer === 0) {
      this.obstacle = null;
      p5.fill(51);
      console.log(this.width, this.height);
      p5.rect(0, 0, this.width, this.height);
      p5.fill(255, 204, 0);
      p5.text(
        "You did it. You will continue in",
        this.width / 2,
        this.height / 2
      );

      if (p5.frameCount % 60 === 0) {
        this.resetTimer--;
      }
      p5.text(this.resetTimer, this.width / 2, this.height / 2 + 100);

      if (this.resetTimer === 0) {
        this.prepareNextRound();
        endJumpRun(true);
      }
    }
    // this.obstacle.draw(p5);

    // this.obstacle.collision(this.player);
  }

  prepareNextRound() {
    this.gameTimer = 15;
    this.resetTimer = 5;
    this.player = new Player();
    this.obstacle = [new Obstacle()];
    this.level++;
  }
}

// function foo(param) {console.log(param)}
// const foo = (params) =>{console.log(params)}
