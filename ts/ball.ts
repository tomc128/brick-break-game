import { Vector } from "./vector.js";
import { GameObject } from "./gameobject.js";
import { Game } from "./game.js";
import { Input } from "./input.js";

export class Ball extends GameObject {

    colour: string;

    speed: number;

    startingPosition: Vector;
    position: Vector;
    velocity: Vector = Vector.zero();

    radius: number;


    constructor(position: Vector, radius: number, colour: string, speed: number) {
        super();

        this.position = position;
        this.startingPosition = position.copy();
        this.radius = radius;
        this.colour = colour;
        this.speed = speed;

        document.addEventListener('click', (e) => {
            if (e.button == 0) {
                this.fire();
            } 
        });
    }

    override update(dt: number) {
        this.doMovement(dt);
    }


    reset() {
        this.position = this.startingPosition.copy();
        this.velocity = Vector.zero();
    }


    doMovement(dt: number): void {
        if (this.position.x > Game.canvas.width - this.radius
            || this.position.x < this.radius)
            this.velocity.x *= -1;

        if (this.position.y < this.radius)
            this.velocity.y *= -1;

        if (this.position.y > Game.canvas.height - this.radius) {
            // Reset ball position
            this.reset();
            return;
        }

        // Update ball position using velocity
        this.position.add(Vector.multiply(this.velocity, this.speed * dt));
    }


    getFireDirection(): Vector {
        return Vector.subtract(Input.mousePosition, this.position);
    }


    fire() {
        let direction = this.getFireDirection();

        this.velocity = direction.normalised();
    }


    override render(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.colour;
        ctx.fill();
        ctx.closePath();
    }
}