var cumpleaños = prompt("Ingrese su cumpleaños (dd/mm/aaaa): ");
var partesFecha = cumpleaños.split("/");
var fecha = new Date(partesFecha[2], partesFecha[1] - 1, partesFecha[0]);
var dia = fecha.getDate();
document.write("<h2>El día de su cumpleaños es: " + dia + "</h2>");
var mes = fecha.getMonth() + 1;
document.write("<h2>El mes de su cumpleaños es: " + mes + "</h2>");
var año = fecha.getFullYear();
document.write("<h2>El año de su cumpleaños es: " + año + "</h2>");