var numLine = document.getElementById("numIn");
var start = document.getElementById("buttom_start");
var color = document.getElementById("color");
var set_graph = document.getElementById("set_graph");
var graphForm = document.getElementById("form");
start.addEventListener("click", drawByClick );
set_graph.addEventListener("click", setGraph );

var d = document.getElementById("canvas");
var lienzo = d.getContext("2d");
var ancho = d.width;
var alto = d.height;

function drawByClick() {
  var linea = parseInt(numLine.value);
  var anc = ancho - 1;
  var alt = alto - 1;
  var espacio = ancho / linea;
  var l = 0;
  var xi, nxi;

  if (graph == "line") {
  for(l = 0; l < linea; l++) {
    xi = espacio * l;
    nxi = linea - espacio * l;
    drawLine(color, 0, xi, xi, 300);
    drawLine(color, xi, 0, 300, xi);
    console.log("linea " + l);
  }
  }
  else if(graph == "fullLine") {
    for(l = 0; l < linea; l++) {
      xi = espacio * l;
      nxi = linea - espacio * l;
      drawLine(color, 0, xi, xi, 300);
      drawLine(color, 0, nxi, xi, 0);
      drawLine(color, xi, 0, 300, xi);
      drawLine(color, xi, 300, 300, nxi);
      console.log("linea " + l);
    }
  }
  else {
    alert("Por favor elige un tipo de gráfico.");
  }

  drawLine(color, 1, 1, anc, 1);
  drawLine(color, 1, 1, 1, alt);
  drawLine(color, 1, alt, anc, alt);
  drawLine(color, anc, 1, anc, alt);
}

function drawLine(color, x_start, y_start, x_final, y_final) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_start, y_start);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function drawRect(color, g, b, x_start, y_start, x_size, y_size) {
  lienzo.fillStyle = color;
  lienzo.fillRect(x_start, y_start, x_size, y_size);
}

function setGraph() {
  var graph = graphForm;
}
