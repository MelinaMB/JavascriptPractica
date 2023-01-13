// imput de usuarios y guardado
let usuariosNuevos;

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let usuario = {
    nombre: formulario.nombre.value,
    apellido: formulario.apellido.value,
  };

  let usuariosStorage = JSON.parse(localStorage.getItem("usuariosStorage"));
  if (usuariosStorage) {
    usuariosNuevos = usuariosStorage;
    //document.getElementById('mensaje').innerHTML=`Bienvenido ${usuario.apellido} ${usuario.nombre}`;
  } else {
    usuariosNuevos = [];
  }

  usuariosNuevos.push(usuario);

  localStorage.setItem("usuariosStorage" , JSON.stringify(usuariosNuevos));

  Swal.fire({
    title: 'Bienvenido',
    text: `${usuario.apellido} ${usuario.nombre}`,
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    
  }).then(function() {
    window.location = "index.html";
});
});
