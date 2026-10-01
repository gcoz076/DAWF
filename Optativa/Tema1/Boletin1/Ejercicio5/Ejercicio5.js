var marcaOrdenador = prompt("Introduce la marca de tu ordenador: ");
var precio = 1000;
switch (marcaOrdenador.toLowerCase()) {
    case "hp":
        precio = 1000*0.90;
        document.write("El precio de tu ordenador HP con descuento es: " + precio + "€");
        break;
    case "pavilion":
        precio = 1000*0.90;
        document.write("El precio de tu ordenador Pavilion con descuento es: " + precio + "€");
        break;
    case "msi":
        precio = 1000*0.95;
        document.write("El precio de tu ordenador MSI es: " + precio + "€");
        break;
    case "prestige":
        precio = 1000*0.95;
        document.write("El precio de tu ordenador Prestige es: " + precio + "€");
        break;
    default:
        precio = 1000;
        document.write("El precio de tu ordenador es: " + precio + "€");
}