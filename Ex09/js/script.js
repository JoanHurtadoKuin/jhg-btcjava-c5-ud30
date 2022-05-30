var cadena = prompt("Introduce una frase");

var mayus = false;
var minus = false;

for (let index = 0; index < cadena.length; index++) {
if(cadena[index].toLowerCase() == cadena[index] ){
minus = true;
}

if(cadena[index].toUpperCase() == cadena[index] ){
    mayus = true;
    }
}
document.write(cadena + "<br>");
if(minus && mayus){

    document.write(" La cadena contiene minusculas y mayusculas");
}else if(minus){
    document.write(" La cadena contiene solo minusculas");
}else{
    document.write(" La cadena contiene solo mayusculas");
}