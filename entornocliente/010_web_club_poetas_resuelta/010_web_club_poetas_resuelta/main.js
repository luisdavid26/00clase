// @ts-check
//
// 👋🏽 Hola!
//
// Buena suerte con la política de puertas!

/*

INSTRUCCIONES:

Se ha abierto un nuevo club de poesía en la ciudad y estás pensando en asistir. 
Debido a que ha habido incidentes en el pasado, el club tiene una política de 
puertas muy específica que tendrás que dominar antes de intentar entrar.

Hay dos puertas en el club de poesía, una delantera y otra trasera, y ambas están 
vigiladas. Para entrar, tendrás que averiguar la contraseña del día.

La contraseña siempre se basa en un poema y puede obtenerse en un proceso de dos 
pasos.

El guardia recitará el poema, verso a verso, y tú tendrás que responder con la 
letra adecuada de ese verso.
A continuación, el guardia te dirá todas las letras con las que has respondido 
a la vez y tienes que escribirlas en un papel con un formato específico.

Los detalles del proceso dependen de la puerta por la que intentes entrar.

*/


/**
 * TAREA 1: TOMA LA PRIMERA LETRA DE UNA ORACION
 * 
 * Para determinar las letras de la contraseña de la puerta principal, tienes que 
 * responder con la primera letra del verso del poema que te recite el vigilante.
 * Para conseguir una buena contraseña, a los miembros del club de poesía les gusta 
 * utilizar poemas acrósticos. Esto significa que la primera letra de cada frase 
 * forma una palabra.
 * 
 * 
 * Así, cuando el guardia recite "Viendo amanecer en la playa,", responderás V, 
 * cuando el guardia recite "Esperando al fresquito de la noche.",", responderás E.
 * 
 * Implementa la función puertaDelanteraRespuesta que toma una línea del poema como 
 * argumento y devuelve la primera letra de esa línea.
 * 
 * 
 * PISTAS ADICIONALES:
 * 
 * Revise la documentación para saber cómo recuperar una letra determinada de una cadena.
 * 
 * Los índices empiezan a contar desde 0.
 * 
 * 
 * Responde con el caracter correcto, dada una línea del poema
 * , si este se dijera en la puerta de entrada.
 *
 * @param {string} linea
 * @returns {string}
 */
function puertaDelanteraRespuesta(linea) {
  return linea.charAt(0);
}


/**
 * 
 * TAREA 2: MAYUSCULAS CORRECTAS EN UNA PALABRA
 * 
 * Ahora que tienes todas las letras correctas, todo lo que necesitas hacer para 
 * obtener la contraseña de la puerta principal es escribir correctamente la 
 * palabra en mayúsculas.
 * 
 * Implementa la función puertaDelanteraClave que acepta una cadena (las letras 
 * combinadas que encontraste en la tarea 1) y la devuelve correctamente en 
 * mayúsculas.
 * 
 * PISTAS ADICIONALES:
 * 
 * Mayúsculas significa tener un único carácter en mayúscula, seguido de 
 * caracteres en minúscula.
 * 
 * Por tanto, primero hay que extraer la primera letra y convertirla en 
 * mayúscula.
 * 
 * Luego hay que determinar el resto de la cadena (todo lo que no sea el 
 * primer carácter).
 * 
 * El método slice puede ayudarte a hacerlo.
 * 
 * Después de aplicar la conversión a minúsculas, puedes combinar la primera 
 * letra con el resto utilizando el operador de suma +.
 * 
 * 
 * Construye la contraseña de la puerta de entrada, dada las letras de respuesta
 *
 * @param {string} palabra las letras con las que respondiste antes
 * @returns {string} la contraseña de la puerta de entrada
 */
function puertaDelanteraClave(palabra) {
  let primeraLetra = palabra.charAt(0).toUpperCase();

  let restoPalabra = palabra.slice(1).toLowerCase();

  let clave = primeraLetra + restoPalabra;
  return clave;
}


