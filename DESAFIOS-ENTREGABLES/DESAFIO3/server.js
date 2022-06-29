const express = require('express'); // requiero el modulo
const Contenedor = require('./contenedor.js')
const app = express() // llamo a la funcion

const productos = new Contenedor('productos.txt')

const PORT = 8080

const server = app.listen(PORT, ()=>{
    console.log(`servidor escuhando port:  ${server.address().port}`);
})
// detectar errores
server.on('error', error => console.log(`error en servidor ${error}`))

// ruta principal 
app.get('/',(req,res)=>{
    res.send(`<h1 style="color: pink ;">Welcome to my server</h1>`)
})


// mostrando todos los productos con metodo getAll clase Contenedor
app.get('/productos',(req,res)=>{
    res.send(`${JSON.stringify(productos.getAll())}`)
}) 


// seleccionar producto random con metodo getById clase Contenedor
app.get('/productosRandom', (req, res) => {

    // saber cuantos datos hay para garantizar que siempre se mantenga en este rango de numeros
    const idRandom = productos.getAll().length+1 

    // obtener id aleatorios dentro de los datos existentes para usar el getById()    
    const id = Math.floor(Math.random() * (idRandom - 1) + 1) 

    res.send(`${JSON.stringify(productos.getById(id))}`)
})









