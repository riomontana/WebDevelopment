$("#get-tips").on("click", function() {
	
	$.ajax({
		url: "http://localhost:1234/date.php"
	}).done(function (data){
		$("#tips").text(data);
	}).fail(function (data){
		console.log(data);
		$("#tips").text("Det gick inte att hämta ett tips.");
	});
	
});