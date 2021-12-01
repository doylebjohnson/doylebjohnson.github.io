window.onload = function() {
    let juryButton = document.getElementById("juryButton");
    juryButton.addEventListener("click", highlightJury, false);

    let plaintiffButton = document.getElementById("plaintiffButton");
    plaintiffButton.addEventListener("click", highlightPlaintiff, false);

    let softwareButton = document.getElementById("softwareButton");
    softwareButton.addEventListener("click", highlightSoftware, false);

    let clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", clearSelections, false);
}

function highlightJury() {
    clearSelections();
    let entries = document.getElementsByClassName("jury");
    for (var i=0; i < entries.length; i++) {
        entries[i].style.color = "red";
        entries[i].style.listStyleType = "circle";
        entries[i].style.textDecoration = "underline";
    }
}

function highlightPlaintiff() {
    clearSelections();
    let entries = document.getElementsByClassName("plaintiff");
    for (var i=0; i < entries.length; i++) {
        entries[i].style.color = "blue";
        entries[i].style.listStyleType = "circle";
        entries[i].style.textDecoration = "underline";
    }
}

function highlightSoftware() {
    clearSelections();
    let entries = document.getElementsByClassName("software");
    for (var i=0; i < entries.length; i++) {
        entries[i].style.color = "green";
        entries[i].style.listStyleType = "circle";
        entries[i].style.textDecoration = "underline";
    }
}

function clearSelections() {
    let listElements = document.getElementsByTagName("li");
    for (var i=0; i < listElements.length; i++) {
        listElements[i].style.color = "";
        listElements[i].style.listStyleType = "";
        listElements[i].style.textDecoration = "";
    }
}