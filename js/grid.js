var Grid = /** @class */ (function () {
    function Grid(size) {
        this.size = size;
        this.blocks = [];
    }
    Grid.prototype.addBlock = function (block) {
        this.blocks.push(block);
    };
    Grid.prototype.addBlocks = function () {
        var _a;
        var blocks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            blocks[_i] = arguments[_i];
        }
        (_a = this.blocks).push.apply(_a, blocks);
    };
    return Grid;
}());
export { Grid };
//# sourceMappingURL=grid.js.map