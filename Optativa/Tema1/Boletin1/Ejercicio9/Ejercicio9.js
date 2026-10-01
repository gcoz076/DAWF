var nombres = prompt("Introduce los nombres de personas separados por comas:");
var listaNombres = nombres.split(",");

for (var i = 0; i < listaNombres.length; i++) {
    document.write("<h2>Hola, " + listaNombres[i] + "</h2>")
}
