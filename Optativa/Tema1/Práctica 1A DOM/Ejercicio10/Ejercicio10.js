const productos = [
{ id: 1, nombre: 'Patata', precio: 1, imagen: 'patata.jpg'},
{ id: 2, nombre: 'Cebolla', precio: 1.2, imagen: 'cebolla.jpg' },
{ id: 3, nombre: 'Calabacin', precio: 2.1, imagen: 'calabacin.jpg' },
{ id: 4, nombre: 'Fresas', precio: 0.6, imagen: 'fresas.jpg' }];

for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    document.write('<div class="producto">');
    document.write('<h2>' + producto.nombre + '</h2>');
    document.write('<img src="' + producto.imagen + '" alt="' + producto.nombre + '">');
    document.write('<p>Precio: ' + producto.precio + '€</p>');
    document.write('</div>');
    let botones = document.getElementsByTagName("div")[i];
    let botonDisponible = document.createElement("button");
    botonDisponible.textContent = "Disponible";
    botones.appendChild(botonDisponible);
    
    botonDisponible.classList.add("disabled");

    botonDisponible.onclick = function() {
        if (botonDisponible.classList.contains("disabled")) {
            botonDisponible.classList.remove("disabled");
            botonDisponible.classList.add("enabled");
        } else {
            botonDisponible.classList.remove("enabled");
            botonDisponible.classList.add("disabled");
        }
    }
}