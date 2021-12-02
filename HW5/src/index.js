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
    document.write(`My first degree was a ${data.my_degrees[0].degree.type}`)
    var count = Object.keys(data.my_degrees).length;
    console.log(count);

    let tableData = '<table><thead><tr><th scope="col">University</th><th scope="col">Degree</th><th scope="col">Major</th><th scope="col">Year</th></tr></thead><tbody>';

    for(let i=0; i < count-1; i++) {
        let school = data.mydegrees[i].degree.school;
        let major = data.mydegrees[i].degree.major;
        let type = data.mydegrees[i]].degree.type;
        let year = data.mydegrees[i].degree.year;
        tableData += '\
                <tr>\
                    <td>' + school + '</td>\
                    <td>' + major + '</td>\
                    <td>' + type + '</td>\
                    <td>' + year + '</td>\
                </tr>'
    }

    tableData +='</tbody></table>';

    //document.getElementById("button").remove();
    //document.getElementById("clickTitle").remove();
    //document.getElementById("degreeTable").innerHTML(tableData);
    document.write(tableData);

}
