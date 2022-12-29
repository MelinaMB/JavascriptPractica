// 
// 
// clase 8
// 

// let div = document.getElementById("aplicacion");
// console.log(div);

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo)

// let perritos = document.getElementsByClassName("perritos");
// console.log(perritos[1].innerHTML);

// let divs = document.getElementsByTagName("div");
// console.log(divs);

// let saludo = document.getElementById("saludar");
// let seccion = prompt("Ingrese la seccion a visitar");

// if(seccion === "carrito"){
//     saludo.innerHTML = "Bienvenid@ al carrito";
// }else if(seccion === "favoritos"){
//     saludo.innerHTML = "Bienvenid@ a los favoritos";
// }else{
//     saludo.innerHTML = "Bienvenid@ a nuestra pagina";
// }

// let saludo = document.getElementById("saludar");
// let seccion = prompt("Ingrese la seccion a visitar");

// if(seccion === "carrito"){
//     saludo.className = "verde";
//     saludo.innerHTML = "<h1>Bienvenido al carrito</h1>";
// }else if(seccion === "favoritos"){
//     saludo.className = "rosa";
//     saludo.innerHTML = "<h1>Bienvenido a los favoritos</h1>";
// }else{
//     saludo.className = "amarillo";
//     saludo.innerHTML = "<h1>Bienvenido a nuestra pagina</h1>";
// }


// let contenedor = document.getElementById("contenedor");
// const productos = [
//     { id: 1, nombres: "Vanitory Marron", precio: 30000 },
//     { id: 2, nombres: "Vanitory Clarito", precio: 27000 },
//     { id: 3, nombres: "Vanitory Negro", precio: 33000 },
//     { id: 4, nombres: "Vanitory Marron Clarito", precio: 35500 },
//     { id: 5, nombres: "Cama con Cajones", precio: 59400 },
//     { id: 6, nombres: "Armario de Pared", precio: 67481 },
//     { id: 7, nombres: "Cajonera Negra", precio: 34899 },
//     { id: 8, nombres: "Mesa de Luz", precio: 10690 },
//     { id: 9, nombres: "Mesa Isla", precio: 21500 },
//     { id: 10, nombres: "Mesa Auxiliar", precio: 4500 },
//     { id: 11, nombres: "Mesa Redonda", precio: 26169 },
//     { id: 12, nombres: "Mesa Rectangular", precio: 14999 },
//     { id: 13, nombres: "Mesa de Cocina", precio: 25850 },
//     { id: 14, nombres: "Alacena de Hierro", precio: 38000 },
//     { id: 15, nombres: "Alacena Marrón", precio: 16500 },
//     { id: 16, nombres: "Alacena Pequeña", precio: 17999 },
//     { id: 17, nombres: "Escritorio Blanco", precio: 7500 },
//     { id: 18, nombres: "Escritorio Gris", precio: 9200 },
//     { id: 19, nombres: "Escritorio Marrón", precio: 6600 },
//     { id: 20, nombres: "Escritorio Negro", precio: 10000 },
//     { id: 21, nombres: "Mesa Ratona", precio: 6000 },
//     { id: 22, nombres: "Mueble de Hierro", precio: 32000 },
//     { id: 23, nombres: "Mueble y Estante Marrón", precio: 23000 },
//     { id: 24, nombres: "Mueble y Estantes Negros", precio: 26000 },
// ];

// productos.forEach(producto => {
//     let div = document.createElement("div");
//     div.innerHTML = `
//     <h2>Id: ${producto.id}<h2>
//     <p>Nombre: ${producto.nombres}</p>
//     <b>$${producto.precio}</b>
//     `;

//     contenedor.append(div);
// });


// 
// 
// clase 9 - eventos
// 
// 
// primera forma 
let boton = document.getElementById("boton");

function ejecutar() {
    console.log("click en el boton");
}
boton.addEventListener("click", ejecutar)

// segunda forma

// let boton = document.getElementById("boton");

// function ejecutar() {
//     console.log("click en el boton");
// }

// boton.onclick = ejecutar;

// 
//
//
//clase 10
//
//
//


