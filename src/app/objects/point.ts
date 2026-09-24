import { Application, Graphics } from "pixi.js";

export class Point {

    x: number;
    y: number;

    constructor(x: number,y : number) {
        this.x = x;
        this.y = y;
    }

    draw(app: Application, graphics: Graphics) {
        graphics.circle(this.x, this.y, 2);
        graphics.fill(0xffcc00, 1);
        app.stage.addChild(graphics);
    }

}

