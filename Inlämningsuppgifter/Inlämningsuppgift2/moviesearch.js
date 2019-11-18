// Händelsehantering för textfält som exekveras varje gång en tangent släpps
$("#search-input").on("keyup", function () {
    // sätter värdet på variabeln input till vad som står i textfältet
    var input = $(this).val().trim().replace(" ", "+");

    // tömmer movie-elementen
    $("#movie-row").empty();

    // om fler än två tecken är inmatade i textfältet
    if (input.length > 2) {
        // ta bort klassen is-invalid från textfältet
        $(this).removeClass("is-invalid");

        // skickar ett ajax anrop till omdb api:et
        $.ajax({
            url: "http://www.omdbapi.com/?s=" + input + "&apikey=97889740",
            type: "Get",
            dataType: "JSON"

            // om anropet lyckats processeras svaret från servern som ligger i parametern data
        }).done(function (data) {

            // om data innehåller värdet "true" på Error så hittades inga filmer
            if (data.Error) {
                $("#movie-row").append('<div class="movie"><p class="title">\
                Inga filmer hittades vid sökningen</p> </div>');
            }
            // sätter variabeln movies till en lista med alla filmer som matchar söksträngen
            var movies = data.Search;

            // loopar igenom alla filmer och hämtar ut de värden som är intressanta
            for (var i in movies) {
                var title = movies[i].Title;
                var year = movies[i].Year;

                // lägger till alla filmer som element i html-dokumentet
                $("#movie-row").append(
                    '<div class="col-lg-4 col-sm-6"><div class="movie"><p class="title">' 
                    + title + '(' + year + ')</p><button type="button" class="btn btn-warning"\
                    id="favourite-btn' + i + '">Favoritfilm</button></div></div>');

                // lägger till knapplyssnare på varje film-element
                $('#favourite-btn' + i).on("click", function () {

                    // letar upp p-elementet i den tryckta knappens förälder och sätter en variabel till dess textinnehåll
                    var newFavouriteMovie = $(this).parent().find("p", "title").text();

                    // hämtar favouriteMovie från localStorage och sätter till variabel
                    var favouriteMovie = localStorage.getItem("favouriteMovie");

                    // om det inte finns någon favoritfilm sparad skapas en sådan
                    if (favouriteMovie == null) {
                        localStorage.setItem("favouriteMovie", newFavouriteMovie);

                        // finns en favoritfilm redan sparad så skrivs värdet på den över med den nya titeln
                    } else {
                        localStorage.favouriteMovie = newFavouriteMovie;
                    }
                    $("#favourite-movie").remove();
                    $("#footer-container").append(
                        '<span class="text-warning" id="favourite-movie">Sparad favoritfilm: '
                        + newFavouriteMovie + '</span>');
                    
                    // ta bort infoToUser element
                    $("#infoToUser").remove();
                    // lägg till infoToUser element
                    $(this).parent().append(
                        '<div class="alert alert-success" role="alert" id="infoToUser">Favoritfilm sparad! </div>');
                    removeInfoToUser();
                });
            }
        }).fail(function (data) {
            console.log("Fail")
        });
    } else {
        $("#search-input").addClass("is-invalid");
    }
});

function removeInfoToUser() {
    $("#infoToUser").delay(2000).fadeOut();
}

checkSavedMovie();

function checkSavedMovie() {
    var favouriteMovie = localStorage.getItem("favouriteMovie");
    if (favouriteMovie != null) {
        $("#footer-container").append(
            '<span class="text-warning" id="favourite-movie">Sparad favoritfilm: '
            + favouriteMovie + '</span>');
    }
}