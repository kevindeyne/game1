var Render = {
	update: function (data) {
		data.stage.ctx.clearRect(0, 0, data.stage.canvas.width, data.stage.canvas.height);
		Render.drawEntity(data.marioAnimation, data.stage.ctx);
	},
	
	//Helpers and Classes
	drawEntity: function (entity, ctx) {
		ctx.drawImage(entity.sprite.img, 
					entity.sprite.srcX, entity.sprite.srcY,
					entity.sprite.srcW, entity.sprite.srcH,
					entity.x, entity.y,
					entity.w, entity.h);
	}
};