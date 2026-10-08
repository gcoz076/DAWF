function mostrar() {

    let parrafo2 = document.getElementById("parrafo2");
    let parrafo3 = document.getElementById("parrafo3");
    let span = document.querySelector("span");

    if (parrafo2.style.display == "none") {

        parrafo2.style.display = "block";
        parrafo3.style.display = "block";
        span.innerHTML = "Mostrar menos...";

    } else {

        parrafo2.style.display = "none";
        parrafo3.style.display = "none";
        span.innerHTML = "Mostrar más...";

    }
}