// @ts-check

/**
 * Recupera una carta del array de cartas.
 *
 * @param {number[]} cartas
 * @param {number} posicion
 *
 * @returns {number} la carta
 */
function getItem(cartas, posicion) {
if (posicion<0||posicion >= cartas.length){
  throw new Error('la posicion es incorrecta')
}
return cartas[posicion];
}

/**
 * Intercambia una carta con cartaNueva en el array
 *
 * @param {number[]} cartas
 * @param {number} posicion
 * @param {number} cartaNueva
 *
 * @returns {number[]} las cartas con el cambio aplicado
 */
function setItem(cartas, posicion, cartaNueva) {
  if (posicion<0||posicion >= cartas.length){
    throw new Error('la posicion es incorrecta')
  }
cartas[posicion]=cartaNueva;
return cartas;

}

/**
 * Inserta cartaNueva al final del array de cartas
 *
 * @param {number[]} cartas
 * @param {number} cartaNueva
 *
 * @returns {number [] } las cartas con la cartaNueva aplicada
 */
function insertItemAtTop(cartas, cartaNueva) {
cartas.push(cartaNueva);

return cartas;
}

/**
 * Saca una carta del array
 *
 * @param {number[]} cartas
 * @param {number} posicion
 *
 * @returns {number[]} las cartas sin la carta recien borrada
 */
function removeItem(cartas, posicion) {
  if (posicion<0||posicion >= cartas.length){
    throw new Error('la posicion es incorrecta')
  }
cartas.splice(posicion,1);

return cartas;
}

/**
 * Saca una carta del final del array de cartas
 *
 * @param {number[]} cartas
 *
 * @returns {number[]} las cartas sin la carta borrada
 */
function removeItemFromTop(cartas) {
cartas.pop();
return cartas;

}

/**
 * Inserta cartaNueva al principio del array cartas
 *
 * @param {number[]} cartas
 * @param {number} cartaNueva
 *
 * @returns {number[]} las cartas incluyendo la nueva carta
 */

function insertItemAtBottom(cartas, cartaNueva) {
cartas.unshift(cartaNueva);
return cartas;
}

/**
 * Quita una carta del principio del array cartas cartas
 *
 * @param {number[]} cartas
 *
 * @returns {number[]} las cartas sin la carta borrada
 */
function removeItemAtBottom(cartas) {
cartas.shift();
return cartas;
}

/**
 * Compara el numero de cartas con el tamaño indicado en tamArray
 *
 * @param {number[]} cartas
 * @param {number} tamArray
 *
 * @returns {boolean} verdadero si son exactamente iguales tamArray y el numero de cartas, falso en cualquier otro caso
 */
function checkSizeOfStack(cartas, tamArray) {
if(cartas.length==tamArray){
  return true;
}else return false;

}

/*

TESTING APLICATION WEB

*/

console.log("Revisando el ejercicio:");

console.log(
  "============================================================================"
);
console.log(
  "                 COMPROBANDO LA RETIRADA DE CARTAS DEL ARRAY                "
);
console.log(
  "============================================================================"
);

console.log("TEST 1");

console.log("Cogiendo la primera carta.");

let resultado, esperado;
let stack = [1, 2, 3];
esperado = 1;

resultado = getItem(stack, 0);

console.log(
  "Si el array de cartas es: " +
    stack +
    " y extraemos la primera carta del array el resultado esperado será: " +
    esperado
);

