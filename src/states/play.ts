import * as Phaser from 'phaser';
import config from '../config';

export default class PlayState extends Phaser.State {
    private text: Phaser.Text;
    private content: string[];
    private line: string[] = [];
    private wordIndex: number = 0;
    private lineIndex: number = 0;
    readonly wordDelay = 100;
    readonly lineDelay = this.wordDelay * 2;
    constructor() {
        super();
        this.content = [
            'This project is a suitable baseline for starting a Phaser game',
            'written in TypeScript.',
            '',
            'The development environment uses npm scripts (no gulp or grunt)',
            'and features LiveReload to tighten the save+reload feedback loop.',
            '',
            'When a build occurs, tsc compiles .ts into .js (as ES6 modules)',
            'then rollup is used to bundle the ES6 modules into browser-executable',
            'code.',
            '',
            'To start dev environment (with watching and LiveReload):',
            '',
            '   npm run watch',
            '',
            'To run a single build for production (LiveReload not injected):',
            '',
            '   npm run build',
        ];
    }
    create() {
        console.log('PlayState create');

        this.text = this.add.text(32, 64, '', { font: `${config.fontSize}px ${config.fontFamily}`, fill: "#19de65" });
        this.nextLine();

    }
    nextLine() {

        if (this.lineIndex === this.content.length) {
            //  We're finished
            return;
        }

        //  Split the current line on spaces, so one word per array element
        this.line = this.content[this.lineIndex].split(' ');

        //  Reset the word index to zero (the first word in the line)
        this.wordIndex = 0;

        //  Call the 'nextWord' function once for each word in the line (line.length)
        this.time.events.repeat(this.wordDelay, this.line.length, this.nextWord, this);

        //  Advance to the next line
        this.lineIndex++;

    }
    nextWord() {

        //  Add the next word onto the text string, followed by a space
        this.text.text = this.text.text.concat(this.line[this.wordIndex] + " ");

        //  Advance the word index to the next word in the line
        this.wordIndex++;

        //  Last word?
        if (this.wordIndex === this.line.length) {
            //  Add a carriage return
            this.text.text = this.text.text.concat("\n");

            //  Get the next line after the lineDelay amount of ms has elapsed
            this.time.events.add(this.lineDelay, this.nextLine, this);
        }

    }
}
