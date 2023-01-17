let contenedor = document.getElementById("container");

const traerProductos = async () => {
    try {
        const response = await fetch("data.json");
        const producs = await response.json();
    
        
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
          
              });
          
            } catch (error) {
                console.log (error);
            }
        };
    
    traerProductos();
    

   


