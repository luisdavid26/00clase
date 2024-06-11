// @ts-check
//
// 👋🏽 Hola otra vez!
//
//
// ¡Ahora ayuda a Xenia a liberar a su mejor amigo!

/**
 * El ataque rápido está disponible cuando el caballero está durmiendo
 *
 * @param {boolean} caballeroEstaDespierto 
 *
 * @return {boolean} Si puedes o no ejecutar un ataque rápido.
 */
function puedoEjecutarAtaqueRapido(caballeroEstaDespierto ) {
  return !caballeroEstaDespierto;}

/**
 * Un espía útil capta información, lo que no puede hacer si todos duermen.
 *
 * @param {boolean} caballeroEstaDespierto 
 * @param {boolean} arqueroEstaDespierto 
 * @param {boolean} prisioneroEstaDespierto 
 *
 * @returns {boolean} Si se puede o no espiar a alguien.
 */
function puedoEspiar(caballeroEstaDespierto , arqueroEstaDespierto , prisioneroEstaDespierto ) {
  return caballeroEstaDespierto || arqueroEstaDespierto || prisioneroEstaDespierto;
}

/**
 * Te atrapará el arquero si haces señales mientras están despiertos.
 *
 * @param {boolean} arqueroEstaDespierto 
 * @param {boolean} prisioneroEstaDespierto 
 *
 * @returns {boolean} Si puede o no enviar una señal al prisionero.
 */
function puedoNotificarAlPrisionero(arqueroEstaDespierto , prisioneroEstaDespierto ) {
  return !arqueroEstaDespierto && prisioneroEstaDespierto;
}

/**
 * La etapa final del plan: liberar al mejor amigo de Xenia.
 *
 * @param {boolean} caballeroEstaDespierto 
 * @param {boolean} arqueroEstaDespierto 
 * @param {boolean} prisioneroEstaDespierto 
 * @param {boolean} perroEstaPresente 
 *
 * @returns {boolean} Si puedes o no liberar a la amiga de Xenia.
 */
function puedoLiberarPrisionero(caballeroEstaDespierto , arqueroEstaDespierto , prisioneroEstaDespierto , perroEstaPresente ) {
  return !caballeroEstaDespierto && !arqueroEstaDespierto && prisioneroEstaDespierto && perroEstaPresente;
}


/*

TESTING APLICATION WEB

*/

console.log("Revisando el ejercicio:");

console.log("============================================================================");
console.log("                 COMPROBANDO SI EL ATAQUE RAPIDO ES POSIBLE");
console.log("============================================================================");

console.log("TEST 1");

let resultado, esperado;

let caballeroDespierto = true;
esperado = false;

resultado = puedoEjecutarAtaqueRapido(caballeroDespierto);

console.log("Si el caballero está DESPIERTO el ataque rápido NO ES POSIBLE");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando el caballero está DESPIERTO la funcion devuelve que NO ES POSIBLE el ataque rápido.`);
}

console.log("============================================================================");

console.log("TEST 2");

caballeroDespierto = false;
esperado = true;

resultado = puedoEjecutarAtaqueRapido(caballeroDespierto);

console.log("Si el caballero está DURMIENDO el ataque rápido ES POSIBLE");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando el caballero está DURMIENDO la funcion devuelve que ES POSIBLE el ataque rápido.`);
}

console.log("============================================================================");
console.log("                   COMPROBANDO SI LA ACCION ESPIAR ES POSIBLE               ");
console.log("============================================================================");

console.log("TEST 3");

caballeroDespierto = false;
let arqueroDespierto = false;
let prisioneroDespierto = false;

esperado = false;

resultado = puedoEspiar(caballeroDespierto, arqueroDespierto, prisioneroDespierto);

console.log("Si TODOS ESTAN DURMIENDO ESPIAR ES INUTIL");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando TODOS DUERMEN la funcion puedoEspiar devuelve que ES INUTIL ESPIAR.`);
}


console.log("============================================================================");

console.log("TEST 4");

caballeroDespierto = false;
arqueroDespierto = false;
prisioneroDespierto = true;

esperado = true;

resultado = puedoEspiar(caballeroDespierto, arqueroDespierto, prisioneroDespierto);

console.log("Si DUERME el CABALLERO, DUERME el ARQUERO, el PRISIONERO ESTA DESPIERTO entonces ESPIAR ES UTIL");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando DUERMEN CABALLERO Y ARQUERO Y PRISIONERO DESPIERTO la funcion puedoEspiar devuelve que ES UTIL ESPIAR.`);
}

