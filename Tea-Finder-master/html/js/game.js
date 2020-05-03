var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });


function preload() {
	
	game.load.image('background', 'img/background.png');

}

function create() {
		
		start();		
}

function update() {


	//game.physics.arcade.overlap(sword, attacks, fightSword, null, this);

//function loadNext () {

//game.world.removeAll();

//		if (keyCount == 0)
//		{
//			stage2();
//		}

//}

function start () 
{
	game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;


	function gofull () {
		
		
			game.scale.startFullScreen(true);
		
	}

		
}