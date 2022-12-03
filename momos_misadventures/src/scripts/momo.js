//// this should include all the logic related to the main character momo
//// how to draw and animate momo and source files
//// momo moves and position
 

const CONSTANTS = {
  GRAVITY: 2,
  JUMP_SPEED: -8,
  GROUND: 400,
  TERMINAL_VEL:  12,
  LEFTWALL: 0,
  RIGHTWALL: 550,
};

const momo = new Image();
momo.src = "./src/assets/cats/momo_walk_right.png"

const spriteWidth = 120;
const spriteHeight = 120;
let frameX = 1;
let frameY = 0;
//set a maxFrame variable per row
let gameFrame = 0;
// let staggerFrames = 15;
//bigger staggerFrame is slower looking move
//15 should be slow walk (5, 10, 15) 3 speeds
//max speed staggerFrames = 5

export default class Momo {

  constructor(canvasWidth, canvasHeight, ctx) {
      this.yVelocity = 0;
      this.xVelocity = 3;
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.ctx = ctx;
      this.x = canvasWidth / 6;
      this.y = CONSTANTS.GROUND;
      this.calcXPos.bind(this);
      this.calcYPos.bind(this);
      this.jump.bind(this);
  }

  draw(){
    this.ctx.clearRect(0,0,600, 600);
    this.calcYPos();
    if(this.xVelocity > 0)  {
      this.ctx.drawImage(momo, frameX * spriteWidth, 0, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);
      // if (gameFrame % staggerFrames == 0){       //old version
      if (gameFrame % (this.xVelocity / .5) == 0){
        // replace staggerFrames with xVelocity/3)
        if (frameX < 3) frameX ++;
        else frameX = 1;
      }
      
      gameFrame++
    } else {
      this.ctx.drawImage(momo, 0 * spriteWidth, 0, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);
    };
    requestAnimationFrame(this.draw.bind(this));
  }

//////// this is old animate code. breaking up to draw and calcYPos and calcXPos
  // animate(){
  //   this.ctx.clearRect(0,0,600, 600);
  //   this.move();
  //   this.ctx.drawImage(momo, frameX * spriteWidth, 0, spriteWidth, spriteHeight, 50, 450, spriteWidth, spriteHeight);
  //     if (gameFrame % staggerFrames == 0){
  //       if (frameX < 3) frameX ++;
  //       else frameX = 1;
  //     }
    
  //   gameFrame++;
  //   requestAnimationFrame(this.animate.bind(this));
  // }

  calcYPos(){
      if (this.y <= CONSTANTS.GROUND) {
        this.y += this.yVelocity
        if (this.y > 400)
          this.y = 400;
      };
      if(this.yVelocity < CONSTANTS.TERMINAL_VEL ){
          this.yVelocity += CONSTANTS.GRAVITY;
      } 
  }
  
  calcXPos(){
      if (this.x >= CONSTANTS.LEFTWALL) {
        this.x += this.xVelocity
        if (this.x < 0)
          this.x = 0;
      };
      if (this.xVelocity < CONSTANTS.TERMINAL_VEL ){
          this.xVelocity += CONSTANTS.GRAVITY;
      } 
      if (this.x <= CONSTANTS.RIGHTWALL){
        this.x -= this.xVelocity
        if (this.x > 550)
          this.x = 550;
      };
  }


  jump(){
      if (this.y === CONSTANTS.GROUND){
        this.yVelocity = -30;
      };
      console.log("jump");
  }
}