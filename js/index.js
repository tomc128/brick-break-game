import { Ball } from "./ball.js";
import { Block } from "./block.js";
import { Game } from "./game.js";
import { Grid } from "./grid.js";
import { Vector } from "./vector.js";
let canvas = document.getElementById('game-canvas');
let ctx = canvas.getContext('2d');
const game = new Game(ctx);
const gridSize = new Vector(10, 10);
const grid = new Grid(gridSize);
let block1 = new Block(new Vector(0, 0), 10);
let block2 = new Block(new Vector(1, 1), 5);
let block3 = new Block(new Vector(2, 2), 2);
grid.addBlocks(block1, block2, block3);
let ball = new Ball(new Vector(canvas.width / 2, canvas.height - 30), 10, '#ff0000');
game.objects.push(ball);
//# sourceMappingURL=index.js.map