var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var board = document.getElementById('game-board');

function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
    board.appendChild(cardElement);
  }
}

function isTwoCards() {
	var clicked = this.getAttribute('data-card');
	cardsInPlay.push(clicked);
	if (clicked === 'king') {
    	this.innerHTML = "<img src = 'king.png' alt = 'king'>";
  	} else {
    	this.innerHTML = "<img src = 'queen.png' alt = 'queen'>";
  	}
  	if (cardsInPlay.length === 2) {
  		isMatch();
  		cardsInPlay = [];
  	}
}

function isMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

createBoard();



