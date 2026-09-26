import { Application, Graphics } from "pixi.js";

export class Wall {
    xPosition: number;
    yPosition: number;
    width: number;
    height: number;
    isSegmented: boolean;
    segments: WallSegment[] | null;
    view: Graphics;
    app: Application;

    constructor(x: number, y: number, width: number, height: number, isSegmented = false, app: Application) {
        this.xPosition = x;
        this.yPosition = y;
        this.width = width;
        this.height = height;
        this.isSegmented = isSegmented; 
        this.segments = this.isSegmented ? [] : null;
        this.view = new Graphics();
        this.app = app; 
        this.redraw();
    }

    addSegment(x: any, y: any, width: any, height: any) {
        if (!this.segments) {
            this.segments = []; 
        }
        this.segments.push( x, y, width, height );
        this.redraw();
    }


    redraw() {
        this.view.clear();
        this.view.stroke({ color: 0x00008b, width: 2 }); 

        if (this.isSegmented && Array.isArray(this.segments)) {
            for (let segment of this.segments) {
                this.view.rect(segment.x, segment.y, segment.width, segment.height);
            }
        } else {
            this.view.rect(this.xPosition, this.yPosition, this.width, this.height);
        }
        this.view.fill(); 
    }

    remove(app: Application,) {
        app.stage.removeChild(this.view);
        this.view.destroy();
    }
}

export class WallSegment {
    x: number;
    y: number;
    width: number;
    height: number;
    view: Graphics;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.view = new Graphics();
        this.draw();
    }

    draw() {
        this.view.clear();
        this.view.stroke({color: 0x00008b, width: 2})
        this.view.rect(0, 0, this.width, this.height);
        this.view.fill();
        this.view.x = this.x;
        this.view.y = this.y;
    }
}

export default class WallPositionModifier {

}