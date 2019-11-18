
$("#search-input").on("input", function () {
    var input = $("#search-input").val();
    $(".movie").remove();

    if (input.length > 2) {
        $.ajax({
            url: "http://www.omdbapi.com/?s=" + $("#search-input").val() + "&apikey=97889740",
            type: "Get",
            dataType: "JSON"

        }).done(function (data) {

            if (data.Error) {
                $("#container").append('<div class="movie"> <p class="title">Inga filmer funna!</p> </div>');
            }

            var movies = data.Search;

            for (var i in movies) {
                var title = movies[i].Title;
                var year = movies[i].Year;
                console.log(title);
                console.log(year);
                $("#container").append('<div class="movie"> <p class="title">' + title +
                    '</p> <p class="year">' + year + '</p> </div>');
            }
        }).fail(function (data) {
            console.log("Fail")
        });
    }
});