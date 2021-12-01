window.onload = function() {
    let showWildlifeButton = document.getElementById("showWildlife");
    showWildlifeButton.addEventListener("click", function() {
        showImages("wildlifeImages", "showWildlife", "hideWildlife");
    }, false);

    let showOfficeButton = document.getElementById("showOffice");
    showOfficeButton.addEventListener("click", function() {
        showImages("officeImage", "showOffice", "hideOffice");
    }, false);

    let hideWildlifeButton = document.getElementById("hideWildlife");
    hideWildlifeButton.addEventListener("click", function() {
        hideImages("wildlifeImages", "showWildlife", "hideWildlife");
    }, false);

    let hideOfficeButton = document.getElementById("hideOffice");
    hideOfficeButton.addEventListener("click", function() {
        hideImages("officeImage", "showOffice", "hideOffice");
    }, false);

}

function showImages(targetImage, showButton, hideButton) {
    document.getElementById(targetImage).style.display="block";
    document.getElementById(showButton).style.display="none";
    document.getElementById(hideButton).style.display="block";
}

function hideImages(targetImage, showButton, hideButton) {
    document.getElementById(targetImage).style.display="none";
    document.getElementById(showButton).style.display="block";
    document.getElementById(hideButton).style.display="none";
}