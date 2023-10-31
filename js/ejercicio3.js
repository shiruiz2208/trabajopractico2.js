/*
Realiza un script que pida cadenas de texto  
hasta que se pulse “cancelar”. 
Al salir con “cancelar” 
deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() 
https://www.w3schools.com/jsref/met_win_confirm.asp


*/
let fraseCompleta = "";
do {
    let primeraFrase = prompt("Ingrese una frase");
    //preguntar si es la primera frase
    if (fraseCompleta.length === 0) {
        fraseCompleta += primeraFrase
    } else {
        fraseCompleta += "-" + primeraFrase
    }

} while (confirm("¿Desea ingresar otra frase"));

document.write(`<p>La frase completa es : ${fraseCompleta}</p>`)

