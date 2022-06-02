let numeroIntroducido = prompt("Introduce el numero");

if (numeroIntroducido <= 0 || isNaN(numeroIntroducido)) {
    alert("Numero introducido erroneo")
} else {

    for (let i = numeroIntroducido-1; i > 0; i--) {
        numeroIntroducido = numeroIntroducido * i;   
    }

    let resultado = numeroIntroducido;

    alert("El resultado es " + resultado);
    console.log("El resultado es " + resultado);

}