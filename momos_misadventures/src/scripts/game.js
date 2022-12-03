import Momo from './momo';
import Level from './level'

//// starting a new game should entail:
//// import /load game_view (or does new game go into game_view?) --> ask someone 
//// creating a canvas, saving ctx
//// loop over all opjects, draw all
//// logic to start a minigame and continue to next one if win (and update score)
//// go back to main screen on loss 
export default class MomoMisadventure {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.canvas = canvas;
    this.restart();
  }

  
  restart() {
    this.running = false;
    this.level = new Level(this.dimensions);
    this.momo = new Momo(this.dimensions.width, this.dimensions.height, this.ctx);
    // this.animate();
    
  }
  
  play(){
    this.running = true;
    this.momo.draw();
    // add event listener here for mouseclick => jump
    // this.canvas.addEventListener("click", ()=>{
    //   this.momo.jump();
    // });
    this.canvas.addEventListener("keydown", (e)=>{
      //left key === 37
      if (e.keyCode == '37') {
        

      //up key === 38
      } else if (e.keyCode == '38') {
        this.momo.jump();
      
      //down key === 40 (fall through platform if not on ground)
      } else if (e.keyCode == '40') {
       
      
        //right key ==- 39
      } else if (e.keyCode == '39'){
        this.momo.calcXPos();
      };
    });

  }

  click(){
    this.momo.jump();
  }

  ////


}