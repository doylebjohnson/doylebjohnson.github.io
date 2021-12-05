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

    let showFirmsButton = document.getElementById("showFirms");
    showFirmsButton.addEventListener("click", function() {
        showFirms("json/firms.json"); }, false);
    
    let hideFirmsButton = document.getElementById("hideFirms");
    hideFirmsButton.addEventListener("click", hideFirms, false);
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

// fetch data from url 
async function showFirms(url) {
    await fetch(url)
    .then((response) => {
        if (response.status===200) {
            return response.json();
    } else {
        document.write("System error. Please reload and try again.");
        return;
    }
    })
    .then((data) => makeTable(data));
}    

// process returned JSON data into a table for display
function makeTable(data) {
    // get the number of degrees from JSON file
    var count = Object.keys(data.my_firms).length;

    // build html table; loop through each degree and extract data
    let tableData = '<table><thead><tr><th scope="col">Firm</th><th scope="col">Position</th><th scope="col">Location</th><th scope="col">Years</th></tr></thead><tbody>';

    for(let i=0; i < count; i++) {
        // use es6 destructuring to read object variables
        let {name, position, location, years}  = data.my_firms[i].firm;
 
        tableData += '<tr><td>' + name + '</td><td>' + position + '</td><td>' + location + '</td><td>' + years + '</td></tr>';
    }

    tableData +='</tbody></table>';

    // update html page with new table 
    document.getElementById("showFirms").style.display = "none";
    document.getElementById("hideFirms").style.display = "block";
    document.getElementById("firmTitle").innerHTML = "Law Firm Experience";
    document.getElementById("firmTable").innerHTML = tableData;
}

function hideFirms() {
    document.getElementById("showFirms").style.display = "block";
    document.getElementById("hideFirms").style.display = "none";
    document.getElementById("firmTitle").innerHTML = "";
    document.getElementById("firmTable").innerHTML = "";
}
