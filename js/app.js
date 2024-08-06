function ocultar_texto() {
    document.getElementById("ocultar_imagen").style.display = "none";
    document.getElementById("ocultar_h2").style.display = "none";
}

function textoGenerado() {
    let texto = document.getElementById("texto");
    let nuevo_texto = document.getElementById("cambio_texto");

    nuevo_texto.textContent = texto.value;
    nuevo_texto.style.fontSize = "1.5rem";
}

function mostrarBoton() {
    document.getElementById("boton_oculto").style.display = "block";
}

function encriptar() {
    ocultar_texto();
    textoGenerado();
    mostrarBoton();
}

function desencriptar() {
    ocultar_texto();
    textoGenerado();
    mostrarBoton();
}