



//console.log
//alert
//prompt



//resultado

//DOM
// Document Object Model


//Seleccionar el elemento del DOM poe le Id y cambiar el contenido 
// document.getElementById("resultado").textContent = "Hola Mundo"


// document.getElementById("resultado").style.backgroundColor = "blue"

let DivResultado = document.getElementById("resultado");

console.log(DivResultado);

DivResultado.textContent = "Hola Mundo"
DivResultado.style.backgroundColor = "red"


let ParrafoNombre = document.getElementById("parrafo");

console.log(ParrafoNombre);

ParrafoNombre.textContent = "Mi nombre es Minor Solano"
ParrafoNombre.style.backgroundColor = "green"


let titulo = document.getElementById("titulo");
// titulo.textContent = "Gato"
// titulo.innerHTML = "Perro"

console.log(titulo);

let nuevoParrafo = document.createElement("p")
nuevoParrafo.textContent = "Contenido de la etiqueta"
DivResultado.appendChild(nuevoParrafo)

console.log(nuevoParrafo)