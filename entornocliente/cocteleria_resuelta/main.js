// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determina cuanto tiempo toma preparar un coctail.
 *
 * @param {string} nombre
 * @returns {number} tiempo en minutos
 */
function tiempoParaCoctail(nombre) {
  switch(nombre) {
      case 'Pure Strawberry Joy':
          return 0.5;
      case 'Energizer':
      case 'Green Garden':
          return 1.5;
      case 'Tropical Island':
          return 3;
      case 'All or Nothing':
          return 5;
      default:
          return 2.5;
  }
}

/**
 * Calcula el numero de limas que necesitas cortar
 * para alcanzar cierto nivel de suministro.
 *
 * @param {number} trozosNecesitados
 * @param {string[]} limas
 * @returns {number} numero de limas cortadas
 */
function limasACortar(trozosNecesitados, limas) {
  let trozos = 0;
  let i = 0;
  while (i < limas.length && trozos < trozosNecesitados) {
      switch(limas[i]) {
          case 'small':
              trozos += 6;
              break;
          case 'medium':
              trozos += 8;
              break;
          case 'large':
              trozos += 10;
              break;
      }
      i++;
  }
  return i;
}

/**
 * Determina que coctail/es queda/n por preparar una vez finalizado el turno.
 *
 * @param {number} tiempoRestante
 * @param {string[]} pedidos
 * @returns {string[]} pedidos restantes una vez finalizado el tiempo
 */
function pedidosRestantes(tiempoRestante, pedidos) {
  let i = 0;
  do {
      tiempoRestante -= tiempoParaCoctail(pedidos[i]);
      i++;
  } while (i < pedidos.length && tiempoRestante >= tiempoParaCoctail(pedidos[i]));
  return pedidos.slice(i);
}

/*

TESTING APLICATION WEB

*/

console.log("Revisando el ejercicio:");

console.log(
  "============================================================================"
);
console.log(
  "            COMPROBANDO SI EL COCTAIL ES CORRECTAMENTE PREPARADO            "
);
console.log(
  "============================================================================"
);

function comprobandoTiempoPreparacion(coctail, tiempoEsperado) {
  coctailNecesario = coctail;
  esperado = tiempoEsperado;
  resultado = tiempoParaCoctail(coctailNecesario);

  console.log(
    "Si el coctail a preparar es: " +
      coctailNecesario +
      " ===> entonces el tiempo esperado será: " +
      esperado
  );

  if (resultado !== esperado) {
    throw new Error(`${resultado} es distinto de ${esperado}`);
  } else {
    console.log("Se ha obtenido: " + resultado);
    console.log(`Test ${numTest} correctamente superado.`);
  }
  return "";
}

let numTest = 1;
console.log("TEST " + numTest);

let coctailNecesario = "Pure Strawberry Joy";
let esperado = 0.5;
let resultado = tiempoParaCoctail("Pure Strawberry Joy");

comprobandoTiempoPreparacion(coctailNecesario, esperado);

console.log(
  "============================================================================"
);
numTest = 2;
console.log("TEST " + numTest);

comprobandoTiempoPreparacion("Energizer", 1.5);
console.log("");
comprobandoTiempoPreparacion("Green Garden", 1.5);
console.log("");
comprobandoTiempoPreparacion("Tropical Island", 3);
console.log("");
comprobandoTiempoPreparacion("All or Nothing", 5);

console.log(
  "============================================================================"
);
numTest = 3;
console.log("TEST " + numTest);

const defaultTime = 2.5;
comprobandoTiempoPreparacion("Limetime", defaultTime);
console.log("");
comprobandoTiempoPreparacion("Manic Organic", defaultTime);
console.log("");
comprobandoTiempoPreparacion("Papaya & Peach", defaultTime);
console.log("");

console.log(
  "============================================================================"
);
console.log(
  "            COMPROBANDO SI LOS TROZOS CORTADOS DE LIMA SON CORRECTOS        "
);
console.log(
  "============================================================================"
);

numTest = 4;
console.log("TEST " + numTest);
const limas = [
  "small",
  "large",
  "large",
  "medium",
  "small",
  "large",
  "large",
  "medium",
];

function comprobandoLimasCortadas(num, limas, expected) {
  esperado = expected;
  resultado = limasACortar(num, limas);

  console.log(
    "Si el numero de trozos de lima a cortar es: " +
      num +
      " ===> entonces se espera un valor de: " +
      esperado
  );

  if (resultado !== esperado) {
    throw new Error(`${resultado} es distinto de ${esperado}`);
  } else {
    console.log("Se ha obtenido: " + resultado);
    console.log(`Test ${numTest} correctamente superado.`);
  }
  return "";
}

comprobandoLimasCortadas(42, limas, 6);
comprobandoLimasCortadas(4, ["medium", "small"], 1);

console.log(
  "============================================================================"
);

numTest = 5;
console.log("TEST " + numTest);

comprobandoLimasCortadas(
  80,
  ["small", "large", "large", "medium", "small", "large", "large"],
  7
);

console.log(
  "============================================================================"
);

numTest = 6;
console.log("TEST " + numTest);

comprobandoLimasCortadas(0, ["small", "large", "medium"], 0);

console.log(
  "============================================================================"
);

numTest = 7;
console.log("TEST " + numTest);

comprobandoLimasCortadas(10, [], 0);

console.log(
  "============================================================================"
);
console.log(
  "                     COMPROBANDO PEDIDOS AL FINAL DEL TURNO                 "
);
console.log(
  "============================================================================"
);

numTest = 8;
console.log("TEST " + numTest);

function comprobandoPedidosFinalTurno(tiempo, pedidos, esperado) {
  let result = pedidosRestantes(tiempo, pedidos);
  let isEqual = JSON.stringify(esperado) === JSON.stringify(result);

  console.log(
    "Si los pedidos inicales son: " +
      pedidos +
      " al final del turno se espera que nos quede: " +
      esperado
  );

  if (!isEqual) {
    throw new Error(`${result} es distinto de ${esperado}`);
  } else {
    console.log("Se ha obtenido: " + result);
    console.log(`Test ${numTest} correctamente superado.`);
  }
}

let pedidos = [
  "Tropical Island",
  "Energizer",
  "Limetime",
  "All or Nothing",
  "Pure Strawberry Joy",
];
let expected = ["All or Nothing", "Pure Strawberry Joy"];

comprobandoPedidosFinalTurno(7, pedidos, expected);

console.log(
  "============================================================================"
);
numTest = 9;
console.log("TEST " + numTest);

pedidos = [
  "Pure Strawberry Joy",
  "Pure Strawberry Joy",
  "Vitality",
  "Tropical Island",
  "All or Nothing",
  "All or Nothing",
  "All or Nothing",
  "Green Garden",
  "Limetime",
];
expected = ["All or Nothing", "Green Garden", "Limetime"];

comprobandoPedidosFinalTurno(13, pedidos, expected);
console.log(
  "============================================================================"
);

numTest = 10;
console.log("TEST " + numTest);

pedidos = [
  "Energizer",
  "Green Garden",
  "Ruby Glow",
  "Pure Strawberry Joy",
  "Tropical Island",
  "Limetime",
];

expected = [];

comprobandoPedidosFinalTurno(12, pedidos, expected);

console.log(
  "============================================================================"
);

numTest = 11;
console.log("TEST " + numTest);

pedidos = ["Bananas Gone Wild", "Pure Strawberry Joy"];
expected = ["Pure Strawberry Joy"];

comprobandoPedidosFinalTurno(0.2, pedidos, expected);

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
