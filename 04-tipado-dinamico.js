let nombre="mel"
let numero=44
let boolean= true;
let indef=undefined;
let nulo;
/**
 * 
 * console.log(typeof nombre)
console.log(typeof numero)
console.log(typeof boolean)
console.log(typeof indef)
console.log(typeof nulo)
 * 
 */


const inglesA2={
    grammar:"Tiempos verbales, verbos(regulares, irregulares, reflexivos,preposicion, obligación,posibilidad), Sustantivos(abstractos, colectivos, propios, género), adjetivos(Tiempo, lugar, modo)",
    vocabulary:"Números, fechas,hora, hobbies, lugares, personalidad, preposiciones, clima estaciones",
    Listening:"Videos extra English, youtube",
    otros:"lectura libro, free-code camp English A2"
    
}
console.log("esta es la grammar")
console.log(inglesA2.grammar)
let llave='Listening'
console.log(inglesA2[llave])

delete inglesA2.vocabulary;
console.log(inglesA2)