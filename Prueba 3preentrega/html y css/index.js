function saludar() {
  let apellido = prompt("Ingrese su apellido");
  let nombre = prompt("Ingrese el nombre");
  let mensaje = `Hola ${nombre} ${apellido}`;
  alert(mensaje);
}

const productos = [
  { id: 1, nombres: "Vanitory Marron", precio: 30000 },
  { id: 2, nombres: "Vanitory Clarito", precio: 27000 },
  { id: 3, nombres: "Vanitory Negro", precio: 33000 },
  { id: 4, nombres: "Vanitory Marron Clarito", precio: 35500 },
  { id: 5, nombres: "Cama con Cajones", precio: 59400 },
  { id: 6, nombres: "Armario de Pared", precio: 67481 },
  { id: 7, nombres: "Cajonera Negra", precio: 34899 },
  { id: 8, nombres: "Mesa de Luz", precio: 10690 },
  { id: 9, nombres: "Mesa Isla", precio: 21500 },
  { id: 10, nombres: "Mesa Auxiliar", precio: 4500 },
  { id: 11, nombres: "Mesa Redonda", precio: 26169 },
  { id: 12, nombres: "Mesa Rectangular", precio: 14999 },
  { id: 13, nombres: "Mesa de Cocina", precio: 25850 },
  { id: 14, nombres: "Alacena de Hierro", precio: 38000 },
  { id: 15, nombres: "Alacena Marrón", precio: 16500 },
  { id: 16, nombres: "Alacena Pequeña", precio: 17999 },
  { id: 17, nombres: "Escritorio Blanco", precio: 7500 },
  { id: 18, nombres: "Escritorio Gris", precio: 9200 },
  { id: 19, nombres: "Escritorio Marrón", precio: 6600 },
  { id: 20, nombres: "Escritorio Negro", precio: 10000 },
  { id: 21, nombres: "Mesa Ratona", precio: 6000 },
  { id: 22, nombres: "Mueble de Hierro", precio: 32000 },
  { id: 23, nombres: "Mueble y Estante Marrón", precio: 23000 },
  { id: 24, nombres: "Mueble y Estantes Negros", precio: 26000 },
];

const buscar = (nombres) => {
  let producto = productos.find((item) => item.nombres === nombres);

  if (producto) {
      let mensaje = `
      id: ${producto.id}
      Nombre: ${producto.nombres}
      Precio: ${producto.precio}
      `;
      alert(mensaje);
  } else {
      alert("producto no encontrado");

  }
};

function filtrar(precio){

let filtrados = productos.filter((item) => item.precio > precio);
filtrados.forEach((item) => {
  let mensaje = `
  Id: ${item.id}
  Nombre: ${item.nombres}
  Precio: $${item.precio}
  `;
  alert(mensaje);
});

}


function calcular(){
  let producto = parseInt(prompt("Ingrese monto"));
  let precio = `Precio con IVA $ ${((producto)*0.21)+(producto)}`;
  alert(precio);
} 

saludar();
let nombres = prompt("Ingrese el nombre del producto a buscar")
buscar(nombres);
let precios = parseInt(prompt("Ingrese el precio minimo"))
filtrar(precios);


comprar();

function comprar() {
  let mensaje;
  let entrada = "";
  while (entrada != "ESC") {
    entrada = prompt(`¿Quiere comprar ${nombres}?\n 1-si \n 2- Salir \n Ingrese el Numero`);
    if(entrada === "1"){
     let mensaje = (`Comprar`);
      alert(mensaje);
      calcular();

      
    }else if(entrada === "2"){ 
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
