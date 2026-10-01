var nombres = prompt("Introduce los nombres de personas separados por comas:");
var listaNombres = nombres.split(",");
for (var i = 0; i < listaNombres.length; i++) {
    document.write("<h2>Hola, " + listaNombres[i].trim() + "</h2>");
}
document.write("<h3>Número de personas: " + listaNombres.length + "</h3>");
document.write("<h3>Primera persona: " + listaNombres[0] + "</h3>");
document.write("<h3>Última persona: " + listaNombres[listaNombres.length - 1] + "</h3>");
console.log("Array ordenado de A-Z: " + listaNombres.sort());
console.log("Array ordenado de Z-A: " + listaNombres.reverse());