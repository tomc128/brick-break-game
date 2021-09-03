export class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(other) {
        this.x += other.x;
        this.y += other.y;
    }
    static multiply(vector, scalar) {
        return new Vector(vector.x * scalar, vector.y * scalar);
    }
    static subtract(a, b) {
        return new Vector(a.x - b.x, a.y - b.y);
    }
    copy() {
        return new Vector(this.x, this.y);
    }
    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    normalised() {
        return new Vector(this.x / this.magnitude(), this.y / this.magnitude());
    }
}
Vector.zero = () => new Vector(0, 0);
Vector.one = () => new Vector(1, 1);
//# sourceMappingURL=vector.js.map