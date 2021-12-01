let initSound = false;
window.onload = function () {
    muteAll();
}   

function playAudio(target) {
    let audio = document.getElementById(target);
    audio.play();
}
      
function pauseAudio(target) {
    let audio = document.getElementById(target);
    audio.pause();
}

function muteAll() {
    document.getElementById("campanileAudio").muted = true;
    document.getElementById("calAudio").muted = true;
    document.getElementById("pepperdineAudio").muted = true;
    document.getElementById("indianaAudio").muted = true;
    document.getElementById("cincinnatiAudio").muted = true;
    document.getElementById("buAudio").muted = true;
}

function playAll() {
    document.getElementById("campanileAudio").muted = false;
    document.getElementById("calAudio").muted = false;
    document.getElementById("pepperdineAudio").muted = false;
    document.getElementById("indianaAudio").muted = false;
    document.getElementById("cincinnatiAudio").muted = false;
    document.getElementById("buAudio").muted = false;

    if(!initSound) {

        let campanile = document.getElementById("campanile");
        campanile.addEventListener("mouseover", function() {
            playAudio("campanileAudio");
        }, false);
        campanile.addEventListener("mouseout", function() {
            pauseAudio("campanileAudio");
        }, false);

        let cal = document.getElementById("cal");
        cal.addEventListener("mouseover", function() {
            playAudio("calAudio");
        }, false);
        cal.addEventListener("mouseout", function() {
            pauseAudio("calAudio");
        }, false);

        let pepperdine = document.getElementById("pepperdine");
        pepperdine.addEventListener("mouseover", function() {
            playAudio("pepperdineAudio");
        }, false);
        pepperdine.addEventListener("mouseout", function() {
            pauseAudio("pepperdineAudio");
        }, false);

        let indiana = document.getElementById("indiana");
        indiana.addEventListener("mouseover", function() {
            playAudio("indianaAudio");
        }, false);
        indiana.addEventListener("mouseout", function() {
            pauseAudio("indianaAudio");
        }, false);

        let cincinnati = document.getElementById("cincinnati");
        cincinnati.addEventListener("mouseover", function() {
            playAudio("cincinnatiAudio");
        }, false);
        cincinnati.addEventListener("mouseout", function() {
            pauseAudio("cincinnatiAudio");
        }, false);

        let bu = document.getElementById("bu");
        bu.addEventListener("mouseover", function() {
            playAudio("buAudio");
        }, false);
        bu.addEventListener("mouseout", function() {
            pauseAudio("buAudio");
        }, false);

        initSound = true;

    }

}