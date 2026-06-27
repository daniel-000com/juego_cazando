let canvas;
let ctx;
canvas=document.getElementById("areaJuego");
ctx=canvas.getContext("2d");
const ALTURA_GATO =80;
const ANCHO_GATO =80;
const ALTURA_COMIDA =60;
const ANCHO_COMIDA =60;
let gatoX =canvas.width/2-40
let gatoY =canvas.height/2-40
let comidaX = 0
let comidaY = 0

function iniciarJuego(){
    graficarGato();
    graficarComida();
}

function graficarGato(){
    ctx.fillStyle="#F5A327";
    ctx.fillRect(gatoX, gatoY, ALTURA_GATO, ANCHO_GATO)

}

function graficarComida(){
    ctx.fillStyle="#905049";
    ctx.fillRect(comidaX, comidaY, ALTURA_COMIDA, ANCHO_COMIDA)

}