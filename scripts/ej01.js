//console.log("funciona")

let secreto=Math.floor(Math.random()*100)+1
console.log(secreto)

let contador = 0
const inputNumero = document.querySelector("#inputNumero")
const botonComprobar = document.querySelector("#botonComprobar")
const pIntentos = document.querySelector("#pIntentos")
const pMensajes = document.querySelector("#pMensajes")

function comprobarNumero(){if(inputNumero.value>0){     
    pIntentos.textContent+=inputNumero.value+" | "
    contador++
    if(inputNumero.value==secreto){
        pMensajes.textContent="¡Enhorabuena! ¡Has acertado!"
        terminarPartida()        
    }else if(inputNumero.value<secreto){
        pMensajes.textContent="Te has quedado corto"
    }else{
        pMensajes.textContent="Te has pasado"
    }
    
    inputNumero.value=" "
    if(contador==6){
       terminarPartida()
       if(inputNumero.value!=secreto){
           pMensajes.textContent="Lo siento, no has acertado. El número era "+secreto
       }
        }
    }
    
}
//hacer que el cursor aparezca automáticamente en el IPUT texto
inputNumero.focus()
botonComprobar.addEventListener(
    "click",
    comprobarNumero
)

inputNumero.addEventListener(
    "keyup",
    function(objInfoEvento){
        //which and keyCode deprecated - usar key en su lugar
        //console.log("Tecla pulsada (which): "+objInfoEvento.which)
        if(objInfoEvento.key == "Enter"){
            //usuario ha pulsado Enter
            comprobarNumero()
        }
    }
)

function terminarPartida(){
    //terminar partida
    inputNumero.disabled=true
    botonComprobar.disabled=true
    //hacer aparecer nuevo botón (volver a jugar)
    const botonReset=document.createElement("input")
    botonReset.type="button"
    botonReset.value="Jugar de nuevo"
    botonReset.onclick=function(){
        secreto=Math.floor(Math.random()*100)+1
        console.log(secreto)
        contador=0
        pIntentos.textContent="Números intentados:"
        inputNumero.disabled=false
        botonComprobar.disabled=false
        this.remove()
    }
    document.body.append(botonReset)
}









