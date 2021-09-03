import { Vector } from "./vector.js";

export class Block {
    position: Vector;
    value: number;

    constructor(position: Vector, value: number) {
        this.position = position;
        this.value = value;
    }
}