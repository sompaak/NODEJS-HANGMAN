//Random word is selected and exported
var wordsToGuess = ["superman", "batman", "ironman", "aquaman", "hulk", "wonderwoman", "cyborg"];



var Index = Math.floor(Math.random() * wordsToGuess.length);
var genWord = wordsToGuess[Index];

var word = require("./word.js");

var inquirer = require("inquirer");

var myWord = new word.word(genWord);

var maxGuesses = 8;


function guessWord(){

	console.log(myWord.toString());

	inquirer.prompt([{
		name: 'char',
		type: 'text',
		message: 'Enter a letter:'
		}])

		.then(function(letterInput){ 
				var char = letterInput.char; 
				myWord.findChar(char);
				if(myWord.isWordGussed()){ 
					console.log('Correct the word is ' + myWord.toString());
					return;
				}

				if (!myWord.wordVal.toLowerCase().includes(char.toLowerCase())){
					maxGuesses--;
					if (maxGuesses === 0){
						console.log("Try again the word was " + genWord);
						return;
					}
					
				}
					console.log('\nYou have ' + maxGuesses + ' guesses left.')
					guessWord(); 
			}
  		);
	}
guessWord();









