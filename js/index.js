var data = [4, 8, 15, 16, 23, 42];

 // creates a scaling variable that is also a function to pass the data into
var scale = d3.scaleLinear()
    .domain([0, d3.max(data)]) // range of the data to be scaled
    .range([0, 500]); // max number of pixels to show on screen

d3.select(".chart") // creating a vis inside of this chart
  .selectAll("div") // selects the divs inside the chart. if no divs: command will create empty selection of divs
  .data(data) // passes in data into data method. everything in method will be executed 6 times (data count)
    .enter() //
    .append("div") // inserts div into placeholder
    .style("width", function(d) {return scale(d) + "px"; }) // just adds styling. d represents the data element and adds px to end. scale is the scaling function
    .text(function(d) {return d; }); // adds text to chart
