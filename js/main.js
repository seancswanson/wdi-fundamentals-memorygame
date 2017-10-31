var cards = [
{
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
	cardImage: "king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function() {
	this.setAttribute("src", cards[cardId].cardImage)
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
} else {
	console.log("Sorry, try again");
}
}

var flipCard = function() {

var cardId = this.getAttribute(data-id);
// 	var cardOne = cards[0];

// cardsInPlay.push(cardOne);

// var cardTwo = cards[2];

// cardsInPlay.push(cardTwo);

// console.log("User flipped " + cardsInPlay[0]);
// console.log("User flipped " + cardsInPlay[1]);

console.log("User flipped " + cards[cardId].rank);

cardsInPlay.push(cards[cardId].rank);

console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

// if (cardsInPlay.length === 2) {
// 	if (cardsInPlay[0] === cardsInPlay[1]) {
// 		alert("You found a match!");
// 	}
// 	else {
// 		alert("Sorry, try again.");
// 	}
// }

}

var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute(data-id, cardElement[i]);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	};
}


checkForMatch();