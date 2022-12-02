const CONSTANTS = {
  GRAVITY: 0,
  JUMP_SPEED: -8,
  TERMINAL_VEL:  12,
  MOMO_WIDTH:  40,
  MOMO_HEIGHT:  30
};

const momo = new Image();
momo.src = './assets/cats/momo_walk?reversed.png'



export default class Momo {
  
  
  constructor(canvasWidth, canvasHeight, ctx) {
      this.velocity = 0;
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.ctx = ctx;
      this.x = canvasWidth / 3;
      this.y = canvasHeight / 2;
  }


  drawMomo(ctx){
      ctx.fillStyle = "white";
      ctx.fillRect(this.x, this.y, CONSTANTS.MOMO_WIDTH, CONSTANTS.MOMO_HEIGHT);
      ctx.drawImage(momo, )
  }

  animate(){
      this.move();
      this.drawMomo(this.ctx);
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