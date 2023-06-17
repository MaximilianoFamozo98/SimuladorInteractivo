const suma = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

const resta = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}

const multiplicacion = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

const division = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}

alert("elija la operacion que desea realizar");

let seleccion = prompt("1-suma 2-resta 3-multiplicacion 4-division");

if (seleccion == 1){
let numero1 = prompt("elija el primer numero a sumar");
let numero2 = prompt(`elija el numero para sumarle a ${numero1}`);
let resultado = suma(numero1,numero2);
alert(`su resultado es ${resultado}`);

}else if (seleccion == 2){
let numero1 = prompt("elija el numero a restar");
let numero2 = prompt(`elija el numero que quiere restarle a ${numero1}`);
let resultado = resta(numero1, numero2);
alert (`el resultado de la resta es ${resultado}`);

}else if(seleccion == 3){
let numero1 = prompt("Elija el numero a multiplicar");
let numero2 = prompt(`elija el numero para multiplicar a ${numero1}`);
let resultado = multiplicacion (numero1, numero2);
alert(`El resultado de la multiplicacion es ${resultado}`);

}else if (seleccion == 4){
let numero1 = prompt("Elija el numero a dividir");
let numero2 = prompt(`elija el numero a dividir por ${numero1}`);
let resultado = division(numero1,numero2);
alert(`El resultado de la division es ${resultado}`);
}else {
    alert("Elegi bien pavote");
}




