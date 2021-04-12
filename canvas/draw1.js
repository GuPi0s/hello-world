var d = document.getElementById("draw1");
var lienzo = d.getContext("2d");
var blue = "#012F443";
var line = 300;
var l = 0;
var blue = "#174181";
var xi, yi, xf, yf;

while(l < line) {
  xi = 10 * l;
  nxi = line - 10 * l;
  drawLine(blue, 0, xi, xi, 300);
  drawLine(blue, xi, 0, 300, xi);
  drawLine(blue, nxi, 300, 300, xi);
  drawLine(blue, xi, 0, 0, nxi);
  console.log("linea " + l);
  l = l + 1;
}

// Use the function drawLine to make your own drawings appear when you charge document.html

function drawLine(color, x_start, y_start, x_final, y_final) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_start, y_start);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

console.log(lienzo);
