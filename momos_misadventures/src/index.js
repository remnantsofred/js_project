import Game from './scripts/game';
import GameView from './scripts/game_view';
import Momo from './scripts/momo';


const canvas = document.getElementById("gamescreen");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 800;

/////////////////////////////////////////////////////////////
//// this part of the code is me learning. will remove later

// const playerImage = new Image();
// playerImage.src = './src/assets/cats/shadow_dog.png';
// const pspriteWidth = 575;
// const pspriteHeight = 523;

////////////////////////////////////////////////////////////

//// start game here

let game = new Game(canvas);

console.log("Webpack is working!")
console.log(game.momo.xVelocity);
console.log(game.momo.yVelocity);




