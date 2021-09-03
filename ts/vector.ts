export class Vector {

    static zero = (): Vector => new Vector(0, 0);
    static one = (): Vector => new Vector(1, 1);

    x: Number;
    y: Number;

    constructor(x: Number, y: Number) {
        this.x = x;
        this.y = y;
    }
}