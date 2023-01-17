// carrito
const contenedorProducto = document.getElementById('contenedor-producto')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const showProducto = document.getElementById('show-cantidad')

const carritoDropdown = document.getElementById('carrito-dropdown')

const carritoDropdownProductos = document.getElementById('carrito-dropdown-productos')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const precioTotal = document.getElementById('precioTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    actualizarCarrito()
  }
})

// para vaciar el carrito
if (botonVaciar) {
  botonVaciar.addEventListener('click', () => {
    vaciarCarrito()
  })
}

function vaciarCarrito() {
  carrito = []
  actualizarCarrito()
}

const actualizarDropdown = () => {
  if (carrito.length > 0) {
    cantProd = carrito.reduce((acc, prod) => acc + 1, 0)
    carritoDropdown.innerHTML = `<i class='bi bi-cart-fill'></i><span>${cantProd}</span>`
  } else {
    carritoDropdown.innerHTML = "<i class='bi bi-cart'></i>"
  }
}

const actualizarDropdownProductos = () => {
  carritoDropdownProductos.innerHTML = '<li><div class="text-center"><div><h3>Carrito</h3></div></div></li>'
  carrito.forEach((prod) => {
    const div = document.createElement('li')
    div.innerHTML = `
        <span class="item">
          <span class="item-left">
              <img src="../img/${prod.img}" alt="" />
              <span class="item-info">
                  <span>${prod.nombres}</span>
                  <span>Precio: ${prod.precio}</span>
                  <span>Cantidad:${prod.cantidad}</span>
              </span>
          </span>
        </span>`
    carritoDropdownProductos.appendChild(div)
  })
  if (carrito.length > 0) {
    const div = document.createElement('li')
    div.innerHTML = '<div class="text-center"><div><a class="nav-link" href="carritopag.html"><h3>Ir al carrito</h3></a></div></div>'
    carritoDropdownProductos.appendChild(div)
  }
}


// agregar al carrito
const agregarAlCarrito = (prodId) => {
  const existe = carrito.some(prod => prod.id === prodId)

  if (existe) {
    const prod = carrito.map(prod => {
      if (prod.id === prodId) {
        prod.cantidad++
      }
    })
  } else {
    const item = productos.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito)
  }

  actualizarCarrito()
}
// vaciar el carrito
const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod) => prod.id === prodId)
  const indice = carrito.indexOf(item)
  carrito.splice(indice, 1)
  actualizarCarrito()
}



// actualizar el carrito
const actualizarCarrito = () => {

  if (contenedorCarrito) {
    contenedorCarrito.innerHTML = ""

    // actualiza la vista del carrito
    carrito.forEach((prod) => {
      const div = document.createElement('div');
      div.classList = "d-flex align-items-center justify-content-center col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3 mb-sm-0";
      div.innerHTML = `
      <div class="card tarjeta">
        <img src="../img/${prod.img}" class="card-img-top tarjeta-img" alt=" "max-width:300px">
       <div>
        <p class="card-title fs-5 text-center">${prod.nombres}</p>
        <br>
        <div class="tarjeta-body">
        <p class="card-text">Precio: ${prod.precio}</p>
        <p>Cantidad: 
        <button id="menos-producto${prod.id}">-</button>
        <span id="show-cantidad${prod.id}">${prod.cantidad}</span>
        <button id="mas-producto${prod.id}">+</button></p>
        <br>
        </div>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="btn btn-outline-danger">Eliminar</button>
      </div>
      </div>
        `
      contenedorCarrito.appendChild(div)

      // sumar cantidad del carrito

      let masProducto = document.getElementById(`mas-producto${prod.id}`)
      let showCantidad = document.getElementById(`show-cantidad${prod.id}`)
      masProducto.onclick = function () {
        prod.cantidad++
        showCantidad.innerText = prod.cantidad

        calcularTotalCarrito()
        localStorage.setItem('carrito', JSON.stringify(carrito))
      }
      // restar cantidad del carrito

      let menosProducto = document.getElementById(`menos-producto${prod.id}`)
      menosProducto.onclick = function () {
        prod.cantidad--
        showCantidad.innerText = prod.cantidad

        calcularTotalCarrito()
        localStorage.setItem('carrito', JSON.stringify(carrito))
      }

    })
  }
  if (contadorCarrito) {
    contadorCarrito.innerText = carrito.length
  }


  // Calcular el total del carrito
  if (precioTotal) {
    calcularTotalCarrito()
  }

  // Actualizo el almacenamiento local
  localStorage.setItem('carrito', JSON.stringify(carrito))
  actualizarDropdown()
  actualizarDropdownProductos()
}

function calcularTotalCarrito() {
  let total = 0
  if (carrito.length > 0) {
    total = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)
  }
  precioTotal.innerText = total
}

// boton pagar carrito

let pagarCarrito = document.getElementById(`pagar-carrito`);

pagarCarrito.addEventListener('click', () => {
  Swal.fire({
    title: 'Realizar compra',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Pagar ahora',
    cancelButtonText: 'Volver'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Compra realizada',
        'Tu compra esta en camino.',
        'success'
      ).then((result) => {
        vaciarCarrito()
        window.location.href = "productos.html";
      })
    }
  })
});