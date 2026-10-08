window.onload = function() {

    let ciudades_gratis = ["Sevilla", "Madrid", "Valencia", "Barcelona"];
    let ciudades_gastos = ["Cantabria", "Pontevedra", "Toledo", "Segovia"];

    let ciudad = prompt("Introduce la ciudad de destino:");
    let fecha = new Date();

    document.getElementById("ciudad").textContent = ciudad;

    if (ciudades_gastos.includes(ciudad)) {
        let gastos = prompt("Introduce los gastos de envío:");
        document.getElementById("gastos").textContent = gastos + " €";
        document.getElementById("fecha").textContent =fecha.getDate() + "/" +(fecha.getMonth() + 1) + "/" +fecha.getFullYear();

    } else if (ciudades_gratis.includes(ciudad)) {
        document.getElementById("gastos").textContent = "Los gastos son gratuitos";
        document.getElementById("fecha").textContent =fecha.getDate() + "/" +(fecha.getMonth() + 1) + "/" +fecha.getFullYear();

    } else {
        document.getElementById("gastos").textContent = "No se pueden realizar envíos";
        document.getElementById("fecha").style.display = "none";
    }
}