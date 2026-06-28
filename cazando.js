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
let puntaje = 0
let tiempo = 10
let intervaloTiempo ;

function iniciarJuego(){
    graficarGato();
    graficarComida();
    restarTiempo();
    intervaloTiempo = setInterval(restarTiempo, 1000);
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
    actualizarPantalla();
}

function moverDerecha(){
    gatoX = gatoX +10;
    actualizarPantalla()
}

function moverArriba(){
    gatoY = gatoY -10;
    actualizarPantalla();
}

function moverAbajo(){
    gatoY = gatoY +10;
    actualizarPantalla();
}

function detectarColicion(){
    if (
        gatoX+ANCHO_GATO > comidaX && gatoX < comidaX+ANCHO_COMIDA &&
        gatoY+ALTURA_GATO>comidaY && gatoY < comidaY+ALTURA_COMIDA ){
        aparecerComida();
        puntaje=puntaje +1;
        mostrarSpam("puntos",puntaje); 
        if (puntos >= 6)
        limpiarCanva();
        terminarJuego("¡Ganaste! Atrapaste 6 comidas.");
        }
}

function aparecerComida(){
    comidaX=generaAleatorio(0,canvas.width-ANCHO_COMIDA);
    comidaY=generaAleatorio(canvas.height-ALTURA_COMIDA,0);
    actualizarPantalla();
}

function actualizarPantalla(){
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColicion();

}

function restarTiempo(){
    tiempo--;
        mostrarSpam("tiempo",tiempo);
        if (tiempo <= 0) {
         clearInterval(intervaloTiempo); 
         alert("¡GAME OVER! Puntos obtenidos: " + puntos);
    }
        
}
function terminarJuego(mensaje) {
clearInterval(intervaloTiempo);
alert(mensaje);
}

function reiniciar(){
    puntaje = 0;
    tiempo = 10
    intervaloTiempo ;
    gatoX =canvas.width/2-40;
    gatoY =canvas.height/2-40;
    document.getElementById("puntos").textContent = puntaje;
    document.getElementById("tiempo").textContent = tiempo;
    clearInterval(intervaloTiempo);
    limpiarCanva();
    iniciarJuego();
    
    
}