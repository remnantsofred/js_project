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
  FLYSPEED: 12,
};

const momoImage = new Image();
// momoImage.width = 10;
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

const momoFalling = new Image();
momoFalling.src = "./src/assets/cats/momo_falling.png"
const fallingspriteWidth = 146;
const fallingspriteHeight = 122;

const momoAmbush = new Image();
momoAmbush.src = "./src/assets/cats/momo_ambush_fall.png"
const ambushspriteWidth = 104;
const ambushspriteHeight = 119;

const upsidedownMomoright = new Image();
upsidedownMomoright.src = "./src/assets/cats/momo_walk_right_upside_down.png"
const upsidedownMomoleft = new Image();
upsidedownMomoleft.src = "./src/assets/cats/momo_walk_left_upside_down.png"

const ashyImage = new Image();
ashyImage.src = "./src/assets/cats/ash_walk_right.png"
const ashyLeft = new Image();
ashyLeft.src = "./src/assets/cats/ash_walk_left.png"

const ashyScared = new Image();
ashyScared.src = "./src/assets/cats/ashy_scared.png"
const ashyScaredspriteWidth = 141;
const ashyScaredspriteHeight = 120;

const ambushImpactjustAsh = new Image();
ambushImpactjustAsh.src = "./src/assets/cats/ambushcollision_justashy.png"
const ambushImpactjustAshWidth = 285;
const ambushImpactjustAshHeight = 283;

const ambushImpact = new Image();
ambushImpact.src = "./src/assets/cats/ambushcollision.png"
const ambushImpactWidth = 285;
const ambushImpactHeight = 283;


const flyImage = new Image();
flyImage.src = "./src/assets/cats/TigerMothFlap4.png";
let flysizeModifier = 1;
const flyImagewidth = 163;
const flyImageHeight = 80;

const momoCanonball = new Image();
momoCanonball.src = "./src/assets/cats/momo_ambush_fall_action_lines.png"; 
const momoCannonballWidth = 298;
const momoCannonballHeight = 298;



let sizeModifier = 0.75;
let frameX = 1;
let frameY = 0;
//set a maxFrame variable per row    ///// (if using multiple row sprite sheet)
let gameFrame = 0;
let staggerFrames = 10;
//bigger staggerFrame is slower looking move
//15 should be slow walk (5, 10, 15) 3 speeds
//max speed staggerFrames = 5

export default class Momo {

