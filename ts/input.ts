import { Vector } from "./vector.js";

export class Input {

    static mousePosition: Vector = Vector.zero();

    static keys: Array<string> = [];

    static onMouseMove(event: MouseEvent) {
        this.mousePosition.x = event.x;
        this.mousePosition.y = event.y;
    }
    static onMouseClick(event: MouseEvent) {

    }
    static onKeyDown(event: KeyboardEvent) {
        if (!this.keys.includes(event.key))
            this.keys.push(event.key);
    }
    static onKeyUp(event: KeyboardEvent) {
        this.keys.filter((e) => e != event.key);
    }

    static isKeyDown(key: string) {
        return this.keys.includes(key);
    }
}