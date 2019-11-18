// Uppgift 2
// $("body").css("background-color", "grey");
// $("section").css("background-color", "green");
// $("header").css("color", "blue");
// $("a").css("text-decoration","none");
// $("a").css("color","yellow");

// Uppgift 3
// console.log($("body").css("background-color"));
// console.log($("h1").css("font-size"));
// console.log($("p").css("font-size"));
// console.log($("#primary").css("height"));

// Uppgift 4
// $("p").on("click", function () {
//     $(this).css("color", "red");
// });

// $("h1,h2").hover(function(){
//     $(this).css("text-decoration", "underline");
//     }, function(){
//     $(this).css("text-decoration", "none");
// });

// var size = 16;

// $("p").dblclick(function() {
// size = size +5;
//     $(this).css("font-size", size + "px");
// })

/*
    el  Representerar en selektor (t.ex. "p", ".min-klass", "#mitt-id")
*/

// Visar ett eller flera element
// $("h1").show();
// Med animation (i milisekunder)
// $("h1").hide(500);
// $("h1").show(500);
// // Visar ett element so det är dolt/döljer ett element om det visas
// $("#primary").toggle();

// // Döljer ett eller flera element
// $(el).hide();


// // Tonar in/ut ett element (tid i milisekunder)
// for(var i = 0; i<10;i++) {
// $("nav").fadeOut(200);
// $("nav").fadeIn(200);
// }

// // Fäller ut/in ett element (tid i milisekunder)
$("#wrapper").slideUp(200);
$("#wrapper").slideDown(200);

// // Tar bort ett eller flera element
// $(el).remove();

// // Lägger till som första barn till ett element
// $(el).prepend("T.ex. lite text...");

// // Lägger till som sista barn till ett element
// $(el).append("T.ex. lite text...");

// // Hämtar texten för ett element
// $(el).text();
// // Ersätter texten för ett element
// $(el).text("Ny text");

// // Hämtar HTML för ett element
// $(el).html();
// // Ersätter HTML för ett element
// $(el).html("<b>Ny HTML</b>");

// // Hämtar värdet från ett element (t.ex. <input>, <select>, etc)
// $(el).val();
// // Ersätter värdet för ett element
// $(el).val("Nytt värde");

// // Hämtar ett attributs värde från ett element
// $(el).attr("attribut");
// // Ersätter/lägger till ett värde för ett attribut för ett element
// $(el).attr("attribut", "värde");

// // Lägger till en klass för ett element
// $(el).addClass("new-class");
// // Tar bort en klass för ett element
// $(el).removeClass("new-class");

// // Och många fler väldigt smidiga funktioner