var inquirer = require("inquirer");
module.exports = BasicCard;
var cards = []
var cardCount = 0

function BasicCard(front, back) {
	this.front = front;
	this.back = back;
}


var card1 = new BasicCard("How many licks does it take to get to the center of a tootsie pop?", "32.5");
var card2 = new BasicCard("The fear of what is known as samhainophobia?", "Halloween");
var card3 = new BasicCard("Of the lower 48 states which has the longest coastline?", "Michigan");
var card4 = new BasicCard("What is as wide at its base as it is tall?", "The St. Louis Arch");
var card5 = new BasicCard("Of all the US presidents who had the most, at 15 kids?", "John Tyler");

cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.push(card4);
cards.push(card5);


function allCards() {

	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "question",
						message: cards[cardCount].front
					}
				]).then(function(answer) {

					if((answer.question).toLowerCase() === cards[cardCount].back) {
						console.log("well done");
						
						cardCount ++
						 
						allCards();
					} 
					else {
						
						console.log("incorrect");
						console.log("The answer is:  " + cards[cardCount].back);
						
						cardCount ++
						
						allCards();
					}

				});

		}


}

allCards();