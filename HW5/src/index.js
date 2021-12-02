document.getElementById("button").onclick = function () {
    getDegrees("src/degrees.json");
}

async function getDegrees(url) {
    await fetch(url)
      //get your data here, and check for the response status. If it's not 200, throw an error
      .then((response) => response.json())
      .then((data) =>
         makeTable(data)
      );
  }

function makeTable(data) {
    var count = Object.keys(data.my_degrees).length;
    console.log(count);

    let tableData = '<table><thead><tr><th scope="col">University</th><th scope="col">Degree</th><th scope="col">Major</th><th scope="col">Year</th></tr></thead><tbody>';

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

    document.getElementById("button").remove();
    document.getElementById("clickTitle").innerHTML = "University Degrees";
    document.getElementById("degreeTable").innerHTML = tableData;
    //document.write(tableData);

}
