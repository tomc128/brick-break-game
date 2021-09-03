import { Vector } from "./vector.js";
export class Input {
    // static keys: Array<string> = [];
    static onMouseMove(event) {
        this.mousePosition.x = event.x;
        this.mousePosition.y = event.y;
    }
}
Input.mousePosition = Vector.zero();
//# sourceMappingURL=input.js.map