var Game = {
    init: function () {
		var data = {
			animationFrame: 0,
			stage: Game.buildStage(),
			game: this
		};
		data.game.activeEntities = [];
		
		data.game.amountOfEntitiesBeforeGameRun = 2;
		var rita = new Entity(data, "img/ritacolor2.png", 13, 0, 0, 600, 1000);
		var zita = new Entity(data, "img/rita2.png", 13, 200, 0, 600, 1000);
	},
		
	buildStage: function () {
		var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");				
		return {
			canvas: canvas,
			ctx: ctx
		};
	},
		
	runIfLoaded: function (data) {
		if(Game.readyToRun(data)){
			var loop = function () {
				var activeEntities = data.game.activeEntities;
				Game.update(data, activeEntities);
				Game.render(data, activeEntities);
				
				data.animationFrame++;
				
				window.requestAnimationFrame(loop);
			};
		
			loop();
		}
	},
	
	readyToRun: function (data) {
		return data.game.activeEntities.length == data.game.amountOfEntitiesBeforeGameRun;
	},	
	
	update: function (data, activeEntities) {
		Animation.update(data, activeEntities);
	},
	
	render: function (data, activeEntities) {
		Render.update(data, activeEntities);
	}
};

Game.init();

