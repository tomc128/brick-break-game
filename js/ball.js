import { Vector } from "./vector.js";
import { GameObject } from "./gameobject.js";
import { Game } from "./game.js";
import { Input } from "./input.js";
export class Ball extends GameObject {
    constructor(position, radius, colour, speed) {
        super();
        this.velocity = Vector.zero();
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
    update(dt) {
        this.doMovement(dt);
    }
    reset() {
        this.position = this.startingPosition.copy();
        this.velocity = Vector.zero();
    }
    doMovement(dt) {
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
    getFireDirection() {
        return Vector.subtract(Input.mousePosition, this.position);
    }
    fire() {
        let direction = this.getFireDirection();
        this.velocity = direction.normalised();
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