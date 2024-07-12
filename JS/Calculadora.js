console.log("Funcionando")

function Calculadora2(event) {
    event.preventDefault();
    const Resultado = document.getElementById("Resultado");
    const Num1 = parseFloat(document.getElementById("Num1").value);
    const Num2 = parseFloat(document.getElementById("Num2").value);
    const Operaciones = document.getElementById("Operaciones").value;
    let calculo;
    switch (Operaciones) {
        case "+":
            calculo = Num1 + Num2
            break;
        case "-":
            calculo = Num1 - Num2
            break;
        case "*":
            calculo = Num1 * Num2
            break;
        case "/":
            calculo = Num1 / Num2
            break;

        default:
            calculo = "Operacion no valida"
            break;
    }

    Resultado.textContent = `El resultado es: ${calculo}`

    console.log(Operaciones);

}
// function Sumar(event) {
//     event.preventDefault();


//     //parseFloat de string a numero con decimales
//     // parseInt de string a numero enteros
//     let calculo = parseFloat(Num1.value) + parseFloat(Num2.value);
//     Resultado.textContent = `El resultado es ${calculo}`;
// }

// function Restar(event) {
//     event.preventDefault();


//     //parseFloat de string a numero con decimales
//     // parseInt de string a numero enteros
//     let calculo = parseFloat(Num1.value) - parseFloat(Num2.value);
//     Resultado.textContent = `El resultado es ${calculo}`;
// }

