//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.//

let edad = parseInt(prompt("Ingrese una edad"));


if (edad >= 18) { document.write("Puede conducir") }
else {
    document.write('Tu numero ingresado no es valido ')
};