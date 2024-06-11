const btnFetchUno = document.getElementById("fetchUno");
const btnFetchDos = document.getElementById("fetchDos");
const btnFetchTres = document.getElementById("fetchTres");

btnFetchUno.addEventListener("click", function (params) {
     const host = "api.frankfurter.app";
     
     const divisaFrom = document.getElementById('divisaFrom').value;
     const divisaTo = document.getElementById('divisaTo').value;
     const amount = document.getElementById('amount').value;
     fetch(`https://${host}/latest?amount=${amount}&from=${divisaFrom}&to=${divisaTo}`)
          .then((resp) => resp.json())
          .then((data) => {
               console.log(data);

               let ultimoParrafo = document.querySelector("#exchange");

               const nuevaLinea = document.createElement("span");
               nuevaLinea.innerHTML = `${amount} ${divisaFrom} = ${data.rates[divisaTo]} ${divisaTo}`;

               const saltoDeLinea = document.createElement("br");
               ultimoParrafo.appendChild(nuevaLinea);
               ultimoParrafo.appendChild(saltoDeLinea);
          });
});

btnFetchDos.addEventListener("click", function (params) {
     const host = "api.frankfurter.app";
     let codigo;
     fetch(`https://${host}/currencies`)
          .then((resp) => resp.json())
          .then((data) => {
               codigo = "<h1>Listado de divisas</h1>"
               Object.entries(data).forEach(([key, value]) => {
                    codigo += `<p>${key} : ${value}</p>`;
               });
               const ultimoParrafo = document.querySelector("#divisas");
               const listado = document.createElement("div");
               listado.innerHTML = codigo;
               ultimoParrafo.appendChild(listado);
          });
});
