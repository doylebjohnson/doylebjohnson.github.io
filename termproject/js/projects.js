window.onload = function() {
    let showcs521Button = document.getElementById("Show521");
    showcs521Button.addEventListener("click", function() {
        showIframe("cs521", "Show521", "Hide521");
    }, false);

    let showcs665Button = document.getElementById("Show665");
    showcs665Button.addEventListener("click", function() {
        showIframe("cs665", "Show665", "Hide665");
    }, false);

    let showee6014CButton = document.getElementById("Show6014C");
    showee6014CButton.addEventListener("click", function() {
        showIframe("ee6014C", "Show6014C", "Hide6014C");
    }, false);

    let showee6040CButton = document.getElementById("Show6040C");
    showee6040CButton.addEventListener("click", function() {
        showIframe("ee6040C", "Show6040C", "Hide6040C");
    }, false);

    let hidecs521Button = document.getElementById("Hide521");
    hidecs521Button.addEventListener("click", function() {
        hideIframe("cs521", "Show521", "Hide521");
    }, false);

    let hidecs665Button = document.getElementById("Hide665");
    hidecs665Button.addEventListener("click", function() {
        hideIframe("cs665", "Show665", "Hide665");
    }, false);

    let hideee6014CButton = document.getElementById("Hide6014C");
    hideee6014CButton.addEventListener("click", function() {
        hideIframe("ee6014C", "Show6014C", "Hide6014C");
    }, false);

    let hideee6040CButton = document.getElementById("Hide6040C");
    hideee6040CButton.addEventListener("click", function() {
        hideIframe("ee6040C", "Show6040C", "Hide6040C");
    }, false);
}

function showIframe(targetIframe, showButton, hideButton) {
    document.getElementById(targetIframe).style.display="block";
    document.getElementById(showButton).style.display="none";
    document.getElementById(hideButton).style.display="block";
}

function hideIframe(targetIframe, showButton, hideButton) {
    document.getElementById(targetIframe).style.display="none";
    document.getElementById(showButton).style.display="block";
    document.getElementById(hideButton).style.display="none";
}