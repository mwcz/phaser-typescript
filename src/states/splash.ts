import * as Phaser from 'phaser';
import config from '../config';

export default class SplashState extends Phaser.State {
    readonly duration: number = 2000;
    readonly title: string = `Phaser + TypeScript Skeleton Project`;
    create() {
        console.log('SplashState create');

        this.add.text(32, this.world.height/2 - config.splashFontSize, this.title, { font: `${config.splashFontSize}px ${config.fontFamily}`, fontWeight: 'bold', fill: "#0CFA68" });

        // switch to next state after duration elapses
        this.time.events.add(this.duration, this.next, this);
    }
    next() {
        this.game.state.start('PlayState');
    }
}

