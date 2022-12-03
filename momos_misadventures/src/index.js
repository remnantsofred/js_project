import MomoMisadventure from './scripts/game';
import GameView from './scripts/game_view';
import Momo from './scripts/momo';



const canvas = document.getElementById("gamescreen");
const ctx = canvas.getContext("2d");


const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

//this part of the code is me learning. will remove later
const playerImage = new Image();
playerImage.src = './src/assets/cats/shadow_dog.png';
const pspriteWidth = 575;
const pspriteHeight = 523;

const momo = new Image();
momo.src = "./src/assets/cats/momo_walk_reverse_updated.png"
const spriteWidth = 120;
const spriteHeight = 120;
let frameX = 1;
let frameY = 0;
//set a maxFrame variable per row
let gameFrame = 0;
const staggerFrames = 15;

function animate(){
  ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
  // ctx.fillRect(100,50,100,100);
  // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
  ctx.drawImage(momo, frameX * spriteWidth, 0, spriteWidth, spriteHeight, 50, 450, spriteWidth, spriteHeight);
  // ctx.drawImage(playerImage, frameX * pspriteWidth, 0, pspriteWidth, pspriteHeight, 0, 0, pspriteWidth, pspriteHeight);
  if (gameFrame % staggerFrames == 0){
    if (frameX < 3) frameX ++;
    else frameX = 1;
  }

  gameFrame++;
  requestAnimationFrame(animate);
}
// animate();

///

let game = new MomoMisadventure(canvas);
canvas.addEventListener("mousedown", game.click.bind(game));
// game.restart();
// game.play();
console.log("Webpack is working!")

let newMomo = new Momo(CANVAS_WIDTH,CANVAS_HEIGHT, ctx);
// newMomo.animate();