console.log("============================================================================");

console.log("TEST 5");

caballeroDespierto = false;
arqueroDespierto = true;
prisioneroDespierto = false;

esperado = true;

resultado = puedoEspiar(caballeroDespierto, arqueroDespierto, prisioneroDespierto);

console.log("Si DUERME el CABALLERO, el ARQUERO ESTA DESPIERTO, y el PRISIONERO ESTA DORMIDO entonces ESPIAR ES UTIL");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando DUERME EL CABALLERO Y ARQUERO DESPIERTO Y PRISIONERO DORMIDO la funcion puedoEspiar devuelve que ES UTIL ESPIAR.`);
}

console.log("============================================================================");


console.log("TEST 6");

caballeroDespierto = false;
arqueroDespierto = true;
prisioneroDespierto = true;

esperado = true;

resultado = puedoEspiar(caballeroDespierto, arqueroDespierto, prisioneroDespierto);

console.log("Si el CABALLERO ESTA DORMIDO, DESPIERTO el ARQUERO, el PRISIONERO ESTA DESPIERTO entonces ESPIAR ES UTIL");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando el CABALLERO ESTA DORMIDO Y ARQUERO DESPIERTO Y PRISIONERO DESPIERTO la funcion puedoEspiar devuelve que ES UTIL ESPIAR.`);
}

console.log("============================================================================");


console.log("TEST 7");

caballeroDespierto = true;
arqueroDespierto = false;
prisioneroDespierto = false;

esperado = true;

resultado = puedoEspiar(caballeroDespierto, arqueroDespierto, prisioneroDespierto);

console.log("Si el CABALLERO ESTA DESPIERTO, DUERME el ARQUERO, el PRISIONERO ESTA DORMIDO entonces ESPIAR ES UTIL");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando el CABALLERO ESTA DESPIERTO Y ARQUERO DORMIDO Y PRISIONERO DORMIDO la funcion puedoEspiar devuelve que ES UTIL ESPIAR.`);
}

console.log("============================================================================");


console.log("TEST 8");

caballeroDespierto = true;
arqueroDespierto = false;
prisioneroDespierto = true;

esperado = true;

resultado = puedoEspiar(caballeroDespierto, arqueroDespierto, prisioneroDespierto);

console.log("Si el CABALLERO ESTA DESPIERTO, DUERME el ARQUERO, el PRISIONERO ESTA DESPIERTO entonces ESPIAR ES UTIL");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando el CABALLERO ESTA DESPIERTO Y ARQUERO DORMIDO Y PRISIONERO DESPIERTO la funcion puedoEspiar devuelve que ES UTIL ESPIAR.`);
}

console.log("============================================================================");

console.log("TEST 9");

caballeroDespierto = true;
arqueroDespierto = true;
prisioneroDespierto = true;

esperado = true;

resultado = puedoEspiar(caballeroDespierto, arqueroDespierto, prisioneroDespierto);

console.log("Si TODOS ESTAN DESPIERTOS entonces ESPIAR ES UTIL");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando TODOS ESTAN DESPIERTOS la funcion puedoEspiar devuelve que ES UTIL ESPIAR.`);
}

console.log("============================================================================");
console.log("    COMPROBANDO SI LA ACCION PUEDO NOTIFICAR AL PRISIONERO ES POSIBLE       ");
console.log("============================================================================");

console.log("TEST 10");

arqueroDespierto = false;
prisioneroDespierto = false;

esperado = false;

resultado = puedoNotificarAlPrisionero(arqueroDespierto, prisioneroDespierto);

console.log("Si TODOS ESTAN DORMIDOS entonces NOTIFICAR AL PRISIONERO ES IMPOSIBLE");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando TODOS ESTAN DORMIDOS la funcion puedoNotificarAlPrisionero devuelve que ES IMPOSIBLE.`);
}

console.log("============================================================================");

console.log("TEST 11");

arqueroDespierto = false;
prisioneroDespierto = true;

esperado = true;

