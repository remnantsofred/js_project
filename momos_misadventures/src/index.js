import Game from './scripts/game';
import GameView from './scripts/game_view';
import Momo from './scripts/momo';


const canvas = document.getElementById("gamescreen");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

/////////////////////////////////////////////////////////////
//// this part of the code is me learning. will remove later

// const playerImage = new Image();
// playerImage.src = './src/assets/cats/shadow_dog.png';
// const pspriteWidth = 575;
// const pspriteHeight = 523;

////////////////////////////////////////////////////////////

//// start game here

let game = new Game(canvas);
canvas.addEventListener("mousedown", game.click.bind(game));
// canvas.addEventListener("keydown", game.click.bind(game));
console.log("Webpack is working!")
console.log(game.momo.xVelocity);
console.log(game.momo.yVelocity);

canvas.addEventListener("keydown", (e)=>{
  if (e.key === "ArrowLeft") {
    // this.momo.calcXPos(-5);
    this.momo.jump.bind(this);
    console.log("jump - left arrow")
  } else if (e.key === "ArrowUp") {
    this.momo.jump.bind(this);
    console.log("up arrow");
    // fall through platform if not on ground
  } else if (e.key === "ArrowDown") {
    this.momo.jump();
    
    console.log("down arrow");
    
  } else if (e.key === "ArrowRight"){
    // this.momo.calcXPos(5);
    this.momo.jump();
    console.log("right arrow");
  }
  // else if (e.key === )
  // else if (e.key === ' ' || e.key === "Spacebar"){
  // };
  ;
});


