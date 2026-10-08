let tamano = 16;

function aumentar() {
    tamano = tamano + 1;
    document.getElementById("parrafo").style.fontSize = tamano + "px";
}

function disminuir() {
    tamano = tamano - 1;
    document.getElementById("parrafo").style.fontSize = tamano + "px";
}