/**
 * 
 * TAREA 3: TOMA LA ULTIMA LETRA DE UNA ORACION.
 * 
 * Para determinar las letras de la contraseña de la puerta trasera, tienes 
 * que responder con la última letra del verso del poema que te recite el guardia.
 * 
 * Los miembros del club de poesía son muy listos. El poema antes mencionado 
 * también es telestiquio, lo que significa que la última letra de cada frase 
 * también forma una palabra:
 * 
 * Cuando el guardia recite "Viendo amanecer en la playa,", responderás a, cuando 
 * el guardia recite "Esperando al fresquito de la noche.", responderás e.
 * 
 * Tenga en cuenta que a veces el guardia hace pausas estilísticas (en forma de 
 * espacios en blanco) al principio o al final de una línea. Tendrás que ignorar 
 * esas pausas para obtener la letra correcta.
 * 
 * Implemente la función puertaTraseraRespuesta que toma una línea del poema como 
 * argumento y devuelve la última letra de esa línea que no sea un carácter de 
 * espacio en blanco.
 * 
 * PISTAS ADICIONALES:
 * 
 * Revise la introducción para averiguar cómo recuperar una letra determinada de 
 * una cadena.
 * 
 * El índice de la última letra puede derivarse de la propiedad .length de la cadena
 *  y del hecho de que los índices empiezan a contar en 0.
 * 
 * Las cadenas vienen con un método de recorte que elimina los espacios en blanco 
 * iniciales y finales.
 * 
 * 
 * 
 * Responde con el caracter correcto, dada una linea de un poema
 * , si este fue dicho en la puerta trasera.
 *
 * @param {string} linea
 * @returns {string}
 */
function puertaTraseraRespuesta(linea) {

  let linealimpia = linea.trim();

  let ultimaLetra = linealimpia.charAt(linealimpia.length - 1);

  return ultimaLetra;
}
/**
 * 
 * TAREA 4: HAY QUE SER EDUCADO.
 * 
 * Para entrar en el club de poesía por la puerta de atrás, hay que ser muy educado. 
 * Así que para obtener la contraseña, esta vez tienes que escribir correctamente la 
 * palabra en mayúsculas y añadir ', por favor' al final.
 * 
 * Implementa la función puertaTraseraClave que acepta una cadena (las letras 
 * combinadas que encontraste en la tarea 3) y devuelve la versión educada de la 
 * contraseña en mayúsculas.
 * 
 * PISTAS ADICIONALES:
 * 
 * Reutiliza una función existente para escribir la palabra en mayúsculas.
 * 
 * El operador de suma + puede utilizarse para concatenar dos cadenas.
 * 
 * 
 * Por ejemplo: puertaTraseraClave('Maria') => "Maria, por favor"
 * 
 * 
 * Construye la contraseña de la puerta trasera, dada las letras de respuesta
 * letters.
 *
 * @param {string} palabra the letters you responded with before
 * @returns {string} the back door password
 */
