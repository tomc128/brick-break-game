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

    static multiply(vector: Vector, scalar: number): Vector {
        return new Vector(vector.x * scalar, vector.y * scalar);
    }

    static subtract(a: Vector, b: Vector): Vector {
        return new Vector(a.x - b.x, a.y - b.y);
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