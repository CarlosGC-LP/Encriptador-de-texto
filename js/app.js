function visibility() {
    document.getElementById("ocultar_imagen").style.display = "none";
    document.getElementById("ocultar_h2").style.display = "none";
}

function textoGenerado() {
    let texto = document.getElementById("texto").innerText;
    document.getElementById("cambio_texto").innerText = texto;
}

function encriptar() {
    visibility();
}

function desencriptar() {
    visibility();
}