let counter = 0;
let photoArray = ["photo0.jpg", "photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg", "photo6.jpg", "photo7.jpg", "photo8.jpg", "photo9.jpg", "photo10.jpg","photo11.jpg","photo12.jpg","photo13.jpg"];
let captionArray = [
    "In the Alaska Wilderness",
    "Standing by one the last free-standing sections of the Berlin Wall (circa 2001)",
    "In front of the old Munich City Hall",
    "On top of the Empire State Building",
    "Cherry Blossoms in a Tokyo park",
    "Home Sweet Home",
    "Miami Beach, Florida",
    "Yosemite National Park",
    "Viking Ship at the Viking Museum in Oslo, Norway",
    "On the water in Stockholm, Sweden",
    "Pacific Ocean at Santa Barbara, CA",
    "Christmas at the City Hall in Vienna, Austria",
    "Evening in Amersterdam, The Netherlands",
    "Cinque Terra, Italy"
]

window.onload = function() {
    let next = document.getElementById("next");
    next.addEventListener("click", function() {
        nextImage();
    }, false);

    let previous = document.getElementById("previous");
    previous.addEventListener("click", function() {
        previousImage();
    }, false);
}

function nextImage() {
    if (counter < (photoArray.length-1)) {
        counter++;
        loadContent();
    } else {
        counter = 0;
        loadContent();
    }
}

function previousImage() {
    if (counter > 0) {
        counter--;
        loadContent();
    } else {
        counter = (photoArray.length-1);
        loadContent();
    }
}

function loadContent() {
    document.getElementById("photo").src = "images/photoArray/"+photoArray[counter];
    document.getElementById("caption").textContent = captionArray[counter];
    document.getElementById("photo").alt = captionArray[counter];
}
