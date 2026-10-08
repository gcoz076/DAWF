var texto = prompt("Introduce un texto: ");
var longitud = texto.length;
document.write("<h2>La longitud del texto es: " + longitud + "</h2>");

if (longitud > 7) {
    var posición = texto.charAt(8);
    document.write("<h2>El carácter en la posición 8 es: " + posición + "</h2>");
} else {
    document.write("<h2>El texto es demasiado corto para obtener el carácter en la posición 8.</h2>");
}

if (!texto.indexOf("t")) {
    document.write("<h2>El texto no contiene la letra 't'.</h2>");
} else {
    var pos = texto.indexOf("t");
    document.write("<h2>El texto contiene la letra 't' en la posición: " + pos + "</h2>");
}

document.write("<h2>El texto en mayúsculas es: " + texto.toUpperCase() + "</h2>");
document.write("<h2>El texto en minúsculas es: " + texto.toLowerCase() + "</h2>");
