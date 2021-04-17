var numLine = document.getElementById("numIn");
var start = document.getElementById("buttom_start");
var color = document.getElementById("color");
start.addEventListener("click", drawByClick );

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
  var lineColor = color.value;

  for(l = 0; l < linea; l++) {
    xi = espacio * l;
    nxi = linea - espacio * l;
    drawLine(lineColor, 0, xi, xi, 300);
    drawLine(lineColor, xi, 0, 300, xi);
    console.log("linea " + l);
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
