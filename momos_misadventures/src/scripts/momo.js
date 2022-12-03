const CONSTANTS = {
  GRAVITY: 0.5,
  JUMP_SPEED: -8,
  GROUND: 400,
  TERMINAL_VEL:  12,
  // MOMO_WIDTH:  120,
  // MOMO_HEIGHT:  120
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
      this.move.bind(this);
      this.jump.bind(this);
  }

  draw(){
    this.ctx.clearRect(0,0,600, 600);
    this.ctx.drawImage(momo, frameX * spriteWidth, 0, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);
    this.move();
    requestAnimationFrame(this.draw.bind(this));
  }


  animate(){
    this.ctx.clearRect(0,0,600, 600);
    this.move();
    this.ctx.drawImage(momo, frameX * spriteWidth, 0, spriteWidth, spriteHeight, 50, 450, spriteWidth, spriteHeight);
      if (gameFrame % staggerFrames == 0){
        if (frameX < 3) frameX ++;
        else frameX = 1;
      }
    
    gameFrame++;
    requestAnimationFrame(this.animate.bind(this));
  }

  move(){
      if (this.y <= CONSTANTS.GROUND) {
        this.y += this.velocity
      };
      console.log('velocity',this.velocity)
      console.log('y',this.y)
      if(this.velocity < CONSTANTS.TERMINAL_VEL ){
          this.velocity += CONSTANTS.GRAVITY;
      } 
  }

  jump(){
      this.velocity = -8;
      console.log("jump");
  }
}