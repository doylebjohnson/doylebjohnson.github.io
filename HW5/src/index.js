
document.getElementById("button").onclick = async function getDegrees(url) {
    await fetch(url)
    .then((response) => response.json())
    .then((data) =>
        makeTable(data)
    );
}

getDegrees("src/degrees.json");

function makeTable(data) {
    document.write(data.my_degrees[0].major);
}