function saludar(){
    let apellido = prompt("Ingrese su apellido");
    let nombre = prompt("Ingrese el nombre");
    let mensaje = `Hola ${nombre} ${apellido}`;
    alert(mensaje);
  }
  
  saludar(); 
  
  let entrada = prompt("Ingrese el día");
  
  while (entrada != "ESC") {
    if(entrada === "lunes"){
      let mensaje0 = ("jugar");
      alert(mensaje0);
      
    }else   if(entrada === "martes"){ 
      let mensaje1 = ("dormir");
      alert(mensaje1);
  
   }else   if(entrada === "miercoles"){ 
      let mensaje2 = ("trabajar");
      alert(mensaje2);
  
  }else   if(entrada === "jueves"){ 
      let mensaje3 = ("estudiar");
      alert(mensaje3);
  
  }else   if(entrada === "viernes"){ 
      let mensaje4 = ("comer");
      alert(mensaje4);
  
  }else   if(entrada === "sabado"){ 
      let mensaje5 = ("pintar");
      alert(mensaje5);
  
  }else   if(entrada === "domingo"){ 
      let mensaje6 = ("correr");
      alert(mensaje6);
   
      
     }else{
      let mensaje7 = ("ese dia no existe");
      alert(mensaje7)
    }
    
    saludar();
    entrada = prompt("Ingrese el día");
    
  }
  