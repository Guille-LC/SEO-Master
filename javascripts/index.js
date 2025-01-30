//Opcion 1 para escuchar eventos click
let botonUno = document.getElementById("botonuno");
botonUno.addEventListener("click", () => alert("Click uno escuchado!"));

//Opcion 2 para escuchar eventos click
let botonDos = document.getElementById("botondos");
botonDos.onclick = () => alert("Click dos escuchado!")