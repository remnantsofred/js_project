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



let newMomo = new Momo(CANVAS_WIDTH, CANVAS_HEIGHT, ctx);


let game = new MomoMisadventure(canvas);
canvas.addEventListener("mousedown", game.click.bind(game));
game.restart();
game.play();
console.log("Webpack is working!")


