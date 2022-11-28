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
let finalizamos = "Finalizamos, Gracias por su compra";
alert(finalizamos);
} 

saludar(); 

let entrada = prompt("¿Que quiere comprar?, mesa, estante, vanitory, cama");


while (entrada != "ESC") {
  if(entrada === "mesa"){
    let mensaje0 = ("Cuesta $10000");
    alert(mensaje0);
    calcular();

    
  }else   if(entrada === "estante"){ 
    let mensaje1 = ("Cuesta $20000");
    alert(mensaje1);
    calcular();

 }else   if(entrada === "vanitory"){ 
    let mensaje2 = ("Cuesta $35000");
    alert(mensaje2);
    calcular();


}else   if(entrada === "cama"){ 
    let mensaje3 = ("Cuesta $40000");
    alert(mensaje3);
    calcular();

   
    
   }else{
    let mensaje4 = ("ese producto no existe");
    alert(mensaje4)
  }
  
  
  saludar();
  entrada = prompt("¿Que quiere comprar?, mesa, estante, vanitory, cama");
  
}
