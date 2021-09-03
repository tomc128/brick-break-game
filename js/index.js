import { Block } from "./block.js";
import { Grid } from "./grid.js";
import { Vector } from "./vector.js";
var gridSize = new Vector(10, 10);
var grid = new Grid(gridSize);
var block1 = new Block(new Vector(0, 0), 10);
var block2 = new Block(new Vector(1, 1), 5);
var block3 = new Block(new Vector(2, 2), 2);
grid.addBlocks(block1, block2, block3);
console.log(grid);
//# sourceMappingURL=index.js.map