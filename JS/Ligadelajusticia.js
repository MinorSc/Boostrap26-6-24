console.log("Hola")
//1 evento que carga la función el DOM este en la pagina
document.addEventListener('DOMContentLoaded', () => {

  Mostrar_Ligadelajusticia(Heroes)

})

//2- Arreglo de objetos
const Heroes = [
  {
    nombre: "Aquaman",
    bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
    img: "img/aquaman.png",
    casa: "DC"
  },
  {
    nombre: "Batman",
    bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
    img: "img/batman.png",
    casa: "DC"
  },
  {
    nombre: "Superman",
    bio: "Superman es un superhéroe ficticio que aparece en los cómics publicados por DC Comics. Es uno de los personajes de ficción más populares del siglo XX.",
    img: "img/superman.png",
    casa: "DC"
  },
  {
    nombre: "Wonder Woman",
    bio: "Es una superheroína ficticia creada por el psicólogo y escritor William Moulton Marston para la editorial DC Comics. Sus historias se centran en los ideales del amor, paz y sexualidad.",
    img: "img/wonder_woman.png",
    casa: "DC"
  }
];

// 3- Función que muestra los heroes
// a- ID del contenedor
//b- Plantilla
//C Ciclo de la parte 2 (2- arreglo de objetos)
//D Meter la plantilla en el contenedor


function Mostrar_Ligadelajusticia(Heroes) { //Firma
  // let Contenedor //A
  let Contenedor = document.getElementById("contenedorHeroes");
  // let Plantilla  //B
  let plantilla = "";

  Heroes.forEach(element => {
    plantilla += `
      <div class="row spaced-div m-4">
        <div class="card col-lg-3" style="width: 18rem;">
          <img src="${element.img}" class="card-img-top" alt="img">
          <div class="card-body">
            <h4 class="card-title">${element.nombre}</h4>
            <h6 class="card-title">${element.casa}</h6>
            <p class="card-text">${element.bio}</p>
            <a href="#" class="btn btn-primary">Ver mas</a>
           </div>
           </div>
        `
  });


  // //C 

  // Contenedor.innerHtml = Plantilla //D
  Contenedor.innerHTML = plantilla
  console.log(Heroes)
}
