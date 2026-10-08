function añadirProducto() {
    let producto = prompt("Introduce el nombre del producto:");
    let lista = document.getElementsByName("Lista")[0];

    let item = document.createElement("li");
    item.textContent = producto;

    let botonSi = document.createElement("button");
    botonSi.textContent = "SÍ";

    let botonNo = document.createElement("button");
    botonNo.textContent = "NO";

    lista.appendChild(item);
    item.appendChild(botonSi);
    item.appendChild(botonNo);

    botonSi.onclick = function() {
        item.style.color = "green";
        item.style.fontStyle = "italic";
    }

    botonNo.onclick = function() {
        item.style.color = "red";
        item.style.fontStyle = "normal";
        item.style.fontWeight = "bold";
    }
}