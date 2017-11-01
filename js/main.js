// set variable of card objects
var cards = [{
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];


// set variable to hold 'flipped' cards to later reference for matches
var cardsInPlay = [];
// changes flipped cards' class to clicked to flip back over when there are two of them.
var clicked = document.getElementsByClassName("clicked");
// initialize score at start
var score = 0
//allows for changing the message displayed if successful match 
var scoreMessage = document.getElementById("scoreMessage"); 
//allows for changing the message displayed if unsuccessful match 
var failMessage = document.getElementById("failMessage"); 
// flips back cards after selecting 2
var flipBack = function() {
	for (var i = 0; i < clicked.length; i++) {
		clicked[i].setAttribute("src", "images/back.png");
	}
}

// function to check card index from cardsInPlay for match.
var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        scoreMessage.innerHTML = "You found a match!";
        score += 1;
        document.getElementById("score").textContent = "Score: " + score;

        flipBack();
    } else {
        failMessage.innerHTML = "Sorry, try again";
        flipBack();
    }
    cardsInPlay = [];
}

// function to execute when clicking on card IMG from the created board
var flipCard = function() {
    var cardId = this.getAttribute("data-id");
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute("class", "clicked");
    this.setAttribute("src", cards[cardId].cardImage);
    if (cardsInPlay.length === 2) {
    	checkForMatch();
    }
}

// function to create 4 card images which listen for a click.
var createBoard = function() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement("img");
        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute("data-id", i);
        cardElement.addEventListener("click", flipCard);
        document.getElementById("game-board").appendChild(cardElement);
    };
}



createBoard();
