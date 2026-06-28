let canvas;
let ctx;
canvas=document.getElementById("areaJuego");
ctx=canvas.getContext("2d");
const ALTURA_GATO =80;
const ANCHO_GATO =80;
const ALTURA_COMIDA =60;
const ANCHO_COMIDA =60;
let gatoX =canvas.height/2-40;
let gatoY =canvas.height/2-40;
let comidaX = 0
let comidaY = 0

function iniciarJuego(){
    graficarGato();
    graficarComida();
}

function graficarRectangulo(x, y, ancho, alto, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function graficarGato(){
    graficarRectangulo(
        gatoX,gatoY,ALTURA_GATO,ANCHO_GATO,"#c7803d"
    )

}

function graficarComida(){
    graficarRectangulo(
        comidaX,
        comidaY,
        ANCHO_COMIDA,
        ALTURA_COMIDA,
        "#905049"
    );
}
function limpiarCanva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moverIzquierda(){
    gatoX = gatoX -10;
    limpiarCanva();
    graficarGato();
    graficarComida();
}