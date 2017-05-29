$(document).ready(function() {


	//Create variable for wins
	var wins = 0;
	//Create variable for losses
	var losses = 0; 
	//Create variable for counter
	var counter = 0;

	//Edit HTML to update wins and losses within jQuery
	$("#wins").html(wins);
	$("#losses").html(losses);

	randomCrystals();
	newGame();

	//Create function for all colored crystals)
		
	function randomCrystals () {

		//Create an empty array for colored crystals
		var numberArray = []
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
				//***I have no idea what this even means. 
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

	function newGame () {
		//Setting the counter variable to change in the #yourScore html
		counter = 0;
		$("#yourScore").html(counter);
		//Creating a function that will spit out a random integer between min and max
		function randomIntFromInterval(min,max){
			//Returning a random number that is rounded down to the nearest whole number.
			//***Subtracting the max from the min and adding 1? I don't know what this really means.
			return Math.floor(Math.random()*(max-min+1)+min);
		}
		//Creating a new varible for user to guess.
		//Setting the conditions for min 19 and max 120.
		var guessThisNumber = randomIntFromInterval(19,120);
		//Setting the class value in the HTML to change based upon the variable guessThisNumber
		$(".value").html(guessThisNumber);
		//Setting the class imgCrystal for an on click event
		$("#crystals").on("click", function(){
			//***The counter variable is now equal to the counter number plus... I don't know
			//***We're parsing a string and turning it into an integer. 
			counter = counter + parseInt($(this).data("num"));
			//Setting the ID yourScore in the HTML to change based upon the varible counter
			$("#yourScore").html(counter);
			//Setting a condition if counter equals guessThisNumber then:
			if (counter === guessThisNumber){
				//Change counter ID in HTML to "Congrats..."
				$("#counter").html("Congratulations! You won!");
				//Increase wins count by 1.
				wins++
				//Change wins ID in HTML to wins variable
				$("#wins").html(wins);
				//console.logging the wins for debugging purposes.
				console.log(wins);
				//Change the crystals ID in HTML and clear random number associated with it.
				$("#crystals").empty();
				//Run two functions:
				newCrystals();
				newGame();
			//Creating another condition
			//If counter varible is greater than guessThisNumber then:
			} else if (counter > guessThisNumber){
				//Change counter ID to say "Sorry..."
				$("#counter").html("Sorry! You lost! Try again.");
				//Increases loss by 1.
				losses++
				//Change losses ID to reflect losses variable
				$("losses").html(losses);
				//console.logging losses variable
				console.log(losses);
				//Change crystals ID in HTML and change it to empty.
				$("#crystals").empty();
				//Run two functions:
				newCrystals();
				newGame();
			}
		});
	}
});
		
		
	

	//Starting number should be between 19-120
			//var randomNumber = randomIntFromInterval(19,120)
			//var randomNumber = Math.floor(Math.random()*???)
		
		

	//Create function for actual gameplay logic
		//counter = 0
		//Create an event that adds the number to an empty array.
		//Number for each crystal must be hidden until player creates an event. 
		//Condition statement: When array numbers equal starting number, player wins and wins++
		//Condition statement: When array numbers go over starting number, player loses and losses++


