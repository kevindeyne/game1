//new Entity class I made with Kevin Deyne	
class Entity {
	constructor(data, spriteSheetSrc, framesInSpritesheet, x, y, w, h) {
		var self = this;	
		this.data = data;
		this.rate = 30;
		this.scale = 0.60;
		this.sprite = null;		
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = this.scale * h;
		this.frameCoordinates = self.buildFrames(framesInSpritesheet, w, h);
		this.spriteAnimations = {
			frames:[],
			currentFrame: 0
		};
		
		this.spriteSheet = new Image();
		this.spriteSheet.src = spriteSheetSrc;
		this.spriteSheet.addEventListener("load", function () {
			self.data.spriteSheet = this;
			self.loadSprite(this);
			self.data.game.activeEntities.push(self);
			Game.runIfLoaded(self.data);			
		})
	}
			
    animation(data) {
        if (data.animationFrame % this.rate === 0) {
            this.sprite = this.spriteAnimations.frames[this.spriteAnimations.currentFrame];
            this.spriteAnimations.currentFrame++;
            
            if (this.spriteAnimations.currentFrame > this.spriteAnimations.frames.length - 1) {
                this.spriteAnimations.currentFrame = 7   /*spriteAnimations.frames.length - 1*/;
            }
            this.w = this.sprite.srcW * this.scale;
        }
    }
	
	buildFrames(size, width, height) {
		var framesEntity = [];
        for(var i=0; i < size; i++){
            framesEntity.push([i*width, 0, width, height]);
        }
		return framesEntity;
	}

	loadSprite(spriteSheet) {
		var self = this		
		this.frameCoordinates.forEach(function (coordinates) {
			self.spriteAnimations.frames.push(new Sprite(spriteSheet, coordinates[0], coordinates[1], coordinates[2], coordinates[3]));
		});	
	}
}