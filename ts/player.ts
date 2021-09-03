import { Ball } from "./ball.js";
import { GameObject } from "./gameobject.js";
import { Input } from "./input.js";
import { Vector } from "./vector.js";

export class Player extends GameObject {

    position : Vector;

    ball: Ball;

    constructor(position : Vector, ball : Ball) {
        super();

        this.position = position;
        this.ball = ball;
    }

    override update(dt: number) {
        
    }

    override render(ctx: CanvasRenderingContext2D) {
        console.log('here');
        ctx.beginPath();
        ctx.moveTo(this.position.x, this.position.y);
        ctx.lineTo(Input.mousePosition.x, Input.mousePosition.y);
        ctx.strokeStyle = '#0000090'
        ctx.stroke();
        ctx.closePath();
    }

}