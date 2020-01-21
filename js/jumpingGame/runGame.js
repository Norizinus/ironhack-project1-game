


class runGame {
  constructor() {
    this.level = 1;
    this.background = new Background();
    this.player = new Player();
    this.obstacle = new Obstacle();
  }

  setup(p5) {
    this.background.setup(p5);
    this.player.setup(p5);
    this.obstacle.setup(p5);
  }

  draw(p5) {
    this.background.draw(p5);
    this.player.draw(p5);
    this.obstacle.draw(p5);

    this.obstacle.collision(this.player)
  }
}

// function foo(param) {console.log(param)}
// const foo = (params) =>{console.log(params)}
