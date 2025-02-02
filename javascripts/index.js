//Opcion 1 para escuchar eventos click
let botonUno = document.getElementById("botonuno");
botonUno.addEventListener("click", () => alert("Click uno escuchado!"));

//Opcion 2 para escuchar eventos click
let botonDos = document.getElementById("botondos");
botonDos.onclick = () => alert("Click dos escuchado!")

//Opcion 3 pero con una funcion declarada afuera
const escucharClick = () => alert("Click tres escuchado!");
let botonTres = document.getElementById("botontres");
botonTres.addEventListener("click", escucharClick);

