app.factory("Board", function() {

	var cards = []

	for (i = 1; i < 10; i++) {
		cards.push({ image: "portal_" + i + ".jpg", flipped: false, found: false });
		cards.push({ image: "portal_" + i, flipped: false, found: false });
	}

	cards = shuffle(cards);

	//+ Jonas Raoni Soares Silva
	//@ http://jsfromhell.com/array/shuffle [v1.0]
	function shuffle(o){ //v1.0
	    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;
	};

  return cards.slice(0, 15);
});