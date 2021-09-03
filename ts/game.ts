import { GameObject } from "./gameobject";

export class Game {
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