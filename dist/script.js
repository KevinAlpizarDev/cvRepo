"use strict";
function playFuntion(id) {
    return id.play();
}
const elementoPadre = document.querySelector(".nombre");
const nombreUsuario = document.createElement("h1");
const textoh1 = document.createTextNode("Kevin");
elementoPadre.appendChild(nombreUsuario);
nombreUsuario.appendChild(textoh1);
const elementoPadre2 = document.querySelector(".apellido");
const apellidoUsuario = document.createElement("h1");
const textoh2 = document.createTextNode("Alpizar");
elementoPadre2.appendChild(apellidoUsuario);
apellidoUsuario.appendChild(textoh2);
var i = 0;
function move(id, porcent) {
    if (i == 0) {
        i = 1;
        var width = 0;
        var identificador = setInterval(barra, 20);
        function barra() {
            if (width >= porcent) {
                clearInterval(identificador);
                i = 0;
            }
            else {
                width++;
                id.style.width = width + "%";
            }
        }
    }
}
