window.onload = function() {
    let wildlifeButton = document.getElementById("wildlife");
    wildlifeButton.onclick = showWildlife;

    let officeButton = document.getElementById("office");
    officeButton.onclick = showOffice;
}

function showWildlife() {
    document.getElementById("wildlifeImages").innerHTML += "<figure><img src=\"images/coyote.jpg\" alt=\"Photo of a coyote on my street.\" \
        width=\"532\" height=\"299\"><figcaption>A coyote walking right down the middle of my street</figcaption></figure> \
        <figure><img src=\"images/fox.jpg\" alt=\"Photo of a fox in my backyard.\" width=\"532\" height=\"299\"> \
        <figcaption>A fox in my backyard</figcaption></figure> \
        <figure><img src=\"images/deer.jpg\" alt=\"Photo of a doe and fawn im my backyard eating bushes.\" width=\"532\" height=\"299\"> \
        <figcaption>A doe and fawn broke through my fence and ate my bushes</figcaption></figure>"

    let wildButton = document.getElementById("wildlife");
    wildButton.remove();

    document.getElementById("p1").innerHTML += "<input class='buttonStyle' type='submit' id='removeWildPhotos' value='Remove Wildlife Photos'>";
    let removeWildButton = document.getElementById("removeWildPhotos");
    removeWildButton.onclick = removeWildlife;
}

function showOffice() {
    document.getElementById("officeImage").innerHTML += "<figure><img src=\"images/Office.jpg\" alt=\"Photo of my office.\" width=\"523\" height=\"295\"> \
            <figcaption>My office</figcaption></figure>"

    let officeRemoval = document.getElementById("office");
    officeRemoval.remove();
    
    document.getElementById("p3").innerHTML += "<input class='buttonStyle' type='submit' id='removeOfficePhoto' value='Remove Office Photo'>";
    let removeOfficeButton = document.getElementById("removeOfficePhoto");
    removeOfficeButton.onclick = removeOffice;
}

function removeWildlife() {
    document.getElementById("wildlifeImages").innerHTML = "";
    document.getElementById("p1").innerHTML += "<input class='buttonStyle' type='submit' id='wildlife' value='Wildlife in Moraga'>";
    let wildlifeButton = document.getElementById("wildlife");
    wildlifeButton.onclick = showWildlife;
    let removalButton = document.getElementById("removeWildPhotos");
    removalButton.remove();
}

function removeOffice() {
    document.getElementById("officeImage").innerHTML = "";
    document.getElementById("p3").innerHTML += "<input class='buttonStyle' type='submit' id='office' value='Show My San Francisco Office'>"
    let officeButton = document.getElementById("office");
    officeButton.onclick = showOffice;
    let removalButton = document.getElementById("removeOfficePhoto");
    removalButton.remove();
}