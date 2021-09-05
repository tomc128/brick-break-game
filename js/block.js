import { GameObject } from "./gameobject.js";
export class Block extends GameObject {
    constructor(position, value) {
        super();
        this.position = position;
        this.value = value;
    }
    render(ctx) {
        ctx.beginPath();
        ctx.rect(this.position.x, this.position.y, 10, 10);
        ctx.fillStyle = '#cccccc';
        ctx.fill();
        ctx.closePath();
    }
}
//# sourceMappingURL=block.js.map