    
    //Formulario
    //Nombre y Apellido
    // Y al darle click mostrar en un dvi 

    console.log("Funcionando")

    function Guardar() {
        
        const Formulario = document.getElementById("Formulario");
        const valor1 = document.getElementById("valor1").value; //obtengo la información que digitando el usuario
        const valor2 = document.getElementById("valor2").value;
        const valorrespuesta = document.getElementById("valorrespuesta");


        alert(`El valor1 es ${valor1}, el valor2 es ${valor2} `);

        valorrespuesta.textContent = `El valor1 es ${valor1}, el valor2 es ${valor2} `
        
        debugger
    }