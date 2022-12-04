//// this should include all the logic related to the main character momo
//// how to draw and animate momo and source files
//// momo moves and position
import Object from './object';

const CONSTANTS = {
  GRAVITY: 2,
  FRICTION: 0.5,
  JUMP_SPEED: -30,
  GROUND: 625,
  TERMINAL_VEL:  12,
  WALK_SPEED: 10,
  RUN_SPEED: 15,
  MAX_MOMO_SPEED: 20,
  LEFTWALL: 0,
  RIGHTWALL: 800,
};

const momo = new Image();
momo.src = "./src/assets/cats/momo_walk_right.png"

const spriteWidth = 120;
const spriteHeight = 114;
let frameX = 1;
let frameY = 0;
//set a maxFrame variable per row
let gameFrame = 0;
// let staggerFrames = 15;
//bigger staggerFrame is slower looking move
//15 should be slow walk (5, 10, 15) 3 speeds
//max speed staggerFrames = 5

export default class Momo {

  constructor(canvasWidth, canvasHeight, ctx, bounce) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.ctx = ctx;
    this.x = canvasWidth / 8;
    this.y = CONSTANTS.GROUND;
    this.yVelocity = 0;
    this.xVelocity = 0;
    this.calcXPos.bind(this);
    this.calcYPos.bind(this);
    this.jump.bind(this);
    this.direction = null;
  }

  

  drawMomo(){
    this.ctx.clearRect(0,0,800,800);
    this.calcYPos();
    this.calcXPos();
    if(this.xVelocity > 0)  {
      this.ctx.drawImage(momo, frameX * spriteWidth, 0, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);
      // if (gameFrame % staggerFrames == 0){       //old version
      if (gameFrame % (this.xVelocity / 1.25) == 0){
        // replace staggerFrames with xVelocity/3)
        if (frameX < 3) frameX ++;
        else frameX = 1;
      }
      
      gameFrame++
    } else {
      this.ctx.drawImage(momo, 0 * spriteWidth, 0, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);
    };
    requestAnimationFrame(this.drawMomo.bind(this));
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

  // update Y position (height / vertical pos)
  calcYPos(){
      /// if momo is currently higher than ground,
      // this.calcXPos();
      if (this.y <= CONSTANTS.GROUND) {
        /// momo falls down
        this.y += this.yVelocity
        // if momo tries to go lower than floor, stop her at floor
        if (this.y > CONSTANTS.GROUND)
          this.y = CONSTANTS.GROUND;
      };
      // as long as momo isn't falling beyond fast rate (12), add gravity (which is positive, so go down)
      if(this.yVelocity < CONSTANTS.TERMINAL_VEL){
          this.yVelocity += CONSTANTS.GRAVITY;
      } 
  }
  
  // updates X position (horizontal across board)
  calcXPos(){
      
    //// if momo is moving , update x position
    //// update x position with xvelocity, up to max momo speed
    //// make sure you dont go beyond walls
    //// if moving, apply friction until 1) vel is 0 OR 2) momo move backwards OR 3)jumping
    //// friction here is a positive number (2)

    if (this.xVelocity > 0 && this.direction === "left"){
      this.x -= this.xVelocity;
      if (this.xVelocity < CONSTANTS.MAX_MOMO_SPEED){
        this.xVelocity -= CONSTANTS.FRICTION;
      }
      if (this.x <= 0){
        this.x = 0;
      }
    } 
    
    if (this.xVelocity > 0 && this.direction === "right"){
      this.x += this.xVelocity;
      if (this.xVelocity < CONSTANTS.MAX_MOMO_SPEED){
        this.xVelocity -= CONSTANTS.FRICTION;
      }
      if (this.x >= (CONSTANTS.RIGHTWALL - spriteWidth)){
        this.x = (CONSTANTS.RIGHTWALL - spriteWidth);
      }
    } 

  }


  jump(){
      // if momo is on the ground, then set velocity to jump speed (which is negative, which updates y-pos to be going up)
    if (this.y === CONSTANTS.GROUND){
      this.yVelocity = CONSTANTS.JUMP_SPEED;
    };
  }
  
  moveLeft(speed){
    if (speed === "walk"){
    this.xVelocity = CONSTANTS.WALK_SPEED;
    } else if (speed === "run"){
      this.xVelocity = CONSTANTS.RUN_SPEED;
    }
  }
  
  moveRight(speed){
    this.xVelocity = CONSTANTS.WALK_SPEED;
    
  }
  moveDown(){
    if (this.y !== CONSTANTS.GROUND){
      /// need to this this part once I make platforms
      this.yVelocity = -CONSTANTS.JUMP_SPEED;
    };
  }


}