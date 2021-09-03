import { Block } from "./block.js";
import { Grid } from "./grid.js";
import { Vector } from "./vector.js";

const gridSize = new Vector(10, 10);
const grid = new Grid(gridSize);

let block1 = new Block(new Vector(0, 0), 10);
let block2 = new Block(new Vector(1, 1), 5);
let block3 = new Block(new Vector(2, 2), 2);

grid.addBlocks(block1, block2, block3);

console.log(grid);