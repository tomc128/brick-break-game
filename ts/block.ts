import { Vector } from "./vector.js";

export class Block {
    position: Vector;
    value: Number;

    constructor(position: Vector, value: Number) {
        this.position = position;
        this.value = value;
    }
}