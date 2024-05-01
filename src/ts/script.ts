function playFuntion(id: HTMLMediaElement) {
    // let audioPlayer: HTMLMediaElement = document.getElementById(audioId)
    return id.play()
 
 }
 
 
 // PARA EL ELEMENTO H1
 
 const elementoPadre = document.querySelector(".nombre")//Agregar el nodo 
 const nombreUsuario = document.createElement("h1")//Tipo de elemento
 const textoh1 = document.createTextNode("Kevin")//Seleccionar elemento padre 

 
 elementoPadre!.appendChild(nombreUsuario)
 nombreUsuario.appendChild(textoh1)
 
 
 // PARA EL ELEMENTO H2 
 
 const elementoPadre2 = document.querySelector(".apellido")//Agregar el nodo 
 const apellidoUsuario = document.createElement("h1")
 const textoh2 = document.createTextNode("Alpizar")//Seleccionar elemento padre 
  
 
 elementoPadre2!.appendChild(apellidoUsuario)
 apellidoUsuario.appendChild(textoh2)



//  FUNCION MEDIA QUERY


// const mediaPhoto = matchMedia("(max-width: 616px)");

// const changeSize  = function(mql: MediaQueryList) {  
//     mql.matches ? document.body.style.background = "red"
//     : document.body.style.background = "yellow"
//   };  

// mediaPhoto.addEventListener(changeSize)
//   //do something
//   changeSize(mediaPhoto)

