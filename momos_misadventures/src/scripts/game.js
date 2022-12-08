import Momo, { CONSTANTS } from './momo';
import Level, { level1Background, level2Background, level4Background} from './level'
import GameObject from './game_object';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../index.js';



//// starting a new game should entail:
//// import /load game_view (or does new game go into game_view?) --> ask someone 
//// creating a canvas, saving ctx
//// loop over all opjects, animate all
//// logic to start a minigame and continue to next one if win (and update score) (random)
//// go back to main screen on loss 

//// new level constructor(id, title, subtitle, background, maxtime, objects, gravityModifier, target) 
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
    this.momo = new Momo(this.dimensions.width, this.dimensions.height, false);
    /// use #FFffff for transparent
    /// use #7cfd21 for bright green (starting out to gauge pos)
    //// this is the ground below:
    const ground = new GameObject(this.ctx, 0, CONSTANTS.GROUND, CANVAS_WIDTH, 61, "#449903", false, false, false);  
    //// if I can't figure out why the first object collision doesn't work, set the first object as 0 and in the ground
    const firstObjectHidden = new GameObject(this.ctx, 0, 800, 0, 0, "#000000", true, false, false);
    //// ground, then firstObjectHidden must go in each levelObjects array
    const fridge = new GameObject(this.ctx, 58, 158, 135, 5, "#7cfd21", true, false, true);
    const sinkLevel = new GameObject(this.ctx, 208, 364, 340, 5, "#fde321", true, false, false);
    const leftShelf = new GameObject(this.ctx, 450, 203, 120, 5, "#fde321", true, false, false);
    // const rightShelf = new GameObject(this.ctx, 579, 173, 140, 5, "#7cfd21", true, false, false);
    //// level 4 objects
    const curtainrod = new GameObject(this.ctx, 265, 160, 165, 5, "#7cfd21", true, false, true);
    // const couchCushion = new GameObject(this.ctx, 92, 431, 280, 5, "#7cfd21", true, false, false);
    const couchCushion = new GameObject(this.ctx, 290, 430, 90, 5, "#fde321", true, false, false);
    const couchTop = new GameObject(this.ctx, 80, 360, 160, 5, "#fde321", true, false, false);
    // const tvConsole = new GameObject(this.ctx, 478, 416, 276, 5, "#7cfd21", true, false, false);
    const tv = new GameObject(this.ctx, 537, 311, 160, 5, "#fde321", true, false, false);
    //// need to fix Ashy later
    // const Ashy = new GameObject(this.ctx, 579, 173, 140, 1, "#7cfd21", true, false, true);
    this.Ashy = new Momo(this.dimensions.width, this.dimensions.height, true);
    const fauxshelf = new GameObject(this.ctx, 235, 280, 200, 5, "#7cfd21", false, false, false);
    const hiddenledge = new GameObject(this.ctx, 250, 275, 200, 5, "#FFffff", true, false, false);
    const fly = new GameObject(this.ctx, 579, 173, 140, 1, "#7cfd21", true, false, true); 
    // GameObject constructor(ctx, x, y, width, height, color, collision, bounce, target) {
    // const <objName> = new GameObject(this.ctx, 248, 162, 206, 5, "#7cfd21", true, false, true);

    //// forbidden furniture v1 (kitchen)  
    const level1Objects = [
      ground,
      firstObjectHidden,
      fridge,
      sinkLevel,
      // leftShelf,
      // rightShelf
    ];
    //// ambush ashy (kitchen)  
    const level2Objects = [
      ground,
      firstObjectHidden,
      // fauxshelf,
      hiddenledge
      // this.Ashy,
      
    ];
    //// kill the fly (living room)  
    const level3Objects = [
      ground,
      firstObjectHidden
      
    ];
    //// forbidden furniture v2 (living room)
    const level4Objects = [
      ground,
      firstObjectHidden,
      curtainrod,
      couchCushion,
      couchTop,
      // tvConsole,
      tv
      
    ];
    //// constructor(id, title, subtitle, background, maxtime, objects, gravityModifier, target)
    this.levels = [ 
      new Level(1, 'CLIMB', '', level1Background, 10, level1Objects, 1, fridge),
      new Level(2, 'AMBUSH', '', level2Background, 20, level2Objects, 1, this.Ashy),
      new Level(3, 'KILL', '', level4Background, 10, level3Objects, 1, fly),
      new Level(4, 'CLIMB', '', level4Background, 10, level4Objects, 1, curtainrod),
      // new Level(id, 'ESCAPE', '', level2Background, 10, level4Objects, 1.5, curtainrod),
    ];

    this.prevlevel = null;
    // this.level = this.randomSelectLevel();     //// in the future, should start randomly? or always level0?
    this.level = this.levels[1];
    this.winCounter = 0;
    this.wonMiniGame = false;
    this.lostGame = false;
    this.score = 0;
    this.running = false;
    this.play();
    this.resetGame();

  }


  //// return a random level from this.levels (plural);
  //// iterate thru array so you don't get two of the same game in a row. shuffle array when you've gone through all levels
  randomSelectLevel(){
    if (!this.prevlevel) {
      return this.levels[0];
    } else if (this.prevlevel === this.levels[0]){
      return this.levels[1];
    } else if (this.prevlevel === this.levels[1]){
      return this.levels[2];
    } else if (this.prevlevel === this.levels[2]){
      return this.levels[3];
    } else if (this.prevlevel === this.levels[3]){
      this.shuffleLevelArray();
      return this.levels[0];
    }

    // //// testing level4
    // if (this.prevlevel === this.levels[2]){
    //   return this.levels[2];    
    // } else {
    //   return this.levels[2];   
    // }
    // return this.levels[1];
  }

  shuffleLevelArray(){
    let shuffled = this.levels.sort(() => Math.random() - 0.5);
    this.levels = shuffled;
  }
  
  play(){
    this.running = true;
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
    } else if (e.key === "ArrowDown") {     // fall through platform if not on ground
        this.momo.moveDown();
    } else if (e.key === "ArrowRight"){
      if (e.repeat){
        this.momo.moveRight("run");
      } else if (!e.repeat){
        this.momo.moveRight("walk");
      }
    } else if (e.key === ' ' || e.key === "Spacebar"){
        this.pauseGame();
    } else if (e.key === "ShiftLeft" || e.key === "ShiftRight"){
        this.gameAction();
    }
    //// ^ to do later: add action key for spacebar          
  }
    

  animate(){
    if (this.running){
      this.ctx.clearRect(0,0,800,800);         /// clear the canvas
      this.level.drawBackground(this.ctx);     /// draw the level's background
      this.level.drawTitle(this.ctx);          /// draw the level's title (and subtitle, if applicable)
      this.wonMiniGame = false;
      for(const obj of this.level.objects){    //// iterate through this level's obejcts and check collision
        if (this.momo.collide(obj)){
          if (obj.target === true) {          //// if she collides with winning object, win game
            this.winCounter += 1;
            if (this.winCounter > 11){
              this.wonMiniGame = true;
            }
          }       
          break;
        };
      };
      
      for(const obj of this.level.objects){         //// iterate through this level's obejcts and draw them
        obj.draw(this.ctx);
      };


      this.momo.draw(this.ctx);

      if (this.level.title === "AMBUSH"){
        this.Ashy.draw(this.ctx);
        this.Ashy.automateMovement();
        if (this.momo.collide(this.Ashy, true)){
          console.log('collide')
          this.wonMiniGame = true;
        }
      } 


      this.ctx.font = '22px  Itim, cursive';
      this.ctx.fillStyle = "#daa520";
      this.ctx.fillText('Score:', 657, 75);
      this.ctx.fillText(this.score.toString(), 735, 75);          //// draw score
      this.ctx.fillText('Time left:', 626, 100);                //// draw timer countdown
      this.ctx.fillText(this.timeremaining.toString(), 735, 100);          //// draw score
      ///// draw time left here
      let id = requestAnimationFrame(this.animate.bind(this));


      this.timeremaining -= 0.02;
      if (this.timeremaining <= 0){                 //// this is something wrong with this. 
        this.lostGame = true;                       //// can't read this.level.maxtime;
        cancelAnimationFrame(id);
        this.loseGame();
      }
      if (this.wonMiniGame){
        cancelAnimationFrame(id);
        this.winMiniGame();
      };
    } else {
      
      this.ctx.fillStyle = "#000000CC";
      this.ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      this.ctx.font = '50px  Itim, cursive';
      this.ctx.fillStyle = "#daa520";
      this.ctx.fillText(' *** PAUSED ***', CANVAS_WIDTH/3.75, CANVAS_HEIGHT/2);
    }
  }
  
  //// pause
  pauseGame(){
    if (!this.running){
      this.running = true;
      this.animate();
    } else {
      this.running = false;
    }
  }

  gameAction(){

  }
  
  //// lose? when timer runs out. where do I decriment time? 
  //// resetScore
  loseGame(){
    /// splash for you lose! sad momo sound
    this.level.drawLoseStatement(this.ctx);
    //// black out / fade out screen
    //// ask to play again? 
    this.resetGame();
  }


  resetGame(){
    this.prevlevel = this.level;      //// save current level as prev level
    this.winCounter = 0;              //// reset win counter
    if (this.wonMiniGame){
      this.score += 1;                //// increment score if won
      this.wonMiniGame = false;
    } else {
      this.score = 0;                 //// wipe score if lost
      this.lostGame = false;
    }
    this.level = this.randomSelectLevel();         //// select a new level
    this.timeremaining = this.level.maxtime;
    this.momo.reset();
    if (this.level.title === "AMBUSH"){
      this.momo.level = "AMBUSH";
      this.momo.grounded = true;
      this.momo.upsidedown = true;
      this.momo.changeStartingPos(300, 190);
      this.Ashy.direction = "right";
      this.Ashy.collision = true;
      this.Ashy.xVelocity = CONSTANTS.WALK_SPEED;
    } 
    
    this.animate();
  }


  //// play win animation, move to next game, update count, play a victory sound
  winMiniGame(){
    //// show win statement 
    //// play win sound
    //// splash for you won!
    this.level.drawWinStatement(this.ctx);
    this.resetGame();               //// restart game 
  }

 
  
  
}






























