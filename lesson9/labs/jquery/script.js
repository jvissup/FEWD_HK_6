$("h1").html("Hello jQuery");
$("#results").html("Nice to meet you...");

$("h1").click(saySomething);

function saySomething() {
	$("p").html("You clicked the above header");
}

$("h1").hover(function() {
	$("p").css("background-color", "red");
});

$("h1").mouseout(function() {
	$("p").css("background-color", "green");
});