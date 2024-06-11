/// 1. Cambiar el color del carrito y el color del botón addToCart cuando un color es seleccionado
/// - Seleccionando elementos
const redColor = document.querySelector(".red");
const grayColor = document.getElementsByClassName("gray");
const blackColor = document.querySelector(".black");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");

// Modificando elementos
// - Agregando detectores de eventos
// - Color rojo
redColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "red";
  itemTag.style.backgroundColor = "red";
  imageCard.style.backgroundImage = 'url("./img/red-benz.webp")';
});

// - Color Gris
grayColor[0].addEventListener("click", function () {
  cartButton.style.backgroundColor = "gray";
  itemTag.style.backgroundColor = "gray";
  imageCard.style.backgroundImage = 'url("./img/gray-benz.jpg")';
});

// - Color Negro
blackColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "black";
  itemTag.style.backgroundColor = "black";
  imageCard.style.backgroundImage = 'url("./img/black-benz.jpg")';
});

// Implementando el evento clic en el botón
// - Botón del Carrito
const cart = () => {
  cartButton.style.display = "none";
  feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);

// - Botón de retroalimentación
const feedback = () => {
  cartButton.style.display = "block";
  feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);

/*
prodsSortByName: devuelve un array con los productos ordenados alfabéticamente.
	
prodsSortByPrice: devuelve un array con los productos ordenados por importe.
	
prodsTotalPrice: devuelve el importe total de los productos del array, con 2 decimales.
	
prodsWithLowUnits: además del array recibe como segundo parámetro un nº y devuelve un array con todos los productos de los que quedan menos de las unidades indicadas.
	
prodsList: devuelve una cadena que dice ‘Listado de productos:’ y en cada línea un guión y la información de un producto del array.*/ 
function prodsSortByName(miArray){
  return miArray.sort();
}


function prodsSortByPrice(miArray){
const arrordenado = miArray.sort(function(ele1,ele2){
  return ele1.price - ele2.price;});
  return arrordenado;

}

function prodsTotalPrice(miArray){
  const sumaprecio=miArray.map((obj)=>obj.price*obj.units).reduce((total, subtotal)=>(total+=subtotal),0);
  return "total: "+ sumaprecio;

}

function prodsWithLowUnits(miArray,min){
const existenciasminimas = miArray.filter((obj)=>obj.units<min);
return existenciasminimas;

}

function prodsList(miArray){
  const arrconguiones = miArray.map((obj)=>"- "+obj.toString());
  let cadena;
  cadena="listado de productos: \n";
  cadena="=====================";
  cadena+=arrconguiones.join("\n");
  return cadena;
}



