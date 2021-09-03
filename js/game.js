export class Game {
    constructor(ctx) {
        this.lastUpdate = Date.now();
        this.objects = [];
        this.ctx = ctx;
        window.requestAnimationFrame(this.tick.bind(this));
    }
    update(dt) {
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
//# sourceMappingURL=game.js.map