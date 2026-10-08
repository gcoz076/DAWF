var numero = prompt("Ingrese 5 numeros: ");
document.write("<h2>Los numeros ingresados son: " + numero + "</h2>");
var lista = numero.split(",");
document.write("<h2>Los numeros ingresados inversos son: " + lista.reverse() + "</h2>");

var numero1 = prompt("Ingrese 1 numeros: ");
lista.unshift(numero1);
document.write("<h2>Los numeros ingresados son: " + lista + "</h2>");