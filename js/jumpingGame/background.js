class Background {
  setup(p5, canvasHeight, canvasWidth) {
    this.images = [
      {
        src: p5.loadImage("././assets/background/sky.png"),
        xPosition: 0,
        speed: 0 * jumpRunGame.level
      },
      {
        src: p5.loadImage("././assets/background/clouds_1.png"),
        xPosition: 0,
        speed: 1 * jumpRunGame.level
      },
      {
        src: p5.loadImage("././assets/background/clouds_2.png"),
        xPosition: 0,
        speed: 1.5 * jumpRunGame.level
      },
      {
        src: p5.loadImage("././assets/background/rocks_1.png"),
        xPosition: 0,
        speed: 2 * jumpRunGame.level
      },
      {
        src: p5.loadImage("././assets/background/rocks_2.png"),
        xPosition: 0,
        speed: 3 * jumpRunGame.level
      },
      {
        src: p5.loadImage("././assets/background/clouds_3.png"),
        xPosition: 0,
        speed: 2.8 * jumpRunGame.level
      },
      {
        src: p5.loadImage("././assets/background/clouds_4.png"),
        xPosition: 0,
        speed: 2.5 * jumpRunGame.level
      }
    ];

    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
  }

  move(p5, img) {
    p5.image(
      img.src,
      img.xPosition + p5.width,
      0,
      this.canvasWidth,
      this.canvasHeight
    );
    p5.image(img.src, img.xPosition, 0, this.canvasWidth, this.canvasHeight);

    img.xPosition -= img.speed;

    if (img.xPosition <= -this.canvasWidth) {
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
