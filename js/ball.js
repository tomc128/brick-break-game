import { Vector } from "./vector.js";
import { GameObject } from "./gameobject.js";
export class Ball extends GameObject {
    constructor(position, radius, colour) {
        super();
        this.velocity = Vector.zero();
        this.position = position;
        this.radius = radius;
        this.colour = colour;
    }
    update(dt) {
    }
    render(ctx) {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.colour;
        ctx.fill();
        ctx.closePath();
    }
}
//# sourceMappingURL=ball.js.map