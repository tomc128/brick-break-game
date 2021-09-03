import { Vector } from "./vector.js";
import { Color } from '../packages/color-class.js';
import { GameObject } from "./gameobject.js";

export class Ball extends GameObject {

    colour: string;

    position: Vector;
    velocity: Vector = Vector.zero();

    radius: number;


    constructor(position: Vector, radius: number, colour: string) {
        super();

        this.position = position;
        this.radius = radius;
        this.colour = colour;
    }

    override update(dt: number) {

    }

    override render(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.colour;
        ctx.fill();
        ctx.closePath();
    }
}