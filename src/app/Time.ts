
import { Application, Text } from 'pixi.js';
import { Main } from '../index';

function startStopwatch() {
    if(!Main.stopwatchRunning) {
        Main.startTime = new Date().getMilliseconds();
        Main.stopwatchRunning = true;
    }
}

function displayStopwatch(app: Application) {
    let totalMilis = Main.elapsedTime;
    let minutes = Math.floor(totalMilis / 60000);
    let seconds = Math.floor((totalMilis % 60000) / 1000);

    let milis = String(Math.floor(totalMilis % 1000)).toString().padStart(3, '0');
    let formattedMilis = milis.substring(0, 2);

    const timeText = new Text({
    text: `Time survived: ${minutes}:${seconds}:${formattedMilis}`,
    style: {
        fontFamily: Main.font,
        fontSize: 40,
        fill: 0xFFFFFF,
        align: 'left',
    }});
    app.stage.addChild(timeText);
}