import * as Phaser from 'phaser';
import config from '../config';

export default class SplashState extends Phaser.State {
    readonly duration: number = 4000;
    readonly title: string = `Phaser + TypeScript Skeleton Project`;
    create() {
        console.log('SplashState create');

        const text = this.add.text(this.world.width/2, this.world.height/5, this.title, { font: `${config.splashFontSize}px ${config.fontFamily}`, fontWeight: 'bold', fill: "#0CFA68" });
        text.anchor.set(0.5, 0.5);

        const sprite = this.add.sprite(this.world.width/2, this.world.height/2, 'term-anim');
        sprite.scale.set(0.5, 0.5);
        sprite.anchor.set(0.5, 0.5);
        sprite.animations.add('cursor-blink');
        sprite.animations.play('cursor-blink', 1.618, true);

        // switch to next state after duration elapses
        this.time.events.add(this.duration, this.next, this);
    }
    next() {
        this.game.state.start('PlayState');
    }
}

