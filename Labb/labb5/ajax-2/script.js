
$("#get-tips").on("click", function () {
	var dropDownMenu = $("#drop-down-menu");
	var url = "/";
	var fname = $("#fname").val();
	var lname = $("#lname").val();
	var nbrOfJokes = $("#nbrofjokes").val();

	if ($("#drop-down-menu").val() == "all categories") {
		url = "http://api.icndb.com/jokes/random";
	}
	if ($("#drop-down-menu").val() == "nerdy") {
		url = "http://api.icndb.com/jokes/random?limitTo=[nerdy]";
	}
	if ($("#drop-down-menu").val()== "explicit") {
		url = "http://api.icndb.com/jokes/random?limitTo=[explicit]";
	}
	url = url + ("?firstName=" + fname) + ("&amp;?lastName=" + lname)
		+ ("/" + nbrOfJokes);
	console.log(url);
	$.ajax({
		url: url,
		dataType: "JSON"
	}).done(function (data) {
		for(var i = 0; i < nbrOfJokes; i++) {
		$("#tips").text(data.value.joke);
		}
	}).fail(function (data) {
		console.log(data);
		$("#tips").text("Det gick inte att hämta ett tips.");
	});
});