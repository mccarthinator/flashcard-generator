var inquirer = require("inquirer");
module.exports = ClozeCard;
var cards = [];
var cardCount = 0;
var clozeText


function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;

}

ClozeCard.prototype.full = function() {
	//show sentence with a blank
	clozeDeleted = this.cloze;
	clozeText = this.text;

	//replace the incomplete sentence with the answer (cloze)
	clozeText = clozeText.replace("...", clozeDeleted);

	//show answer
	console.log(clozeText);

}


var card1 = new ClozeCard("It takes ... licks to get to the center of a tootsie pop", "32.5");
var card2 = new ClozeCard("The fear of ... is known as samhainophobia", "halloween");
var card3 = new ClozeCard('Of the lower 48 states ... has the longest coastline', 'Michigan');
var card4 = new ClozeCard('The ... is as wide at its base as it is tall', 'St. Louis Arch');
var card5 = new ClozeCard('Of any president ... had the most children at 15', 'John Tyler');


cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.push(card4);
cards.push(card5);

function studyCards() {
	//recursion loop 
	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "partial",
						message: cards[cardCount].text
					}
				]).then(function(answer) {

					//if user's answer matches the cloze answer, log Correct, loop back through studyCards.
					if((answer.partial).toLowerCase() === cards[cardCount].cloze) {
						console.log("Yep");
						//increase card count per loop
						cardCount ++
						//continue recursion 
						studyCards();
					} 
					else {
						//if user's answer does not match cloze answer, log Incorrect and show the full sentence.  
						console.log("Incorrect");
						cards[cardCount].full();
						//increase card count per loop
						cardCount ++
						//continue recursion
						studyCards();
					}

				});

		}


}

studyCards();