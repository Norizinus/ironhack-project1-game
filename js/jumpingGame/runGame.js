class runGame {
  constructor() {
    this.level = 1;
    this.background = new Background();
    this.player = new Player();
    console.log("obstacle creation");
    this.obstacle = [new Obstacle()];
    this.gameTimer = 15;
    this.resetTimer = 5;
    this.playerSize = 0.15;
  }

  setup(p5, canvasHeight, canvasWidth) {
    this.width = canvasWidth;
    this.height = canvasHeight;
    this.background.setup(p5, canvasHeight, canvasWidth);
    this.player.setup(p5, canvasHeight, canvasWidth);
    for (let obstacle of this.obstacle) {
      obstacle.setup(p5, canvasHeight, canvasWidth);
    }
    this.font = p5.loadFont("/assets/Orbitron-Regular.ttf");
    console.log("obstacle setup");
  }

  draw(p5) {
    this.background.draw(p5);
    p5.textFont(this.font);
    p5.textAlign(p5.CENTER, p5.CENTER);

    if (this.gameTimer != 0) {
      p5.fill("black");
      p5.textSize(30);

      p5.text(this.gameTimer, this.width - 50, 30);
      this.player.draw(p5);
      if (p5.frameCount % 60 === 0) {
        this.gameTimer--;
      }
      if (p5.frameCount % (150 - this.level * 50) === 0) {
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

    if (this.gameTimer === 0) {
      this.obstacle = null;
      p5.fill("rgba(192,192,192,0.3)");
      console.log(this.width, this.height);
      p5.rect(0, 0, this.width, this.height);
      p5.fill("black");
      p5.textSize(30);
      p5.text(
        "You did it.Back to answering questions in",
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
