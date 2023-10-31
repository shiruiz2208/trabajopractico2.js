
/*

16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

let texto = prompt('Ingrese un texto')

let resultado = ''

for (let index = texto.length - 1; index >= 0; index--) {
    resultado += texto[index]
}

document.write(resultado)