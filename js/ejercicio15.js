/*
15- Realiza un script que cuente el número de vocales que tiene un texto

*/

let fraseUsuario = prompt('Ingresa una frase ')
let salida;
for (i = 0; i < frase.length; i++) {
    switch (frase[i]) {
        case 'a':
            console.log('a')
            salida += 'a'
            break;
        case 'e':
            console.log('e')
            salida += 'e'
            break;
        case 'i':
            console.log('i')
            salida += 'i'
            break;
        case 'o':
            console.log('o')
            salida += 'o'
            break;
        case 'u':
            console.log('u')
            salida += 'u'
            break;
        default:
            break;
    }
}

document.write(salida.length)