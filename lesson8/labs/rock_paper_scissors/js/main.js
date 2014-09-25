var humanScore = 0;
var botScore = 0;

document.getElementById('rock').onclick = userRock

// Rock=1, Paper=2, Scissors=3 //

function userRock() {

	var bot = Math.floor((Math.random() * 3) + 1);

	console.log(bot);

	if (bot == 1) {
	document.getElementById("status").innerHTML = "You played rock. The bot played rock you tied. :|"
	};

	if (bot == 2) {
		botScore++;
		document.getElementById("status").innerHTML = "You played rock. The bot played paper you lose. :("
		document.getElementById("computerScore").innerHTML = botScore.toString();
	};

	if (bot == 3) {
		humanScore++;
		document.getElementById("status").innerHTML = "You played rock. The bot played scissors you win. :)";
		document.getElementById("humanScore").innerHTML = humanScore.toString();
	};
}