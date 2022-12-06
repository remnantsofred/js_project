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

    this.prevlevel = null;
    this.level = this.randomSelectLevel();
    this.objects = this.level.objects;
    this.winCounter = 0;
    this.wonMiniGame = false;
    this.lostGame = false;
    this.timeremaining = this.level.maxtime;
    this.play();
    /// do I need a running toggle?
    // this.running = false;
  }
    
  //// random level select logic: (is this problematic beacuse when we restart the old array is restarted?)
  //// if this.prevlevel is null, then select first level
  //// else if this.prevlevel is this.levels[0], then return this.levels[1]
  //// else if this.prevlevel is this.levels[1], then return this.levels[2]
  //// else if this.prevlevel is this.levels[2], then return this.levels[3]
  //// else if this.prevlevel is this.levels[3], then shuffle array and return this.levels[0]
  randomSelectLevel(){
    //// return a random level from this.levels (plural);

    if (!this.prevlevel) {
      return this.levels[0];
      
      // console.log(this.prevlevel)
    // } else if (){
      
    // } else if (){
      
    // } else if (){
      
    // } else if (){
    //   this.shuffleLevelArray();
    } else 
    return this.levels[1];


  }

  shuffleLevelArray(){

  }
  
  play(){
    this.draw();
    this.addEventListeners();
  }
 
  //// if adding event listeners to canvas, need to pass in bound callback
  addEventListeners(){
    window.addEventListener("keydown", this.keydownEvents.bind(this))
    // a canvas example: this.canvas.addEventListener("mousedown", this.click.bind(this));
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
      
    };
    
    
    
  draw(){
    this.ctx.clearRect(0,0,800,800);         /// clear the canvas
    this.level.drawBackground(this.ctx);     /// draw the level's background
    this.level.drawTitle(this.ctx);          /// draw the level's title (and subtitle, if applicable)
    this.wonMiniGame = false;
    for(const obj of this.objects){          //// iterate through this level's obejcts and check collision
      if (this.momo.collide(obj)){
        if (obj.target === true) {
          console.log(this.winCounter)
          this.winCounter += 1;
          if (this.winCounter > 11){
            this.wonMiniGame = true;
          }
        }       
        break;
      };
    };
    
    for(const obj of this.objects){         //// iterate through this level's obejcts and draw them
      obj.drawObject(this.ctx);
    };

    this.momo.drawMomo(this.ctx);
    this.ctx.font = '22px serif';
    this.ctx.fillStyle = "#daa520";
    this.ctx.fillText('Score:', 657, 75);
    this.ctx.fillText(this.score.toString(), 735, 75);          //// draw score
    this.ctx.fillText('Time left:', 626, 100);                //// draw timer countdown
    this.ctx.fillText(this.timeremaining.toString(), 735, 100);          //// draw score
    ///// draw time left here
    let id = requestAnimationFrame(this.draw.bind(this));
    this.timeremaining -= 0.01;
    if (this.timeremaining <= 0){
      this.lostGame = true;
      cancelAnimationFrame(id);
      this.loseGame();
      console.log(this.lostGame);
    }
    if (this.wonMiniGame){
      cancelAnimationFrame(id);
      this.winMiniGame();
    };
  }
  

  //// pause

  
  
  //// lose? when timer runs out. where do I decriment time? 
  //// resetScore
  loseGame(){
    /// splash for you lose! sad momo sound
    this.resetGame();
  }


  resetGame(){
    this.prevlevel = this.level;      //// save current level as prev level
    this.winCounter = 0;              //// reset win counter
    if (this.wonMiniGame){
      this.score += 1;                //// increment score if won
      this.winMiniGame = false;
    } else {
      this.score = 0;                 //// wipe score if lost
    }
    this.level = this.randomSelectLevel();         //// select a new level
    this.timeremaining = this.level.maxtime;
    this.momo.reset();
    this.draw();
  }


  //// play win animation, move to next game, update count, play a victory sound
  winMiniGame(){
    //// show win statement 
    //// play win sound
    //// splash for you won!
    this.resetGame();               //// restart game 
  }

  
  
  //// handle Collisions
  handleCollisions(){
    // for()
  }
  
  
  
}






























