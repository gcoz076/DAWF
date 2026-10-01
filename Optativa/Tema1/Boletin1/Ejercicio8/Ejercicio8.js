var saldoUsuario = 30;
var numDados = 1;

while (saldoUsuario > 0 && saldoUsuario < 120 && numDados != 0) {
    var apuesta = prompt("¿Cuánto dinero quieres apostar? (Saldo actual: " + saldoUsuario + ")");
    apuesta = parseInt(apuesta);
    saldoUsuario -= apuesta;
    numDados = prompt("¿Qué número eliges entre 1 y 6? (0 para salir)");
    numDados = parseInt(numDados);
    if (numDados != 0) {
        var dado = Math.floor(Math.random() * 6) + 1;
        if (numDados == dado) {
            alert("¡Felicidades! Has acertado. El dado ha salido " + dado);
            saldoUsuario += apuesta + 10;
        } else {
            alert("Lo siento, has fallado. El dado ha salido " + dado);
            saldoUsuario -= 10;
        }
    }
}
document.write("<h2> Juego terminado </h2>")
document.write("<p> Tu saldo final es: " + saldoUsuario + "€ </p>");