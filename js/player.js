import { GameObject } from "./gameobject.js";
import { Input } from "./input.js";
export class Player extends GameObject {
    constructor(position, ball) {
        super();
        this.position = position;
        this.ball = ball;
    }
    update(dt) {
    }
    render(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.position.x, this.position.y);
        ctx.lineTo(Input.mousePosition.x, Input.mousePosition.y);
        ctx.strokeStyle = '#0000090';
        ctx.stroke();
        ctx.closePath();
    }
}
//# sourceMappingURL=player.js.map