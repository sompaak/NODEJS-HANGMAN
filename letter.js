function letter(char) {
	this.char = char;
	this.guessed = false;
}

letter.prototype.getChar = function() {
	
	this.retval = "";

	if (this.guessed) {
		this.retval = this.char;
	}
	else {
		this.retval = "_ ";
	}
	return this.retval;
}

letter.prototype.check = function(lowerChar){
	if (this.char.toLowerCase() === lowerChar)
		this.guessed = true;
}

exports.letter = letter;
