import { Vector } from "./vector.js";
export class Input {
    static onMouseMove(event) {
        this.mousePosition.x = event.x;
        this.mousePosition.y = event.y;
    }
    static onMouseClick(event) {
    }
    static onKeyDown(event) {
        if (!this.keys.includes(event.key))
            this.keys.push(event.key);
    }
    static onKeyUp(event) {
        this.keys.filter((e) => e != event.key);
    }
    static isKeyDown(key) {
        return this.keys.includes(key);
    }
}
Input.mousePosition = Vector.zero();
Input.keys = [];
//# sourceMappingURL=input.js.map