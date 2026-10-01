var dniInput = prompt("Introduce tu número de DNI (sin letra):");
var dni = parseInt(dniInput);
var letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
var letra = letras[dni % 23];
document.write("<h1> La letra correspondiente al DNI " + dni + " es: " + letra + "</h1>");