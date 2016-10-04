import * as Phaser from 'phaser';

import PreloadState from './states/preload';
import SplashState from './states/splash';
import PlayState from './states/play';

export default class Game extends Phaser.Game {
    constructor() {
        super(window.innerWidth, window.innerHeight, Phaser.AUTO, 'phaser-example', null, false, false);

        this.state.add('PreloadState', PreloadState, false);
        this.state.add('SplashState', SplashState, false);
        this.state.add('PlayState', PlayState, false);

        this.state.start('PreloadState');
    }
}
