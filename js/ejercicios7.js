/*
Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1




*/

let numerito = parseInt(prompt('Ingrese su numerito señorit@'))

if(numerito <= 50){
    console.log('hola')
    for (let i = numerito; i >= 0; i--) {
        for(let j = 0; j <= i; j++){
            document.write(`${i}`)
        }
           document.write(`<br>`)
    }
}else{
    alert('Ingresa un numero menor o igual que 50 grax xd')
}