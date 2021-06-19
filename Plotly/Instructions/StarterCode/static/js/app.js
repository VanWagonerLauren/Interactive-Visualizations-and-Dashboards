d3.json('samples.json').then(function(theData) {
    var values = theData['samples'][0]['sample_values'];
    var labels = theData['samples'][0]['otu_ids'];
    var hovertext = theData['samples'][0]['otu_labels'];
    console.log(theData);

    var data = [{
        type: "bar",
        x: labels,
        y: values
    }];

    var layout = {
        margin: { l: 0, r: 0, b: 0, t: 0 },
        width: 500,
        height: 500
    };

    Plotly.newPlot('something', data, layout);
})
