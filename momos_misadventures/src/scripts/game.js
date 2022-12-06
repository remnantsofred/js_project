import Momo, { CONSTANTS } from './momo';
import Level from './level'
import GameObject from './game_object';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../index.js';



//// starting a new game should entail:
//// import /load game_view (or does new game go into game_view?) --> ask someone 
//// creating a canvas, saving ctx
//// loop over all opjects, draw all
//// logic to start a minigame and continue to next one if win (and update score)
//// go back to main screen on loss 

const background = new Image();
background.src = "./src/assets/backgrounds/kitchen_simple.png"
// background.src = "/Users/daphnelam/Desktop/aA/js_project/momos_misadventures/src/assets/backgrounds/kitchen_simple.png"


export default class Game {
  constructor(canvas, level) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.canvas = canvas;
    // this momo is the real momo, okay. 
    this.momo = new Momo(this.dimensions.width, this.dimensions.height);
    this.level = new Level(this.dimensions);
    this.score = 0;
    //need to refactor this.objects based on levels in the future
    //this is proof of concept
    /// use #FFffff for transparent
    //// this is the ground below:
    const ground = new GameObject(this.ctx, 0, CONSTANTS.GROUND, CANVAS_WIDTH, 61, "#449903", false, false);  
    const fridge = new GameObject(this.ctx, 56, 110, 143, 1, "#FFffff", true, false)
    const sinkLevel = new GameObject(this.ctx, 209, 346, 538, 1, "#FFffff", true, false)
    const leftShelf = new GameObject(this.ctx, 404, 227, 140, 1, "#FFffff", true, false)
    const rightShelf = new GameObject(this.ctx, 579, 173, 140, 1, "#FFffff", true, false)


    this.objects = [
      ground,
      //// if I can't figure out why the first object collision doesn't work, set the first object as 0 and in the ground
      new GameObject(this.ctx, 0, 800, 0, 0, "#000000", true, false), 
      fridge,
      sinkLevel,
      leftShelf,
      rightShelf
      // new GameObject(this.ctx, 400, 200, 100, 10, "#000000", true, false), 
      // new GameObject(this.ctx, 250, 400, 100, 10, "#ffffff", true, false),
      // new GameObject(this.ctx, 350, 400, 100, 10, "#aaaaaa", true, false),
      // new GameObject(this.ctx, 550, 400, 100, 10, "#555555", true, false),
    ];
    // GameObject constructor(ctx, x, y, width, height, color, collision, bounce) {
      this.play();
    }
    
    
  
  play(){
    // this.running = true;
    this.draw();
    this.addEventListeners();
    
    // TO ADD: cycle thru all objects & draw each
  }
  
  //// old code was click to jump. leaving here for a second
  // click(){
  //   this.momo.jump();
  // }
  
  addEventListeners(){
    window.addEventListener("keydown", this.keydownEvents.bind(this))
    //// if adding event listeners to canvas, need to pass in bound callback
    // this.canvas.addEventListener("mousedown", this.click.bind(this));
  }
  
  /// maybe change momo to run regardless because jumping is better
  keydownEvents(e){
    if (e.key === "ArrowLeft") {
      if (e.repeat){
        this.momo.moveLeft("run");
      } else if (!e.repeat){
        this.momo.moveLeft("walk");
      }
    } else if (e.key === "ArrowUp") {
      this.momo.jump();

      // fall through platform if not on ground
    } else if (e.key === "ArrowDown") {
      this.momo.moveDown();
      
    } else if (e.key === "ArrowRight"){
      // this.momo.calcXPos(5);
      if (e.repeat){
        this.momo.moveRight("run");
      } else if (!e.repeat){
        this.momo.moveRight("walk");
      }
    } // else if (e.key === )
    // else if (e.key === ' ' || e.key === "Spacebar"){
    // };
    /// ^ to do later: add action key for spacebar
    ;
  };


  //// draw
  //// for now add background directly in game objects no collision
  //// but later have it draw the background first then momo and the objects
  //// because the game should cycle through mini game so each mini game should have a background image, etc

  draw(){
    this.ctx.clearRect(0,0,800,800);
    ////  this.ctx.drawImage(momo, frameX * spriteWidth, 0, spriteWidth, spriteHeight, 50, 450, spriteWidth, spriteHeight);
    this.ctx.drawImage(background, 0, 0, 3332, 2499, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT + 75);

    for(const obj of this.objects){
      if (this.momo.collide(obj)){
          break;
      };
    };

    for(const obj of this.objects){
      obj.drawObject(this.ctx);
    };
    this.momo.drawMomo(this.ctx);
    
    requestAnimationFrame(this.draw.bind(this));
  }


  //// score -> update this.score when you beat a mini-game




  //// resetScore

  //// pause

  //// win?

  //// lose?

  //// next game

  //// handle Collisions
  handleCollisions(){
    // for()
  }
  


}