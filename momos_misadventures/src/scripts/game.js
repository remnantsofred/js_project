import Momo from './momo';
import Level from './level'

//// starting a new game should entail:
//// import /load game_view (or does new game go into game_view?) --> ask someone 
//// creating a canvas, saving ctx
//// loop over all opjects, draw all
//// logic to start a minigame and continue to next one if win (and update score)
//// go back to main screen on loss 
export default class Game {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.canvas = canvas;
    this.restart();
  }

  //// starts fresh gamestate? what does this do 
  //// sets running to false, creates a new level (which is supposed to fill the background)
  //// creates a new momo 
  //// probably need to add: reset score
  restart() {
    this.running = false;
    this.level = new Level(this.dimensions);
    this.momo = new Momo(this.dimensions.width, this.dimensions.height, this.ctx);
    this.play();
  }
  
  play(){
    // this.running = true;
    this.momo.drawMomo();
    // TO ADD: cycle thru all objects & draw each

    this.canvas.addEventListener("keydown", (e)=>{
      //left key === 37
      if (e.keyCode == '37') {
        // this.momo.calcXPos(-5);
        this.momo.jump();
        console.log("jump - left arrow")
      //up key === 38
      } else if (e.keyCode == '38') {
        this.momo.jump.bind(this);
      
      //down key === 40 (fall through platform if not on ground)
      } else if (e.keyCode == '40') {
        this.momo.jump();
      
        //right key ==- 39
      } else if (e.keyCode == '39'){
        // this.momo.calcXPos(5);
        this.momo.jump();
      };
    });
  }

  click(){
    this.momo.jump();
  }

  //// score 

  //// resetScore

  //// pause

  //// win?

  //// lose?

  //// next game

  


}