/* 
estructura de las funciones
function nombre(){
  codigo de la funcion
}
*/

/* function saludar(){
  let apellido = prompt("Ingrese su apellido");
  let nombre = prompt("Ingrese el nombre");
  let mensaje = `Hola ${nombre} ${apellido}`;
  alert(mensaje);
}
saludar(); */

/* calculadora */
/* function calculadora(num1, num2, operacion) {
      switch (operacion) {
        case "+":
          return num1 + num2;
          break;
    
        case "-":
          return num1 - num2;
          break;
    
        case "/":
          return num1 / num2;
          break;
    
        case "*":
          return num1 * num2;
          break;
    
        default:
          return "Operacion no disponible";
          break;
      }
    }
    
    let num1 = parseInt(prompt("Ingrese el numero1"));
    let num2 = parseInt(prompt("Ingrese el numero2"));
    let operacion = prompt("Ingrese la operacion deseada");
    
    let resultado = calculadora(num1, num2, operacion);
    let mensaje = `El resultado de la operacion es ${resultado}`;
    alert(mensaje); */


/* const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;

let precioProducto = 500;
let descuento = 50;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
                = resta(suma(500, iva(500)), 50);
                = resta(suma(500, 500 * 0.21), 50);
                = resta(500 + 500 * 0.21, 50);
                = (500 + 500 * 0.21) - 50;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
console.log(nuevoPrecio);  */