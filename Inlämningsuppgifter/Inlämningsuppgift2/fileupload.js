
// Kolla så formuläret för filuppladdning är korrekt ifyllt
function checkForm() {

    // ta bort klasserna is-invalid från element
    $("#drop-down-list").removeClass("is-invalid");
    $("#title").removeClass("is-invalid");
    $("#file").removeClass("is-invalid");

    // om inget är valt i drop down listan
    if ($("#drop-down-list").val() == "") {

        // lägg till klassen is-invalid till elementet
        $("#drop-down-list").addClass("is-invalid");

        //returnerar false så att formuläret ej skickas
        return false;

    // annars om titel fält ej är ifyllt
    } else if ($("#title").val() == "") {

        // lägg till klassen is-invalid till elementet
        $("#title").addClass("is-invalid");

        //returnerar false så att formuläret ej skickas
        return false;

    // annars om fil fältet ej är ifyllt
    } else if ($("#file").val() == "") {

        // lägg till klassen is-invalid till elementet
        $("#file").addClass("is-invalid");

        //returnerar false så att formuläret ej skickas
        return false;

    // är alla fält är korrekt ifyllda returneras true till funktionen som skickar iväg formuläret
    } else {
        return true;
    }
}

// händelsehantering för drop-down-list
$("#drop-down-list").on("change", function () {

    // ta bort varningstext om tecken blir ifyllt
    if ($("#drop-down-list").val() != "") {
        $("#drop-down-list").removeClass("is-invalid");
    }
});

// händelsehantering för titel fält
$("#title").on("keyup", function () {

    // ta bort varningstext om tecken blir ifyllt
    if ($("#title").val() != "") {
        $("#title").removeClass("is-invalid");
    }
});

// händelsehantering för fil fält
$("#file").on("change", function () {

    // ta bort varningstext om tecken blir ifyllt
    if ($("#file").val() != "") {
        $("#file").removeClass("is-invalid");
    }
});

// Gör så att den typ av fil användaren valt i listan blir förvald i filuppladdningsfönstret
$("#drop-down-list").change(function () {
    $("input").attr("accept", $(this).val() + '/*');
});

// När man skickar iväg formuläret (klickat på knappen "Spara media")
$("#myForm").submit(function (e) {

    // förhindrar standardhändelsen att vi skickas iväg till en ny sida 
    e.preventDefault();

    // returnerar false om formuläret inte är rätt ifyllt så att formuläret ej skickas
    if (checkForm() == false) {
        return false;
    
    // om formuläret är rätt ifyllt (true returneras från checkForm funktionern) sker följande:
    } else {

        // tar bort elementet med info till användaren
        $("#infoToUser").remove();

        // lägger till textinfo till användaren att filen håller på att laddas upp
        $("#myForm").append('<div class="alert alert-primary" role="alert" <p id="infoToUser">Filuppladdning pågår...</p></div>');

        // lägger till en spinner så att användaren får visuell feedback på att något händer
        $("#myForm").append('<div class="loader" id="spinner"></div>');

        // hämtar datan från alla fält i formuläret
        var formData = new FormData(this);

        // gör ett ajax-anrop
        $.ajax({
            // till adressen "server.php"
            url: $(this).attr("action"),
            // med metoden "post"
            type: $(this).attr("method"),
            // datan från formuläret som skickas med
            data: formData,
            // tolka datan som JSON
            dataType: "JSON",
            // tillåt inte att webbläsaren cachar resultatet
            cache: false,
            // jQuery ska ej tolka datan
            contentType: false,
            // jQuery ska ej processera datan
            processData: false 
            
        // om filuppladdningen lyckades
        }).done(function (data) {
            // ta bort visuell feedback att filen håller på att laddas upp
            $("#spinner").remove();
            $("#infoToUser").remove();
            // lägg till info att filuppladdningen lyckades
            $("#myForm").append(
                '<div class="alert alert-success" role="alert" id="infoToUser">Filuppladdningen lyckades! </div>');
            removeInfoToUser();
    
        // om filuppladdning misslyckats
        }).fail(function (data) {
            // ta bort visuell feedback att filen håller på att laddas upp
            $("#spinner").remove();
            $("#infoToUser").remove();
            // lägg till info att filuppladdningen lyckades
            $("#myForm").append(
                '<div class="alert alert-danger" role="alert" id="infoToUser">Filuppladdningen misslyckades.</div>');
            removeInfoToUser();
        });
        // rensa all data från formuläret
        $('#myForm').trigger("reset");
        return true;
    }
});

function removeInfoToUser() {
    $("#infoToUser").delay(3000).fadeOut();
}