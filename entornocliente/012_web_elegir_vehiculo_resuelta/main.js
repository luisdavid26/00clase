// @ts-check
//
/**
 *
 * Instrucciones:
 *
 * En este ejercicio, escribirás un código que te ayudará a prepararte para comprar un
 * vehículo.
 *
 * Tienes tres tareas, una para determinar si necesitarás obtener una licencia, otra
 * para ayudarte a elegir entre dos vehículos y otra para estimar el precio aceptable
 * de un vehículo usado.
 *
 */

/**
 *
 * Tarea 1: Determina si necesitas una licencia para conducir.
 *
 * Algunos tipos de vehículos requieren un permiso de conducir para conducirlos.
 * Supongamos que sólo los tipos "coche" y "camión" requieren licencia, todo lo demás
 * se puede conducir sin licencia.
 *
 * Implementa la función necesitaLicencia(tipo) que toma el tipo de vehículo y devuelve un
 * booleano indicando si necesitas una licencia para ese tipo de vehículo.
 *
 * PISTAS ADICIONALES:
 *
 * Utiliza el operador igual estricto para comprobar si tu entrada es igual a una cadena
 * determinada.
 *
 * Utilice uno de los dos operadores lógicos que aprendió en el concepto booleano para
 * combinar los dos requisitos.
 *
 * No necesitas una sentencia if para resolver esta tarea. Puedes devolver directamente
 * la expresión booleana construida.
 *
 *
 *
 * Determina si necesitas o no un permiso para conducir un determinado tipo de vehículo.
 *
 * @param {string} tipo
 * @returns {boolean} si se necesita una licencia
 */
function necesitaLicencia(tipo) {
  return tipo === "coche" || tipo === "camión";
}

/**
 * Tarea 2: Elija entre dos posibles vehículos para comprar.
 * 
 * Evalúa las opciones de vehículos disponibles. Consigues reducirlo a dos opciones 
 * pero necesitas ayuda para tomar la decisión final. Para ello implementa la función 
 * eligeVehículo(opcion1, opcion2) que toma dos vehículos como argumentos y devuelve una 
 * decisión que incluye la opción que viene primero en el orden del diccionario.
 * 
 * PISTAS ADICIONALES:
 * 
 * Utilice un operador relacional para determinar qué opción aparece en primer lugar en 
 * el orden del diccionario.
 * 
 * A continuación, establezca el valor de una variable auxiliar en función del resultado 
 * de dicha comparación con la ayuda de una sentencia if-else.
 * 
 * Por último, construya la sentencia de recomendación. Para ello, puede utilizar el 
 * operador de suma para concatenar las dos cadenas.

 * 
 * 
 * Ayuda a elegir entre dos opciones recomendando la que aparece en primer lugar en el 
 * orden del diccionario.
 *
 * @param {string} opcion1
 * @param {string} opcion2
 * @returns {string} una frase de consejo sobre qué opción elegir
 */
function eligeVehiculo(opcion1, opcion2) {
  if (opcion1 < opcion2) {
    return "Te recomiendo elegir " + opcion1;
  } else {
    return "Te recomiendo elegir " + opcion2;
  }}

/**
 * Tarea 3: Calcule una estimación del precio de un vehículo usado.
 * 
 * Ahora que ha tomado una decisión, quiere asegurarse de que le ofrecen un precio 
 * justo en el concesionario. Como estás interesado en comprar un vehículo usado, 
 * el precio depende de la antigüedad del vehículo. Para hacer una estimación 
 * aproximada, supongamos que, si el vehículo tiene menos de 3 años, cuesta el 80% 
 * del precio original que tenía cuando era nuevo. Si tiene más de 10 años, cuesta 
 * el 50%. Si el vehículo tiene al menos 3 años pero no más de 10, cuesta el 70% 
 * del precio original.
 * 
 * Implementa la función calculateResellPrice(originalPrice, age) que aplica esta 
 * lógica usando if, else if y else (hay otras formas si quieres practicar). Toma 
 * como argumentos el precio original y la antigüedad del vehículo y devuelve el 
 * precio estimado en el concesionario.
 * 
 * PISTAS ADICIONALES:
 * 
 * Empieza por determinar el porcentaje en función de la antigüedad del vehículo. 
 * Guárdelo en una variable auxiliar. Utilice una sentencia if-else como se 
 * menciona en las instrucciones.
 * 
 * En las dos condiciones if, utilice operadores relacionales para comparar la 
 * antigüedad del vehículo con los valores umbral.
 * 
 * Para calcular el resultado, aplique el porcentaje al precio original. Por 
 * ejemplo, el 30% de x puede calcularse dividiendo 30 entre 100 y multiplicando 
 * por x.

 * 
 * Calcula una estimación del precio de un vehículo usado en el concesionario
 * basándose en el precio original y la antigüedad del vehículo.
 *
 * @param {number} precioOriginal
 * @param {number} edad
 * @returns {number} precio de reventa previsto en el concesionario
 */
