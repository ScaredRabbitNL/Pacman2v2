import { Application, Graphics } from 'pixi.js';
import { Point, Wall } from './app/objects'

let levels : number[] = [1];
let sounds = ["main", "death"];
let walls: Wall[] = [];
let font;

// Asynchronous IIFE
(async () => {
  const app = new Application();
  await app.init({ background: '#000000', resizeTo: window });
  document.body.appendChild(app.canvas);
  const point: Point = new Point(app.screen.width / 2, app.screen.height / 2);
  point.draw(app, new Graphics());


})();