resultado = puedoNotificarAlPrisionero(arqueroDespierto, prisioneroDespierto);

console.log("Si SOLO EL PRISIONERO ESTA DESPIERTO NOTIFICAR AL PRISIONERO ES POSIBLE");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando EL PRISIONERO ESTA DESPIERTO Y EL ARQUERO DORMIDO la funcion puedoNotificarAlPrisionero devuelve que ES POSIBLE.`);
}

console.log("============================================================================");

console.log("TEST 12");

arqueroDespierto = true;
prisioneroDespierto = false;

esperado = false;

resultado = puedoNotificarAlPrisionero(arqueroDespierto, prisioneroDespierto);

console.log("Si SOLO EL ARQUERO ESTA DESPIERTO NOTIFICAR AL PRISIONERO ES IMPOSIBLE");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando EL PRISIONERO ESTA DORMIDO Y EL ARQUERO ESTA DESPIERTO la funcion puedoNotificarAlPrisionero devuelve que ES IMPOSIBLE.`);
}

console.log("============================================================================");

console.log("TEST 13");

arqueroDespierto = true;
prisioneroDespierto = true;

esperado = false;

resultado = puedoNotificarAlPrisionero(arqueroDespierto, prisioneroDespierto);

console.log("Si EL ARQUERO ESTA DESPIERTO Y EL PRISIONERO ESTA DESPIERTO NOTIFICAR AL PRISIONERO ES IMPOSIBLE");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando EL PRISIONERO ESTA DESPIERTO Y EL ARQUERO DESPIERTO la funcion puedoNotificarAlPrisionero devuelve que ES POSIBLE.`);
}


console.log("============================================================================");
console.log("        COMPROBANDO SI LA ACCION LIBERAR AL PRISIONERO ES POSIBLE           ");
console.log("============================================================================");

console.log("TEST 14");

caballeroDespierto = false;
arqueroDespierto = false;
prisioneroDespierto = false;
let perroPresente = false;

esperado = false;

resultado = puedoLiberarPrisionero(caballeroDespierto, arqueroDespierto, prisioneroDespierto, perroPresente);

console.log("Si TODOS ESTAN DURMIENDO Y EL PERRO NO ESTA PRESENTE ES IMPOSIBLE LIBERAR AL PRISIONERO");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando TODOS ESTAN DORMIDOS Y EL PERRO NO ESTA PRESENTE la funcion puedoLiberarPrisionero devuelve que ES IMPOSIBLE.`);
}

console.log("============================================================================");

console.log("TEST 15");

caballeroDespierto = false;
arqueroDespierto = false;
prisioneroDespierto = false;
perroPresente = true;

esperado = true;

resultado = puedoLiberarPrisionero(caballeroDespierto, arqueroDespierto, prisioneroDespierto, perroPresente);

console.log("Si TODOS ESTAN DURMIENDO Y EL PERRO ESTA PRESENTE ES POSIBLE LIBERAR AL PRISIONERO");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando TODOS ESTAN DORMIDOS Y EL PERRO ESTA PRESENTE la funcion puedoLiberarPrisionero devuelve que ES POSIBLE.`);
}

console.log("============================================================================");

console.log("TEST 16");

caballeroDespierto = false;
arqueroDespierto = false;
prisioneroDespierto = true;
perroPresente = false;

esperado = true;

resultado = puedoLiberarPrisionero(caballeroDespierto, arqueroDespierto, prisioneroDespierto, perroPresente);

console.log("Si SOLAMENTE EL PRISIONERO ESTA DESPIERTO Y EL PERRO NO ESTA PRESENTE ES POSIBLE LIBERAR AL PRISIONERO");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando SOLAMENTE EL PRISIONERO ESTA DESPIERTO Y EL PERRO NO ESTA PRESENTE la funcion puedoLiberarPrisionero devuelve que ES POSIBLE.`);
}

console.log("============================================================================");

console.log("TEST 17");

caballeroDespierto = false;
arqueroDespierto = false;
prisioneroDespierto = true;
perroPresente = true;

esperado = true;

resultado = puedoLiberarPrisionero(caballeroDespierto, arqueroDespierto, prisioneroDespierto, perroPresente);

