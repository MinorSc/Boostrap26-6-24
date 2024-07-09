// Tarea JS trate de utilizar funciones para encapsular su código . 


//1-Crear una función que salude
// Crear una función llamada 'saludar' que tome un parámetro 'nombre' y retorne un saludo
// Solicitar al usuario ingresar su nombre y mostrar el saludo en la consola
let nombre = prompt("Ingresa tu nombre:");

function saludar(nombre) {
    return `Hola, ${nombre} un gusto saludarte!`
}

console.log(saludar(nombre));

//2-Determinar si una persona es mayor de edad

// Solicitar al usuario ingresar su edad
let Edad = parseInt(prompt("Ingresa tu edad:"));
// Verificar si la persona es mayor de edad y mostrar el resultado en la consola

function VerificarEdad(Edad) {
    if (Edad >= 18) {
        Mensajeexitoso("Es mayor de edad");
    } else {
        MensajeFallido("Es menos de edad");
    }
}

console.log(VerificarEdad);

//3-Crear un objeto con información de un libro y mostrar una propiedad
// Crear un objeto llamado 'libro' con propiedades 'titulo', 'autor' y 'año'
let libro = [{ titulo: "Mundo de Sofia", autor: "Jostein Gaarder", año: "1991" }];

// Mostrar la propiedad "El libro fue escrito por : 'autor' " 'autor' del objeto en la consola
console.log(`El libro ${libro.titulo},
     Fue escrito por ${libro.autor}, en el año ${libro.año}`);



//4-Verificar si una cadena está vacía

// Solicitar al usuario ingresar una cadena o string 
let cadena = prompt("Ingresa una cadena:");
// Verificar si la cadena está vacía y mostrar el resultado en la consola
if (cadena === "") {
    console.log("La cadena ingresada esta vacía");
} else {
    console.log("La cadena ingresada no esta vacía");
}

//5-Usar un switch para mostrar el día de la semana

// Solicitar al usuario ingresar un número del 1 al 7
let dia = parseInt(prompt("Ingresa un número del 1 al 7:"));
// Mostrar el día de la semana correspondiente usando un switch
switch (dia) {
    case 1:
        console.log("Es Lunes ");
        break;
    default:
        console.log();
}

//6-Crear un array y mostrar la posicion 7 y 0
// Crear un array llamado 'Pokemones' con al menos 10 Especies

let Pokemones

//7-Usar un operador lógico para verificar si un número está en un rango
// Solicitar al usuario ingresar un número
let numero = parseFloat(prompt("Ingresa un número:"));
// Verificar si el número está entre 1 y 10, y mostrar el resultado en la consola

numero = parseInt(numero);

if (numero >= 1 && numero <= 10) {

    console.log(`El numero ${numero} esta dentro del rango del 1 al 10.`);
} else {
    console.log(`El numero ${numero} NO esta dentro del rango del 1 al 10.`);
}

//8 Sumar dos números ingresados por el usuario

// Solicitar al usuario ingresar dos números
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
// Sumar los números y mostrar el resultado en la consola
let suma = numero1 + numero2;
console.log(suma);

//9 Crear una constante y mostrarla en consola

// Crear una constante llamada 'pi' y asignarle un valor
const pi = 3.141592 ;
// Mostrar el valor de 'pi' en la consola
console.log("El valor de Pi es ", pi);

// 10 Verificar si una persona puede votar
// Instrucción: Solicitar al usuario ingresar su edad y nacionalidad. Crear una función que verifique si la persona puede votar. La persona puede votar si tiene 18 años o más y es de nacionalidad 'peruana' o 'colombiana'.

// Solicitar al usuario ingresar su edad y nacionalidad
let edadV = parseInt(prompt("Ingresa tu edad:"));
let nacionalidad = prompt("Ingresa tu nacionalidad:");

edad = parseInt(edadV);

// Función para verificar si la persona puede votar
function puedeVotar(edadV, nacionalidad) {
    if (edadV >= 18 && (nacionalidad === 'peruana' || nacionalidad === 'colombiana')) {
        console.log("La persona puede votar.");
    } else {
        console.log("La persona NO puede votar.");
    }
}

puedeVotar();

//11  Determinar si una persona está en edad escolar
// Instrucción: Solicitar al usuario ingresar su edad y verificar si la persona está en edad escolar (de 6 a 18 años) o si es un adulto mayor (65 años o más).
// Solicitar al usuario ingresar su edad
let edadE = parseInt(prompt("Ingresa tu edad:"));

edadE = parseInt(edadE);

// Función para verificar si la persona está en edad escolar o es adulto mayor
function verificarEdad(edadE) {
    if (edadE >= 6 && edadE <= 18) {
        console.log("La persona está en edad escolar.");
    } else if (edadE >= 65) {
        console.log("La persona es un adulto mayor.");
    } else {
        console.log("La persona no está en edad escolar ni es un adulto mayor.");
    }
}