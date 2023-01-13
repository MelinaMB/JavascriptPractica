// productos en el html

let contenedor = document.getElementById("container");
const productos = [
  { id: 1, nombres: "Vanitory Marron", precio: 30000, img: "vanitorymarron.png", cantidad: 1 },
  { id: 2, nombres: "Vanitory Clarito", precio: 27000, img: "vanitoryclarito.jpg", cantidad: 1 },
  { id: 3, nombres: "Vanitory Negro", precio: 33000, img: "vanitorylaqueadonegro.jpg", cantidad: 1 },
  { id: 4, nombres: "Vanitory Marron Clarito", precio: 35500, img: "vanitoryflotante.jpg", cantidad: 1 },
  { id: 5, nombres: "Cama con Cajones", precio: 59400, img: "camacajones.jpg", cantidad: 1 },
  { id: 6, nombres: "Armario de Pared", precio: 67481, img: "armariopared.jpg", cantidad: 1 },
  { id: 7, nombres: "Cajonera Negra", precio: 34899, img: "cajoneranegra.jpg", cantidad: 1 },
  { id: 8, nombres: "Mesa de Luz", precio: 10690, img: "mesadeluznegra.jpg", cantidad: 1 },
  { id: 9, nombres: "Mesa Isla", precio: 21500, img: "mesa.jpg", cantidad: 1 },
  { id: 10, nombres: "Mesa Auxiliar", precio: 4500, img: "mesa auxiliar.jpg", cantidad: 1 },
  { id: 11, nombres: "Mesa Redonda", precio: 26169, img: "mesarodonda.jpg", cantidad: 1 },
  { id: 12, nombres: "Mesa Rectangular", precio: 14999, img: "mesarectangular.jpg", cantidad: 1 },
  { id: 13, nombres: "Mesa de Cocina", precio: 25850, img: "mesacocina.jpg", cantidad: 1 },
  { id: 14, nombres: "Alacena de Hierro", precio: 38000, img: "alacenahierro.jpg", cantidad: 1 },
  { id: 15, nombres: "Alacena Marrón", precio: 16500, img: "alacenamarron.jpg", cantidad: 1 },
  { id: 16, nombres: "Alacena Pequeña", precio: 17999, img: "alacenapequeña.jpg", cantidad: 1 },
  { id: 17, nombres: "Escritorio Blanco", precio: 7500, img: "escritorioblanco.jpg", cantidad: 1 },
  { id: 18, nombres: "Escritorio Gris", precio: 9200, img: "escritoriogris.jpg", cantidad: 1 },
  { id: 19, nombres: "Escritorio Marrón", precio: 6600, img: "escritoriomarron.jpg", cantidad: 1 },
  { id: 20, nombres: "Escritorio Negro", precio: 10000, img: "escritorionegro.jpg", cantidad: 1 },
  { id: 21, nombres: "Mesa Ratona", precio: 6000, img: "mesaratona.jpg", cantidad: 1 },
  { id: 22, nombres: "Mueble de Hierro", precio: 32000, img: "mueblehierro.jpeg", cantidad: 1 },
  { id: 23, nombres: "Mueble y Estante Marrón", precio: 23000, img: "mueblemarron.jpg", cantidad: 1 },
  { id: 24, nombres: "Mueble y Estantes Negros", precio: 26000, img: "muebleyestantes.jpg", cantidad: 1 }
];

function limpiarBusqueda() {
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
}

// filtrar productos por precio
let filtro = document.getElementById("filtro");
filtro.onclick = function () {
  let filtro = document.getElementById("filtrar").value;
  let producto = productos.filter((item) => item.precio <= filtro);

  if (producto.length > 0) {
    panel.innerHTML = "Se encontro productos con ese nombre"
    imprimir(producto);
  } else {
    panel.innerHTML = "El producto que busca no existe"
  }
}

// buscar productos
let buscar = document.getElementById("buscar");
buscar.onclick = function () {
  let buscar = document.getElementById("buscador").value;
  let producto = productos.filter((item) => item.nombres.toLowerCase().includes(buscar.toLowerCase()));

  if (producto.length > 0) {
    panel.innerHTML = "Se encontro productos con ese nombre"
    imprimir(producto);
  } else {
    panel.innerHTML = "El producto que busca no existe"
  }
}

function imprimir(producs) {
  limpiarBusqueda()
  producs.forEach(producto => {
    let div = document.createElement("div");
    div.classList = "d-flex align-items-center justify-content-center col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3 mb-sm-0";
    div.innerHTML = `
    <div class="card tarjeta">
    <img src="img/${producto.img}" class="card-img-top tarjeta-img" alt=" "max-width:300px">
    <div>
    <p class="card-title fs-5 text-center">${producto.nombres}</p>
    <br>
    <div class="tarjeta-body">
      <b class="card-text">$${producto.precio}</b>
      <button id="boton${producto.id}" class="btn btn-primary">Comprar</button>
    </div>
    </div>
    </div>
    `;

    contenedor.append(div);

    // agregar al carrito boton
    let boton = document.getElementById(`boton${producto.id}`);

    boton.addEventListener('click', () => {
      agregarAlCarrito(producto.id)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1500
      })
    });

  });
}

imprimir(productos);