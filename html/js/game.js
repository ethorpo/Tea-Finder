var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });


function preload() {
	
	this.load.image('background', 'img/background.png');

}

function create() {
		
	var image = this.add.image(0, 0, 'background');
	this.image.setInteractive();	
	this.input.on('gameobjectdown',this.onObjectClicked);
	
}

function update() {

	

}

function onObjectClicked(pointer,gameObject) {
	
	window.open("https://www.phoenixteablendinghouse.com","_self")
	
}