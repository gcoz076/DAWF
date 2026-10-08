window.onload = function() {

    let ciudad = prompt("Introduce la ciudad de destino:");
    let gastos;
    let fecha;
    let fechaActual = new Date();

    switch (ciudad.toLowerCase()) {

        case "sevilla":
            gastos = 3;
            fecha = fechaActual.getDate() + "/" +(fechaActual.getMonth() + 1) + "/" + fechaActual.getFullYear();
            break;
        case "barcelona":
            gastos = 7;
            fecha = "25/06/2024";
            break;
        case "valencia":
            gastos = 6;
            fecha = "26/06/2024";
            break;
        default:
            gastos = 10;
            fecha = "27/06/2024";
    }
    document.getElementById("ciudad").textContent = ciudad;
    document.getElementById("gastos").textContent = gastos + " €";
    document.getElementById("fecha").textContent = fecha;
};