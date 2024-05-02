function playFuntion(id: HTMLMediaElement) {
  return id.play();
}

// PARA EL ELEMENTO H1
const elementoPadre = document.querySelector(".nombre"); // Agregar el nodo 
const nombreUsuario = document.createElement("h1"); // Tipo de elemento
const textoh1 = document.createTextNode("Kevin"); // Seleccionar elemento padre 

// Resultado = "Kevin"
elementoPadre!.appendChild(nombreUsuario);
nombreUsuario.appendChild(textoh1);

// PARA EL ELEMENTO H2 
const elementoPadre2 = document.querySelector(".apellido"); // Agregar el nodo 
const apellidoUsuario = document.createElement("h1");
const textoh2 = document.createTextNode("Alpizar"); // Seleccionar elemento padre 

// Resultado = "Alpizar"
elementoPadre2!.appendChild(apellidoUsuario);
apellidoUsuario.appendChild(textoh2);

// FUNCION PARA LA PRIMER BARRA Ruby On Rails
var i = 0;

function move(id: HTMLElement, porcent: number) {
  if (i == 0) {
      i = 1;
      var width = 0;
      var identificador = setInterval(frame, 40);

      function frame() {
          if (width >= porcent) {
              clearInterval(identificador);
              i = 0;
          } else {
              width++;
              id!.style.width = width + "%";
          }
      }
  }
}
 