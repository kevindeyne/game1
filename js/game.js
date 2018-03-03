var Game = {
    init: function () {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        
		activeEntities = [];
		
        var w = 600;
        var h = 1000;
        
        var framesRita = [];        
        for(var i=0; i < 12; i++){
            framesRita.push([i*w,0,w,h]);
        }
		
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
			var rita = new Entity(data, framesRita, 0, 0, 0, h);
			activeEntities.push(rita);
			Game.run(data);
		})
	},
	
	run: function (data, activeEntities) {
		var loop = function () {
			Game.update(data, activeEntities);
			Game.render(data);
			
			data.animationFrame++;
			
			window.requestAnimationFrame(loop);
		};
		
		loop();
	},
	
	update: function (data, activeEntities) {
		Animation.update(data, activeEntities);
	},
	
	render: function (data) {
		Render.update(data);
	}
};

Game.init();

