const express = require('express') // requiero el modulo
const moment = require('moment')

let date = moment().format('MMMM Do YYYY')
let hora = moment().format('h:mm:ss a')

const app = express() // llamo a la funcion

const PORT = 8080

const server = app.listen(PORT, ()=>{
    console.log(`servidor escuhando port:  ${server.address().port}`);
})

server.on('error', error => console.log(`error en servidor ${error}`))

app.get('/',(req,res)=>{
    res.send(`<h1 style="color:blue">Bienvenidos al servidor express</h1>`)
})
let cont = 0
app.get('/visitas',(req,res)=>{
    cont++
    res.send(`la cantidad de visitas han sido: ${cont}`)
})

app.get('/fyh',(req,res)=>{
    res.send({'fecha': `${date}`, 'hora': `${hora}`})
})