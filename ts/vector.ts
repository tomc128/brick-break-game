export class Vector {

    static zero = (): Vector => new Vector(0, 0);
    static one = (): Vector => new Vector(1, 1);

    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    add(other: Vector): void {
        this.x += other.x;
        this.y += other.y;
    }

    static mul(vector: Vector, scalar: number): Vector {
        return new Vector(vector.x * scalar, vector.y * scalar);
    }

    copy(): Vector {
        return new Vector(this.x, this.y);
    }

    magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalised(): Vector {
        return new Vector(this.x / this.magnitude(), this.y / this.magnitude());
    }
}