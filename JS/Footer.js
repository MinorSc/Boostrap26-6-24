document.addEventListener("DOMContentLoaded", () => {
    MostrarFooter()
})



//opciones 
const Opciones_Footer = [
    { Nombre: "Terminos y Condiciones", Ruta: "term.html", Activo: true },
    { Nombre: "Politica de Privacidad", Ruta: "privacidad.html", Activo: true },
    { Nombre: "Contacto", Ruta: "contacto.html", Activo: true }

];

function MostrarFooter() {
    let Contenedor = document.getElementById("V_Lista_Footer");
    let plantilla;

    Opciones_Footer.forEach(element => {

        if (element.Activo) { // Valida si la condición es verdadera para mostrar al usuario 
            plantilla += `
            <li class="list-inline-item">
                                <a href="${element.Ruta}" class="text-white">${element.Nombre}</a>
                            </li>
            `
            Contenedor.innerHTML = plantilla
        }

    });

}

// function DatosFooter(Opciones_Footer) {

// }


