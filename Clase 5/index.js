/* const persona1 = {
    nombre: "pepito",
    edad: 45,
    direccion: "AV",
};

console.log(persona1.edad);
console.log(persona1.direccion);
console.log(persona1.nombre);

const persona2 = {
    nombre: "pepa",
    edad: 40,
    direccion: "AV",
};

let valor = "nombre";
console.log(persona2[valor]); */

class producto{
    constructor(nombre, img, precio,){
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
    }
}

const producto1 = new producto("Mesa", "imagen", 20000);
const producto2 = new producto("cCama", "imagencama", 30000);
console.log(producto1)
console.log(producto2)