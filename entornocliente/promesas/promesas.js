const btnPromesaUno = document.getElementById("promesaUno");
const btnPromesaDos = document.getElementById("promesaDos");
const btnPromesaTres = document.getElementById("promesaTres");
const btnPromesaCuatro = document.getElementById("promesaCuatro");

const btnFetchUno = document.getElementById("fetchUno");
const btnFetchDos = document.getElementById("fetchDos");
const btnFetchTres = document.getElementById("fetchTres");
const btnFetchCuatro = document.getElementById("fetchCuatro");
const btnFetchCinco = document.getElementById("fetchCinco");
const btnFetchSeis = document.getElementById("fetchSeis");

btnPromesaUno.addEventListener("click", function (params) {
     // Declaracion de la promesa
     const promise = new Promise((resolve, reject) => {
          const number = Math.floor(Math.random() * 12);
          setTimeout(
               () =>
                    number > 4
                         ? resolve(number)
                         : reject(new Error("Menor a 4")),
               3000,
          );
     });

     // Consumo de la promesa
     promise
          .then((number) => console.log(number))
          .catch((error) => console.error(error))
          .finally(function () {
               console.log("Promise completed");
          });
});

btnPromesaDos.addEventListener("click", function (params) {
     // Declaracion de otra promesa
     const myPromise = new Promise(function (resolve, reject) {
          let sampleData = [2, 4, 6, 8];
          let randomNumber = 0;
          setTimeout(() => {
               randomNumber = Math.floor(
                    Math.random() * (sampleData.length + 1),
               );

               if (sampleData[randomNumber]) {
                    resolve(sampleData[randomNumber]);
               } else {
                    reject("An error occured!");
               }
          }, 3500);
     });

     // Llamada a la segunda promesa
     myPromise
          .then(function (e) {
               console.log(e);
          })
          .catch(function (error) {
               throw new Error(error);
          })
          .finally(function () {
               console.log("myPromise completed");
          });
});

// Simulación de una función que procesa un pago
function procesarPago(total) {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               const exito = Math.random() < 0.8; // Simulamos que el 80 % de las veces el pago es exitoso

               if (exito) {
                    resolve("Pago exitoso");
               } else {
                    reject(new Error("Error en el pago"));
               }
          }, 2500); // Simulamos un retraso de 1.5 segundos para el proceso de pago
     });
}

btnPromesaTres.addEventListener("click", function (params) {
     const texto = "Esto es un texto de prueba";
     // Ejemplo de uso de la función de procesamiento de pagos
     const totalAPagar = 100; // Monto total del pago

     procesarPago(totalAPagar)
          .then((resultado) => {
               console.log(resultado); // Se ejecutará en caso de pago exitoso
               // Aquí podríamos realizar acciones adicionales, como actualizar la base de datos, enviar un recibo por correo, etc.
          })
          .catch((error) => {
               console.error(error.message); // Se ejecutará en caso de pago fallido
               // Aquí podemos ofrecer al usuario la opción de intentar nuevamente o mostrar un mensaje de error
          });
});

// Simulación de una función que agrega usuarios a una base de datos
function agregarUsuarios(usuarios) {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               const exito = Math.random() < 0.7; // Simulamos que el 70 % de las veces la operación es exitosa

               if (exito) {
                    resolve("Usuarios agregados exitosamente");
               } else {
                    reject(new Error("Error al agregar usuarios"));
               }
          }, 2000); // Simulamos un retraso de 2 segundos para la operación de almacenamiento
     });
}

// Datos de ejemplo de usuarios a agregar a la base de datos
const nuevosUsuarios = [
     { id: 1, nombre: "Usuario 1" },
     { id: 2, nombre: "Usuario 2" },
     { id: 3, nombre: "Usuario 3" },
];

btnPromesaCuatro.addEventListener("click", function (params) {
     // Uso de la función de agregación de usuarios
     agregarUsuarios(nuevosUsuarios)
          .then((resultado) => {
               console.log(resultado); // Se ejecutará en caso de operación exitosa
               // Aquí podríamos realizar acciones adicionales, como actualizar la interfaz de usuario o notificar al usuario
          })
          .catch((error) => {
               console.error(error.message); // Se ejecutará en caso de operación fallida
               // Aquí podríamos ofrecer al usuario la opción de intentar nuevamente o mostrar un mensaje de error
          });
});


btnFetchUno.addEventListener("click", function (params) {
     fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
          .then((response) => response.json())
          .then((json) => console.log(json));

});

btnFetchDos.addEventListener("click", function (params) {
     fetch("https://jsonplaceholder.typicode.com/posts/1")
          .then((response) => response.json())
          .then((json) => console.log(json));
});

btnFetchTres.addEventListener("click", function (params) {
     fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
               title: "foo",
               body: "bar",
               userId: 1,
          }),
          headers: {
               "Content-type": "application/json; charset=UTF-8",
          },
     })
          .then((response) => response.json())
          .then((json) => console.log(json));
});

// openWeather API
const apiKey = "d39412b79162061f1cba83f6769cca17";
btnFetchCuatro.addEventListener("click", function (params) {
     fetch(
          `https://api.openweathermap.org/data/2.5/weather?id=524901&lang=es&appid=${apiKey}`,
     )
          .then((response) => response.json())
          .then((json) => console.log(json))
          .catch((error) => {
               console.error(error.message); // Se ejecutará en caso de operación fallida
          })
          .finally(function () {
               console.log("first request weather completed");
          });
});

btnFetchCinco.addEventListener("click", function (params) {
     fetch(
          `https://api.openweathermap.org/data/2.5/weather?id=2510253&lang=es&appid=${apiKey}`,
     )
          .then((response) => response.json())
          .then((json) => console.log(json))
          .catch((error) => {
               console.error(error.message); // Se ejecutará en caso de operación fallida
          })
          .finally(function () {
               console.log("second request weather completed");
          });
});

const unsplash_key = "CPQ292rC0HzXceNx_1MhpyHR0hE_92EvVpX1IQWNu_8";

btnFetchSeis.addEventListener("click", function (params) {
     fetch(`https://api.unsplash.com/photos/random/?client_id=${unsplash_key}`)
          .then((response) => response.json())
          .then((json) => {

               console.log(json);
               

               
               let ultimoParrafo = document.querySelector("#webs");

               const nuevaWeb = document.createElement("a");
               nuevaWeb.href = json.urls.regular;
               nuevaWeb.innerText = json.alt_description;
               const nuevaImagen = document.createElement("img");
               nuevaImagen.src = json.urls.regular;
               

               const saltoDeLinea = document.createElement("hr");
               ultimoParrafo.appendChild(nuevaImagen);
               ultimoParrafo.appendChild(nuevaWeb);
               ultimoParrafo.appendChild(saltoDeLinea);




          })
          .catch((error) => {
               console.error(error.message); // Se ejecutará en caso de operación fallida
          })
          .finally(function () {
               console.log("first request unsplash completed");
          });
});


 
 