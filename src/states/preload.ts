import * as Phaser from 'phaser';

export default class PreloadState extends Phaser.State {
    preload() {
        // this.game.load.image('test-image', 
    }

    create() {
        console.log('PreloadState create');
        this.game.state.start('SplashState');
    }
}

