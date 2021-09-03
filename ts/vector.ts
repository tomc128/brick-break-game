export class Vector {

    static zero = (): Vector => new Vector(0, 0);
    static one = (): Vector => new Vector(1, 1);

    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}