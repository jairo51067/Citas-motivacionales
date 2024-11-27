// *** Vamos a obtener los elementos referencia que vamos a modificar
let botonElem = document.getElementById("boton-cambiar-cita");
let citaElem = document.getElementById("cita");
let autorElem = document.getElementById("autor");

// Arreglo para almacenar los índices de citas utilizados, se crea para el arreglo de los numeros aleatorios
let indicesUtilizados = [];

// *** Ahora vamos a obtener un entero aleatorio pero sin que se repita
// Función para generar números aleatorios únicos
function generarEnteroAleatorio(min, max) {
    let indice;
    do {
        indice = Math.floor(Math.random() * (max - min) + min);
    } while (indicesUtilizados.includes(indice));
    indicesUtilizados.push(indice);
    // console.log(indicesUtilizados);
    return indice;
}

function cambiarCita() {
    if (indicesUtilizados.length === citas.length) {
        // Si ya se han utilizado todos los índices, reiniciamos el arreglo
        indicesUtilizados = [];
    }
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    citaElem.innerHTML = `"${citas[indiceAleatorio].texto}"`;
    autorElem.innerHTML = citas[indiceAleatorio].autor;
}

cambiarCita(); 

botonElem.addEventListener("click", cambiarCita);