function calcularPrecioVenta(precioOriginal, edad) {
  let porcentaje;
  if (edad < 3) {
    porcentaje = 0.8;
  } else if (edad > 10) {
    porcentaje = 0.5;
  } else {
    porcentaje = 0.7;
  }
  return precioOriginal * porcentaje;
}

console.log("VAMOS A TESTEAR LA APLICACIÓN WEB...");

console.log(
  "============================================================================"
);
console.log(
  "                 COMPROBANDO SI LA PRIMERA TAREA ES CORRECTA                "
);
console.log(
  "============================================================================"
);

console.log("TEST 1");

let cadena = "coche";

console.log("Cuando el vehículo a conducir es un " + cadena);

if (necesitaLicencia(cadena)) {
  console.log("Necesito licencia de conducir para poder manejar un " + cadena);

  console.log("Paso 1 CORRECTO");
} else {
  console.log(
    "No necesito licencia de conducir para poder manejar un " + cadena
  );

  console.log("Ha fallado el PRIMER paso del test");
}

console.log(
  "============================================================================"
);

console.log("TEST 2");

cadena = "camion";

console.log("Cuando el vehículo a conducir es un " + cadena);

if (necesitaLicencia(cadena)) {
  console.log("Necesito licencia de conducir para poder manejar un " + cadena);

  console.log("Paso 2 CORRECTO");
} else {
  console.log(
    "No necesito licencia de conducir para poder manejar un " + cadena
  );

  console.log("Ha fallado el SEGUNDO paso del test");
}

console.log(
  "============================================================================"
);

console.log("TEST 3");

cadena = "bici";

console.log("Cuando el vehículo a conducir es un " + cadena);

if (!necesitaLicencia(cadena)) {
  console.log("Necesito licencia de conducir para poder manejar un " + cadena);

  console.log("Paso 3 CORRECTO");
} else {
  console.log(
    "No necesito licencia de conducir para poder manejar un " + cadena
  );

  console.log("Ha fallado el TERCER paso del test");
}

console.log(
  "============================================================================"
);

console.log("TEST 4");

cadena = "cochecito";

console.log("Cuando el vehículo a conducir es un " + cadena);

if (!necesitaLicencia(cadena)) {
  console.log("Necesito licencia de conducir para poder manejar un " + cadena);

  console.log("Paso 4 CORRECTO");
} else {
  console.log(
    "No necesito licencia de conducir para poder manejar un " + cadena
  );

  console.log("Ha fallado el CUARTO paso del test");
}

console.log(
  "============================================================================"
);

console.log("TEST 5");

cadena = "e-scooter";

console.log("Cuando el vehículo a conducir es un " + cadena);

if (!necesitaLicencia(cadena)) {
  console.log("Necesito licencia de conducir para poder manejar un " + cadena);

  console.log("Paso 5 CORRECTO");
} else {
  console.log(
    "No necesito licencia de conducir para poder manejar un " + cadena
  );

  console.log("Ha fallado el QUINTO paso del test");
}

console.log(
  "============================================================================"
);
console.log(
  "                 COMPROBANDO SI LA SEGUNDA TAREA ES CORRECTA                "
);
console.log(
  "============================================================================"
);

console.log("TEST 6");

let opcion1 = "Bugatti Veyron";
let opcion2 = "Ford Pinto";
let resultado = "";
resultado = eligeVehiculo(opcion1, opcion2);

console.log(
  "Se esperaba el resultado: Bugatti Veyron is clearly the better choice."
);
console.log("Y he obtenido el resultado: " + resultado);

if ("Bugatti Veyron is clearly the better choice." == resultado) {
  console.log("Son iguales");

  console.log("Test 6 CORRECTO");
} else {
  console.log("No son iguales");

  console.log("Ha fallado el SEXTO paso del test");
}

console.log("");
console.log("");

opcion1 = "Chery EQ";
opcion2 = "Kia Niro Elektro";
resultado = "";
resultado = eligeVehiculo(opcion1, opcion2);

console.log("Se esperaba el resultado: Chery EQ is clearly the better choice.");
console.log("Y he obtenido el resultado: " + resultado);

if ("Chery EQ is clearly the better choice." == resultado) {
  console.log("Son iguales");

  console.log("Test 6 CORRECTO");
} else {
  console.log("No son iguales");

  console.log("Ha fallado el SEXTO paso del test");
}

console.log(
  "============================================================================"
);

console.log("TEST 7");

opcion1 = "Ford Pinto";
opcion2 = "Bugatti Veyron";
resultado = "";
resultado = eligeVehiculo(opcion1, opcion2);

console.log(
  "Se esperaba el resultado: Bugatti Veyron is clearly the better choice."
);
console.log("Y he obtenido el resultado: " + resultado);

if ("Bugatti Veyron is clearly the better choice." == resultado) {
  console.log("Son iguales");

  console.log("Test 7 CORRECTO");
} else {
  console.log("No son iguales");

  console.log("Ha fallado el SEPTIMO paso del test");
}

