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


// function to check card index from cardsInPlay for match.
var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again");
    }
}

// function to execute when clicking on card IMG from the created board
var flipCard = function() {
    var cardId = this.getAttribute("data-id");
    // console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
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
