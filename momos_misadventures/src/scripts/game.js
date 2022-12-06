import Momo, { CONSTANTS } from './momo';
import Level, { level1Background, level2Background} from './level'
import GameObject from './game_object';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../index.js';



//// starting a new game should entail:
//// import /load game_view (or does new game go into game_view?) --> ask someone 
//// creating a canvas, saving ctx
//// loop over all opjects, draw all
//// logic to start a minigame and continue to next one if win (and update score) (random)
//// go back to main screen on loss 

//// new level constructor takes in (title, subtitle, background, maxtime, objects, target)
// const level1 = new Level('Forbidden furniture!', 'Get on the highest piece of furniture!', level1Background, 6, level1Objects, fridge);
// const level2 = new Level('Ambush Ashy!', '', level2Background, 6, level2Objects, ashy);
// const level3 = new Level('Kill the fly!', '', level2Background, 6, level3Objects, fly);

/// make sure ground and firstObjectHidden appear first in each levelObjects array


export default class Game {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: CANVAS_WIDTH, height: CANVAS_HEIGHT };
    this.canvas = canvas;
    // this momo is the real momo, okay. 
    this.momo = new Momo(this.dimensions.width, this.dimensions.height);
    this.score = 0;
    /// use #FFffff for transparent
    //// this is the ground below:
    const ground = new GameObject(this.ctx, 0, CONSTANTS.GROUND, CANVAS_WIDTH, 61, "#449903", false, false, false);  
    //// if I can't figure out why the first object collision doesn't work, set the first object as 0 and in the ground
    const firstObjectHidden = new GameObject(this.ctx, 0, 800, 0, 0, "#000000", true, false, false); 
    //// ground, then firstObjectHidden must go in each levelObjects array
    const fridge = new GameObject(this.ctx, 56, 110, 143, 1, "#FFffffff", true, false, true);
    const sinkLevel = new GameObject(this.ctx, 209, 346, 538, 1, "#FFffffff", true, false, false);
    const leftShelf = new GameObject(this.ctx, 404, 227, 140, 1, "#FFffffff", true, false, false);
    const rightShelf = new GameObject(this.ctx, 579, 173, 140, 1, "#FFffffff", true, false, false);
    //// need to fix Ashy later
    const Ashy = new GameObject(this.ctx, 579, 173, 140, 1, "#FFffffff", true, false, false);
    const fly = new GameObject(this.ctx, 579, 173, 140, 1, "#FFffffff", true, false, false);
    // GameObject constructor(ctx, x, y, width, height, color, collision, bounce, target) {
      
    const level1Objects = [
      ground,
      firstObjectHidden,
      fridge,
      sinkLevel,
      leftShelf,
      rightShelf
    ];
      
    const level2Objects = [
      ground,
      firstObjectHidden
      
    ];
      
    const level3Objects = [
      ground,
      firstObjectHidden
      
    ];
      
    this.levels = [ 
      new Level('Forbidden furniture!', 'Get on the highest piece of furniture!', level1Background, 6, level1Objects, fridge),
      new Level('Ambush Ashy!', '', level2Background, 6, level2Objects, Ashy),
      new Level('Kill the fly!', '', level2Background, 6, level3Objects, fly),
    ];

    this.level = this.randomSelectLevel();
    this.objects = this.level.objects;
    this.play();
  }
    
    
    
  play(){
    // this.running = true;
    this.draw();
    this.addEventListeners();
    
    // TO ADD: cycle thru all objects & draw each
  }
  
  randomSelectLevel(){
    //// return a random level from this.levels (plural);
    return this.levels[0];
    /// shuffle arrays
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
    this.level.drawBackground(this.ctx);  
    this.level.drawTitle(this.ctx);
    
    // this.ctx.fillText('Get on the highest piece of furniture!', 270, 120);
    
    
    for(const obj of this.objects){
      if (this.momo.collide(obj)){
        if (obj.target === true) {
          console.log("You win!")
          //// in the future, call winGame here? or winMiniGame?
          this.winMiniGame();
        }       
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
  //// 
  
  
  
  
  //// resetScore
  
  //// pause
  
  //// win?
  
  //// lose?
  
  //// next game
  winMiniGame(){
    console.log("winMiniGame hit - you win!")
    this.score += 1;
    //// play win animation, move to next game, update count, play a victory sound
    /// 
  }
  
  //// handle Collisions
  handleCollisions(){
    // for()
  }
  
  
  
}






























