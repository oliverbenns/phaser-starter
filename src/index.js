import 'pixi';
import 'p2';
import 'phaser';

import pkg from '../package.json';

// This is the entry point of your game.

const config = {
  width: 800,
  height: 600,
  renderer: Phaser.AUTO,
  parent: '',
  state: {
    preload,
    create,
  },
  transparent: false,
  antialias: true,
  physicsConfig: { arcade: true },
};

const game = new Phaser.Game(config);

function preload() {
  this.game.load.image('study', 'assets/img/study.png');
}

function create() {
  const { game } = this;
  const objects = [
    game.add.text(game.world.centerX, game.world.centerY * 0.8, `Welcome to Phaser ${pkg.dependencies.phaser.substr(1)}`, { font: "bold 19px Arial", fill: "#fff" }),
    game.add.sprite(game.world.centerX, game.world.centerY * 1.2, 'study')
  ];

  objects.forEach(obj => obj.anchor.setTo(0.5, 0.5));
}
