
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
/*
if (cardTwo === cardFour) {
	alert("You found a match!")
} else {
	alert("Sorry, try again.")
} */

var xyz = document.getElementById('game-board');
for(var i=0; i < 4; i++) {
   var createCards = document.createElement('div');
   createCards.className = 'card';
   xyz.appendChild(createCards);
}

createCards;