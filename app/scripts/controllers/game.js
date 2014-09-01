'use strict';

app.controller("GameController", function ($scope, Board, Game) {

  var initialize = function() {
    $scope.flippedCards = [];
    $scope.board = Board;
    $scope.game = Game;
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
    if (card.flipped != true) {
      $scope.flippedCards.push(card.name);

      // Flip the card
      card.flipped = true;

      console.log(">>> ADDED (" + $scope.flippedCards + ")");

    // Remove from the array
    } else {
      if ($scope.flippedCards[0] === card.name) {
        $scope.flippedCards.shift();
      } else {
        $scope.flippedCards.pop();
      }
      // Unflip the card
      card.flipped = false;

      console.log("<<< REMOVED (" + $scope.flippedCards + ")");
    }

    // Check if two cards are now flipped
    if ($scope.flippedCards.length === 2) {

      // Are the two card flipped the same?
      if ($scope.flippedCards[0] === $scope.flippedCards[1]) {
        // Mark the two cards has found
        angular.forEach($scope.board, function(row, key) {
          angular.forEach(row, function(card, key) {
            if (card.flipped === true) {
              card.found = true;
              $scope.game.cards_found++;
              $scope.game.cards_left--;
            }
          });
        });

      } else {
        console.log("Try again...");
      }
    }

    // Check if you win
    if ($scope.game.cards_left <= 0) {
      $scope.game.victory = true;
      console.log("Victory! Game over. :)");
    }

  };

  var resetCards = function() {
    // Reset every flipped cards not yet found
    angular.forEach($scope.board, function(row, key) {
      angular.forEach(row, function(card, key) {
        card.flipped = false;
      });
    });
  };

  return initialize();

});
