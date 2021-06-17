d3.json("data/data.json").then((importedData) => {
    var data = importedData;

    data.sort(function(a, b) {
        return parseFloat(b.otu_ids) - parseFloat(a.sample_values);
      });
data = data.slice(0, 10);

data = data.reverse();

var trace1 = {
    x: data.map(row => row.otu_ids),
    y: data.map(row => row.sample_values),
    text: data.map(row => row.otu_labels),
    name: "OTU",
    type: "bar",
    orientation: "h"
  };

  // data
  var chartData = [trace1];

  // Apply the group bar mode to the layout
  var layout = {
    title: "OTU",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };

  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", chartData, layout);
});

