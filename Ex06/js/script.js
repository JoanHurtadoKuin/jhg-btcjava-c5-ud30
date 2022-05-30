var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];

var numero = prompt("Introduce el numero del DNI");

var letra = prompt("Introduce la letra del DNI")

if(numero>0 && numero<99999999){
    console.log("Hola");
    var restoNumero = numero%23;
    console.log(restoNumero);
    if(letra === letras[restoNumero]){
        alert("El dni " + numero + letra + " és correcto");
        document.write("El dni " + numero + letra + " és correcto");

    }else{
        alert("El dni " + numero + letra + " no és correcto ");
        document.write("El dni " + numero + letra + " no és correcto ");
    }

}else{
    console.log("Numero incorrecto");
    alert("Número incorrecto");
    document.write("Número incorrecto");
}