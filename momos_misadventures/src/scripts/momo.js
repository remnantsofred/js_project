//// this should include all the logic related to the main character momo
//// how to draw and animate momo and source files
//// momo moves and position
import GameObject from './game_object';

export const CONSTANTS = {
  GRAVITY: 2,
  FRICTION: 0.1,
  JUMP_SPEED: -30,
  GROUND: 539,
  TERMINAL_VEL:  12,
  WALK_SPEED: 5,
  RUN_SPEED: 9,
  MAX_MOMO_SPEED: 20,
  LEFTWALL: 0,
  RIGHTWALL: 800,
};

const momoImage = new Image();
momoImage.width = 10;
momoImage.src = "./src/assets/cats/momo_walk_right.png"
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
let sizeModifier = 0.75;
let frameX = 1;
let frameY = 0;
//set a maxFrame variable per row
let gameFrame = 0;
let staggerFrames = 10;
//bigger staggerFrame is slower looking move
//15 should be slow walk (5, 10, 15) 3 speeds
//max speed staggerFrames = 5

export default class Momo {

  constructor(canvasWidth, canvasHeight, bounce) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    // this.ctx = ctx;
    this.width = walkspriteWidth * sizeModifier; 
    this.height = walkspriteHeight * sizeModifier;
    this.x = canvasWidth / 8;
    this.y = this.momoBottom();
    this.yVelocity = 0;
    this.xVelocity = 0;
    this.calcXPos.bind(this);
    this.calcYPos.bind(this);
    this.jump.bind(this);
    this.direction = null;
    this.jumped = false;
    this.grounded = true;
  }


  drawMomo(ctx){
    // this.ctx.clearRect(0,0,800,800);
    let prevPos = this.y;
    this.calcYPos();
    //// moving this section below and line 69 to collision logic
    if (this.y === prevPos && !this.jumped){
      this.grounded = true;
    } else {
      this.grounded = false;
    }

    // this.calcYPos();
    this.calcXPos();
    if(this.jumped === false && this.xVelocity > 0 && this.direction === "right")  {
      ctx.drawImage(momoImage, frameX * walkspriteWidth, 0, walkspriteWidth, walkspriteHeight, this.x, this.y, walkspriteWidth * sizeModifier, walkspriteHeight * sizeModifier);
      this.width = walkspriteWidth * sizeModifier;
      this.height = walkspriteHeight * sizeModifier;
      // if (gameFrame % staggerFrames == 0){       //old version
      if (gameFrame % staggerFrames == 0){
        // replace staggerFrames with xVelocity/3)
        if (frameX < 3) frameX ++;
        else frameX = 1;
      }
      
      gameFrame++
    } else if (this.jumped === false && this.xVelocity < 0 && this.direction === "left"){
      ctx.drawImage(momoLeft, frameX * walkspriteWidth, 0, walkspriteWidth, walkspriteHeight, this.x, this.y, walkspriteWidth * sizeModifier, walkspriteHeight * sizeModifier);
      this.width = walkspriteWidth * sizeModifier;
      this.height = walkspriteHeight * sizeModifier;
      // if (gameFrame % staggerFrames == 0){       //old version
      if (gameFrame % staggerFrames == 0){
        // replace staggerFrames with xVelocity/3)
        if (frameX < 3) frameX ++;
        else frameX = 1;
      }
       
      gameFrame++
    } else if (this.jumped === true && this.direction === "right"){
      ctx.drawImage(momoJumpRight, frameX * 165, 0, 165, 156, this.x, this.y, jumpspriteWidth * sizeModifier, jumpspriteHeight * sizeModifier);
      this.width = jumpspriteWidth * sizeModifier;
      this.height = jumpspriteHeight * sizeModifier;
      if (this.yVelocity < -3 && this.yVelocity > -30){
        frameX = 2;
      } else if (this.yVelocity < 3 && this.yVelocity >= -3) {
        frameX = 4;
      } else if (this.yVelocity <= CONSTANTS.TERMINAL_VEL && this.yVelocity >= 3){
        frameX = 5;
      }
      
    } else if (this.jumped === true && this.direction === "left"){
      ctx.drawImage(momoJumpLeft, frameX * jumpspriteWidth, 0, jumpspriteWidth, jumpspriteHeight, this.x, this.y, jumpspriteWidth * sizeModifier, jumpspriteHeight * sizeModifier);
      this.width = jumpspriteWidth * sizeModifier;
      this.height = jumpspriteHeight * sizeModifier;
      if (this.yVelocity < -3 && this.yVelocity > -30){
        frameX = 0;
      } else if (this.yVelocity < 3 && this.yVelocity > -3) {
        frameX = 2;

      } else {
        frameX = 3;
      }
     
    } else {
      ctx.drawImage(momoImage, 0 * walkspriteWidth, 0, walkspriteWidth, walkspriteHeight, this.x, this.y, walkspriteWidth * sizeModifier, walkspriteHeight * sizeModifier);
      this.width = walkspriteWidth * sizeModifier;
      this.height = walkspriteHeight * sizeModifier;
    };
    // requestAnimationFrame(this.drawMomo.bind(this));
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
      console.log(this.yVelocity)
      if(this.yVelocity < CONSTANTS.TERMINAL_VEL && this.y < this.momoBottom() && !this.grounded){
          this.yVelocity += CONSTANTS.GRAVITY;
      } 
      if(this.grounded && !this.jumped){
        this.yVelocity = 0;
      }
      if (this.y <= this.momoBottom()) {
        /// momo falls down
        this.y += this.yVelocity
        
        // if momo tries to go lower than floor, stop her at floor. wipe her "jumped" state
        if (this.y >= this.momoBottom()){
          this.y = this.momoBottom();
          this.jumped = false;
          this.yVelocity = 0;
          // this.grounded = true;
        }
      } 
      // as long as momo isn't falling beyond fast rate (12), apply gravity (which is positive, so go down)
      // if (this.y === this.momoBottom()){
      //   this.yVelocity = 0;
      // }
  }
  
  // updates X position (horizontal across board)
  //// if momo is moving , update x position
  //// update x position with xvelocity, up to max momo speed
  //// make sure you dont go beyond walls
  //// if moving, apply friction until 1) vel is 0 OR 2) momo move backwards OR 3)jumping
  //// friction here is a positive number (2)
  calcXPos(){

    //// if momo is not still
    if (this.xVelocity !== 0){
      //// update her x position by her velocity (left will be negative, right is positive)
      this.x += this.xVelocity;
      //// if she is falling 
      // if (this.yVelocity === 12) {       ////this was the old logic to say she's on the ground
      if (this.jumped === false) {
        //// if she was in the middle of moving right while falling
        if (this.xVelocity > 0){
          //// apply friction against her movement
          this.xVelocity -= CONSTANTS.FRICTION;
          //// but stop her from flipping backwards (so friction can't overtake her)
          if(this.xVelocity < 0){
            this.xVelocity = 0;
          }
        //// if she was in the middle of moving left while fallling 
        } else {
          //// apply friction against her movement
          this.xVelocity += CONSTANTS.FRICTION;
          //// but stop her from flipping forwards (so friction can't overtake her)
          if(this.xVelocity > 0){
            this.xVelocity = 0;
          }
        }
      }
      // so momo can't walk past canvas wall
      if (this.x <= 0){
        this.x = 0;
        this.xVelocity = 0;
      }
      if (this.x >= (CONSTANTS.RIGHTWALL - (walkspriteWidth* sizeModifier))){
        this.x = (CONSTANTS.RIGHTWALL - (walkspriteWidth* sizeModifier));
        this.xVelocity = 0;
      }
    } 
    

  }


  jump(){
      // if momo is on the ground, then set velocity to jump speed (which is negative, which updates y-pos to be going up)
    // this.direction = "up";
    // if (this.y === CONSTANTS.GROUND){
    if (this.grounded){
      console.log("jump")
      this.jumped = true;
      this.grounded = false;
      this.yVelocity = CONSTANTS.JUMP_SPEED;

    //// old working version  
    // if (this.jumped === false){
    //   this.jumped = true;
    //   this.grounded = false;
    //   this.yVelocity = CONSTANTS.JUMP_SPEED;
      // if (this.collide()){
      //   this.land();
      // }
    };

  }

  // land(){
  //   if (this.jumped === true){
  //     this.jumped = false;
  //     this.yVelocity = 0;
  //   };
  // }
  
  moveLeft(speed){
    this.direction = "left";
    if (speed === "walk"){
    this.xVelocity = -CONSTANTS.WALK_SPEED;
    } else if (speed === "run"){
      this.xVelocity = -CONSTANTS.RUN_SPEED;
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
    // this.direction = "down";
    //// if 
    if (this.y < (this.momoBottom())){
      /// need to this this part once I make platforms
      this.yVelocity = -CONSTANTS.JUMP_SPEED;
    // } else if (this.y + this.height >= CONSTANTS.GROUND){
    //   this.y = this.momoBottom();
    };
  }

    //// collide v1
    // collide(obj){
    //   if (this.x > obj.x + obj.width ||
    //       this.x + this.width < obj.x ||  
    //       this.y > obj.y + obj.height ||
    //       this.y + this.height < obj.y
    //   ) {
    //     // no collision detected
    //     return false;
    //   } else {
    //     //  collision

    //     // case 1 - momo lands on top


    //     // case 2 - momo hits the side (left)


    //     // case 3 - momo hits the side (right)


    //     // case 4 - momo hits the bottom 
    //     if(this.xVelocity > 0){
    //       this.xVelocity = 0;
    //       this.x = obj.x;
    //     } else if (this.yVelocity > 0){
    //       this.yVelocity = 0;
    //       this.y = obj.y;
    //     };
    //   }
    
    // }

    //// new version - breaking out the types of collision
    // collide(obj){
    //   let momoTop = [this.x, this.x + this.width];
    //   let momoLeftSide = [this.x, this.y + this.height];
    //   let momoRightSide = [this.x + this.width, this.y + this.height];
    //   let momoBottom = [this.x + this.width, this.y + this.height];

      //// momo's top left corner is to the left of the object's top right corner)
      //// this.x < obj.x + obj.width
      
      //// momo's top right corner is to the right of the object's top left corner (overlap) - her right hit the obj left 
      //// this.x + this.width > obj.x
      
      //// momo's top left corner is to the left of the object's left side?
      //// this.y < obj.y + obj.height 
     
      //// momo's left side is to the right of the object's height
      //// this.y + this.height > obj.y


      // case 1 - momo lands on top
      // if (){

      // } 
      // // case 2 - momo hits the side (left)
      // if (){

      // } 
      // // case 3 - momo hits the side (right)
      // if (){

      // } 
      // // case 4 - momo hits the bottom 
      // if (){

      // } 
      // else {
      //   // no collision detected
      //   return false;
      // }
    // }

  collide(obj){
      // collision
      //// if the object is "collidable" from their object attribute "obj.collision" (boolean)
      if (obj.collision === true) {
        //// this is down collision
        if (!this.grounded &&
            //// if momo's left corner is to the left of the object length AND
            this.x < obj.x + obj.width &&
            //// momo's right corner overlaps/goes beyond object left corner
            this.x + this.width > obj.x &&  
            //// momo is higher than object 
            this.y < obj.y + obj.height &&
            //// momo's feet is lower than object left corner
            this.y + this.height > obj.y){
          
          if (this.yVelocity > 0){
            this.yVelocity = 0;
          }
  
          //// once momo collides, ground her.
          this.grounded = true;
          //// to enable jump from platform, we must have the below if condition (registering a jump keypress)
          //// otherwise game will draw again, including running this collide method which would set momo jumped to false before 
          //// the jump can register
          if (this.yVelocity !== CONSTANTS.JUMP_SPEED){
            this.jumped = false;
          }
          return true;
        } else {
          this.grounded = false;
          return false;
        }
      // } else {
      //   // no collision
      // }
      }
  }
          //// this bottom part isn't working
        // } else if (!this.grounded &&
        //   //// if momo's left corner is to the left of the object length AND
        //   this.x < obj.x + obj.width &&
        //   //// momo's right corner overlaps/goes beyond object left corner
        //   this.x + this.width > obj.x &&  
        //   //// momo is lower than object 
        //   this.y > obj.y + obj.height &&
        //   //// momo's heade is higher than object left corner
        //   this.y + this.height < obj.y) {
        //     console.log("top collision")
        //     if (this.yVelocity < 0){
        //       this.yVelocity = 12;
        //       this.grounded = false;
        //       this.jumped = false;
        //     }
  
  
  //// this is momo's true ground since she has height and we don't want her to sink below ground
  //// momo bottom will change if you change her height so just use the standing sprite height
  momoBottom(){
    return CONSTANTS.GROUND - (walkspriteHeight * sizeModifier);
  }


}