import * as Phaser from 'phaser';

export default class PreloadState extends Phaser.State {
    preload() {
        this.game.load.spritesheet('term-anim', 'assets/images/spritesheets/term.png', 600, 350);
    }

    create() {
        console.log('PreloadState create');
        this.game.state.start('SplashState');
    }
}

