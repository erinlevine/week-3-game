$(document).ready(function() {

//Setting up global variables
	var wins = 0;
	var losses = 0;
	var numberToGuess = 0;
	var crystalsAdded = 0;
	var redCrystal = 0;
	var blueCrystal = 0;
	var yellowCrystal = 0;
	var greenCrystal = 0;

	function randomCrystalNumber() {
		//Setting a random number between 1-12 for each crystal.
		redCrystal = Math.ceil(Math.random()*12); 
			console.log(redCrystal + " This is the random number for the redCrystal");
		blueCrystal = Math.ceil(Math.random()*12);
			console.log(blueCrystal + " This is the random number for blueCrystal");
		yellowCrystal = Math.ceil(Math.random()*12);
			console.log(yellowCrystal + " This is the random number for yellowCrystal");
		greenCrystal = Math.ceil(Math.random()*12);
			console.log(greenCrystal + " This is the random number for greenCrystal");
		
	}

	function randomNumberToGuess(){
		numberToGuess = Math.ceil(Math.random()*120-19)+19;
		//Change the HTML
		$(".value").html(numberToGuess);
		console.log(numberToGuess + " This is the random number you are supposed to guess");
	}

	function checkWin(){
		if(crystalsAdded === numberToGuess){
			alert("Congratulations! You won! Way to go!")
			wins++
			$("#wins").html(wins);
			randomCrystalNumber();
			randomNumberToGuess();
			crystalsAdded = 0;
			$("#yourScore").html(crystalsAdded);
		} 
		else if(crystalsAdded > numberToGuess){
			alert("You lost, loser!")
			losses++
			$("#losses").html(losses);
			randomCrystalNumber();
			randomNumberToGuess();
			crystalsAdded = 0;
			$("#yourScore").html(crystalsAdded);
		}

	}
	$(".red").on("click", function(){
		crystalsAdded = crystalsAdded + redCrystal;
		$("#yourScore").html(crystalsAdded);
		checkWin();
		console.log(crystalsAdded + " This is crystalsAdded plus the redCrystal");
	});

	$(".blue").on("click", function(){
		crystalsAdded = crystalsAdded + blueCrystal;
		$("#yourScore").html(crystalsAdded);
		checkWin();
		console.log(crystalsAdded + " This is crystalsAdded plus the blueCrystal");
	});

	$(".yellow").on("click", function(){
		crystalsAdded = crystalsAdded + yellowCrystal;
		$("#yourScore").html(crystalsAdded);
		checkWin();
		console.log(crystalsAdded + " This is crystalsAdded plus the yellowCrystal");
	});

	$(".green").on("click", function(){
		crystalsAdded = crystalsAdded + greenCrystal;
		$("#yourScore").html(crystalsAdded);
		checkWin();
		console.log(crystalsAdded + " This is crystalsAdded plus the greenCrystal");
	});



	randomCrystalNumber();
	randomNumberToGuess();
});






// On click event to generate random number for big crystal.

// One click event to generate random number for small crystals, but keep the same number per game. Lock key?

// One empty array for all of the crystals

// On click event to push crystal num into empty array

// Array is equal to random number variable equals a win 

// Array is less than random number variable and is more than the attempts left equals a loss 

// Clear empty array for crystals.

// Reset attemps variable

// Generate new random number associated with each crystal.
		
		
	

	//Starting number should be between 19-120
			//var randomNumber = randomIntFromInterval(19,120)
			//var randomNumber = Math.floor(Math.random()*???)
		
		

	//Create function for actual gameplay logic
		//counter = 0
		//Create an event that adds the number to an empty array.
		//Number for each crystal must be hidden until player creates an event. 
		//Condition statement: When array numbers equal starting number, player wins and wins++
		//Condition statement: When array numbers go over starting number, player loses and losses++


