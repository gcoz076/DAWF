var cantidad = prompt("Ingrese la cantidad de elementos <p> que quieres añadir: ");

var padre = document.getElementsByTagName("h2")[0];

for (var i = 0; i < cantidad; i++) {
    var parrafo = document.createElement("p");
    parrafo.textContent = "Este es el párrafo número " + (i + 1);
    padre.appendChild(parrafo);
}