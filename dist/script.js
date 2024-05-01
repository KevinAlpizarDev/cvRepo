"use strict";
const button = document.getElementById("#name");
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
function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("rubyOnRails");
        var width = 10;
        var identificador = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(identificador);
                i = 0;
            }
            else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}
var i = 0;
function move2() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("typescript");
        var width = 10;
        var identificador = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(identificador);
                i = 0;
            }
            else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}
var i = 0;
function move3() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("otra");
        var width = 10;
        var identificador = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(identificador);
                i = 0;
            }
            else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}
