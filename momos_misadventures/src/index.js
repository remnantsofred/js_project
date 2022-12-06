import Game from './scripts/game';
import GameView from './scripts/game_view';
import Momo from './scripts/momo';


const canvas = document.getElementById("gamescreen");
const ctx = canvas.getContext("2d");

export const CANVAS_WIDTH = canvas.width = 800;
export const CANVAS_HEIGHT = canvas.height = 600;

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


