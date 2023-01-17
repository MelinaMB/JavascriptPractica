let productos = []
let usuarioActual;

const obtenerProductos = async () => {
    try {
        const response = await fetch("data.json");
        productos = await response.json();
    } catch (error) {
        console.log(error);
    }
};

