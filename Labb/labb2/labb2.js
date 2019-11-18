document.querySelector("#success").addEventListener("click", addClass, false);
document.querySelector("#error").addEventListener("click", addClass, false);
document.querySelector("#info").addEventListener("click", addClass, false);

function addClass() {
    var messageBox = document.querySelector("#message-box");
    messageBox.className = this.id;
}

document.querySelector("#add-item").addEventListener("click", addText, false);

function addText() {
    var li = document.createElement("li");
    var input = window.prompt("Write some text");
    if (input != null || input.length != 0) {
        var textNode = document.createTextNode(input);
        li.appendChild(textNode)
        document.querySelector("#items").appendChild(li);
    }
}

document.querySelector("#remove-item").addEventListener("click", removeText, false);

function removeText() {
    var items = document.querySelector("#items");
    if (items.childElementCount > 0) {
        items.removeChild(items.lastElementChild);
    }
}

var buttonList = document.querySelectorAll("#buttonList");

for (i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", removeListItem, false);
}

function removeListItem() {
    node = document.getElementById(this.id);
    var response = window.confirm("Remove item?");
    if (response == true) {
        node.parentNode.removeChild(node);
    }
}

// uppgift 5

var times = 0; // representerar hur länge vår timer har pågått 
var interval; // representera det intervall vi använder oss av för att öka vår timer.
var timeLabel = document.querySelector("#timer");

document.querySelector("#start-timer").addEventListener("click", startTimer, false);

function startTimer() {
    // Tiden mellan upprepningar skrivs i millisekunder
    // vilket innebär att 1000 = 1 sekund
    var delay = 1000;

    function print() {
        times += 1;

        if (times > 10) {
            clearInterval(interval);
        }
        timeLabel.innerHTML = times + "s";
    }
    interval = setInterval(print, delay);
}

document.querySelector("#stop-timer").addEventListener("click", stop, false);

function stop() {
    clearInterval(interval);
}

document.querySelector("#reset-timer").addEventListener("click", reset, false);

function reset() {
    stop();
    times = 0;
    timeLabel.innerHTML = times + "s";
}

// uppgift 6

/*
  Funktionen toggleNextElement har som uppgift att visa/dölja ett elements
  kommande syskon. I vårt fall när vi klickar på en rubrik så vill vi visa/dölja
  den kommande syskonet, som är <section>-elementet.
*/
function toggleNextElement() {
    // 1. Leta upp det nästkommande syskonet
    var section = this.nextElementSibling;
    // 2. Kontrollera om det just nu visas eller döljs
    // 3.a. Om det visas, dölj det
    if(section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

/*
  Funktionen döljer allt innehåll för alla våra artiklar, ser till att
  funktionen "toggleNextElement" körs när man klicka på en <h2>-rubrik
*/
function start() {
    // 1. Hämta alla <h2>-element och spara dem i en variabel
    var headers = document.querySelectorAll("h2");
    var section;
    // 2. Loopa igenom alla <h2>-elementen och:
    for (i = 0; i < headers.length; i++) {
        // 3.a. Dölja alla <section>-element som ligger som kommande syskon till varje rubrik
        section = headers[i].nextElementSibling;
        section.style.display = "none";
        // 3.b. Använd en event-lyssnare för att ange att funktionen "toggleNextElement" ska köras när man klickar på en av rubrikerna
        headers[i].addEventListener("click", toggleNextElement, false);
    }
}

/*
  Kör funktionen "start"
*/
start();