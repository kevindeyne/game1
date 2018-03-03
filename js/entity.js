//new Entity class I made with Kevin Deyne

class Entity {
	var rate = 30;
	var scale = 0.60;
	var sprite = null;
	
	var spriteAnimations = {
		frames:[],
		currentFrame: 0
	};
	
	constructor(data, frameCoordinates, x, y, w, h) {
		this.data = data;
		this.frameCoordinates = frameCoordinates;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = scale * h;
		
	frameCoordinates.forEach(function (coordinates) {
	spriteAnimations.frames.push(new Entity.Sprite(data.spriteSheet, coordinates[0], coordinates[1], coordinates[2], coordinates[3]));
	});	
		
	}	
		
    animation(data) {
        if (data.animationFrame % rate === 0) {
            this.sprite = self.spriteAnimations.frames[self.spriteAnimations.currentFrame];
            self.spriteAnimations.currentFrame++;
            
            if (self.spriteAnimations.currentFrame > self.spriteAnimations.frames.length - 1) {
                self.spriteAnimations.currentFrame = 7   /*spriteAnimations.frames.length - 1*/;
            }
            this.w = this.sprite.srcW * scale;
        }
    }
		
}
	

//Old Entity Singleton pattern from tutorial man.
/*
var Entity = {
	init: function (data) {
		data.marioAnimation = new Entity.marioAnimation(data);
	},
	
	marioAnimation: function (data) {
		var self = this;
		var rate = 30;
		var scale = 0.60;
		
		var spriteAnimations = {
			frames: [],
			currentFrame: 0
		};
		
		var frameCoordinates = [[0,0,600,1000], [600,0,600,1000], [1200,0,600,1000], [1800,0,600,1000], [2400,0,600,1000], [3000,0,600,1000], [3600,0,600,1000], [4200,0,600,1000], [4800,0,600,1000], [5400,0,600,1000], [6000,0,600,1000], [6600,0,600,1000], [7200,0,600,1000]]
		
		self.x = 0;
		self.y = 0;
		self.w = 0;
		self.h = scale * 1000;
		
		self.sprite = null;
		self.animation = function (data){
			if (data.animationFrame % rate === 0) {
				self.sprite = spriteAnimations.frames[spriteAnimations.currentFrame];
				spriteAnimations.currentFrame++;
				
				if (spriteAnimations.currentFrame > spriteAnimations.frames.length - 1) {
					spriteAnimations.currentFrame = 7	/*spriteAnimations.frames.length - 1*/;
			/*	}
				
				self.w = self.sprite.srcW * scale;
			}
		};
		
		frameCoordinates.forEach(function (coordinates) {
			spriteAnimations.frames.push(new Entity.Sprite(data.spriteSheet, coordinates[0], coordinates[1], coordinates[2], coordinates[3]));
		})
		
	},*/
	
	//Helper Class
	Sprite: function (img, srcX, srcY, srcW, srcH) {
		this.img = img;
		this.srcX = srcX;
		this.srcY = srcY;
		this.srcW = srcW;
		this.srcH = srcH;
	}
};