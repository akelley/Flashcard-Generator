var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
var thirdPresident = BasicCard("Who was the third president of the United States?", "Thomas Jefferson");

console.log("Front: " + firstPresident.front + "; Back: " + firstPresident.back);
console.log("Front: " + thirdPresident.front + "; Back: " + thirdPresident.back);

console.log("\n=========================================\n");
var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
var brokenCloze = new ClozeCard("This doesn't work", "oops");

console.log("\nFull text: " + firstPresidentCloze.fullText);
console.log("Cloze: " + firstPresidentCloze.cloze); 
console.log("Partial: " + firstPresidentCloze.partial); 

console.log("\n==========================================\n");	// shows that only valid ClozeCards are created
console.log("Cloze: " + brokenCloze.cloze); 	// will show undefined, since BrokenCloze not valid
console.log("Partial: " + brokenCloze.partial); 	// same here
	