if (resultado !== esperado) {
  throw new Error(`${resultado} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 1 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log("TEST 2");

console.log("Cogiendo la carta de enmedio.");

stack = [4, 5, 6];
esperado = 5;

resultado = getItem(stack, 1);

console.log(
  "Si el array de cartas es: " +
    stack +
    " y extraemos la carta de mitad del array el resultado esperado será: " +
    esperado
);

if (resultado !== esperado) {
  throw new Error(`${resultado} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 2 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log("TEST 3");

console.log("Cogiendo la carta del final.");

stack = [9, 8, 7];
esperado = 7;

resultado = getItem(stack, 2);

console.log(
  "Si el array de cartas es: " +
    stack +
    " y extraemos la última carta del array el resultado esperado será: " +
    esperado
);

if (resultado !== esperado) {
  throw new Error(`${resultado} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 3 correctamente superado.`);
}

console.log(
  "============================================================================"
);
console.log(
  "                COMPROBANDO INTERCAMBIO DE UNA CARTA EN EL ARRAY            "
);
console.log(
  "============================================================================"
);

console.log("TEST 4");

console.log("Reemplazando la primera carta por un 7.");

stack = [1, 2, 3];
let posicion = 0;
let reemplazo = 7;
esperado = [7, 2, 3];

console.log(
  "Si el array de cartas es: " +
    stack +
    " y sustituimos la primera carta por un 7 el resultado esperado será: " +
    esperado
);

resultado = setItem(stack, posicion, reemplazo);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 3 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log("TEST 5");

console.log("Reemplazando la carta de enmedio con un 5.");

stack = [2, 2, 2];
posicion = 1;
reemplazo = 5;
esperado = [2, 5, 2];

console.log(
  "Si el array de cartas es: " +
    stack +
    " y reemplazamos la carta de enmedio con un 5 el resultado esperado será: " +
    esperado
);

resultado = setItem(stack, posicion, reemplazo);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 5 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log("TEST 6");

console.log("Reemplazando la última carta con un 7.");

stack = [7, 7, 6];
posicion = 2;
reemplazo = 7;
esperado = [7, 7, 7];

console.log(
  "Si el array de cartas es: " +
    stack +
    " y reemplazamos la última carta con un 7 el resultado esperado será: " +
    esperado
);

resultado = setItem(stack, posicion, reemplazo);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 6 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log(
  "============================================================================"
);
console.log(
  "                COMPROBANDO INSERTAR UNA CARTA EN EL FINAL DEL ARRAY            "
);
console.log(
  "============================================================================"
);

console.log(
  "============================================================================"
);

console.log("TEST 7");

console.log("Inserta una carta al final.");

stack = [1];
let nuevaCarta = 5;
esperado = [1, 5];

console.log(
  "Si el array de cartas es: " +
    stack +
    " y añadimos una carta al final del array el resultado esperado será: " +
    esperado
);

resultado = insertItemAtTop(stack, nuevaCarta);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 7 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log("TEST 8");

console.log("Insertando una tercera carta al final.");

stack = [1, 5];
nuevaCarta = 9;
esperado = [1, 5, 9];

console.log(
  "Si el array de cartas es: " +
    stack +
    " y añadimos una carta al final del array el resultado esperado será: " +
    esperado
);

resultado = insertItemAtTop(stack, nuevaCarta);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 8 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log("TEST 9");

console.log("Insertando una cuarta carta al final.");

stack = [1, 5, 9];
nuevaCarta = 2;
esperado = [1, 5, 9, 2];

console.log(
  "Si el array de cartas es: " +
    stack +
    " y añadimos una carta al final del array el resultado esperado será: " +
    esperado
);

resultado = insertItemAtTop(stack, nuevaCarta);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 9 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log(
  "============================================================================"
);

console.log("TEST 10");

console.log("Insertando una cuarta carta distinta al final.");

stack = [1, 5, 9];
nuevaCarta = 8;
esperado = [1, 5, 9, 8];

console.log(
  "Si el array de cartas es: " +
    stack +
    " y añadimos una carta al final del array el resultado esperado será: " +
    esperado
);

resultado = insertItemAtTop(stack, nuevaCarta);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 10 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log(
  "============================================================================"
);

console.log("TEST 11");

console.log("Insertando multiples cartas al final.");

stack = [1];
esperado = [1, 5, 9];

console.log(
  "Si el array de cartas es: " +
    stack +
    " y añadimos varias cartas al final del array el resultado esperado será: " +
    esperado
);

nuevaCarta = 5;
resultado = insertItemAtTop(stack, nuevaCarta);

nuevaCarta = 9;
resultado = insertItemAtTop(stack, nuevaCarta);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 11 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log(
  "============================================================================"
);
console.log(
  "                      COMPROBANDO QUITAR CARTA EN EL ARRAY                  "
);
console.log(
  "============================================================================"
);

console.log(
  "============================================================================"
);

console.log("TEST 12");

console.log("Quitar carta al principio del array.");

stack = [1, 2, 3, 4];
esperado = [2, 3, 4];
posicion = 0;

console.log(
  "Si el array de cartas es: " +
    stack +
    " y quitamos la carta inicial del array el resultado esperado será: " +
    esperado
);

resultado = removeItem(stack, posicion);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 12 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log("TEST 13");

console.log("Quitar carta del final del array.");

stack = [1, 2, 3, 4];
esperado = [1, 2, 3];
posicion = 3;

console.log(
  "Si el array de cartas es: " +
    stack +
    " y quitamos la carta final del array el resultado esperado será: " +
    esperado
);

resultado = removeItem(stack, posicion);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 13 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log("TEST 14");

console.log("Quitar la segunda carta del array.");

stack = [1, 2, 3, 4];
esperado = [1, 3, 4];
posicion = 1;

console.log(
  "Si el array de cartas es: " +
    stack +
    " y quitamos la segunda carta del array el resultado esperado será: " +
    esperado
);

resultado = removeItem(stack, posicion);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 14 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log("TEST 15");

console.log("Quitar las dos cartas de enmedio del array.");

stack = [1, 2, 3, 4];
esperado = [1, 4];
posicion = 1;

console.log(
  "Si el array de cartas es: " +
    stack +
    " y quitamos la segunda carta del array el resultado esperado será: " +
    esperado
);

resultado = removeItem(stack, posicion);
resultado = removeItem(stack, posicion);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 15 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log(
  "============================================================================"
);
console.log(
  "                      COMPROBANDO QUITAR CARTA EN EL ARRAY                  "
);
console.log(
  "============================================================================"
);

console.log("TEST 16");

console.log("Quitar la única carta del array.");

stack = [1];
esperado = [];

console.log(
  "Si el array de cartas es: " +
    stack +
    " y quitamos la única carta del array el resultado esperado será: " +
    esperado
);

resultado = removeItemFromTop(stack);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 16 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log("TEST 17");

console.log("Quitar la carta del final del array.");

stack = [1, 2, 3];
esperado = [1, 2];

console.log(
  "Si el array de cartas es: " +
    stack +
    " y quitamos la última carta del array el resultado esperado será: " +
    esperado
);

resultado = removeItemFromTop(stack);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 17 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log("TEST 18");

console.log("Quitar la dos última cartas del final del array.");

stack = [1, 2, 3];
esperado = [1];

console.log(
  "Si el array de cartas es: " +
    stack +
    " y quitamos las dos últimas cartas del array el resultado esperado será: " +
    esperado
);

resultado = removeItemFromTop(stack);
resultado = removeItemFromTop(stack);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 18 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log(
  "============================================================================"
);
console.log(
  "                 COMPROBANDO INSERTAR CARTA AL INICIO DEL ARRAY             "
);
console.log(
  "============================================================================"
);

console.log("TEST 19");

console.log("Añadir una carta al inicio del array.");

stack = [1];
esperado = [5, 1];
nuevaCarta = 5;

console.log(
  "Si el array de cartas es: " +
    stack +
    " y añadimos una carta al inicio del array el resultado esperado será: " +
    esperado
);

resultado = insertItemAtBottom(stack, nuevaCarta);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 19 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log("TEST 20");

console.log("Añadir una tercera carta al inicio del array.");

stack = [5, 1];
esperado = [9, 5, 1];
nuevaCarta = 9;

console.log(
  "Si el array de cartas es: " +
    stack +
    " y añadimos una tercera carta al inicio del array el resultado esperado será: " +
    esperado
);

resultado = insertItemAtBottom(stack, nuevaCarta);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 20 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log("TEST 21");

console.log("Añadir una cuarta carta al inicio del array.");

stack = [9, 5, 1];
esperado = [2, 9, 5, 1];
nuevaCarta = 2;

console.log(
  "Si el array de cartas es: " +
    stack +
    " y añadimos una cuarta carta al inicio del array el resultado esperado será: " +
    esperado
);

resultado = insertItemAtBottom(stack, nuevaCarta);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 21 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log("TEST 22");

console.log("Añadir una cuarta carta distinta al inicio del array.");

stack = [9, 5, 1];
esperado = [8, 9, 5, 1];
nuevaCarta = 8;

console.log(
  "Si el array de cartas es: " +
    stack +
    " y añadimos una cuarta carta distinta al inicio del array el resultado esperado será: " +
    esperado
);

resultado = insertItemAtBottom(stack, nuevaCarta);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 22 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log("TEST 23");

console.log("Añadir varias cartas al inicio del array.");

stack = [1];
esperado = [9, 5, 1];

console.log(
  "Si el array de cartas es: " +
    stack +
    " y añadimos varias cartas distintas al inicio del array el resultado esperado será: " +
    esperado
);
nuevaCarta = 5;
resultado = insertItemAtBottom(stack, nuevaCarta);
nuevaCarta = 9;
resultado = insertItemAtBottom(stack, nuevaCarta);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 23 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log(
  "============================================================================"
);
console.log(
  "                 COMPROBANDO ELIMINAR CARTA AL INICIO DEL ARRAY             "
);
console.log(
  "============================================================================"
);

console.log("TEST 24");

console.log("Eliminar la única carta al inicio del array.");

stack = [1];
esperado = [];

console.log(
  "Si el array de cartas es: " +
    stack +
    " y eliminamos la única carta del array el resultado esperado será: " +
    esperado
);

resultado = removeItemAtBottom(stack);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 24 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log("TEST 25");

console.log("Eliminar la carta al inicio del array.");

stack = [1, 2, 3];
esperado = [2, 3];

console.log(
  "Si el array de cartas es: " +
    stack +
    " y eliminamos la carta al inicio del array el resultado esperado será: " +
    esperado
);

resultado = removeItemAtBottom(stack);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 25 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log("TEST 26");

console.log("Eliminar dos cartas del inicio del array.");

stack = [1, 2, 3];
esperado = [3];

console.log(
  "Si el array de cartas es: " +
    stack +
    " y eliminamos las dos cartas al inicio del array el resultado esperado será: " +
    esperado
);

resultado = removeItemAtBottom(stack);
resultado = removeItemAtBottom(stack);

if (!compareArrays(stack, esperado)) {
  throw new Error(`${stack} es distinto de ${esperado}`);
} else {
  console.log("Se ha obtenido: " + resultado);
  console.log(`Test 26 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log(
  "============================================================================"
);
console.log(
  "                        COMPROBANDO EL TAMAÑO DEL ARRAY                     "
);
console.log(
  "============================================================================"
);

console.log("TEST 27");

console.log("Un array vacio tiene cero cartas.");

stack = [];
esperado = 0;

console.log(
  "Si el array de cartas es: " +
    stack +
    " y examinamos su tamaño el resultado esperado será: " +
    esperado
);

resultado = checkSizeOfStack(stack, 0);

if (!resultado) {
  throw new Error(`${resultado} es distinto de ${esperado}`);
} else if (!checkSizeOfStack(stack, 1)) {
  console.log(
    "Se ha obtenido " +
      resultado +
      " comparando el tamaño del array con el valor esperado."
  );
  console.log(`Test 27 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log("TEST 28");

console.log("Un array con una única carta tiene exactamente 1 carta.");

stack = [7];
esperado = 1;

console.log(
  "Si el array de cartas es: " +
    stack +
    " y examinamos su tamaño el resultado esperado será: " +
    esperado
);

if (checkSizeOfStack(stack, 0)) {
  throw new Error(
    "Se ha obtenido un error por que el tamaño del array no debe coincidir con el valor 0"
  );
} else if (!checkSizeOfStack(stack, 1)) {
  throw new Error(
    `Se ha obtenido por que el tamaño del array no coincide con el valor 1`
  );
} else if (checkSizeOfStack(stack, 2)) {
  throw new Error(
    "Se ha obtenido un error por que el tamaño del array no debe coincidir con el valor 2"
  );
} else {
  console.log("El tamaño del array es 1, no es ni 0, ni 2.");
  console.log(`Test 28 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log("TEST 29");

console.log("Un array con una 4 cartas tiene exactamente 4 cartas.");

stack = [2, 4, 6, 8];
esperado = 4;

console.log(
  "Si el array de cartas es: " +
    stack +
    " y examinamos su tamaño el resultado esperado será: " +
    esperado
);

if (checkSizeOfStack(stack, 3)) {
  throw new Error(
    "Se ha obtenido un error por que el tamaño del array no debe coincidir con el valor 3"
  );
} else if (!checkSizeOfStack(stack, 4)) {
  throw new Error(
    `Se ha obtenido por que el tamaño del array no coincide con el valor 4`
  );
} else if (checkSizeOfStack(stack, 5)) {
  throw new Error(
    "Se ha obtenido un error por que el tamaño del array no debe coincidir con el valor 5"
  );
} else {
  console.log("El tamaño del array es 4, no es ni 3, ni 5.");
  console.log(`Test 29 correctamente superado.`);
}

console.log(
  "============================================================================"
);

console.log("TEST 30");

console.log("Un array con 5 cartas tiene exactamente 5 cartas.");

stack = [1, 3, 5, 7, 9];
esperado = 5;

console.log(
  "Si el array de cartas es: " +
    stack +
    " y examinamos su tamaño el resultado esperado será: " +
    esperado
);

if (checkSizeOfStack(stack, 3)) {
  throw new Error(
    "Se ha obtenido un error por que el tamaño del array no debe coincidir con el valor 3"
  );
} else if (checkSizeOfStack(stack, 4)) {
  throw new Error(
    `Se ha obtenido por que el tamaño del array no coincide con el valor 4`
  );
} else if (!checkSizeOfStack(stack, 5)) {
  throw new Error(
    "Se ha obtenido un error por que el tamaño del array no debe coincidir con el valor 5"
  );
} else {
  console.log("El tamaño del array es 5, no es ni 3, ni 4.");
  console.log(`Test 30 correctamente superado.`);
  console.log(
    "============================================================================"
  );
  console.log(
    "============================================================================"
  );
  console.log(
    "FELICIDADES HAS CONSEGUIDO ACABAR CORRECTAMENTE EL TEST DE ESTA APLICACIÓN"
  );
  console.log(
    "============================================================================"
  );
  console.log(
    "============================================================================"
  );
}

console.log(
  "============================================================================"
);

function compareArrays(arr1, arr2) {
  // compare arrays
  const result = JSON.stringify(arr1) == JSON.stringify(arr2);
  // if result is true
  if (result) {
    return true;
  } else {
    return false;
  }
}
