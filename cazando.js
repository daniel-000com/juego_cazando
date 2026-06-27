let canvas;
let ctx;
canvas=document.getElementById("areaJuego");
ctx=canvas.getContext("2d");
const ALTURA_GATO =40;
const ANCHO_GATO =40;
let gatoX =canvas.width/2-20
let gatoY =canvas.height/2-20

function graficarGato(){
    ctx.fillStyle="#F5A327";
    ctx.fillRect(gatoX, gatoY, ALTURA_GATO, ANCHO_GATO)

}