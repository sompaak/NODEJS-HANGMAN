
var letter = require("./letter.js");

function word(wordVal){
	this.wordVal = wordVal;
	// var to hold array of letter objects
	this.letters = [];
	for(var i = 0; i < this.wordVal.length; i++) {
		this.letters.push(new letter.letter(this.wordVal[i]));
	}
};

word.prototype.toString = function(){
  var output = "";
  for(var i=0; i<this.letters.length; i++){
    output += this.letters[i].getChar();
  }
  return output;
}

word.prototype.findChar = function(char){
	var lowerChar = char.toLowerCase();
	for(var i=0; i<this.wordVal.length;i++){
		this.letters[i].check(lowerChar);
	}
}

word.prototype.isWordGussed = function(){
	for(var i = 0; i < this.letters.length; i++){
		if(!this.letters[i].guessed){
			return false;
		}
	}
	return true;
}

exports.word = word;