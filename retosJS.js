/* Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra.

Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicasr precio por el iva 
y dividir por 100.*/ 
/*
let precioproducto= 240
let iva=((precioproducto*12)/100)
let total= precioproducto+iva
console.log('el precio total: '+total+'; sin iva:'+precioproducto)



 /*En este ejercicio debes escribir un programa que lea el nombre del usuario 
y salude con un Hola seguido del nombre del usuario. */

/*
let nombre= prompt('hola: escribe tu nombre: ')
let mensaje= 'hola '+nombre
console.log(mensaje)

/* En este ejercicio vas a pedir al usuario que teclee tres números enteros 
y el script mostrará como resultado el valor medio de los tres.
Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.*/
import readline from 'readline';
const rl= readline.createInterface(
{
input:process.stdin,
output: process.stdout

});
rl.question('first', (num1) => {



})

let numeroa= prompt('ingresa numero a:')
let numerob= prompt('ingresa numero b:')
let numeroc= prompt('ingresa numero c:')
numeroa=parseInt(numeroa,10)
numerob=parseInt(numerob,10)
numeroc=parseInt(numeroc,10)
let media=(numeroa+numerob+numeroc)/3
console.log('La media de los números es:' +media)

/* Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos por su coche y el número de litros consumidos . 
El script debe mostrar el consumo de combustible por kilómetro.

Un problema matemático muy simple numero de litros dividido por número de kilómetros.*/

/*
let nolitros=parseInt(prompt('ingresa numero de litros'))
let nokilometros=parseInt(prompt('ingresa numero de kilometros'))
let consumocombustible=nolitros/nokilometros
console.log('tu consumo es de'+ consumocombustible + 'l/km ...'+' tus kilometros: '+nokilometros+' tus litros: '+nolitros)

/* Cambio de unidades. en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.
Recuerda una hora son 60 minutos y cada minuto son 60 segundos.*/
/*
let horas=parseInt(prompt('Ingresa horas: '))
let minutos=parseInt(prompt('Ingresa minutos: '))

let calculohoras=horas*3600
let calculominuto=minutos*60
console.log('cantidad de segundos para '+horas+'horas y '+minutos+ 'minutos es'+(calculohoras+calculominuto)+'segundos') */