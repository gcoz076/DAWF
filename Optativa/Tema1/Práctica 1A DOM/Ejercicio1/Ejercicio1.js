console.log(document.title);
console.log(document.title.toUpperCase());

document.getElementById("nombre").value = "Francisco";
document.getElementById("apellido").value = "Alarcón";

document.getElementById("saludo").innerHTML = "Hola Francisco Alarcón";

let parrafo = document.createElement("p");
parrafo.innerHTML = "¿Qué tal estás?";

document.getElementById("saludo").appendChild(parrafo);

document.querySelector('label[for="apellido"]').innerHTML = "Apellidos:";
