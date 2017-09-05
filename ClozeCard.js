function ClozeCard(text, cloze){
	if(!(this instanceof ClozeCard)){
		return new ClozeCard(text, cloze);
	}
	if(this.checkError(text, cloze) == false){ // no error, so create ClozeCard object
		this.fullText = text;
		this.cloze = cloze;		// answer deleted from full text
		this.partial = this.fullText.replace(this.cloze, '...');
	}
};

ClozeCard.prototype.checkError = function(text, cloze){
	if(!(text.match(cloze))){
		console.log("Cloze: " + cloze + "; Text: " + text + " --> error: Cloze was not detected in full text.");
		return true;
	}
	else{
		console.log("Cloze: " + cloze + "; Text: " + text + " --> acceptable format.");
		return false;
	}
};

module.exports = ClozeCard;