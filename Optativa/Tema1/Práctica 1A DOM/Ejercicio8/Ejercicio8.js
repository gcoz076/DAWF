function añadirProducto() {
    let contador = 0;
    let producto = prompt("Introduce el nombre del producto:");
    let lista = document.getElementsByName("Lista")[contador];
    let item = document.createElement("li");
    item.textContent = producto;    
    lista.appendChild(item);
    contador++;
}