console.log("Si SOLAMENTE EL PRISIONERO ESTA DESPIERTO Y EL PERRO ESTA PRESENTE ES POSIBLE LIBERAR AL PRISIONERO");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando SOLAMENTE EL PRISIONERO ESTA DESPIERTO Y EL PERRO ESTA PRESENTE la funcion puedoLiberarPrisionero devuelve que ES POSIBLE.`);
}

console.log("============================================================================");

console.log("TEST 18");

caballeroDespierto = false;
arqueroDespierto = true;
prisioneroDespierto = false;
perroPresente = false;

esperado = false;

resultado = puedoLiberarPrisionero(caballeroDespierto, arqueroDespierto, prisioneroDespierto, perroPresente);

console.log("Si SOLAMENTE EL ARQUERO ESTA DESPIERTO Y EL PERRO NO ESTA PRESENTE ES IMPOSIBLE LIBERAR AL PRISIONERO");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando SOLAMENTE EL ARQUERO ESTA DESPIERTO Y EL PERRO NO ESTA PRESENTE la funcion puedoLiberarPrisionero devuelve que ES IMPOSIBLE.`);
}

console.log("============================================================================");

console.log("TEST 19");

caballeroDespierto = false;
arqueroDespierto = true;
prisioneroDespierto = false;
perroPresente = true;

esperado = false;

resultado = puedoLiberarPrisionero(caballeroDespierto, arqueroDespierto, prisioneroDespierto, perroPresente);

console.log("Si SOLAMENTE EL ARQUERO ESTA DESPIERTO Y EL PERRO ESTA PRESENTE ES IMPOSIBLE LIBERAR AL PRISIONERO");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando SOLAMENTE EL ARQUERO ESTA DESPIERTO Y EL PERRO ESTA PRESENTE la funcion puedoLiberarPrisionero devuelve que ES IMPOSIBLE.`);
}

console.log("============================================================================");

console.log("TEST 20");

caballeroDespierto = false;
arqueroDespierto = true;
prisioneroDespierto = true;
perroPresente = false;

esperado = false;

resultado = puedoLiberarPrisionero(caballeroDespierto, arqueroDespierto, prisioneroDespierto, perroPresente);

console.log("Si SOLAMENTE EL CABALLERO ESTA DORMIDO Y EL PERRO NO ESTA PRESENTE ES IMPOSIBLE LIBERAR AL PRISIONERO");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando SOLAMENTE EL CABALLERO ESTA DORMIDO Y EL PERRO NO ESTA PRESENTE la funcion puedoLiberarPrisionero devuelve que ES IMPOSIBLE.`);
}

console.log("============================================================================");

console.log("TEST 21");

caballeroDespierto = false;
arqueroDespierto = true;
prisioneroDespierto = true;
perroPresente = true;

esperado = false;

resultado = puedoLiberarPrisionero(caballeroDespierto, arqueroDespierto, prisioneroDespierto, perroPresente);

console.log("Si SOLAMENTE EL CABALLERO ESTA DORMIDO Y EL PERRO ESTA PRESENTE ES IMPOSIBLE LIBERAR AL PRISIONERO");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando SOLAMENTE EL CABALLERO ESTA DORMIDO Y EL PERRO ESTA PRESENTE la funcion puedoLiberarPrisionero devuelve que ES IMPOSIBLE.`);
}

console.log("============================================================================");

console.log("TEST 22");

caballeroDespierto = true;
arqueroDespierto = false;
prisioneroDespierto = false;
perroPresente = false;

esperado = false;

resultado = puedoLiberarPrisionero(caballeroDespierto, arqueroDespierto, prisioneroDespierto, perroPresente);

console.log("Si SOLAMENTE EL CABALLERO ESTA DESPIERTO Y EL PERRO NO ESTA PRESENTE ES IMPOSIBLE LIBERAR AL PRISIONERO");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando SOLAMENTE EL CABALLERO ESTA DESPIERTO Y EL PERRO NO ESTA PRESENTE la funcion puedoLiberarPrisionero devuelve que ES IMPOSIBLE.`);
}

console.log("============================================================================");

console.log("TEST 23");

caballeroDespierto = true;
arqueroDespierto = false;
prisioneroDespierto = false;
perroPresente = true;

esperado = true;

resultado = puedoLiberarPrisionero(caballeroDespierto, arqueroDespierto, prisioneroDespierto, perroPresente);

