window.onload = function() {

    let patent222 = document.getElementById("patent222");
    patent222.addEventListener("mouseover", function() {
        showPatent("blank1", "patent222");
    }, false);
    patent222.addEventListener("mouseout", function() {
        hidePatent("blank1");
    }, false);

    let patent662 = document.getElementById("patent662");
    patent662.addEventListener("mouseover", function() {
        showPatent("blank2", "patent662");
    }, false);
    patent662.addEventListener("mouseout", function() {
        hidePatent("blank2");
    }, false);

    let patent625 = document.getElementById("patent625");
    patent625.addEventListener("mouseover", function() {
        showPatent("blank3", "patent625");
    }, false);
    patent625.addEventListener("mouseout", function() {
        hidePatent("blank3");
    }, false);

    let patent620 = document.getElementById("patent620");
    patent620.addEventListener("mouseover", function() {
        showPatent("blank4", "patent620");
    }, false);
    patent620.addEventListener("mouseout", function() {
        hidePatent("blank4");
    }, false);

    let patent405 = document.getElementById("patent405");
    patent405.addEventListener("mouseover", function() {
        showPatent("blank5", "patent405");
    }, false);
    patent405.addEventListener("mouseout", function() {
        hidePatent("blank5");
    }, false);

    let patent443 = document.getElementById("patent443");
    patent443.addEventListener("mouseover", function() {
        showPatent("blank6", "patent443");
    }, false);
    patent443.addEventListener("mouseout", function() {
        hidePatent("blank6");
    }, false);

    let patent266 = document.getElementById("patent266");
    patent266.addEventListener("mouseover", function() {
        showPatent("blank7", "patent266");
    }, false);
    patent266.addEventListener("mouseout", function() {
        hidePatent("blank7");
    }, false);

    let patent761 = document.getElementById("patent761");
    patent761.addEventListener("mouseover", function() {
        showPatent("blank8", "patent761");
    }, false);
    patent761.addEventListener("mouseout", function() {
        hidePatent("blank8");
    }, false);

    let patent697 = document.getElementById("patent697");
    patent697.addEventListener("mouseover", function() {
        showPatent("blank9", "patent697");
    }, false);
    patent697.addEventListener("mouseout", function() {
        hidePatent("blank9");
    }, false);

    let patent800 = document.getElementById("patent800");
    patent800.addEventListener("mouseover", function() {
        showPatent("blank10", "patent800");
    }, false);
    patent800.addEventListener("mouseout", function() {
        hidePatent("blank10");
    }, false);
}

    function showPatent(imgId, patentId) {
        document.getElementById(imgId).src="images/"+patentId+".jpg";
    }

    function hidePatent(imgId) {
        document.getElementById(imgId).src="images/oneByone.png";
    }