  constructor(canvasWidth, canvasHeight, ash, fly, level = null) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.calcXPos.bind(this);
    this.calcYPos.bind(this);
    this.jump.bind(this);
    this.ash = ash;
    this.fly = fly;
    this.level = level;
    this.upsidedown = false;
    this.reset();
  }

  reset(){
    this.width = walkspriteWidth * sizeModifier; 
    this.height = walkspriteHeight * sizeModifier;
    this.x = this.canvasWidth / 8;
    this.y = this.momoBottom();
    this.yVelocity = 0;
    this.xVelocity = 0;
    this.direction = null;
    this.jumped = false;
    this.grounded = true;
    this.upsidedown = false;
  }

  draw(ctx){
    let prevPos = this.y;
    this.calcYPos();
    //// moving this section below and line 69 to collision logic //// keeping here for now because it works
    if (this.y === prevPos && !this.jumped){
      this.grounded = true;
    } else {
      this.grounded = false;
    }

    this.calcXPos();

    if (!this.ash && !this.fly){
      if(this.level === "AMBUSH" && this.upsidedown === true){
        if(this.direction === "right" && this.xVelocity > 0) {  
          ctx.drawImage(upsidedownMomoright, frameX * walkspriteWidth, 0, walkspriteWidth, walkspriteHeight, this.x, this.y, walkspriteWidth * sizeModifier, walkspriteHeight * sizeModifier);
          this.width = walkspriteWidth * sizeModifier;
          this.height = walkspriteHeight * sizeModifier;
          if (gameFrame % staggerFrames == 0){
            if (frameX < 3) frameX ++;
            else frameX = 1;}
        } else if (this.direction === "left" && this.xVelocity < 0){
          ctx.drawImage(upsidedownMomoleft, frameX * walkspriteWidth, 0, walkspriteWidth, walkspriteHeight, this.x, this.y, walkspriteWidth * sizeModifier, walkspriteHeight * sizeModifier);
          this.width = walkspriteWidth * sizeModifier;
          this.height = walkspriteHeight * sizeModifier;
          if (gameFrame % staggerFrames == 0){
            if (frameX < 3) frameX ++;
            else frameX = 1;}
        } else {
          ctx.drawImage(upsidedownMomoright, 0 * walkspriteWidth, 0, walkspriteWidth, walkspriteHeight, this.x, this.y, walkspriteWidth * sizeModifier, walkspriteHeight * sizeModifier);
          this.width = walkspriteWidth * sizeModifier;
          this.height = walkspriteHeight * sizeModifier;
        };   
      }

      if(this.upsidedown === false){  
        if(this.jumped === false && this.xVelocity > 0 && this.direction === "right")  {
          ctx.drawImage(momoImage, frameX * walkspriteWidth, 0, walkspriteWidth, walkspriteHeight, this.x, this.y, walkspriteWidth * sizeModifier, walkspriteHeight * sizeModifier);
          this.width = walkspriteWidth * sizeModifier;
          this.height = walkspriteHeight * sizeModifier;
          if (gameFrame % staggerFrames == 0){
            if (frameX < 3) frameX ++;
            else frameX = 1;
          }
          
          gameFrame++
        } else if (this.jumped === false && this.xVelocity < 0 && this.direction === "left"){
            ctx.drawImage(momoLeft, frameX * walkspriteWidth, 0, walkspriteWidth, walkspriteHeight, this.x, this.y, walkspriteWidth * sizeModifier, walkspriteHeight * sizeModifier);
            this.width = walkspriteWidth * sizeModifier;
            this.height = walkspriteHeight * sizeModifier;
            if (gameFrame % staggerFrames == 0){
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
        } else if (this.level === "AMBUSH" && this.direction === "down" && this.grounded === false){
            ctx.drawImage(momoAmbush, 0 * ambushspriteWidth, 0, ambushspriteWidth, ambushspriteHeight, this.x, this.y, ambushspriteWidth * sizeModifier, ambushspriteHeight * sizeModifier);
            this.width = ambushspriteWidth * sizeModifier;
            this.height = ambushspriteHeight * sizeModifier;

        } else if (this.direction === "down" && this.yVelocity !== 0){ 
          ctx.drawImage(momoFalling, 0 * fallingspriteWidth, 0, fallingspriteWidth, fallingspriteHeight, this.x, this.y, fallingspriteWidth * sizeModifier, fallingspriteHeight * sizeModifier);
          this.width = fallingspriteWidth * sizeModifier;
          this.height = fallingspriteHeight * sizeModifier;

        } else {
          ctx.drawImage(momoImage, 0 * walkspriteWidth, 0, walkspriteWidth, walkspriteHeight, this.x, this.y, walkspriteWidth * sizeModifier, walkspriteHeight * sizeModifier);
          this.width = walkspriteWidth * sizeModifier;
          this.height = walkspriteHeight * sizeModifier;
        }
      }
    } else if (this.ash){
      if(this.jumped === false && this.xVelocity > 0 && this.direction === "right")  {
        ctx.drawImage(ashyImage, frameX * walkspriteWidth, 0, walkspriteWidth, walkspriteHeight, this.x, this.y, walkspriteWidth * sizeModifier, walkspriteHeight * sizeModifier);
        this.width = walkspriteWidth * sizeModifier;
        this.height = walkspriteHeight * sizeModifier;
        if (gameFrame % staggerFrames == 0){
          if (frameX < 3) frameX ++;
          else frameX = 1;
        }
        
        gameFrame++
      } else if (this.jumped === false && this.xVelocity < 0 && this.direction === "left"){
          ctx.drawImage(ashyLeft, frameX * walkspriteWidth, 0, walkspriteWidth, walkspriteHeight, this.x, this.y, walkspriteWidth * sizeModifier, walkspriteHeight * sizeModifier);
          this.width = walkspriteWidth * sizeModifier;
          this.height = walkspriteHeight * sizeModifier;
          if (gameFrame % staggerFrames === 0){
            if (frameX < 3) frameX ++;
            else frameX = 1;
          }
        
        gameFrame++

      // } else if (this.direction === "scared"){
      //   ctx.drawImage(ashyScared, 0 * ashyScaredspriteWidth, 0, ashyScaredspriteWidth, ashyScaredspriteHeight, this.x, this.y, ashyScaredspriteWidth * sizeModifier, ashyScaredspriteHeight * sizeModifier);
      //   this.width = ashyScaredspriteWidth * sizeModifier;
      //   this.height = ashyScaredspriteHeight * sizeModifier;
      // }
        
      // } else if (this.direction === "scared"){
      //   ctx.drawImage(ambushImpactjustAsh, 0 * ambushImpactjustAshWidth, 0, ambushImpactjustAshWidth, ambushImpactjustAshHeight, this.x, this.y, ambushImpactjustAshWidth * sizeModifier, ambushImpactjustAshHeight * sizeModifier);
      //   this.width = ambushImpactjustAshWidth * sizeModifier;
      //   this.height = ambushImpactjustAshHeight * sizeModifier;
      // }
      
      } else if (this.direction === "scared"){
        ctx.drawImage(ambushImpact, 0 * ambushImpactWidth, 0, ambushImpactWidth, ambushImpactHeight, this.x - 75, this.y - 55, ambushImpactWidth * sizeModifier, ambushImpactHeight * sizeModifier);
        this.width = ambushImpactWidth * sizeModifier; 
        this.height = ambushImpactHeight * sizeModifier;
      }
  
      // } else {
      //   ctx.drawImage(ashyImage, 0 * walkspriteWidth, 0, walkspriteWidth, walkspriteHeight, this.x, this.y, walkspriteWidth * sizeModifier, walkspriteHeight * sizeModifier);
      //   this.width = walkspriteWidth * sizeModifier;
      //   this.height = walkspriteHeight * sizeModifier;
      // }

    } else if (this.fly){
        ctx.drawImage(flyImage, frameX * flyImagewidth, 0, flyImagewidth, flyImageHeight, this.x, this.y, flyImagewidth * flysizeModifier, flyImageHeight * flysizeModifier);
        this.width = flyImagewidth * flysizeModifier;
        this.height = flyImageHeight * flysizeModifier;
        if (gameFrame % staggerFrames === 0){
          if (frameX < 3) frameX ++;
          else frameX = 0;
        }
        
        gameFrame++
    } 
  }

  // update Y position (height / vertical pos)
  calcYPos(){
    /// if momo is currently higher than ground,
    /// and as long as momo isn't falling beyond fast rate (12), apply gravity (which is positive, so go down)
    if (!this.fly){
      if (this.yVelocity < CONSTANTS.TERMINAL_VEL && this.y < this.momoBottom() && !this.grounded){
        this.yVelocity += CONSTANTS.GRAVITY;
      } 
      if (this.grounded && !this.jumped && this.direction !== "down"){
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
          // if (this.level === "AMBUSH"){ 
          //   this.grounded = true;
          // }
        }
      } 
    }
  }
  
  // updates X position (horizontal across board)
  //// if momo is moving , update x position
  //// update x position with xvelocity, up to max momo speed
  //// make sure you dont go beyond walls
  //// if moving, apply friction until 1) vel is 0 OR 2) momo move backwards OR 3)jumping
  //// friction here is a positive number (2)
  calcXPos(){
    //// if momo is not still
    if (!this.ash){  
      if (this.xVelocity !== 0){
        //// update her x position by her velocity (left will be negative, right is positive)
        this.x += this.xVelocity;
        //// if she is falling 
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
    } else if (this.ash){
      this.x += this.xVelocity
    }

  }

  jump(){
    // if momo is on the ground, then set velocity to jump speed (which is negative, which updates y-pos to be going up)
    if (this.grounded){
      this.jumped = true;
      this.grounded = false;
      this.yVelocity = CONSTANTS.JUMP_SPEED;
    };

  }
  
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
    //// if momo is above ground
    if (((this.y + this.height) < (this.momoBottom())) && this.grounded){
      /// need to this this part once I make platforms
      this.yVelocity = CONSTANTS.GRAVITY;
      this.direction = "down";
      this.grounded = false;
    // } else if (this.y + this.height >= CONSTANTS.GROUND){
    //   this.y = this.momoBottom();
    };
    
    this.upsidedown = false;  
  }


  collide(obj, ignoreIfs){
      //// if the object is "collidable" from their object attribute "obj.collision" (boolean)
    if (obj.collision) {
      //// this below is a collision
      if (!this.grounded &&
        //// if momo's left corner is to the left of the object length AND
        this.x < obj.x + obj.width &&
        //// momo's right corner overlaps/goes beyond object left corner
        this.x + this.width > obj.x &&  
        //// momo is higher than object 
        this.y < obj.y + obj.height &&
        //// momo's feet is lower than object left corner
        this.y + this.height > obj.y){
        //// stop momo when she hits the platform from above (top collision). once momo collides, ground her.
        if (this.yVelocity >= 0 && this.direction !== "down" && !ignoreIfs){
          this.yVelocity = 0;
          this.grounded = true;
          this.jumped = false;    

        //// this section is bottom collision
        //// to enable jump from platform, we must have the below if condition (registering a jump keypress)
        //// otherwise game will draw again, including running this collide method which would set momo jumped to false before 
        //// the jump can register
        } else if (this.yVelocity < 0 && this.yVelocity >= CONSTANTS.JUMP_SPEED + 4  && !ignoreIfs) {
          this.yVelocity = 2;
          this.grounded = false;
          this.jumped = false;
          this.y = obj.y + obj.height + 1;
        }
        return true;
      //// below else means no collision
      } else {
        if (!ignoreIfs) {
          this.grounded = false; 
        }
        return false;
      }
    }
  }
  

  
  //// this is momo's true ground or "floor" since she has height and we don't want her to sink below ground
  //// momo bottom will change if you change her height so just use the standing sprite height
  momoBottom(){
    return CONSTANTS.GROUND - (walkspriteHeight * sizeModifier);
  }

  automateMovement(){
    if (this.direction === "right"){
      this.xVelocity = this.fly? CONSTANTS.FLYSPEED : CONSTANTS.WALK_SPEED;
      if (this.x >= (CONSTANTS.RIGHTWALL - (walkspriteWidth* sizeModifier))){
        // this.x = (CONSTANTS.RIGHTWALL - (walkspriteWidth* sizeModifier));
        this.direction = "left";
        this.xVelocity = this.fly? -CONSTANTS.FLYSPEED : -CONSTANTS.WALK_SPEED;
      }
    } 
    
    if (this.direction === "left"){
      this.xVelocity = this.fly? -CONSTANTS.FLYSPEED : -CONSTANTS.WALK_SPEED;
      if (this.x >= (CONSTANTS.RIGHTWALL - (walkspriteWidth* sizeModifier))){
        this.xVelocity = this.fly? -CONSTANTS.FLYSPEED : -CONSTANTS.WALK_SPEED;
      } else if (this.x <= 0){
      // this.x = 0;
        this.xVelocity = this.fly? CONSTANTS.FLYSPEED : CONSTANTS.WALK_SPEED;
        this.direction = "right";
      }
    }
  }

  changeStartingPos(x, y){
    this.x = x;
    this.y = y;
  }

}