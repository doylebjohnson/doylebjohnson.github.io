document.getElementById("button").onclick = getDegrees("src/degrees.json");

async function getDegrees(url) {
    await fetch(url)
    .then((response) => response.json())
    .then((data) =>
        makeTable(data)
    );
}

function makeTable(data) {
    document.write(data.my_degrees[0].major);
}