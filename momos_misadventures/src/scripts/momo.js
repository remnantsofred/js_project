const CONSTANTS = {
  GRAVITY: 0,
  JUMP_SPEED: -8,
  TERMINAL_VEL:  12,
  MOMO_WIDTH:  120,
  MOMO_HEIGHT:  120
};

const momo = new Image();
momo.src = "./src/assets/cats/momo_walk_reverse_updated.png"
const spriteWidth = 120;
const spriteHeight = 120;
let frameX = 1;
let frameY = 0;
//set a maxFrame variable per row
let gameFrame = 0;
const staggerFrames = 15;

export default class Momo {

  constructor(canvasWidth, canvasHeight, ctx) {
      this.velocity = 0;
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.ctx = ctx;
      this.x = canvasWidth / 3;
      this.y = canvasHeight / 2;
  }

//   drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    // animate(){
    //   ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    //   this.ctx.fillStyle = "#2B65EC";
    //   this.ctx.fillRect(0,0,600,600);
    //   this.ctx.drawImage(momo, 100,100);
    //   this.drawMomo();
    //     // this.animate();
    //     if (gameFrame % staggerFrames == 0){
    //       if (frameX < 3) frameX ++;
    //       else frameX = 1;
    //     }
      
    //   gameFrame++;
    //   requestAnimationFrame(animate);
    // }


  drawMomo(){
    // ctx.clearRect(0,0, this.canvasWidth, this.canvasHeight)
      this.ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
      this.ctx.drawImage(momo, frameX * spriteWidth, 0, spriteWidth, spriteHeight, 50, 450, spriteWidth, spriteHeight);
  }

  animate(){
      this.move();
      this.drawMomo(this.ctx);
      if (gameFrame % staggerFrames == 0){
        if (frameX < 3) frameX ++;
        else frameX = 1;
      }
    
    gameFrame++;
    requestAnimationFrame(animate);

  }

  move(){
      this.y += this.velocity;
      if(this.velocity < CONSTANTS.TERMINAL_VEL ){
          this.velocity += CONSTANTS.GRAVITY;
      }
  }

  jump(){
      this.velocity = -8;
  }
}