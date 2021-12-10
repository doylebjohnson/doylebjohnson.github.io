window.onload = function() {

    let headshot = document.getElementById("headshot");
    headshot.addEventListener("mouseover", enlargeImg, false);
    headshot.addEventListener("mouseout", standardImg, false);

    let alcatraz = document.getElementById("alcatraz");
    alcatraz.addEventListener("mouseover", newImg, false);
    alcatraz.addEventListener("mouseout", originalImg, false);
}

function enlargeImg() {
    let large = document.getElementById("headshot");
    large.src = "images/DoyleBJohnson.jpg";
}

function standardImg() {
    let standard = document.getElementById("headshot");
    standard.src = "images/DoyleBJohnson0.jpg";
}

function newImg() {
    let change = document.getElementById("alcatraz");
    change.src="images/BlueAngels.jpg";
    let caption = document.getElementById("alcatrazCaption");
    caption.innerHTML = "Blue Angels flying over Alcatraz Island";
}

function originalImg() {
    let change = document.getElementById("alcatraz");
    change.src="images/Alcatraz.jpg";
    let caption = document.getElementById("alcatrazCaption");
    caption.innerHTML = "A view of fog-shrouded Alcatraz Island from my office window in San Francisco, CA";
}