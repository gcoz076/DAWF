var acertado = false;
var i = 1;
    while (!acertado && i <= 3) {
        var respuesta = prompt("¿Quién es el pintor de las Meninas?");
        if (respuesta.toLowerCase() === "velázquez" || respuesta.toLowerCase() === "velazquez") {
            alert("Correcto! Ha acertado.");
            acertado = true;
        }
        i++;
    }
    if (!acertado) {
        alert("Lo siento! La respuesta correcta es Velázquez");
    }