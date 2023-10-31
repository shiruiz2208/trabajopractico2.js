/*

17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:



Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1


*/

let texto = prompt('Ingrese un texto')
let resultado;
let posicion;

for (let index = 0; index < texto.length; index++) {
    if(texto[index] === 'a' || texto[index] === 'e' || texto[index] === 'i' || texto[index] === 'o' || texto[index] === 'u'){
        resultado = texto[index]
        posicion = index
        break
    }
    
}

document.write(`La vocal ${resultado} esta en la posicion ${posicion}`)