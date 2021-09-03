import { Block } from "./block.js";
import { Vector } from "./vector.js";

export class Grid {
    size: Vector;
    blocks: Array<Block>;

    constructor(size: Vector) {
        this.size = size;
        this.blocks = [];
    }

    addBlock(block: Block) {
        this.blocks.push(block);
    }

    addBlocks(...blocks: Array<Block>) {
        this.blocks.push(...blocks);
    }
}