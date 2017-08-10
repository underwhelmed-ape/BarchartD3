var data = [30, 86, 168, 281, 303, 365];

d3.select(".chart") // creating a vis inside of this chart
  .selectAll("div") // selects the divs inside the chart. if no divs: command will create empty selection of divs
  .data(data) // passes in data into data method. everything in method will be executed 6 times (data count)
    .enter() //
    .append("div") // inserts div into placeholder
    .style("width", function(d) {return d + "px"; }) // just adds styling. d represents the data element and adds px to end
    .text(function(d) {return d; }); // adds text to chart
