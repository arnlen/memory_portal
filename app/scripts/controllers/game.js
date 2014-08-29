'use string'

app.controller("GameController", function ($scope, Board) {

  var initialize = function() {
    $scope.flippedCards = [];
    $scope.board = Board;
  };

  $scope.flip = function(card) {

    // Check if two cards have already been flipped
    if ($scope.flippedCards.length === 2) {
      // Reset the card flipped cards array
      $scope.flippedCards = [];
      // Reset the cards
      resetCards();
    }

    // Add the flipped card to the array
    if (card.flipped === false) {
      $scope.flippedCards.push(card.name);

      // Flip the card
      card.flipped = true;

      console.log(">>> ADDED (" + $scope.flippedCards + ")");

    // Remove from the array
    } else {
      if ($scope.flippedCards[0] === card.name) {
        $scope.flippedCards[0] = null;
      } else {
        $scope.flippedCards[1] = null;
      }
      // Unflip the card
      card.flipped = false;

      console.log("<<< REMOVED (" + $scope.flippedCards + ")");
    }

    // Check if two cards are now flipped
    if ($scope.flippedCards.length === 2) {
      // Are the two card flipped the same?
      if ($scope.flippedCards[0] === $scope.flippedCards[1]) {
        console.log("Found!");
        // Mark the two cards has found
        angular.forEach($scope.board, function(row, key) {
          angular.forEach(row.cards, function(card, key) {
            if (card.flipped === true) {
              card.found = true;
              console.log("Card name: " + card.name);
            }
          });
        });
      } else {
        console.log("Try again...");
      }
    }
  };

  var resetCards = function() {
    console.log("called");

    // Reset every flipped cards not yet found
    angular.forEach($scope.board, function(row, key) {
      angular.forEach(row.cards, function(card, key) {
        card.flipped = false;
      });
    });
  };

  return initialize();

});
