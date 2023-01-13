// carrito
const contenedorProducto = document.getElementById('contenedor-producto')

const contenedorCarrito = document.getElementById('carrito-contenedor')

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
botonVaciar.addEventListener('click', () => {
  carrito.length = 0
  actualizarCarrito()
})

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
  if (carrito.length > 0 ) {
    const div = document.createElement('li')
    div.innerHTML = '<div class="text-center"><div><h3>Ir al carrito</h3></div></div>'
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

  contenedorCarrito.innerHTML = ""

  // actualiza la vista del carrito
  carrito.forEach((prod) => {
    const div = document.createElement('div')
    div.innerHTML = `
      <img src="../img/${prod.img}" class="card-img-top tarjeta-img" alt=" "max-width:50px">
      <p>${prod.nombres}</p>
      <p>Precio: ${prod.precio}</p>
      <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
      <button onclick = "eliminarDelCarrito(${prod.id})" class="btn btn-outline-danger">Eliminar</button>
      `
    contenedorCarrito.appendChild(div)
  })
  contadorCarrito.innerText = carrito.length

  // Calcular el total del carrito
  let total = 0
  if (carrito.length > 0) {
    total = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)
  }
  precioTotal.innerText = total

  // Actualizo el almacenamiento local
  localStorage.setItem('carrito', JSON.stringify(carrito))
  actualizarDropdown()
  actualizarDropdownProductos()
}
