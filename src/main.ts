import { Application, Graphics } from 'pixi.js';
import { Button } from '@pixi/ui';
import { Point, Wall } from './app/Objects'

let levels : number[] = [1];
let sounds = ["main", "death"];
let walls: Wall[] = [];
export let font : any;
let gui;

let gameStarted = false;
let gameOver = false;

let pacmanTextures = {};
let ghostTextures = {};
const sbtn = new Button(new Graphics().rect(0, 0, 100, 50).fill(0xFFFFFF));

export let startTime = 0;
export let elapsedTime = 0;
export let stopwatchRunning = false;

// Asynchronous IIFE
(async () => {
  const app = new Application();
  await app.init({ background: '#000000', resizeTo: window });
  document.body.appendChild(app.canvas);
  const point: Point = new Point(app.screen.width / 2, app.screen.height / 2);
  point.draw(app, new Graphics());


})();


export function setStartTime(value: number) {
  startTime = value;
}

export function setStopwatchRunning(value: boolean) {
  stopwatchRunning = value;
}

export function getFont() {
  return font;
}