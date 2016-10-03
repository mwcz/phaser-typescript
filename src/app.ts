import * as Phaser from 'phaser';
import { map } from 'lodash';

function square(x: number): number {
    return x * x;
}

const numbers: number[] = map([1,2,4], square);
console.log(numbers);

const game: Phaser.Game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { create: create });

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
    `To start dev environment (with change watching and LiveReload):`,
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

    game.add.text(32, 32, title, { font: "15px Arial", fontWeight: 'bold', fill: "#0CFA68" });

    text = game.add.text(32, 64, '', { font: "15px Arial", fill: "#19de65" });

    nextLine();

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
    game.time.events.repeat(wordDelay, line.length, nextWord, this);

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
        game.time.events.add(lineDelay, nextLine, this);
    }

}
