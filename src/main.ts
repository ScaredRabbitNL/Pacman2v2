import { Button } from '@pixi/ui';
import { Point, Wall } from './app/Objects'
import { Application, Assets, Graphics, Sprite, Text, TextStyle } from 'pixi.js';
import { sound } from '@pixi/sound';

const level1 = await Assets.load('/assets/main/levels/1.json');
const mainSound = sound.add('main', '/assets/main/sounds/pacman_beginning.wav');
const deathSound = sound.add('death', '/assets/main/sounds/pacman_death.wav');
let walls: Wall[] = [];
let gui;

const sbtn = new Button(new Graphics().rect(0, 0, 100, 50).fill(0xFFFFFF));

export let startTime = 0;
export let elapsedTime = 0;
export let stopwatchRunning = false;
const font = Assets.addBundle('fonts', {Minecraft: '/assets/preload/font/Minecraft.ttf'})
const pacmanTextures = {};  
const ghostTextures = {};
const healed_heart = await Assets.load('/assets/main/sprites/healed_heart.png'); 
const animationDelay = 3;
const startButton = new Button();

const pacSpeeds = {up: 25, right: 25, down: 25, left: 25};
const ghostSpeeds = {up: 25, right: 25, down: 25, left: 25};

const directions = ["up", "right", "down", "left"];
let gameStarted = true;

const pacmen = {
    yellow: {x: 325 ,y: 75, score: 0, lives: 3, textureIndex: 0, animationCounter: 0,  direction: directions[1], lastHitTime: {}, canMove: true},
    red: {x: 325, y: 775, score: 0,lives: 3, textureIndex: 0, animationCounter: 0,  direction: directions[3], lastHitTime: {}, canMove: true}
};

const ghosts =  {
    green: {x: 1000, y: 500, lives: 100, textureIndex: 0, animationCounter: 0, direction: directions[0]},
    orange: {x: 1050, y: 500, lives: 100, textureIndex: 0, animationCounter: 0, direction: directions[0]}
};


const LEFT_ARROW = 37;
const UP_ARROW = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;

const controls = {
        pacmen: {
            yellow: {up: 87, down: 83, left: 65, right: 68},
            red: {up: 73, down: 75, left: 74, right: 76} 
        },
        ghosts: {
            green: {up: 104, down: 101, left: 100, right: 102},
            orange: {up: UP_ARROW, down: DOWN_ARROW, left: LEFT_ARROW, right: RIGHT_ARROW}
        }
        
};
const keys = {};
let points = [];

(async () => {

  const app = new Application();;
  await app.init({ background: '#000000', resizeTo: window });
  document.body.appendChild(app.canvas);
  playMainSound();

  Assets.loadBundle('fonts').then(() => {
    const style = new TextStyle({fontFamily: 'Minecraft', fontSize: 40, fill: 0xFFFFFF});
    const text = new Text("Time played: ", style);
    text.x = app.screen.width / 2;
    text.y = app.screen.height - 50;
    app.stage.addChild(text);
  })
})();


async function playMainSound() {
    if (gameStarted === false) {
        sound.play('main', { loop: true }); 
    }
}


async function decreaseLives(color: any) {
    let pac = pacmen[color as keyof typeof pacmen];
    if (pac.lives > 0) {
        pac.lives--;
    }
}