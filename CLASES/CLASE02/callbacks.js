// touch nombreDelarchivo
// Estructura de un callback
function primera(segunda) {
    return segunda("hola")
}
// mi funcion, callback para loguear es una funcion anonima

/*function escribirYloguear(texto , callbackParaLoguear){
    
    console.log(texto);

    callbackParaLoguear("archivo escrito con exito")
} */

//aqui la utilizo

/*escribirYloguear("hola al mundo de los callBacks", (mensajeParaLoguear)=>{

    const fecha = new Date().toLocaleDateString()

    console.log(`${fecha}: ${mensajeParaLoguear}`);

})*/


const operacion = (paramA, ParamB, callBack) => callBack(paramA, ParamB)


const sumar = (datoA, datoB) => datoA + datoB

const resultado = operacion(1, 1, sumar)

//console.log(resultado);

//console.log(resultado);

const ejecutar = (unaFuncion, param) => unaFuncion(param)

const nombre = nombre => console.log(`saludos ${nombre}`);


//ejecutar(nombre, 'elena')

function dividir(dividendo, divisor) {
    return new Promise((resolve, reject) => {

        if (divisor === 0) {
            console.log("no se puede dividir por Cero");
        }

        else{
            resolve(dividendo/divisor)
        }
    })
}

dividir(10,2)
.then(resultado=>{
    console.log(`resultado ${resultado}`);
})
.catch(error=> {
    console.log(error);
})