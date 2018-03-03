var Game = {
	init: function () {
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		
		var stage = {
			canvas: canvas,
			ctx: ctx
		};
		
		var spriteSheet = new Image();
		spriteSheet.src = "img/ritacolor2.png";
		
		spriteSheet.addEventListener("load", function () {
			var self = this;
			var spriteSheet = self;
			
			var data = {
				animationFrame: 0,
				spriteSheet: spriteSheet,
				stage: stage
			};
			
			Entity.init(data);
			Game.run(data);
		})
	},
	
	run: function (data) {
		var loop = function () {
			Game.update(data);
			Game.render(data);
			
			data.animationFrame++;
			
			window.requestAnimationFrame(loop);
		};
		
		loop();
	},
	
	update: function (data) {
		Animation.update(data);
	},
	
	render: function (data) {
		Render.update(data);
	}
};

Game.init();

