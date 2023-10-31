/*
Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456



*/


let Numero = parseInt(prompt('Ingrese su numerito señorit@'))

if(numero <= 50){
    console.log('hola')
    for (let i = 0; i < numero; i++) {
        for(let j = 0; j <= i; j++){
         document.write(`${i}`)
        }
        document.write(`<br>`)
     }
}else{
    alert('Ingresa un numero menor o igual que 50 grax xd')
}