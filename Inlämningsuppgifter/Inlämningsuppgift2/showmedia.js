// Användaren kan välja mellan att visa endast bilder, video, ljud eller alla typer
$("#drop-down-showfiles").change(function () {

    // kallar på funktion som tar bort media-element
    emptyMedia();

    // om alla typer ska visas hämtas alla filer
    if ($(this).val() == "all") {
        getImages();
        getVideo();
        getAudio();

        // annars om enbart bilder ska visas hämtas bara bilder
    } else if ($(this).val() == "image") {
        getImages();

        // annars om enbart video ska visas hämtas bara video
    } else if ($(this).val() == "video") {
        getVideo();

        // annars om enbart ljudfiler ska visas hämtas bara ljudfiler
    } else if ($(this).val() == "audio") {
        getAudio();
    }
});

// Tar bort media-element
function emptyMedia() {
    $("#media-row").empty();
}

// Hämtar alla bilder som är sparade och lägger till dem så att de visas för användaren
function getImages() {
    var httpRequest = new XMLHttpRequest();

    httpRequest.open('GET', 'server.php?action=getMedia&type=image', true);
    httpRequest.send();

    httpRequest.onreadystatechange = function () {
        // Process the server response here.
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var json = JSON.parse(httpRequest.responseText);
                var images = json.files;

                for (var i in images) {
                    var filepath = images[i].path;
                    var title = images[i].title;
                    $("#media-row").append('<div class="col-lg-4 col-sm-6">\
                    <div class="container" id="card-container"><p>' + title + '</p><img src="'
                        + filepath + '" class="img-thumbnail" alt="Sparad bild' + title + '"></div></div>');
                }
            } else {
                $("#media-row").append(
                    '<div id="card-container"><p>Det finns inga bilder sparade</p></div>');
            }
        }
    };
}

// Hämtar alla videofiler som är sparade och lägger till dem så att de visas för användaren
function getVideo() {
    var httpRequest = new XMLHttpRequest();

    httpRequest.open('GET', 'server.php?action=getMedia&type=video', true);
    httpRequest.send();

    httpRequest.onreadystatechange = function () {
        // Process the server response here.
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var json = JSON.parse(httpRequest.responseText);
                var videos = json.files;

                for (var i in videos) {
                    var filepath = videos[i].path;
                    var title = videos[i].title;
                    $("#media-row").append('<div class="col-lg-4 col-sm-6">\
                        <div id="card-container"><p>' + title +
                        '</p><video width="500" height="280" controls><source src="'
                        + filepath + '" type="video/mp4">Your browser does not support the video tag.</video></div></div>');
                }
            } else {
                $("#media-row").append(
                    '<div id="card-container"><p>Det finns inga videofiler sparade</p></div>');
            }
        }
    };
}

// Hämtar alla ljudfiler som är sparade och lägger till dem så att de visas för användaren
function getAudio() {
    var httpRequest = new XMLHttpRequest();

    httpRequest.open('GET', 'server.php?action=getMedia&type=audio', true);
    httpRequest.send();

    httpRequest.onreadystatechange = function () {
        // Process the server response here.
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var json = JSON.parse(httpRequest.responseText);
                var sounds = json.files;

                for (var i in sounds) {
                    var filepath = sounds[i].path;
                    var title = sounds[i].title;
                    $("#media-row").append('<div class="col-lg-4 col-sm-6">\
                         <div id="card-container"><p>'  
                        + title + '</p><audio controls><source src="'
                        + filepath + '" type="audio/mp3">Your browser does not support the audio tag.</audio></div></div>');
                }
            } else {
                $("#media-row").append(
                    '<div id="card-container"><p>Det finns inga ljudfiler sparade</p></div>');
            }
        }
    };
}