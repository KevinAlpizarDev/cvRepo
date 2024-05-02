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
let i = 0;

function move(id: HTMLElement, porcent: number) {
  if (i == 0) {
      i = 1;
      let width = 0;
      const identificador = setInterval(barra, 20);

      function barra() {
          if (width >= porcent) { //variable comparada con el porcentaje de experiencia
              clearInterval(identificador); //para detener el evento de llamada 
              i = 0;
          } else {
              width++; //Ancho aumenta en uno
              id!.style.width = width + "%"; //Aumento en uno aplicado al estilo
          }
      }
  }
}
 