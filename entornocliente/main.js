console.log(
  "Ejecutando la web básica y despues aparecen algunos elementos añadidos."
);
console.log("");
console.log("");

// Variables y constantes

const nombre = "luis";
const appellido = "ortiz";

let valorDado = 5;
valorDado = 4;

//let valorDado = 4;

/* Esta última variable está mal declarada y salta un error porque no
	se pueden declarar dos variables con el mismo nombre dos veces. Si
	descomentamos la segunda línea donde se declara la variable por segunda vez
	veremos que el navegador envía un error por consola avisando de ello   */

if (true) {
  //let nombre2 = nombre + " Manuel";
  //Si quitas el siguiente comentario antes comenta la línea anterior
  var nombre2 = nombre + " ortiz"; //Prueba a descomentar esta línea a ver que sucede
  // ¿Qué ha ocurrido?
}

//console.log(nombre2); //Quita este comentario para probar el caso anterior

//¿Qué ocurrirá si quito el comentario de la línea siguiente?
console.log(construirNombreCompleto("Luis", "Alfonso"));

function construirNombreCompleto(nombre1, nombre2) {
  return nombre1 + " " + nombre2;
}

console.log(nombre, appellido, valorDado);
// ¿Qué ocurrirá si quito los comentarios de las líneas siguientes?
console.log(nombre2);
console.log(nombre);

let holaMundo = function () {
  alert("Hola mundo!!");
};

holaMundo();
function potencia(base, exponente) {
  let valor = 1;
  for (let i = 1; i <= exponente; i++) {
    valor = valor * base;
  }
  return valor;
}
console.log(potencia(8, 4));

let potenciaflecha = (base, exponente) => {
  let valor = 1;

  for (let i = 1; i <= exponente; i++) {
    valor = valor * base;
  } 
  return valor;
};
alert(potenciaflecha(3, 4));




