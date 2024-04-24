// {{index [number, representación], bit}}

function convertir(numero) {
  let  num = numero;
  let obtenerResto = num % 2;
   
    while ( num > 1) {
        num = num / 2;
    };
   return num;
  }

    console.log(convertir(10));
    
  


