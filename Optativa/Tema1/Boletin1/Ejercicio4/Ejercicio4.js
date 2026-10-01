var notaMedia = prompt("Introduce la nota media del alumno: ");
if (notaMedia >= 5) {
    var aprobmedia = true;
} else {
    var aprobmedia = false;
}
var notaExamen = prompt("Introduce la nota del examen del alumno: ");
if (notaExamen >= 5) {
    var aprobExamen = true;
} else {
    var aprobExamen = false;
}
var notaActitud = prompt("Introduce la nota de actitud del alumno: ");
if (notaActitud >= 5) {
    var aprobActitud = true;
} else {
    var aprobActitud = false;
}
document.write("La nota media del alumno es: " + notaMedia);
document.write("La nota del examen del alumno es: " + notaExamen);
document.write("La nota de actitud del alumno es: " + notaActitud);
if (aprobmedia && aprobExamen && aprobActitud) {
    document.write("El alumno ha aprobado la asignatura");
} else {
    document.write("El alumno ha suspendido la asignatura");
}