console.log("");
console.log("");

opcion1 = "2020 Gazelle Medeo";
opcion2 = "2018 Bergamont City";
resultado = "";
resultado = eligeVehiculo(opcion1, opcion2);

console.log(
  "Se esperaba el resultado: 2018 Bergamont City is clearly the better choice."
);
console.log("Y he obtenido el resultado: " + resultado);

if ("2018 Bergamont City is clearly the better choice." == resultado) {
  console.log("Son iguales");

  console.log("Test 7 CORRECTO");
} else {
  console.log("No son iguales");

  console.log("Ha fallado el SEPTIMO paso del test");
}

console.log(
  "============================================================================"
);

console.log(
  "============================================================================"
);
console.log(
  "                 COMPROBANDO SI LA TERCERA TAREA ES CORRECTA                "
);
console.log(
  "============================================================================"
);

console.log("TEST 8");

let precioOriginal = 40000;
let antiguedad = 2;
let precioOcasion = 0;
let precioEsperado = 0;
precioOcasion = calcularPrecioVenta(precioOriginal, antiguedad);
precioEsperado = 32000;

console.log(
  `Con un precio nuevo de ${precioOriginal} y una antiguedad del vehículo de ${antiguedad}. Se esperaba el resultado: ${precioEsperado}.`
);
console.log("Y he obtenido el precio de ocasión: " + precioOcasion);

if (precioOcasion === precioEsperado) {
  console.log("Son iguales");

  console.log("Test 8 CORRECTO");
} else {
  console.log("No son iguales");

  console.log("Ha fallado el OCTAVO paso del test");
}

console.log(
  "============================================================================"
);

console.log("TEST 9");

precioOriginal = 40000;
antiguedad = 12;
precioOcasion = 0;
precioEsperado = 0;
precioOcasion = calcularPrecioVenta(precioOriginal, antiguedad);
precioEsperado = 20000;

console.log(
  `Con un precio nuevo de ${precioOriginal} y una antiguedad del vehículo de ${antiguedad}. Se esperaba el resultado: ${precioEsperado}.`
);
console.log("Y he obtenido el precio de ocasión: " + precioOcasion);

if (precioOcasion === precioEsperado) {
  console.log("Son iguales");

  console.log("Test 9 CORRECTO");
} else {
  console.log("No son iguales");

  console.log("Ha fallado el NOVENO paso del test");
}

console.log(
  "============================================================================"
);

console.log("TEST 10");

precioOriginal = 25000;
antiguedad = 7;
precioOcasion = 0;
precioEsperado = 0;
precioOcasion = calcularPrecioVenta(precioOriginal, antiguedad);
precioEsperado = 17500;

console.log(
  `Con un precio nuevo de ${precioOriginal} y una antiguedad del vehículo de ${antiguedad}. Se esperaba el resultado: ${precioEsperado}.`
);
console.log("Y he obtenido el precio de ocasión: " + precioOcasion);

if (precioOcasion === precioEsperado) {
  console.log("Son iguales");

  console.log("Test 10 CORRECTO");
} else {
  console.log("No son iguales");

  console.log("Ha fallado el DECIMO paso del test");
}

console.log(
  "============================================================================"
);

console.log("TEST 11");

precioOriginal = 40000;
antiguedad = 3;
precioOcasion = 0;
precioEsperado = 0;
precioOcasion = calcularPrecioVenta(precioOriginal, antiguedad);
precioEsperado = 28000;

console.log(
  `Con un precio nuevo de ${precioOriginal} y una antiguedad del vehículo de ${antiguedad}. Se esperaba el resultado: ${precioEsperado}.`
);
console.log("Y he obtenido el precio de ocasión: " + precioOcasion);

if (precioOcasion === precioEsperado) {
  console.log("Son iguales");

  console.log("Test 11 CORRECTO");
} else {
  console.log("No son iguales");

  console.log("Ha fallado el UNDECIMO paso del test");
}

console.log(
  "============================================================================"
);

console.log("TEST 12");

precioOriginal = 25000;
antiguedad = 10;
precioOcasion = 0;
precioEsperado = 0;
precioOcasion = calcularPrecioVenta(precioOriginal, antiguedad);
precioEsperado = 17500;

console.log(
  `Con un precio nuevo de ${precioOriginal} y una antiguedad del vehículo de ${antiguedad}. Se esperaba el resultado: ${precioEsperado}.`
);
console.log("Y he obtenido el precio de ocasión: " + precioOcasion);

if (precioOcasion === precioEsperado) {
  console.log("Son iguales");

  console.log("Test 12 CORRECTO");

  console.log(
    "¡¡¡¡ FELICIDADES, HAS COMPLETADO ESTA ACTIVIDAD CORRECTAMENTE !!!!"
  );
} else {
  console.log("No son iguales");

  console.log("Ha fallado el DUODECIMO paso del test");
}

console.log(
  "============================================================================"
);
