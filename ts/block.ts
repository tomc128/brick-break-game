import { GameObject } from "./gameobject.js";
import { Vector } from "./vector.js";

export class Block extends GameObject {
    position: Vector;
    value: number;

    constructor(position: Vector, value: number) {
        super();

        this.position = position;
        this.value = value;
    }

    override render(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.rect(this.position.x, this.position.y, 10, 10);
        ctx.fillStyle = '#cccccc';
        ctx.fill();
        ctx.closePath();
    }
}