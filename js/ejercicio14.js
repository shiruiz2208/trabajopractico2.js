/*
14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

*/

let palabra = prompt('Ingrese su cadena de texto')

let resultado = '';

for(let i=0; i < palabra.length; i++){
    resultado += palabra[i] + "-"
}

document.write(resultado)