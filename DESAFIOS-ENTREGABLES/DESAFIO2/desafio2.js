const fs = require('fs');

//*** FUNCIONES PARA MANEJOS DE ARCHIVOS

// funcion para leer contenido de un archivo
const readContent = nameFile => fs.readFileSync(`./${nameFile}`, 'utf-8', function (err, contenido) {
    if (err) throw err
    console.log('leido');
})

// funcion para convertir texto en Objeto
const convertString = (contenido) => {
    let textsinComa = contenido.slice(0, -1) // elimino la coma del final para usar Parse
   return JSON.parse(`[${textsinComa}]`)  // lo convierto en objeto
} 

// funcion para anadir objetos al archivo
const addObjec = (nameFile, product) => fs.appendFileSync(`./${nameFile}`, `${JSON.stringify(product)},`, function (err) {
    if (err) throw err
    else console.log('nvo product');
})

// funcion para eliminar contenido de un archivo

const deleteFile = nameFile => fs.unlinkSync(`./${nameFile}`, function(err){
    if(err) throw err
    console.log('su archivo ha sido borrado:(');
})

// AQUI COMIENZA MI CLASE CONTENEDOR 

class Contenedor {
    constructor(nameFile) {
        this.nameFile = nameFile // recibo el nombre del archivo
        //creo el archivo
        fs.writeFileSync(`./${this.nameFile}`, '', function (err) {
            if (err) throw err
            console.log('guardado')
        })
    }

    save(product) {
        try {
            //leo el contenido del archivo
            const contenido = readContent(this.nameFile)

            if (contenido !== "") {
                // convierto el texto en objeto y calculo la cantidad de id para sumar 1
                const cantId = convertString(contenido).length

                // asigno nvo ID al producto
                product.id = cantId + 1
            }
            else { product.id = 1 }

            // agrego el nuevo producto al archivo

            addObjec(this.nameFile, product)
           
            // devuelvo el id asignado
            console.log('id asignado', product.id);
        }
        catch (err) {
            console.log('error de lectura', err);
        }
    }
    getById(id) {
        const contenido = readContent(this.nameFile)

        // aplico filter al text producto 
        let arrayProduct = convertString(contenido).filter((item)=>item.id == id )

        if(arrayProduct[0]!== null){
            return arrayProduct[0] // Retorno el resultado con el objeto del ID
        }
        else{
            return null;
        }

    }

    getAll(nameFile){
        const contenido = readContent(this.nameFile)
        console.log(contenido);
        return convertString(contenido)
    }

    deleteById(id){
        const contenido = readContent(this.nameFile) // leo el contenido

        const objectDelete = this.getById(id) // obtengo el objeto con el id
        
        let arrayProduct = convertString(contenido).filter((item)=>item.id !== objectDelete.id )

        // Sobreescribo sin el objeto de id indicado 

        fs.writeFileSync(`./${this.nameFile}`, `${JSON.stringify(arrayProduct)}`, function(err){
            if (err) throw err
            else console.log('actualizado')
        })

        
    }
    deleteAll(){
        deleteFile(this.nameFile)
    }
}

// datos a recibir de prueba 
const datoA = {
    title: 'Escuadra',
    price: 123.45,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',

}

const datoB = {
    title: 'Calculadora',
    price: 234.56,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',

}

const datoC = {
    title: 'Globo Terraqueo',
    price: 264.4,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',

}
const datoD = {
    title: 'Pelota Rosa',
    price: 264.4,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',

}
// creo la constante para almacenar en productos.txt 
const productos = new Contenedor('productos.txt')

// le guardo 3 objetos a productos.txt
productos.save(datoA)
productos.save(datoB)
productos.save(datoC)


// obtengo el objeto con id 4
//console.log(productos.getById(4));

//obtengo todos los objetos

console.log(productos.getAll('productos.txt'));

//agrego un nuevo producto
//productos.save(datoD)

// elimino de un array el elemento con id 3
//productos.deleteById(3)

// Elimino todo el contenido del archivo
//productos.deleteAll()



