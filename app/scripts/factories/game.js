'use strict';

// Game factory
app.factory("Game", function() {

	return {
		cards_left: 16,
		cards_found: 0,
		victory: false
	};

});