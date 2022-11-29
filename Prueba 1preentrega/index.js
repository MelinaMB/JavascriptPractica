function saludar(){
    let apellido = prompt("Ingrese su apellido");
    let nombre = prompt("Ingrese el nombre");
    let mensaje = `Hola ${nombre} ${apellido}`;
    alert(mensaje);
  }
  
  
  
  function calcular(){
    let producto = parseInt(prompt("Ingrese monto"));
    let precio = `Precio con IVA $ ${((producto)*0.21)+(producto)}`;
    alert(precio);
  } 
  
  function comprar() {
    let mensaje;
    let entrada = "";
    while (entrada != "ESC") {
      entrada = prompt("¿Que quiere comprar?\n 1- Mesa\n 2- Estante\n 3- Vanitory\n 4- Cama\n 5- Salir \n Ingrese el Numero");
      if(entrada === "1"){
        mensaje = ("Cuesta $10000");
        alert(mensaje);
        calcular();
  
        
      }else   if(entrada === "2"){ 
        mensaje = ("Cuesta $20000");
        alert(mensaje);
        calcular();
  
      }else   if(entrada === "3"){ 
        mensaje = ("Cuesta $35000");
        alert(mensaje);
        calcular();
  
  
      }else   if(entrada === "4"){ 
        mensaje = ("Cuesta $40000");
        alert(mensaje);
        calcular();
        
      }else if(entrada === "5"){ 
        entrada = "ESC";
        let finalizamos = "Finalizamos, Gracias por su compra";
        alert(finalizamos);
      }else{
        mensaje = "ese producto no existe";
        alert(mensaje)
      }
    }
  }
  
  saludar(); 
  comprar();