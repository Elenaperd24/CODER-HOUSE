const fs = require('fs')

/* Las funciones sincrónicas terminan con “Sync”
Son operaciones bloqueantes que devuelven un resultado

Podemos listar algunas de ellas:
    - readFileSync: lectura de un archivo en forma sincrónica
    - writeFileSync: escritura de un archivo en forma sincrónica
    - appendFileSync: actualización de un archivo en forma sincrónica
    - unlinkSync: borrado de un archivo en forma sincrónica
    - mkdirSync: creación de una carpeta */

//El formato que utilizaremos con más frecuencia será 'utf-8' 
 fs.appendFileSync('primerTexto.txt', 'mi primer archivo\n', function(err){
     if(err) throw err
     console.log('archivo guardado')
 })

 //escribir un archivo que ya tiene contenido

 fs.open('./segundoTexto.txt', 'w' , function(err, file){
     if(err) throw err
     console.log('guardado')
 })
// crear un archivo usando write

fs.writeFileSync('tercerTexto', 'probando write :)', function(err){
    if(err) throw err
    console.log('guardado')
})

// modificando un nuevo archivo

fs.appendFileSync('./primerTexto.txt', 'SON LAS 00:15hs', function(err){
    if(err) throw err;
    console.log("guardado");
})

// esta es la forma de borrar un archivo

fs.unlinkSync('./borrar.txt', function(err){
    if(err) throw err
    console.log('su archivo ha sido borrado:(');
})