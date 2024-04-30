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
const mediaPhoto = matchMedia("(max-width: 616px)");
const changeSize = function (mql) {
    mql.matches ? document.body.style.background = "red"
        : document.body.style.background = "yellow";
};
mediaPhoto.addEventListener('DOMContentLoaded', (mql) => {
    changeSize(mediaPhoto);
});
