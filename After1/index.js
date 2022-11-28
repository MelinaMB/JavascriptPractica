/* let entrada = prompt("Ingrese el dia");

while(entrada != "ESC"){
    if(entrada === "lunes"){
        console.log("jugar");

    }else if(entrada === "martes"){
        console.log("dormir");

    }else if(entrada === "miercoles"){
        console.log("trabajar");

    }else if(entrada === "jueves"){
        console.log("estudiar");

    }else if(entrada === "viernes"){
        console.log("trabajar");

    }else if(entrada === "sabado"){
        console.log("descansar");
        
    }else if(entrada === "domingo"){
        console.log("jugar");
    }else{
        console.log("ese dia no existe");
    }

    entrada = prompt("Ingrese el dia");
} */

/* de otra forma */

/* let entrada = prompt("Ingrese el dia");

switch (entrada) {
    case "lunes":
        console.log("jugar");
        break;
    
    default:
        console.log("ese dia no existe");
        break;
} */

let entrada = prompt("Ingrese el día");

while (entrada != "ESC") {
  if(entrada === "lunes"){
    console.log("jugar");

  }else if(entrada === "martes"){
    console.log("dormir");
    
  }else{
    console.log("ese dia no existe");
  }

  entrada = prompt("Ingrese el día");
}