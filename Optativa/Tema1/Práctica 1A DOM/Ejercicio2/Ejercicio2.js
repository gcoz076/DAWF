function mostrarWeb(numero) {
    let enlaces = document.getElementsByTagName("a");

    document.getElementById("web").value = enlaces[numero].href;
}