

//update function is the framerate, so this gets called every frame - and i want every frame to cause the animation for all entities to change

//original

/*var Animation = {
	update: function (data) {
		data.marioAnimation.animation(data);
	}
};
*/
//version with Kevin Deyne

var Animation = {
	update: function (data, entities) {
		for (var index in entities) {
		entities[index].animation(data);
		}
	}
};

// I walk entities into the var Animation room, by placing entities inside () a parameter.
