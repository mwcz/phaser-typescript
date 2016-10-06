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
            'This is a skeleton project for starting a Phaser game written in TypeScript.',
            '',
            'Start a development environment with automatic rebuilding and BrowserSync:',
            '',
            '    npm run watch',
            '',
            'BrowserSync will automatically reload your browser when files change.  No more',
            'manual refreshing!  You can open the game in multiple browsers and they will',
            'all be refreshed together.  Clicks will also be synchronized so you can test',
            'the game in several browsers at the same time.',
            '',
            'To create a build in the `build/` directory:',
            '',
            '    npm run build',
            '',
            'TypeScript info: the type definitions of external libraries are managed with',
            '`typings`.  Phaser and Lodash\'s type definitions are included as examples, see',
            'typings.json.  Try `typings search` to find type definitions for other',
            'libraries.',
            '',
            'See the README for more details.  Enjoy!',
            '',
            '-- ',
            'Michael',
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
