//// this should include all the logic related to the main character momo
//// how to draw and animate momo and source files
//// momo moves and position
import Object from './object';

const CONSTANTS = {
  GRAVITY: 2,
  FRICTION: 2,
  JUMP_SPEED: -30,
  GROUND: 625,
  TERMINAL_VEL:  12,
  WALK_SPEED: 5,
  RUN_SPEED: 12,
  MAX_MOMO_SPEED: 20,
  LEFTWALL: 0,
  RIGHTWALL: 800,
};

const momo = new Image();
momo.src = "./src/assets/cats/momo_walk_right.png"
const momoLeft = new Image();
momoLeft.src = "./src/assets/cats/momo_walk_left.png"
const walkspriteWidth = 120;
const walkspriteHeight = 114;



const momoJumpRight = new Image();
momoJumpRight.src = "./src/assets/cats/momo_pounce_right.png"
const momoJumpLeft = new Image();
momoJumpLeft.src = "./src/assets/cats/momo_pounce_left_shortv1.png"
const jumpspriteWidth = 133;
const jumpspriteHeight = 156;
// const momo = new Image();
// momo.src = "./src/assets/cats/momo_walk_right.png"

let frameX = 1;
let frameY = 0;
//set a maxFrame variable per row
let gameFrame = 0;
let staggerFrames = 10;
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
    this.jumped = false;
  }


  drawMomo(){
    this.ctx.clearRect(0,0,800,800);
    this.calcYPos();
    this.calcXPos();
    if(this.xVelocity > 0 && this.direction === "right")  {
      this.ctx.drawImage(momo, frameX * walkspriteWidth, 0, walkspriteWidth, walkspriteHeight, this.x, this.y, walkspriteWidth, walkspriteHeight);
      // if (gameFrame % staggerFrames == 0){       //old version
      if (gameFrame % staggerFrames == 0){
        // replace staggerFrames with xVelocity/3)
        if (frameX < 3) frameX ++;
        else frameX = 1;
      }
      
      gameFrame++
    } else if (this.xVelocity > 0 && this.direction === "left"){
      this.ctx.drawImage(momoLeft, frameX * walkspriteWidth, 0, walkspriteWidth, walkspriteHeight, this.x, this.y, walkspriteWidth, walkspriteHeight);
      // if (gameFrame % staggerFrames == 0){       //old version
      if (gameFrame % staggerFrames == 0){
        // replace staggerFrames with xVelocity/3)
        if (frameX < 3) frameX ++;
        else frameX = 1;
      }
       
      gameFrame++
    } else if (this.jumped === true && this.direction === "right"){
      this.ctx.drawImage(momoJumpRight, frameX * jumpspriteWidth, 0, jumpspriteWidth, jumpspriteHeight, this.x, this.y, jumpspriteWidth, jumpspriteHeight);
      if (gameFrame % 4 == 0){
        // replace staggerFrames with xVelocity/3)
        if (frameX < 3) frameX ++;
        else frameX = 0;
      }
    } else if (this.jumped === true && this.direction === "left"){
      this.ctx.drawImage(momoJumpLeft, frameX * jumpspriteWidth, 0, jumpspriteWidth, jumpspriteHeight, this.x, this.y, jumpspriteWidth, jumpspriteHeight);
      if (gameFrame % 4 == 0){
        // replace staggerFrames with xVelocity/3)
        if (frameX < 3) frameX ++;
        else frameX = 0;
      }
    } else {
      this.ctx.drawImage(momo, 0 * walkspriteWidth, 0, walkspriteWidth, walkspriteHeight, this.x, this.y, walkspriteWidth, walkspriteHeight);
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
  //// if momo is moving , update x position
  //// update x position with xvelocity, up to max momo speed
  //// make sure you dont go beyond walls
  //// if moving, apply friction until 1) vel is 0 OR 2) momo move backwards OR 3)jumping
  //// friction here is a positive number (2)
  calcXPos(){
    if (this.xVelocity > 0 && this.direction === "left"){
      this.x -= this.xVelocity;
      if (this.yVelocity === 0) {
        this.xVelocity -= CONSTANTS.FRICTION;
      }
      // so momo can't walk past canvas wall
      if (this.x <= 0){
        this.x = 0;
        this.xVelocity = 0;
      }
    } 
    
    if (this.xVelocity > 0 && this.direction === "right"){
      this.x += this.xVelocity;
      if (this.yVelocity === 0 ){
        this.xVelocity -= CONSTANTS.FRICTION;
      }
      // so momo can't walk past canvas wall
      if (this.x >= (CONSTANTS.RIGHTWALL - walkspriteWidth)){
        this.x = (CONSTANTS.RIGHTWALL - walkspriteWidth);
        this.xVelocity = 0;
      }
    } 

    
  }


  jump(){
      // if momo is on the ground, then set velocity to jump speed (which is negative, which updates y-pos to be going up)
    // this.direction = "up";
    if (this.y === CONSTANTS.GROUND){
      this.jumped = true;
      this.yVelocity = CONSTANTS.JUMP_SPEED;
    };

  }
  
  moveLeft(speed){
    this.direction = "left";
    if (speed === "walk"){
    this.xVelocity = CONSTANTS.WALK_SPEED;
    } else if (speed === "run"){
      this.xVelocity = CONSTANTS.RUN_SPEED;
    }
  }
  
  moveRight(speed){
    this.direction = "right";
    if (speed === "walk"){
      this.xVelocity = CONSTANTS.WALK_SPEED;
    } else if (speed === "run"){
        this.xVelocity = CONSTANTS.RUN_SPEED;
    }
  }

  moveDown(){
    this.direction = "down";
    if (this.y !== CONSTANTS.GROUND){
      /// need to this this part once I make platforms
      this.yVelocity = -CONSTANTS.JUMP_SPEED;
    };
  }


}