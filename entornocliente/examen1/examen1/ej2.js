"use strict";

/**
 * Apartado 1
 * Realiza los siguientes pasos (muestra por consola el resultado después de aplicar cada uno):
 * - Crea un array llamado "arreglo" con 4 elementos
 * - Concatena 2 elementos más al final y 2 elementos más al principio de ese array
 * - Elimina las posiciones de la 3 a la 5 (ambas incluidas)
 * - Inserta 2 elementos más entre el penúltimo y el último
 * - Muestra el array del paso anterior, pero con los elementos separados por " ==> "
 */


console.log("--------------- APARTADO 1 -----------------");
let arreglo=["casa","coche","luz","piso"];
console.log("--------------- array normal -----------------");
  console.log(arreglo);

arreglo.push("moto");
arreglo.push("pantalla")
 console.log("--------------- array con push -----------------");
 console.log(arreglo);


 arreglo.unshift("avion","teclado");

console.log("--------------- array con unshift-----------------");
  console.log(arreglo);

  console.log("--------------- array con borrado-----------------");
  arreglo.splice(3,4,5);
console.log(arreglo);
console.log("--------------- array con borrado por posicion-----------------");

let  variable = arreglo;
arreglo.push("raton");
arreglo.push("proyector");
arreglo.push(variable[variable.length]);
console.log(arreglo);
console.log("--------------- array con flecha-----------------");

console.log(arreglo.join('=>'));



/**
 * Apartado 2
 * Crea una función que reciba como primer parámetro el nombre de un alumno, seguido
 * de un número indeterminado de notas (usa spread para agruparlas en un array).
 * Utiliza el método reduce para sumar las notas y calcula la media, que deberás mostrar por consola.
 * Posible llamada -> calcularNotas("Pepe", 4.25, 6, 8.5, 9)
 */

console.log('--------------- APARTADO 2 -----------------');

function notastotales(nombre,...notas){

let notastotales = notas.reduce(function(a,b){
    return a + b ;
});
let mediadenotas = notastotales / notas.length;
console.log("total:  "+ notastotales+ "media : " + mediadenotas )
}

notastotales("luis",4,5,2,4,5,)



/**
 * Apartado 3
 * Crea un array de cadenas llamado "arr" y ordénalo usando el método sort de mayor a menor longitud .
 * Imprime el array original (antes de ordenarlo) y el resultado
 */

console.log("--------------- APARTADO 3 -----------------");

let arr=["a","aa","aaa","aaaa"];
  console.log("array desordenado: "+ arr)

  console.log("arrayordenado: "+arr.sort(function(a,b){
    return b.localeCompare(a);
  }));



/**
 * Apartado 4
 * Crea un array de números llamado "arrNum" que contenga numeros de más de una cifra. Mapea 
 * ese array en otro que sea la suma de las cifras de cada número.
 * 
 * No puedes usar bucles.
 * 
 * Pista: Puedes convertir los números a cadena primero y después con Array.from(cadena) la
 * transformas a array de caracteres (que puedes sumar)
 * 
 * Imprime el array original y el resultado
 */

console.log("--------------- APARTADO 4 -----------------");


let arrNum=[12,23,687,23];
let cadena=   arrNum.concat();
console.log(arrNum.from(cadena, (x) => x + x));




/**
 * Apartado 5 
 * A partir de la estructura básica de la web de este proyecto debes hacer lo siguiente:
 * 
 * Selecciona mediante JavaScript el elemento div que tiene el id "container" y debes crear 
 * un elemento llamado "el1" que contenga este div.
 * 
 * Selecciona mediante JavaScript el elemento h2 que tiene el texto "Ejercicio bloque 1" y 
 * crea con ello el elemento "el2".
 * 
 * Despues crea un elemento llamado "el3" que contenga un h1 con el 
 * texto "Examen 1".
 * 
 * Por último: borramos y volvemos a añadir el elemento h2 al DIV que lo contiene haciendo:
 * 
 * Primero, borramos el elemento "el2" del elemento "el1"
 * Finalmente volemos a añadir ese elemento "el2" al elemento "el1"
 *  
 */

console.log("--------------- APARTADO 5 -----------------");

const el1 = document.getElementById("container");

const el2 = document.getElementsByTagName("h2");


















