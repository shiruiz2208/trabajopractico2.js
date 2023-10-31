/*

Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10



*/

for (let index = 1; index <= 500; index++) {
    let linea = index % 5
    let multiplo4 = index % 4
    let multiplo9 = index % 9

    // if(multiplo4 === 0)document.write('multiplo de 4<br>')
    // if(multiplo9 === 0)document.write('multiplo de 9<br>')

    document.write(`${index}${multiplo4 === 0 ? '(multiplo de 4)' : ''}${multiplo9 === 0 ? '(multiplo de 9)' : ''}</br>`)

    if (linea === 0) {
        document.write('---------------------------------</br>')
    }
}