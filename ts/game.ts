import { GameObject } from "./gameobject.js";

export class Game {
    static canvas : HTMLCanvasElement;

    ctx: CanvasRenderingContext2D;

    lastUpdate: number = Date.now();
    objects: Array<GameObject> = [];

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;

        window.requestAnimationFrame(this.tick.bind(this));
    }

    update(dt: number) {
        this.objects.forEach(o => o.update(dt));
    }

    render() {
        this.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
        this.objects.forEach(o => o.render(this.ctx));
    }

    tick() {
        let now = Date.now();
        let dt = (now - this.lastUpdate) / 1000;
        this.lastUpdate = now;

        this.update(dt);
        this.render();

        window.requestAnimationFrame(this.tick.bind(this));
    }
}