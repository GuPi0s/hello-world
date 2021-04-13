var d = document.getElementById("draw1");
var lienzo = d.getContext("2d");
var blue = "#012F443";
var line = 300;
var l = 0;
var blue = "#174181";
var xi, yi, xf, yf;

do {
  xi = 10 * l;
  nxi = line - 10 * l;
  drawLine(blue, 0, xi, xi, 300);
  drawLine(blue, xi, 0, 300, xi);
  drawLine(blue, nxi, 300, 300, xi);
  drawLine(blue, xi, 0, 0, nxi);
  drawLine(blue, xi, xi, 0, nxi);
  drawLine(blue, xi, xi, nxi, 0);
  drawLine(blue, nxi, nxi, 300, xi);
  drawLine(blue, nxi, nxi, xi, 300);
  drawLine(blue, xi, nxi, 0, xi);
  drawLine(blue, xi, nxi, nxi, 300);
  drawLine(blue, xi, nxi, 300, xi);
  drawLine(blue, xi, nxi, nxi, 0);
  console.log("linea " + l);
  l = l + 1;
} while(l < line);

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
