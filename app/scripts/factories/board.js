'use strict';

// Board factory
// Generate a now board for each new game
app.factory("Board", function() {

	var cards = [], rows = []

	for (i = 1; i <= 8; i++) {
		cards.push({ name: "portal_" + i, image: "portal_" + i + ".jpg", flipped: false, found: false });
		cards.push({ name: "portal_" + i, image: "portal_" + i + ".jpg", flipped: false, found: false });
	}

	// Randomize the cards
	cards = shuffle(cards);

  // Split cards into rows
  for (var i = 0; i < 4; i++) {
  	var first_card = i * 4;
  	rows[i] = [];

  	for (var j = 0; j < 4; j++) {
  		rows[i].push(cards[first_card + j]);
  	}
  }

  return rows;

});

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
