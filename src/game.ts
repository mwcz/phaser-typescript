import * as Phaser from 'phaser';

import PreloadState from './states/preload';
import SplashState from './states/splash';
import PlayState from './states/play';
import config from './config';

export default class Game extends Phaser.Game {
    constructor() {
        super(800, 600, Phaser.CANVAS, 'phaser-example', { create: create });
        let text: Phaser.Text;

        const title = `Phaser + TypeScript Skeleton Project`;
        const content = [
            `This project is a suitable baseline for starting a Phaser game`,
                `written in TypeScript.`,
            ``,
            `The development environment uses npm scripts (no gulp or grunt)`,
            `and features LiveReload to tighten the save+reload feedback loop.`,
            ``,
            `When a build occurs, tsc compiles .ts into .js (as ES6 modules)`,
            `then rollup is used to bundle the ES6 modules into browser-executable`,
            `code.`,
            ``,
            `To start dev environment (with watching and LiveReload):`,
            ``,
            `   npm run watch`,
            ``,
            `To run a single build for production (LiveReload not injected):`,
                ``,
            `   npm run build`,
        ];

        let line: string[] = [];

        let wordIndex = 0;
        let lineIndex = 0;

        let wordDelay = 60;
        let lineDelay = wordDelay * 2;

        function create() {

            this.add.text(32, 32, title, { font: `${config.fontSize} ${config.fontFamily}`, fontWeight: 'bold', fill: "#0CFA68" });

            text = this.add.text(32, 64, '', { font: `${config.fontSize} ${config.fontFamily}`, fill: "#19de65" });

            nextLine.bind(this)();

        }

        function nextLine() {

            if (lineIndex === content.length) {
                //  We're finished
                return;
            }

            //  Split the current line on spaces, so one word per array element
            line = content[lineIndex].split(' ');

            //  Reset the word index to zero (the first word in the line)
            wordIndex = 0;

            //  Call the 'nextWord' function once for each word in the line (line.length)
            this.time.events.repeat(wordDelay, line.length, nextWord.bind(this), this);

            //  Advance to the next line
            lineIndex++;

        }

        function nextWord() {

            //  Add the next word onto the text string, followed by a space
            text.text = text.text.concat(line[wordIndex] + " ");

            //  Advance the word index to the next word in the line
            wordIndex++;

            //  Last word?
            if (wordIndex === line.length) {
                //  Add a carriage return
                text.text = text.text.concat("\n");

                //  Get the next line after the lineDelay amount of ms has elapsed
                this.time.events.add(lineDelay, nextLine.bind(this), this);
            }

        }
    }
}

