var numIn = document.getElementById("txt_numInput");
var start = document.getElementById("buttom_start");
start.addEventListener("click", drawByClick );

var d = document.getElementById("draw1");
var lienzo = d.getContext("2d");
console.log(lienzo);

function drawByClick() {
  var linea = parseInt(numIn.value);
  var blue = "#012F43";
  var l = 0;
  var xi, nxi;
  console.log(linea);

  do {
    xi = 10 * l;
    nxi = linea - 10 * l;
    drawLine(blue, 0, xi, xi, 300);
    drawLine(blue, xi, 0, 300, xi);
    drawLine(blue, )
    console.log("linea " + l);
    l = l + 1;
  } while(l < linea);
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
