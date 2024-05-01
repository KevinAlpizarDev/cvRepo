const button: HTMLElement | null = document.getElementById("#name");


    // setInterval( function (){
    //     button?.onmousedown
        
    //     } ,2000); 


function playFuntion(id: HTMLMediaElement) {
    return id.play()
}


 // PARA EL ELEMENTO H1
 const elementoPadre = document.querySelector(".nombre")//Agregar el nodo 
 const nombreUsuario = document.createElement("h1")//Tipo de elemento
 const textoh1 = document.createTextNode("Kevin")//Seleccionar elemento padre 

 
 //  Result = "Kevin"
 elementoPadre!.appendChild(nombreUsuario)
 nombreUsuario.appendChild(textoh1)
 
 
 // PARA EL ELEMENTO H2 
 const elementoPadre2 = document.querySelector(".apellido")//Agregar el nodo 
 const apellidoUsuario = document.createElement("h1")
 const textoh2 = document.createTextNode("Alpizar")//Seleccionar elemento padre 
  
//  Result = "Alpizar"
 elementoPadre2!.appendChild(apellidoUsuario)
 apellidoUsuario.appendChild(textoh2)








// FUNCION PARA LA PRIMER BARRA Ruby On Rails

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
      } else {
        width++;
        elem!.style.width = width + "%";
        elem!.innerHTML = width  + "%";
      }
    }
  }
}



// FUNCION PARA LA PRIMER BARRA Typescript


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
      } else {
        width++;
        elem!.style.width = width + "%";
        elem!.innerHTML = width  + "%";
      }
    }
  }
}




// FUNCION PARA LA PRIMER BARRA Para otro


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
      } else {
        width++;
        elem!.style.width = width + "%";
        elem!.innerHTML = width  + "%";
      }
    }
  }
}




// function playFuntion(id: HTMLMediaElement) {
//     return id.play()
// }
// <div type="button" value="PLAY" onmouseover="playFuntion(notification)" class="icon-place">
// <audio id="notification" src="./src/sounds/message-notification.wav"></audio>
// <img src="./src/imgs/email.svg" alt="">
// </div>