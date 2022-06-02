//Creamos una array con valores
const valores = [true, 5, false, 'hola', 'adios', 2];

//Esta variable guardara la cadena de texto que es mayor
let elementoMayor = '';

valores.forEach((valor) => {
    //Evaluamos si el elemento es de texto y si es mayor
    if (typeof valor === 'string' && valor.length > elementoMayor.length) {

        elementoMayor = valor;
    }
})
//Mostramos por consola
console.log(`De los elementos de texto el mayor es: ${elementoMayor}`);

//Si false es igual a false son iguales
if (!valores[0] == valores[2]) {

    console.log('true');
   
}
//Si false es igual true no son iguales
if (!(valores[0] == valores[2])) {

    console.log('false');

}

let operandos = new Array();//Elemento númerico 2

valores.forEach((valor) => {
    //Evaluamos si el elemento es numérico y le asignamos al operando
    if (typeof valor === 'number') {

        operandos.push(valor);

    }
})

console.log(operandos[0] + operandos[1]);//Suma

console.log(operandos[0] - operandos[1]);//Resta

console.log(operandos[0] * operandos[1]);//Multiplicación

console.log(operandos[0] / operandos[1]);//Division

console.log(operandos[0] % operandos[1]);//Módulo