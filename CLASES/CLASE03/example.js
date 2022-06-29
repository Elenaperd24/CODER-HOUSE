//PROGRAMACION ASINCRONA

// resolve y reject nos ayudan a generar promesas que ya tienen el estado resuelto
Promise.reject(30)
.then( x => x + 1 )
.then( x => x * 2 )
.then( x => {
    if(x==22) throw 'Error'
   //
})
.then( x => 30 )
.then( x => x / 2 )
.then( console.log )
.catch( console.log )