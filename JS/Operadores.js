//Inicia en la posición 0
let paises = ["CR", "USA", "PA"];


//visualizar la (posición)
console.log(paises[1]);
console.log(paises[2]);


//Objeto representa algo de la vida real
//Clave: Valor String, Integer, Boolean, Array, Función
let Estudiante ={
    Nombre: "Pedro",
    Edad: 20,
    Activo: true,
    Materias: ["Progra 1", "Base de datos", "Calculo"]
}


console.log(Estudiante); // Muestra todo el objeto
//Visualizar.Clave
console.log(Estudiante.Nombre);
console.log(Estudiante.Materias[2]);

// Declaren el siguiente objeto Auto 4 propiedad 

let Autos ={
    Marca: "Toyota",
    Año: 2020,
    Comprar: true,
    Model: ["Hilux", "Yaris", "Rav4"]
}

let mensaje = "La marca del auto es" +Autos.Marca+ "lo quieres comprar" +Autos.Comprar

//Patron literal
let mensaje2 = `La marca del auto es ${Autos.Marca} lo quieres comprar ${Autos.Comprar}`
console.log(mensaje2);


//3. Operadores aritméticos

let suma = 5 + 3;
let resta = 3 - 5;
let multi = 5 * 2;
let div = 8/2;
let mod = 10%3;


// comparación 
console.log(5 == 5);
console.log(5 == "5"); // igualdad débil   
console.log(5 === "5"); // igualdad fuerte   
console.log(5 != "5"); // false  
console.log(5 !== "5"); // true   
console.log(5 > 3); // true   
console.log(5 < 3); // false  

//lógicos 
//&& - y - and 
// || - 0 - or
console.log(true && false);
console.log(true || false);


//4-Estructuras de control 

let pato = true;

if(pato = true) {  // si
    alert(`Pato es verdadero ${pato}`)
} else { // si no 
    alert(`No cumple`)
}

