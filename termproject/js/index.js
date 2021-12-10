function enlargeImg(target) {
    target.style.height = "418px";
    target.style.width = "372px"
}

function standardImg(target) {
    target.style.height = "209px";
    target.style.width = "186px";
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