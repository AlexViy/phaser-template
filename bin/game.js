let SimpleGame = (function () {
	function SimpleGame() {
		this.game = new Phaser.Game(700, 700, Phaser.AUTO, 'content', {
			preload: this.preload,
			create: this.create
		});
	}
	SimpleGame.prototype.preload = function () {
		this.game.load.image('background', './assets/background.jpg');
		this.game.load.image('lemon', './assets/S1.jpg');
		this.game.load.image('clover', './assets/S2.jpg');
		this.game.load.image('apple', './assets/S3.jpg');
		this.game.load.image('orange', './assets/S4.jpg');
		this.game.load.image('plum', './assets/S5.jpg');
	};
	SimpleGame.prototype.create = function () {
		let background = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'background');
		background.anchor.setTo(0.5, 0.5);
		let iconSize = 30;
		let interval = 40;
		let yCoord = 50;
		for (let i = 0; i < 15; i++) {
			let xCoord = 50;
			for (let j = 0; j < 15; j++) {
				let randomNumb = +(Math.random() * 4).toFixed();
				let img = void 0;
				switch (randomNumb) {
					case 0:
						img = 'lemon';
						break;
					case 1:
						img = 'clover';
						break;
					case 2:
						img = 'apple';
						break;
					case 3:
						img = 'orange';
						break;
					default:
						img = 'plum';
						break;
				}
				img = this.game.add.sprite(xCoord, yCoord, img);
				xCoord += interval;
			}
			yCoord += interval;
		}
	};;
	return SimpleGame;
}());
window.onload = function () {
	let game = new SimpleGame();
};
//# sourceMappingURL=game.js.map