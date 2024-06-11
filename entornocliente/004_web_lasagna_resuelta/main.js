// 👋🏽 Hola!
//
//
// Buena suerte preparando lasaña!

/*

INSTRUCCIONES:

La novia de Lucian está de camino a casa, 

¡y él no ha cocinado su cena de aniversario!

En este ejercicio, vas a escribir un código para ayudar a Lucian a 
cocinar una exquisita lasaña de su libro de cocina favorito.

Tienes cuatro tareas relacionadas con el tiempo de cocción de la lasaña.

*/

/*
Tarea 1: 
DefinE la constante MINUTOS_PREVISTOS_EN_HORNO que representa cuántos minutos 
debe estar la lasaña en el horno. Según el libro de cocina, 
el tiempo de horno esperado en minutos es 40.

AYUDA EXTRA:

Definir una constante que debe contener el valor numérico especificado en la receta.
exportar la constante.

 *
 * El número de minutos que toma preparar una sola capa.
 */
const MINUTOS_POR_CAPA = 2;
const MINUTOS_PREVISTOS_EN_HORNO = 40;




/**
 * Tarea 2:
 * Determina el número de minutos que la lasaña debe permanecer aún en el horno
 * para estar correctamente cocinada.
 *
 *
 * Implementar la función minutosRestantesEnHorno que toma como parámetro los minutos
 * reales que la lasaña ha estado en el horno y devuelve cuántos minutos le quedan a
 * la lasaña por permanecer en el horno, basándose en el tiempo de horno esperado en
 * minutos de la tarea anterior.
 *
 *
 * AYUDA EXTRA:
 *
 * Devolver explícitamente un número desde la función.
 *
 * Utilice el operador matemático de resta para restar valores.
 *
 * @param {number} minutosRealesEnElHorno
 * @returns {number} el número de minutos restante.
 */
function minutosRestantesEnHorno(minutosRealesEnElHorno) {
  return MINUTOS_PREVISTOS_EN_HORNO - minutosRealesEnElHorno;
}

/**
 * Tarea 3:
 * Dado un número de capas, determina el tiempo total de preparación.
 * 
 * 
 * Implementa la función preparationTimeInMinutes que toma como parámetro el número 
 * de capas que has añadido a la lasaña y devuelve cuántos minutos has empleado en
 *  preparar la lasaña, suponiendo que cada capa te lleva 2 minutos de preparación.
 * 
 * AYUDA EXTRA:
 * 
 * Devolver explícitamente un número desde la función.
 * 
 * Utilice el operador matemático de multiplicación para multiplicar valores.
 * 
 * Utilice la constante adicional para el tiempo en minutos por capa.
 *
 * @param {number} numeroDeCapas
 * @returns {number} el tiempo total de preparación.
 */
function tiempoDePreparacionEnMinutos(numeroDeCapas) {
  return numeroDeCapas * MINUTOS_POR_CAPA;
}

/**
 * Tarea 4:
 *
 * Calcula el tiempo total de trabajo. Es decir, el tiempo para preparar todas las
 *  capas de lasaña, y el tiempo ya pasado en el horno.
 *
 * Implementa la función tiempoTotalEnMinutos que toma dos parámetros: el parámetro 
 * numeroDeCapas es el número de capas que has añadido a la lasaña, y el parámetro 
 * minutosRealesEnElHorno es el número de minutos que la lasaña ha estado en el horno. 
 * La función debe devolver cuántos minutos en total has trabajado cocinando la 
 * lasaña, que es la suma del tiempo de preparación en minutos, y el tiempo en 
 * minutos que la lasaña ha estado en el horno en ese momento.
 * 
 * AYUDA EXTRA:
 * 
 * Devolver explícitamente un número desde la función.
 * 
 * Invocar uno de los otros métodos implementados anteriormente.
 * 
 * Utilizar el operador matemático de suma para sumar valores. 
 * 
 *
 * @param {number} numeroDeCapas
 * @param {number} minutosRealesEnElHorno
 * @returns {number} Tiempo total de trabajo
 */
function tiempoTotalEnMinutos(numeroDeCapas, minutosRealesEnElHorno) {
  const tiempoDePreparacion = tiempoDePreparacionEnMinutos(numeroDeCapas);
  const tiempoTotal = tiempoDePreparacion+minutosRealesEnElHorno;
  return tiempoTotal;
}

console.log("Revisando el ejercicio:");

if (tiempoTotalEnMinutos(1, 5) === 7) {
  // 7
  console.log("Mi resultado: " + tiempoTotalEnMinutos(1, 5));
  console.log("Valor esperado: 7");
  console.log("CORRECTA COMPROBACION 1");
  console.log(
    "====================================================================================="
  );
  if (tiempoTotalEnMinutos(4, 15) === 23) {
    // 23
    console.log("Mi resultado: " + tiempoTotalEnMinutos(4, 15));
    console.log("Valor esperado: 23");
    console.log("CORRECTA COMPROBACION 2");
    console.log(
      "====================================================================================="
    );
    if (tiempoTotalEnMinutos(1, 35) === 37) {
      // 37
      console.log("Mi resultado: " + tiempoTotalEnMinutos(1, 35));
      console.log("Valor esperado: 37");
      console.log("CORRECTA COMPROBACION 3");
      console.log(
        "====================================================================================="
      );
      console.log("EJERCICIO CORRECTO!!!!");
    } else {
      console.log("Mi resultado: " + tiempoTotalEnMinutos(1, 35));
      console.log("Valor esperado: 37");
      console.log("FALLO EN LA TERCERA COMPROBACION");
    }
  } else {
    console.log("Mi resultado: " + tiempoTotalEnMinutos(4, 15));
    console.log("Valor esperado: 23");
    console.log("FALLO EN LA SEGUNDA COMPROBACION");
  }
} else {
  console.log("Mi resultado: " + tiempoTotalEnMinutos(1, 5));
  console.log("Valor esperado: 7");
  console.log("FALLO EN LA PRIMERA COMPROBACION");
}
