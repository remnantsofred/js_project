import Game from './scripts/game';
import GameView from './scripts/game_view';
import Momo from './scripts/momo';


const canvas = document.getElementById("gamescreen");
const ctx = canvas.getContext("2d");

export const CANVAS_WIDTH = canvas.width = 800;
export const CANVAS_HEIGHT = canvas.height = 600;


//// start game here

let game = new Game(canvas);



