function saludar(){
  let apellido = prompt("Ingrese su apellido");
  let nombre = prompt("Ingrese el nombre");
  let mensaje = `Hola ${nombre} ${apellido}`;
  alert(mensaje);
}



function calcular(){
  let producto = parseInt(prompt("Ingrese monto para calcular el IVA"));
  let precio = `Precio con IVA $ ${((producto)*0.21)+(producto)}`;
  alert(precio);
} 

function comprar() {
  let entrada = "";
  while (entrada != "ESC") {
    entrada = prompt("¿Que quiere comprar?\n 1- Mesa\n 2- Estante\n 3- Vanitory\n 4- Cama\n 5- Salir \n Ingrese el Numero");
    if(entrada === "1"){
      let mensaje1 = ("Cuesta $10000");
      alert(mensaje1);
      calcular();

      
    }else   if(entrada === "2"){ 
      let mensaje2 = ("Cuesta $20000");
      alert(mensaje2);
      calcular();

    }else   if(entrada === "3"){ 
      let mensaje3 = ("Cuesta $35000");
      alert(mensaje3);
      calcular();


    }else   if(entrada === "4"){ 
      let mensaje4 = ("Cuesta $40000");
      alert(mensaje4);
      calcular();
      
    }else if(entrada === "5"){ 
      entrada = "ESC";
      let finalizamos = "Finalizamos, Gracias por su compra";
      alert(finalizamos);
    }else{
      let mensaje5 = "ese producto no existe";
      alert(mensaje5)
    }
  }
}

saludar(); 
comprar();

