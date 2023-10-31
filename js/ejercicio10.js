/*


Realiza un script que pida número de filas 
y columnas y escriba una tabla. 
Dentro de cada una de las celdas 
deberá escribirse un número consecutivo en orden descendente.
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

Ejercicios con Math

35 34 33 32 31 30 29
28 27 26 25 24 23 22
21 20 19 18 17 16 15
14 13 12 11 10 9 8
7 6 5 4 3 2 1 


*/

let filas = parseInt(prompt("Ingresa las filas"))
let columnas = parseInt(prompt("Ingresa las columnas"))

let total = filas * columnas
let limite = total - filas

for (let index = total; index >= 1; index--) {
    document.write(index)
    document.write('-----')
    if(limite === index){

        document.write('<br>')
        limite -= filas
    }

}