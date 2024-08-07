function ocultar_texto() {
    document.getElementById("ocultar_imagen").style.display = "none";
    document.getElementById("ocultar_h2").style.display = "none";
}

function mostrarBoton() {
    document.getElementById("boton_oculto").style.display = "block";
}

function encriptar() {
    ocultar_texto();

    let texto = document.getElementById("texto").value;
    let nuevo_texto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById("cambio_texto").innerHTML = nuevo_texto;
    document.getElementById("cambio_texto").style.fontSize = "1.5rem";

    mostrarBoton();
}

function desencriptar() {
    ocultar_texto();
    
    mostrarBoton();
}