function puertaTraseraClave(palabra) {
 let palabramayus = palabra.toUpperCase();
  let clave = palabramayus + ", por favor";
  return clave;
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

const VERANO = [
  "Viendo amanecer en la playa,",
  "Esperando al fresquito de la noche.",
  "Rafagas de aire a la orilla del mar,",
  "Apetece un helado en el borde de la piscina.",
  "Nadando de noche en el mar,",
  "Olvidas todos los problemas de la vida",
];

let passKey = puertaDelanteraRespuesta(VERANO[0]);
passKey = passKey + puertaDelanteraRespuesta(VERANO[1]);
passKey = passKey + puertaDelanteraRespuesta(VERANO[2]);
passKey = passKey + puertaDelanteraRespuesta(VERANO[3]);
passKey = passKey + puertaDelanteraRespuesta(VERANO[4]);
passKey = passKey + puertaDelanteraRespuesta(VERANO[5]);

console.log("Se esperaba el resultado: VERANO");
console.log("Y he obtenido el resultado: " + passKey);

if ("VERANO" == passKey) {
  console.log("Son iguales");

  console.log("Paso 1 CORRECTO");
} else {
  console.log("No son iguales");

  console.log("Ha fallado el PRIMER paso del test");
}

console.log(
  "============================================================================"
);

console.log("TEST 2");

const MARIA = [
  "Mente inquieta, y sin embargo, calmado",
  "Astuto, Organizado, siempre todo en su lugar",
  "Respetuoso y amable",
  "Imaginativo, una emente creativa",
  "Afable, y conversador",
];

passKey = "";
passKey = passKey + puertaDelanteraRespuesta(MARIA[0]);
passKey = passKey + puertaDelanteraRespuesta(MARIA[1]);
passKey = passKey + puertaDelanteraRespuesta(MARIA[2]);
passKey = passKey + puertaDelanteraRespuesta(MARIA[3]);
passKey = passKey + puertaDelanteraRespuesta(MARIA[4]);

console.log("Se esperaba el resultado: MARIA");
console.log("Y he obtenido el resultado: " + passKey);

if ("MARIA" == passKey) {
  console.log("Son iguales");

  console.log("Test 2 CORRECTO");
} else {
  console.log("No son iguales");

  console.log("Ha fallado el SEGUNDO paso del test");
}

console.log(
  "============================================================================"
);

console.log("TEST 3");

const CASA = [
  "Compilar, proceso transformada",
  "Ausencias y contextos",
  "Sabiduria y gentileza",
  "Alimentos, franquicia del placer",
];

passKey = "";
passKey = passKey + puertaDelanteraRespuesta(CASA[0]);
passKey = passKey + puertaDelanteraRespuesta(CASA[1]);
passKey = passKey + puertaDelanteraRespuesta(CASA[2]);
passKey = passKey + puertaDelanteraRespuesta(CASA[3]);

console.log("Se esperaba el resultado: CASA");
console.log("Y he obtenido el resultado: " + passKey);

if ("CASA" == passKey) {
  console.log("Son iguales");

  console.log("Test 3 CORRECTO");
} else {
  console.log("No son iguales");

  console.log("Ha fallado el TERCER paso del test");
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

console.log("TEST 4");

passKey = puertaDelanteraClave("VERANO");

console.log("Se esperaba el resultado: Verano");
console.log("Y he obtenido el resultado: " + passKey);

if ("Verano" == passKey) {
  console.log("Son iguales");

  console.log("Test 4 CORRECTO");
} else {
  console.log("No son iguales");

  console.log("Ha fallado el CUARTO paso del test");
}

console.log(
  "============================================================================"
);

console.log("TEST 5");

passKey = puertaDelanteraClave("MARIA");

console.log("Se esperaba el resultado: Maria");
console.log("Y he obtenido el resultado: " + passKey);

if ("Maria" == passKey) {
  console.log("Son iguales");

  console.log("Test 5 CORRECTO");
} else {
  console.log("No son iguales");

  console.log("Ha fallado el QUINTO paso del test");
}

console.log(
  "============================================================================"
);

console.log("TEST 6");

passKey = puertaDelanteraClave("CASA");

console.log("Se esperaba el resultado: Casa");
console.log("Y he obtenido el resultado: " + passKey);

if ("Casa" == passKey) {
  console.log("Son iguales");

  console.log("Test 6 CORRECTO");
} else {
  console.log("No son iguales");

  console.log("Ha fallado el SEXTO paso del test");
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

console.log("TEST 7");

passKey = "";
passKey = passKey + puertaTraseraRespuesta(CASA[0]);
passKey = passKey + puertaTraseraRespuesta(CASA[1]);
passKey = passKey + puertaTraseraRespuesta(CASA[2]);
passKey = passKey + puertaTraseraRespuesta(CASA[3]);

console.log("Se esperaba el resultado: asar");
console.log("Y he obtenido el resultado: " + passKey);

if ("asar" == passKey) {
  console.log("Son iguales");

  console.log("Test 7 CORRECTO");
} else {
  console.log("No son iguales");

  console.log("Ha fallado el SEPTIMO paso del test");
}

console.log(
  "============================================================================"
);

console.log("TEST 8");

const TEXTO_CON_ESPACIOS = [
  "Es una oportunidad unica   ",
  "\tDisfrutando del catering\t",
  "Hay que tener claro el espiritu \t \t",
  "    Darse siempre a la amistad    ",
  "Puede ser el blanco\n\n",
];

passKey = "";
passKey = passKey + puertaTraseraRespuesta(TEXTO_CON_ESPACIOS[0]);
passKey = passKey + puertaTraseraRespuesta(TEXTO_CON_ESPACIOS[1]);
passKey = passKey + puertaTraseraRespuesta(TEXTO_CON_ESPACIOS[2]);
passKey = passKey + puertaTraseraRespuesta(TEXTO_CON_ESPACIOS[3]);
passKey = passKey + puertaTraseraRespuesta(TEXTO_CON_ESPACIOS[4]);

console.log("Se esperaba el resultado: agudo");
console.log("Y he obtenido el resultado: " + passKey);

if ("agudo" == passKey) {
  console.log("Son iguales");

  console.log("Test 8 CORRECTO");
  console.log(
    "============================================================================"
  );
  console.log(
    "¡¡¡¡ FELICIDADES, HAS COMPLETADO ESTA ACTIVIDAD CORRECTAMENTE !!!!"
  );
} else {
  console.log("No son iguales");

  console.log("Ha fallado el OCTAVO paso del test");
  console.log(
    "============================================================================"
  );
}


