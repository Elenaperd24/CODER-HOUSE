console.log("Hola Mundo");

//A- Crear un proyecto en node.js que genere 10000 números aleatorios en el rango  de 1 a 20.

function getRandom() {
    return Math.random()*20;
  }

for (let i=0; i<10000; i++){
    let numeroAleatorio = Math.floor((Math.random()*20)+1)
}

//Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.



// PAG 12

const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]
let nombres = productos.map(item => item.nombre).join(",")
console.log(nombres)
let suma = productos.reduce((precio,item) => precio + item.precio, 0)
console.log(suma)
let promedio = suma / productos.length
console.log(promedio)
let menorPrecio = productos.sort((item,a) => item.precio - a.precio)[0]
console.log(menorPrecio)
let mayorPrecio = productos.sort((item,a) => item.precio - a.precio)[productos.length-1]
console.log(mayorPrecio)
let objetoNuevo= {
    nombres,
    suma,
    promedio,
    menorPrecio,
    mayorPrecio
}
console.log(objetoNuevo)

/// nuevo
const moment = require('moment')

console.log("Fechas")

let formato = moment().format('MMMM Do YYYY, h:mm:ss a')


let dia = moment().format('M/D/YYYY')
let momentFecha = moment("09-09-1985 23:45")


console.log(`Hoy es ${dia}`)
console.log("Nací el " + momentFecha.format('M/D/YYYY'))
console.log("Desde que naci ha pasado " + momentFecha.fromNow())

