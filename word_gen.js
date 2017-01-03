/*
-------------------------Welcome to the guessing game's core-------------------------------
----------------------------------Code instructions----------------------------------------

		Please follow the following 2 rules to keep the code nicely structured -
				  1. Use underscore/underbar for naming variables
						2. Use camelCase for naming functions
	 	3. For God's sake, please indent the code in case you make any changes

-----------------------------------------Bye-----------------------------------------------
------------------------Have a nice time playing around with my code-----------------------
*/

"use strict";

var word_list=["Apple",
			   "Aeroplane",
			   "Banana",
			   "Bus",
			   "Car",
			   "Computer",
			   "Dog",
			   "devRant",
			   "Elephant",
			   "Espresso",
			   "Frog",
			   "Font",
			   "Garage",
			   "Grapes",
			   "Horse",
			   "Hippo",
			   "Ice Cream",
			   "Internet",
			   "JavaScript",
			   "Jam",
			   "Kite",
			   "King",
			   "Lion",
			   "Light",
			   "Monkey",
			   "Money",
			   "Net",
			   "Next",
			   "Orange",
			   "Open",
			   "Parrot",
			   "Pink",
			   "Queen",
			   "Quiet",
			   "Rose",
			   "Rat",
			   "Sun",
			   "Structure",
			   "Tree",
			   "Tornado",
			   "Umbrella",
			   "Unique",
			   "Van",
			   "Value",
			   "Willow",
			   "Wild",
			   "Xmas",
			   "X-ray",
			   "Yak",
			   "Yellow",
			   "Zebra",
			   "Zero"];
var user_word;
var random_index;
var random_word;
var first_letter;

function getRandomNumber(){
   	return Math.floor(Math.random()*word_list.length);
}

random_index=getRandomNumber();
random_word=word_list[random_index];

first_letter=random_word.split("");											//Get the first letter of the random word as a hint.
function getHint(){
	document.getElementById('hint').innerHTML="Hint: "+first_letter[0];			//Set the hint
}
function checkWord(){
	user_word=document.getElementById('user-input').value;
	if (random_word===user_word){
		document.getElementById('mod-header').innerHTML="You're right!";
		document.getElementById('mod-data').innerHTML="Your answer is correct. The random word generated was "+random_word+".";
		$('.modal').modal();
	  	$('#result').modal('open');
	}
	else{	
		document.getElementById('mod-header').innerHTML="You're wrong!";
		document.getElementById('mod-data').innerHTML="Your answer is incorrect. The random word generated was "+random_word+".";	
		$('.modal').modal();
  		$('#result').modal('open');
	}
	console.log(word_list.length);
	console.log(random_index);
	console.log(random_word)
	console.log(user_word);
}

