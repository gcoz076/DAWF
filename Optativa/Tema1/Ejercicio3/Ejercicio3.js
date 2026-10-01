var numero = prompt("Introduce un número del 1 al 10 para mostrar su tabla de multiplicar: ");
var numero = parseInt(numero);
for(var i = 1; i <= 10; i++) {
    document.write("<p>" + i + " x " + numero + " = " + (i * numero) + "</p>");
}