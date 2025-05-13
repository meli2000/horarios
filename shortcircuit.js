/* AND , AMBAS DEBEN CUMPLIRSE  T T PARA QUE SEA , TRUE */

let nombre=''

let username= nombre && 'hola' /* como está vacio entonces nombre es falso, como es AND (solo una se cumple), retorna false*/

if (username==false){
    console.log(username,'exito AND')
}

function fun1(){
    console.log('hola1');
    return true;
}
function fun2(){
    console.log('hola2')
    return true
}

let x=fun1&&fun2
    console.log(x)



