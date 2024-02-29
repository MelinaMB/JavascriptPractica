/* Estructura de un codicional */

/* if(true){
    console.log("entramos");
} */

/* let nombre = prompt("Ingrese su nombre");

if(nombre === "andres"){
    alert("Hola andres");
    }
    
alert("finalizamos"); */

/* estructura del if => else */

let respuesta = prompt("Finalizamos la tarea?").toLowerCase();

if(respuesta === "si"){
    alert("Puedes salir a jugar");
}else{
    alert("No puedes salir a jugar");
}


/* let nombre = prompt("Ingrese en nombre")

if(nombre != "" && nombre === "andres"){
    alert("Hola andres");
}else{
    alert("Valor ingresado incorrecto");
} */

/* let nombre = prompt("Ingrese en nombre")

if(nombre != "" || nombre === "andres"){
    alert("Hola andres");
}else{
    alert("Valor ingresado incorrecto");
} */

if(!"andres".includes("s")){
    console.log("no la contiene");
}else{
    console.log("si la tiene");
}
