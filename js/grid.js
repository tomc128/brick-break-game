export class Grid {
    constructor(size) {
        this.size = size;
        this.blocks = [];
    }
    addBlock(block) {
        this.blocks.push(block);
    }
    addBlocks(...blocks) {
        this.blocks.push(...blocks);
    }
}
//# sourceMappingURL=grid.js.map