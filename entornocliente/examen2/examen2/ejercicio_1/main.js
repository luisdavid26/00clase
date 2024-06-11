// Obtener desde el DOM el botón que en HTML tiene el id cargar-ciclos que en JavaScript se llamará btnCargarCiclos
const btnCargarCiclos = document.getElementById("cargar-ciclos");

// Obtener desde el DOM la lista desordenada que en JavaScript se llamará listaCiclos
const listaCiclos = document.getElementById("ciclos-lista");

// Datos en formato array para transformar a formato JSON de los ciclos de informática
const ciclos = [
  "SMR ---> Sistemas microinformáticos y redes",
  "ASIR ---> Administración de sistemas informáticos y redes",
  "DAW ---> Desarrollo de aplicaciones web",
  "DAM ---> Desarrollo de aplicaciones multimedia",
];

// Convertir el array "ciclos" a una cadena de texto que admite JSON y almacenarla en localStorage
const ciclosJSON = JSON.stringify(ciclos);
localStorage.setItem("ciclos", ciclosJSON);

// Crear el evento disparador de toda la aplicación que se solicita en el enunciado del ejercicio
document.addEventListener("DOMContentLoaded", function () {
  // Asociar mediante un disparador la función cargarCiclos al evento click del botón
  btnCargarCiclos.addEventListener("click", cargarCiclos);

  // Crear la función para cargar los ciclos desde localStorage que se llamará cargarCiclos
  function cargarCiclos() {
    // Obtener los datos almacenados en localStorage en una constante llamada ciclosJSON
    const ciclosJSON = localStorage.getItem("ciclos");

    // Verificar con un condicional si hay datos en localStorage
    if (ciclosJSON) {
      // Si hay datos
      // Convertir la cadena JSON a un array de ciclos en una constante llamada ciclos
      const ciclos = JSON.parse(ciclosJSON);

      // Limpiar la lista antes de agregar los nuevos ciclos
      listaCiclos.innerHTML = "";

      // Iterar sobre los ciclos con un bucle forEach y agregarlos a la lista
      ciclos.forEach(function (ciclo) {
        // Definicion del bucle
        // Crea el elemento
        const listItem = document.createElement("li");

        // Dota el elemento anteriormente creado del valor adecuado que nos viene en cada iteracion del bucle
        listItem.textContent = ciclo;

        // Hace algo más con el elemento para que se pueda ver en la web
        // Por ejemplo, añadir una clase CSS
        listItem.classList.add("parrafo");

        // Agregar el elemento a la lista
        listaCiclos.appendChild(listItem);
      });
      // Finaliza el bucle

      // Mostrar una ventana de alerta en la que se pueda leer: "los ciclos se han cargado exitosamente"
      alert("Los ciclos se han cargado ");
    } else {
      // Si no hay datos
      // Mostrar una ventana de alerta en la que se pueda leer: "no hay ciclos almacenados en el localStorage"
      alert("No hay ciclos almacenados en el localStorage");
    }
  }
  // La función cargarCiclos acaba aquí
});
// Aqui va el final del evento disparador global de la aplicación
