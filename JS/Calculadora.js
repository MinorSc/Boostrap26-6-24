console.log("Funcionando")

function Sumar(event) {
        event.preventDefault();
        const Num1 = document.getElementById("Num1");
        const Num2 = document.getElementById("Num2");
        const Resultado = document.getElementById("Resultado");

         //parseFloat de string a numero con decimales 
         // parseInt de string a numero enteros    
        let calculo = parseFloat(Num1.value) + parseFloat(Num2.value);
        Resultado.textContent = `El resultado es ${calculo}`;
}

function Restar(event) {
    event.preventDefault();
    const Num1 = document.getElementById("Num1");
    const Num2 = document.getElementById("Num2");
    const Resultado = document.getElementById("Resultado");

     //parseFloat de string a numero con decimales 
     // parseInt de string a numero enteros    
    let calculo = parseFloat(Num1.value) - parseFloat(Num2.value);
    Resultado.textContent = `El resultado es ${calculo}`;
}