console.log("Si SOLAMENTE EL CABALLERO ESTA DESPIERTO Y EL PERRO ESTA PRESENTE ES POSIBLE LIBERAR AL PRISIONERO");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando SOLAMENTE EL CABALLERO ESTA DESPIERTO Y EL PERRO ESTA PRESENTE la funcion puedoLiberarPrisionero devuelve que ES POSIBLE.`);
}

console.log("============================================================================");

console.log("TEST 24");

caballeroDespierto = true;
arqueroDespierto = false;
prisioneroDespierto = true;
perroPresente = false;

esperado = false;

resultado = puedoLiberarPrisionero(caballeroDespierto, arqueroDespierto, prisioneroDespierto, perroPresente);

console.log("Si SOLAMENTE EL ARQUERO ESTA DORMIDO Y EL PERRO NO ESTA PRESENTE ES IMPOSIBLE LIBERAR AL PRISIONERO");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando SOLAMENTE EL ARQUERO ESTA DORMIDO Y EL PERRO NO ESTA PRESENTE la funcion puedoLiberarPrisionero devuelve que ES IMPOSIBLE.`);
}

console.log("============================================================================");

console.log("TEST 25");

caballeroDespierto = true;
arqueroDespierto = false;
prisioneroDespierto = true;
perroPresente = true;

esperado = true;

resultado = puedoLiberarPrisionero(caballeroDespierto, arqueroDespierto, prisioneroDespierto, perroPresente);

console.log("Si SOLAMENTE EL ARQUERO ESTA DORMIDO Y EL PERRO ESTA PRESENTE ES POSIBLE LIBERAR AL PRISIONERO");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando SOLAMENTE EL ARQUERO ESTA DORMIDO Y EL PERRO ESTA PRESENTE la funcion puedoLiberarPrisionero devuelve que ES POSIBLE.`);
}

console.log("============================================================================");

console.log("TEST 26");

caballeroDespierto = true;
arqueroDespierto = true;
prisioneroDespierto = false;
perroPresente = false;

esperado = false;

resultado = puedoLiberarPrisionero(caballeroDespierto, arqueroDespierto, prisioneroDespierto, perroPresente);

console.log("Si SOLAMENTE EL PRISIONERO ESTA DORMIDO Y EL PERRO NO ESTA PRESENTE ES IMPOSIBLE LIBERAR AL PRISIONERO");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando SOLAMENTE EL PRISIONERO ESTA DORMIDO Y EL PERRO NO ESTA PRESENTE la funcion puedoLiberarPrisionero devuelve que ES IMPOSIBLE.`);
}

console.log("============================================================================");

console.log("TEST 27");

caballeroDespierto = true;
arqueroDespierto = true;
prisioneroDespierto = false;
perroPresente = true;

esperado = false;

resultado = puedoLiberarPrisionero(caballeroDespierto, arqueroDespierto, prisioneroDespierto, perroPresente);

console.log("Si SOLAMENTE EL PRISIONERO ESTA DORMIDO Y EL PERRO ESTA PRESENTE ES IMPOSIBLE LIBERAR AL PRISIONERO");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando SOLAMENTE EL PRISIONERO ESTA DORMIDO Y EL PERRO ESTA PRESENTE la funcion puedoLiberarPrisionero devuelve que ES IMPOSIBLE.`);
}

console.log("============================================================================");

console.log("TEST 28");

caballeroDespierto = true;
arqueroDespierto = true;
prisioneroDespierto = true;
perroPresente = true;

esperado = false;

resultado = puedoLiberarPrisionero(caballeroDespierto, arqueroDespierto, prisioneroDespierto, perroPresente);

console.log("Si TODOS ESTAN DESPIERTOS Y EL PERRO ESTA PRESENTE ES IMPOSIBLE LIBERAR AL PRISIONERO");

if (resultado !== esperado) {
  throw new Error( `${ resultado } es distinto de ${ esperado }` );
}else{
  console.log(`Prueba pasada cuando TODOS ESTAN DESPIERTOS Y EL PERRO ESTA PRESENTE la funcion puedoLiberarPrisionero devuelve que ES IMPOSIBLE.`);
}

console.log("============================================================================");
console.log("                           FIN DEL TESTING                                  ");
console.log("============================================================================");


