const botonHints01 = document.getElementById('botHints01');
const botonHints02 = document.getElementById('botHints02');
const botonHints03 = document.getElementById('botHints03');
const botonHints04 = document.getElementById('botHints04');
const botonHints05 = document.getElementById('botHints05');
const botonHints06 = document.getElementById('botHints06');


const mostrar = (elemento) => {
    elemento.style.display = 'block';
}

const ocultar = (elemento) => {
    elemento.style.display = 'none';
}

const mostrarOcultar = (id) => {
    let div = document.getElementById(id);

    if (window.getComputedStyle(div).display !== 'none') {
        ocultar(div);
        return false;
    }
    mostrar(div);
};


botonHints01.addEventListener('click', function (params) {
    mostrarOcultar("divHints01");
});

botonHints02.addEventListener('click', function (params) {
    mostrarOcultar("divHints02");
});

botonHints03.addEventListener('click', function (params) {
    mostrarOcultar("divHints03");
});

botonHints04.addEventListener('click', function (params) {
    mostrarOcultar("divHints04");
});

botonHints05.addEventListener('click', function (params) {
    mostrarOcultar("divHints05");
});

// botonHints06.addEventListener('click', function (params) {
//     mostrarOcultar("divHints06");
// });