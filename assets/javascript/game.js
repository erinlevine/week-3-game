$(document).ready(function() {

	PSEUDO CODE: 

	crystals = ['assets/images/red.png','assets/images/blue.png','assets/images/yellow.png','assets/images/green.png'];

	//Create variable for starting number. Starting number should be between 19-120.
	var startingNumber = 0;
	//Create variable for wins
	var wins = 0;
	//Create variable for losses
	var losses = 0; 
	//Create variable for counter
	var counter = 0;

	//Edit HTML to update wins and losses within jQuery
	$("#win").text(wins);
	$("#losses".text(losses);

	randomCrystals();

	//Create function for all colored crystals)
		
	function randomCrystals () {
		//Create an empty array for colored crystals
		var numberArray []
			//There are 4 colored crystals, hence why it is less than 4. Using a while loop.
			//While loop will continue to be executed as long as the condition is true.
			while(numberArray.length < 4){
				//Spits out a random number with the smallest integer greater or equal to 12 b/c colored crystals can be no greater than 12.
				var randomNumber = Math.ceil(Math.random()*12)
				//Setting a boolean for the variable found
				var found = false;
				//Setting a for loop that specifies if [i] is less than 4, then increase [i] by 1. 
				//When the numberArray index hits the random number then stop the loop.
				for (var i = 0; i < numberArray.length; i++){
					if (numberArray[i] == randomNumber){
						found = true; break
					}
				}
				//I have no idea what this even means. 
				if(!found)numberArray[numberArray.length]=randomNumber;
			}
		console.log(numberArray);

		//Loop increasing [i] by one. 
		//Changing the crystals in the HTML to reflect JS.
		for (i=0; i < numberArray.length; i++){
			var imgCrystal = $("<img>");
			imgCrystal.attr("data-num", numberArray[i]);
			imgCrystal.attr("src", crystals[i]);
			imgCrystal.attr("alt", "crystals");
			imgCrystal.addClass("crystalImage");
			$("#crystals").append(imgCrystal);
		}
		
	}
	//Starting number should be between 19-120
			//var randomNumber = randomIntFromInterval(19,120)
			//var randomNumber = Math.floor(Math.random()*???)
		
		

	//Create function for actual gameplay logic
		//counter = 0
		//Create an event that adds the number to an empty array.
		//Number for each crystal must be hidden until player creates an event. 
		//Condition statement: When array numbers equal starting number, player wins and wins++
		//Condition statement: When array numbers go over starting number, player loses and losses++


