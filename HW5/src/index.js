document.getElementById("button").onclick = getDegrees("src/degrees.json");

async function getDegrees(url) {
    // fetch the url
    await fetch(url)
      //get your data here, and check for the response status. If it's not 200, throw an error
      .then((response) => response.json())
      .then((data) =>
        document.write(
          `My first degree was a ${data.my_degrees[0].degree.type}`
        )
      );
  }
