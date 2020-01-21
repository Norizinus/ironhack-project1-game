class Obstacle {
  constructor(p5) {
    this.image = p5.loadImage("");
  }

  draw(p5) {
    console.log("Draw Obstacle was called");
    p5.rect(30, 30, 30, 30);
  }

  collision() {}
}

class Player {
  constructor(p5) {
    this.image = p5.loadImage("../assets/llama.gif");
    this.velocity = 0;
    this.gravity = 0.2;
  }

  setup(p5) {
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

class Background {
  constructor(p5) {
    this.images = [
      {
        src: p5.loadImage("../assets/background/sky.png"),
        xPosition: 0,
        speed: 0
      },
      {
        src: p5.loadImage("../assets/background/clouds_1.png"),
        xPosition: 0,
        speed: 1
      },
      {
        src: p5.loadImage("../assets/background/clouds_2.png"),
        xPosition: 0,
        speed: 1.5
      },
      {
        src: p5.loadImage("../assets/background/rocks_1.png"),
        xPosition: 0,
        speed: 2
      },
      {
        src: p5.loadImage("../assets/background/rocks_2.png"),
        xPosition: 0,
        speed: 3
      },
      {
        src: p5.loadImage("../assets/background/clouds_3.png"),
        xPosition: 0,
        speed: 2
      },
      {
        src: p5.loadImage("../assets/background/clouds_4.png"),
        xPosition: 0,
        speed: 2.5
      }
    ];
  }

  move(p5, img) {
    p5.image(
      img.src,
      img.xPosition + p5.width,
      0,
      p5.windowWidth / 2,
      p5.windowHeight / 2
    );
    p5.image(
      img.src,
      img.xPosition,
      0,
      p5.windowWidth / 2,
      p5.windowHeight / 2
    );

    img.xPosition -= img.speed;

    if (img.xPosition <= -(p5.windowWidth / 2)) {
      img.xPosition = 0;
    }
  }

  draw(p5) {
    console.log("Draw Background Called");
    for (let img of this.images) {
      this.move(p5, img);
    }
  }
}

class runGame {
  constructor() {
    this.level = 1;
  }

  drawCanvas(p5Canvas) {
    //setup of the canvas
    p5Canvas.setup = function() {
      p5Canvas.createCanvas(
        p5Canvas.windowWidth / 2,
        p5Canvas.windowHeight / 2
      );
    };

    this.background = new Background(p5Canvas);
    this.player = new Player(p5Canvas);
    this.player.setup(p5Canvas);
    this.obstacle = new Obstacle(p5Canvas);

    //drawing on the canvas
    p5Canvas.draw = function() {
      this.background.draw(p5Canvas);
      this.player.draw(p5Canvas);
      this.obstacle.draw(p5Canvas);
    }.bind(this);

    p5Canvas.keyPressed = function() {
      if (p5Canvas.keyCode === 32) {
        this.player.jump();
      }
    }.bind(this);
  }

  initCanvas(location) {
    // this.canvas = this.drawCanvas;
    this.myP5 = new p5(this.drawCanvas.bind(this), location);
    // console.log("myP5:", this.myP5);
  }

  removeCanvas() {
    this.myP5.remove();
  }
}

// function foo(param) {console.log(param)}
// const foo = (params) =>{console.log(params)}
