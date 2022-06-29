const delay = ret => {for(let i=0; i<ret*10e6; i++);}

function mostrarLetras(string, fin) {

    let valor = string.split('')

    for (let i = 0; i <= valor.length - 1; i++) {

      console.log(valor[i])

      delay(100)

    }

    fin()
}

mostrarLetras('hola', fin = () => console.log('terminé'))

//setInterval(function () { console.log("Este es el clima!!!")}, 10000)