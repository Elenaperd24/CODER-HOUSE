class Usuario{

    constructor(nombre,apellido){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas= []
    }

    getFullName(){
        console.log(this.nombre + ' ' + this.apellido);
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
    }

    countMascotas(){
       return this.mascotas.length; 
    }

    addBook(name, autor){
        const libro = {
            "name": name,
            "autor": autor
        }
        this.libros.push(libro)
    }   

    getBookNames(){
        
    return this.libros.map((libro)=>libro.name)
    }

}

const miguel = new Usuario("Miguel", "Nieves") // creacion objeto Usario Miguel

miguel.getFullName()  // imprimo full name usuario

miguel.addMascota("fifi") // agrego mascota
miguel.addMascota("logan")
miguel.addMascota("hanna")

// imprimo la cantidad de mascotas que tiene miguel

console.log("Miguel Tiene: " + miguel.countMascotas() + " Mascotas"); 

// Agrego libros metodo addBook

miguel.addBook("El Alquimista", "Paulo Coelho")

miguel.addBook("El diario de Ana Frank", "Ana Frank")

miguel.addBook("El bosón de Higgs no te va a hacer la cama","Javier Santaolalla")

// imprimo solo los nombres de los libros de Miguel
console.log( "sus libros son:" );
console.log(miguel.getBookNames()); 