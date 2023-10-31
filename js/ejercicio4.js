/* 
Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y 
seguir pidiendo números. 
Al salir con “cancelar” 
deberá indicarse la suma total de los números introducidos.


*/

let numero = 0;

while(true){
    let input = prompt('Ingrese un numero')

    if(input === null){
        numero+= 0
        break
    }

    console.log(numero)
    numero += parseInt(input)
}

document.write('el resultado es',numero)