
// hämta id style till variabel
var style = document.querySelector("#style");

// hämta drop down meny till variabel
var dropDownMenu = document.querySelector("#drop-down-menu");

// kör funktionen när sidan laddas så att sidan får rätt layout
setStyle();

// sätt attributet href i style till det som finns sparat i local storage
// så att det inte försvinner när man byter sida och sätt rätt
// resultat i drop-down listan. Om inget finns sparat så blir standard valt.
function setStyle() {

   var savedStyle = localStorage.getItem("style");

   // om det finns någon "style" sparad i localStorage ska det hämtas 
   // och sättas i attributet "href" i variabeln style
    if (localStorage.getItem("style") != null) {
        style.setAttribute("href", "style-" + savedStyle + ".css");

        // den sparade "style" ska vara vald i drop-down-listan
        dropDownMenu.value = savedStyle;

    // om ingen "style" är sparad ska standard layouten sättas 
    } else {
       style.setAttribute("href", "style-standard.css");
       dropDownMenu.value = "standard";
    }
}

// lägg till eventlyssnare till menyn
dropDownMenu.addEventListener("change", changeTheme, false);

// funktion för byte av tema
function changeTheme() {

    // hämtar värdet på det användaren valt i listan till en variabel
    var selectedItem = dropDownMenu.value;

    // sätter attributet href i variabeln style till det användaren valt i listan
    style.setAttribute("href", "style-" + selectedItem + ".css");

    // sparar det valda temat i local storage 
    localStorage.setItem("style", selectedItem);

    window.alert("Tema: '" + selectedItem + "' har sparats.");
}

// hämtar "meny-knapp" till variabel
var menuButton = document.querySelector("#menu-button");

// lägger till event listener till meny-knapp
menuButton.addEventListener("click", menuShowHide, false);

// hämtar alla element i menyn till variabel
var menuItems = document.querySelectorAll(".menu-items");

// funktion för att visa eller gömma meny i telefon-vy
// körs vid klick på meny-knapp
function menuShowHide() {
    var screenWidth = document.documentElement.clientWidth;

    // functionen körs bara om skärmbredden är mindre än 480
    if (screenWidth < 480) {

        // loopar igenom alla meny-element
        for (var i = 0; i < menuItems.length; i++) {

            // om de syns ska de göras tas bort
            if (menuItems[i].style.display == "block") {
                menuItems[i].style.display = "none";

            // annars ska de göras synliga
            } else {
                menuItems[i].style.display = "block";
            }
        }
    }
}

// denna funktion lyssnar på ändringar i storleken på skärmen
// och fixar en bugg som gjorde att meny-elementen inte var synliga
// om man klickade ner menyn i telefon-läge och sedan gjorde skärmen större
window.onresize = function (event) {
    var screenWidth = document.documentElement.clientWidth;

    // om skärmen är större än 480
    if (screenWidth > 480) {

        // loopar igenom alla meny-element och gör dem synliga
        for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].style.display = "block";
        }
    
    // om skärmen är mindre än 480 tas meny-elementen bort
    } else {
        for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].style.display = "none";
        }
    }
};
