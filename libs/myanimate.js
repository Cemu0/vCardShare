// Description: This is a simple animation that creates a wave effect using d3.js
var svg = 
  d3.select("svg")
  // .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 500 500")
  // Class to make it responsive.
  .classed("svg-content-responsive", true),
    width = 500,
    height = 500,
    angles = d3.range(0, 2 * Math.PI, Math.PI / 200);
const lineW = 32;
const sizeWH = 200; 
var waveFunction = function(a, t, i) {
    // s from 0 to 2 in 1 second math
    s = 5 - (t/3.0) * 5 + 2;
    if(t<3)
        return Math.cos(a * 8 - i * 2 * Math.PI / 3 + t) * Math.pow((1 + Math.cos(a - t)) / s, 3)
    else
        return Math.cos(a * 8 - i * 2 * Math.PI / 3 + t) * Math.pow((1 + Math.cos(a - t)) / 2, 3)
}
var phaseShift = function(t, i) {
    // if (t>3000)
    return (t / 3000) * (i+1);
    // return t / 1000;
}
//source https://gist.github.com/tarekrached/5f8c50c370c67d63abd76aa69e19f162  @tarekrached

var path = svg.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .attr("fill", "none")
    .attr("stroke-width", 4)
    .attr("stroke-linejoin", "round")
  .selectAll("path")
  .data(["cyan", "magenta", "yellow", "red", "green", "blue"])
  .enter().append("path")
    .attr("stroke", function(d) { return d; })
    .style("mix-blend-mode", "darken")
    .datum(function(d, i) {
      return d3.radialLine()
          .curve(d3.curveLinearClosed)
          .angle(function(a) { return a; })
          .radius(function(a) {
            random = Math.random();
            // var t = d3.now() / 1000;
            var t = phaseShift(d3.now(), i);
            return sizeWH + waveFunction(a, t, i) * lineW;
          });
    });

d3.timer(function() {
  path.attr("d", function(d) {
    return d(angles);
  });
});
    