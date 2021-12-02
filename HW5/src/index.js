// on button click, launch fetch 
document.getElementById("button").onclick = function () {
    getDegrees("src/degrees.json");
}

// fetch data from url 
async function getDegrees(url) {
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
    var count = Object.keys(data.my_degrees).length;

    // build html table; loop through each degree and extract data
    let tableData = '<table><thead><tr><th scope="col">University</th><th scope="col">Major</th><th scope="col">Degree</th><th scope="col">Year</th></tr></thead><tbody>';

    for(let i=0; i < count; i++) {
        let school = data.my_degrees[i].degree.school;
        let major = data.my_degrees[i].degree.major;
        let type = data.my_degrees[i].degree.type;
        let year = data.my_degrees[i].degree.year;
        tableData += '\
                <tr>\
                    <td>' + school + '</td>\
                    <td>' + major + '</td>\
                    <td>' + type + '</td>\
                    <td>' + year + '</td>\
                </tr>'
    }

    tableData +='</tbody></table>';

    // update html page with new table 
    document.getElementById("button").remove();
    document.getElementById("clickTitle").innerHTML = "University Degrees";
    document.getElementById("degreeTable").innerHTML = tableData;
}
