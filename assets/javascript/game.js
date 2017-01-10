
$("document").ready(function(){     

	var wins = 0;
	var losses = 0;
	var nutArray = ["assets/images/hazelnut.jpg", "assets/images/peanuts.jpg", "assets/images/pecan.jpg", "assets/images/walnut.jpg"];
	var userScore;
	var randomNumber;

	var newNutGame = function() {
		userScore = 0; //resets the user's score to 0
		randomNumber = (Math.floor(Math.random() * 120) + 19); //recreates the randomNumber for the user
		console.log(userScore);
		console.log(randomNumber);

		$("#randomNumber").html(randomNumber); //shows the score the user must try to obtain
		$("#total-score").html(userScore);

		for (var i = 0; i < nutArray.length; i++) { //loops through and creates the images with values
			var nutValue = Math.round(Math.random() * 12) + 1;
			console.log(nutValue);
			var a = $("<img>");
			a.attr("value", nutValue);
			a.addClass("nut");
			a.attr("src", nutArray[i]);
			$(".nutSack").append(a);
		}
	}

	$(document).on("click", ".nut", function() {
		var nutso = $(this).attr("value");
		userScore += parseFloat(nutso);
		console.log(userScore);
	});	


	// if (userScore === randomNumber) {
	// 	wins++;
	// 	$(".wins").text(wins);
	// 	//newNutGame();
	// }
		
	// if (userScore > randomNumber) {
	// 	losses++;
	// 	$(".losses").text(losses);
	// 	//newNutGame();
	// }

newNutGame();

}); //end document ready