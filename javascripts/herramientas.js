let botonAumentar = document.getElementById("aumentar");
let botonDisminuir = document.getElementById("disminuir");
let botonResetear = document.getElementById("reset");
let counter = document.getElementById("counter");

let contador = 0;

botonAumentar.addEventListener("click", () => {
    contador++;
    counter.innerText = contador
});

botonDisminuir.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        counter.innerText = contador;
    };
});

botonResetear.addEventListener("click", () => {
    counter.innerText = 0;
    contador = 0;
});

