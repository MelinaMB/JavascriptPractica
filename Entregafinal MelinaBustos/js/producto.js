
const imprimir = async () => {
  await obtenerProductos()
  imprimirProductos(productos)
};


function imprimirProductos(productosImprimir) {
  limpiarBusqueda()
  productosImprimir.forEach(producto => {
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

// productos en el html

let contenedor = document.getElementById("container");

function limpiarBusqueda() {
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
}

// filtrar productos por precio
let filtro = document.getElementById("filtro");
filtro.onclick = function () {
  let filtro = document.getElementById("filtrar").value;
  let productosfiltrados = productos.filter((item) => item.precio <= filtro);

  if (productosfiltrados.length > 0) {
    panel.innerHTML = "Se encontro productos con ese precio"
    imprimirProductos(productosfiltrados);
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
    imprimirProductos(producto);
  } else {
    panel.innerHTML = "El producto que busca no existe"
  }
}

imprimir();