$(document).ready(function() {

$("#wrapper").append("<div id='box01' class='box'></div>");
//$("body").append("<div id='box02' class='box'></div>");

var sheetKey = '18AvCFeugCVyMr6ZovIOn9McFEmbVBapB1jBuUYwDbcM'

// PIE AUTHORS

var $container01 = $("#box01"),
    width01 = $container01.width(),
    height01 = $container01.width(),
    radius01 = Math.min(width01, height01) / 2;

var color01 = d3.scale.ordinal()
    .range(["#f9d53d", "#29abe2", "#ed1c24"]);

var arc01 = d3.svg.arc()
    .outerRadius(radius01 - 10)
    .innerRadius(0);

var labelArc01 = d3.svg.arc()
    .outerRadius(radius01 - 90)
    .innerRadius(radius01 - 90);

var pie01 = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.value; });

var svg01 = d3.select("#box01").append("svg")
    .attr("width", '90%')
    .attr("height", '90%')
    .attr('viewBox','0 0 '+Math.min(width01,height01)+' '+Math.min(width01,height01))
    .attr('preserveAspectRatio','xMinYMin')
    .append("g")
    .attr("transform", "translate(" + width01 / 2 + "," + height01 / 2 + ")");

// var sheetURL01 = 'https://docs.google.com/spreadsheets/d/18AvCFeugCVyMr6ZovIOn9McFEmbVBapB1jBuUYwDbcM/pubhtml?gid=853167241&single=true'


function renderSpreadsheetData(sheet) {
    var tabletop = Tabletop.init( { key: sheetKey,
                     callback: sheet,
                     simpleSheet: false,
                     parseNumbers: true } )

}


function drawAuthorPie(data, tabletop) {

var authorStats = tabletop.sheets("authors").all()

console.log(authorStats);

  var g = svg01.selectAll(".arc01")
      .data(pie01(authorStats))
    .enter().append("g")
      .attr("class", "arc01");

  g.append("path")
      .attr("d", arc01)
      .style("fill", function(d) { return color01(d.data.color); });

  g.append("text")
      .attr("transform", function(d) { return "translate(" + labelArc01.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .text(function(d) { return d.value; });

} 

renderSpreadsheetData(drawAuthorPie);


// LINE AUTHORS

var margin = {top: 20, right: 80, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.category10();

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .interpolate("basis")
    .x(function(d) { return x(d.id); })
    .y(function(d) { return y(d.temperature); });

var svg = d3.select("#box02").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

function drawAuthorLine(data02, tabletop) {

console.log(data02);


  color.domain(d3.keys(data02[0]).filter(function(key) { return key !== "date"; }));

  var authors = color.domain().map(function(name) {
    return {
      name: name,
      values: data02.map(function(d) {
        return {id: d.id, temperature: +d[name]};
      })
    };
  });

  x.domain(d3.extent(data02, function(d) { return d.id; }));

  y.domain([
    d3.min(authors, function(c) { return d3.min(c.values, function(v) { return v.temperature; }); }),
    d3.max(authors, function(c) { return d3.max(c.values, function(v) { return v.temperature; }); })
  ]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Temperature (ºF)");

  var author = svg.selectAll(".author")
      .data(authors)
    .enter().append("g")
      .attr("class", "author");

  author.append("path")
      .attr("class", "line")
      .attr("d", function(d) { return line(d.values); })
      .style("stroke", function(d) { return color(d.name); });

  author.append("text")
      .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
      .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.temperature) + ")"; })
      .attr("x", 3)
      .attr("dy", ".35em")
      .text(function(d) { return d.name; });
}

renderSpreadsheetData(drawAuthorLine); 

});

