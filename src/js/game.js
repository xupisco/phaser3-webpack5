import '../scss/game.scss';
import { SampleScene } from './scenes/sample_scene';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game_container',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: SampleScene
};

var game = new Phaser.Game(config);
