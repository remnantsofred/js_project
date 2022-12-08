import Momo, { CONSTANTS } from './momo';
import Level, { level1Background, level2Background, level4Background} from './level'
import GameObject from './game_object';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../index.js';
import Music from './music';


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
    this.momo = new Momo(this.dimensions.width, this.dimensions.height, false, false);
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
    this.Ashy = new Momo(this.dimensions.width, this.dimensions.height, true, false);
    const fauxshelf = new GameObject(this.ctx, 235, 280, 200, 5, "#7cfd21", false, false, false);
    const hiddenledge = new GameObject(this.ctx, 250, 275, 200, 5, "#FFffff", true, false, false);
    this.fly = new Momo(this.dimensions.width, this.dimensions.height, false, true);
    // const fly = new GameObject(this.ctx, 579, 173, 140, 1, "#7cfd21", true, false, true); 
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
      /// use this.fly (which is a momo. lol)
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

    const level6Objects = [
      ground,
      firstObjectHidden,
      couchTop,
    
    ];

    //// constructor(id, title, subtitle, background, maxtime, objects, gravityModifier, target)
    this.levels = [ 
      new Level(1, 'CLIMB', '', level1Background, 10, level1Objects, 1, fridge),
      new Level(2, 'AMBUSH', '', level2Background, 6, level2Objects, 1, this.Ashy),
      new Level(3, 'KILL', '', level4Background, 4, level3Objects, 1, this.fly),
      new Level(4, 'CLIMB', '', level4Background, 10, level4Objects, 1, curtainrod),
      new Level(5, 'KILL', '', level1Background, 7, level1Objects, 1, this.fly),
      new Level(6, 'KILL', '', level4Background, 7, level6Objects, 1, this.fly),
      // new Level(id, 'ESCAPE', '', level2Background, 10, level4Objects, 1.5, curtainrod),
    ];
    this.prevlevel = null;
    // this.level = this.randomSelectLevel();     //// in the future, should start randomly? or always level0?
    this.level = this.levels[0];
    this.winCounter = 0;
    this.wonMiniGame = false;
    this.lostGame = false;
    this.score = 0;
    this.running = false;
    this.started = false;
    // this.play(); //// replace play with a screen that says click to start! or instructions screen
    this.addEventListeners();
    this.startGameScreen();
    // this.resetGame(); //// should we have play reset game? 

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
      return this.levels[4];
    } else if (this.prevlevel === this.levels[4]){
      return this.levels[5]; 
    } else if (this.prevlevel === this.levels[5]){
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
    this.started = true;
    this.running = true;
    // this.addEventListeners();
    this.resetGame();
  }
 
  //// if adding event listeners to canvas, need to pass in bound callback
  addEventListeners(){
    window.addEventListener("keydown", this.keydownEvents.bind(this));
    // this.setWonMiniGame.bind(this);
    this.resetGame.bind(this); //// won't let me bind here. Uncaught TypeError: Cannot read properties of undefined (reading 'bind')
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
    // } else if (e.key === "ShiftLeft" || e.key === "ShiftRight"){
    //     this.gameAction();
    } else if (e.key === "Enter" && this.running === false){
        this.play();
    }
    //// ^ to do later: add action key for spacebar          
  }
    


  animate(){
    if (this.running){
      this.ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_WIDTH);         /// clear the canvas
      this.level.drawBackground(this.ctx);     /// draw the level's background
      this.level.drawTitle(this.ctx);          /// draw the level's title (and subtitle, if applicable)
      this.wonMiniGame = false;
      for(const obj of this.level.objects){    //// iterate through this level's obejcts and check collision
        if (this.momo.collide(obj)){
          if (obj.target === true) {          //// if she collides with winning object, win game
            this.winCounter += 1;
            if (this.winCounter > 11){
              this.running = false;
              this.wonMiniGame = true;
              this.winMiniGame();
            }
          }       
          break;
        };
      };
      
      for(const obj of this.level.objects){         //// iterate through this level's obejcts and draw them
        obj.draw(this.ctx);
      };

      if (this.level.title === "AMBUSH"){
        this.Ashy.draw(this.ctx); 
        this.Ashy.automateMovement();
        if (this.momo.collide(this.Ashy, true)){      ///true meaning ignoreIfs in collide function
          this.Ashy.direction = "scared";
          this.Ashy.draw(this.ctx);
          this.running = false;
          this.wonMiniGame = true;
          this.winMiniGame();
        }
        console.log("debugging")
        if (this.momo.y >= this.momo.momoBottom()){ 
          console.log("lose game - why no lose?")
          this.running = false;
          this.lostGame = true;                      
          this.loseGame();
        }
      } else if (this.level.title === "KILL"){
        this.fly.draw(this.ctx);
        this.fly.automateMovement();
        if (this.momo.collide(this.fly, true)){      ///true meaning ignoreIfs in collide function
          // this.fly.direction = "scared";
          // this.fly.draw(this.ctx);
          this.running = false;
          this.wonMiniGame = true;
          this.winMiniGame();
        }
      } 

      if (this.level.title !== 'AMBUSH' || !this.wonMiniGame) {
        this.momo.draw(this.ctx);
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
        this.running = false;
        this.lostGame = true;                       //// can't read this.level.maxtime;
        this.loseGame();
      }

    } else if (!this.running && !this.paused){
        if (this.wonMiniGame){ 
          this.ctx.fillStyle = "#00000080";
          this.ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
          this.ctx.font = '50px  Itim, cursive';
          this.ctx.fillStyle = "#daa520";
          this.ctx.fillText(' *** WIN GAME ***', CANVAS_WIDTH/3.75, CANVAS_HEIGHT/2);
        } else if (this.lostGame){
          
          this.ctx.fillStyle = "#000000CC";
          this.ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
          this.ctx.font = '50px  Itim, cursive';
          this.ctx.fillStyle = "#daa520";
          this.ctx.fillText(' *** GAME OVER ***', CANVAS_WIDTH/3.75, CANVAS_HEIGHT/2);
        }
    } else if (!this.running && this.paused){
      
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
      this.paused = false;
      this.animate();
    } else {
      this.running = false;
      this.paused = true;
    }
  }
  // (upsidedownMomoright, frameX * walkspriteWidth, 0, walkspriteWidth, walkspriteHeight, this.x, this.y, walkspriteWidth * sizeModifier, walkspriteHeight * sizeModifier)
  startGameScreen(){
    this.ctx.fillStyle = "#F5F5DC";
    this.ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // this.ctx.drawImage(momoCanonball, 500, 0);
    this.ctx.font = '50px  Itim, cursive';
    this.ctx.fillStyle = "#daa520";
    this.ctx.fillText('Press Enter to Start Game', CANVAS_WIDTH/7.5, 150);
    this.ctx.fillText('-> Arrow keys to move', CANVAS_WIDTH/7.5, 350);
    this.ctx.fillText('-> Spacebar to pause', CANVAS_WIDTH/7.5, 450);
  }

  retryGameScreen(){
    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    this.ctx.font = '50px  Itim, cursive';
    this.ctx.fillStyle = "#daa520";

    this.ctx.fillText('Your high score was ' + this.score, CANVAS_WIDTH/8, CANVAS_HEIGHT/3);
    this.ctx.fillText('Press Enter to Retry', CANVAS_WIDTH/8, CANVAS_HEIGHT/2);
  }

  // splashscreen(){
  //   this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //   this.ctx.fillStyle = "#F5F5DC";
  //   this.ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //   this.ctx.drawImage(momoCanonball, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // }
  
  //// lose? when timer runs out. where do I decriment time? 
  //// resetScore
  loseGame(){
    /// splash for you lose! sad momo sound
    this.level.drawLoseStatement(this.ctx);
    //// black out / fade out screen
    //// ask to play again? 
    this.started = false;
    setTimeout(()=>{
      this.retryGameScreen();
    }, 1000)
  }


  resetGame(){
    this.prevlevel = this.level;      //// save current level as prev level
    this.winCounter = 0;              //// reset win counter
    if (this.wonMiniGame){
      this.score += 1;                //// increment score if won
      this.wonMiniGame = false;
    } else if (this.lostGame){
      this.score = 0;                 //// wipe score if lost
      this.lostGame = false;
      this.started = false;
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
    } else if (this.level.title === "KILL"){
      this.momo.level = "KILL";
      this.momo.grounded = true;
      if (this.level.id === 3){
        this.fly.changeStartingPos(300, 170);
      } else if (this.level.id === 5){
        this.fly.changeStartingPos(425, 85);
      } else if (this.level.id === 6){  
        this.fly.changeStartingPos(275, 65);
      }
      this.fly.direction = "right";
      this.fly.collision = true;
      this.fly.xVelocity = CONSTANTS.WALK_SPEED;
    }

    this.running = true;
    this.animate();
  }


  //// play win animation, move to next game, update count, play a victory sound
  winMiniGame(){
    //// show win statement 
    //// play win sound
    //// splash for you won!
    this.level.drawWinStatement(this.ctx);
    // this.resetGame();               //// restart game 
    setTimeout(()=>{
      this.resetGame();
    }, 2000)
  }

 
  
  
}






























