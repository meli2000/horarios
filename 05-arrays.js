/* Collecciones = arrays*/
let animales=['Tralalero tralala', 'Bombardinho Cocodrilo', 'Ballerina capuccina','tun tun tun sahur']
let vocabularyA2=['Médico','Números','fechas','horas','Actividades','Lugares','preposiciones']

let caracter="" /*
for (i=0;i=animales.length;i+ +1){
 console.log(animales.push(i))   
}
*/
for(let lista of animales){
console.log(lista);

}

const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {  /* + para incrementar valor de i*/
  rows.push(i);
  console.log(rows)
}

let result = ""

for (const row of rows) {
result=result + row;
console.log(rows)
}

console.log(result);


