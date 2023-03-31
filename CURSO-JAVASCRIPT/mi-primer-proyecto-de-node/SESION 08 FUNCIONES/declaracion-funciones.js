// Que son las funciones, como se declaran y como se utilizan
const nom = "Tomas"

// saludar("Tomas")
saludar(nom)

function saludar(nombre) {
    console.log(`Hola ${nombre}`)
}

///

let nombre_2 = "Juan"
console.log(nombre_2)

despedir(nombre_2)


function despedir(nombre) {
    nombre = "diego"
    console.log(`Adios ${nombre}`)
}

///

let persona = {nombre: "tomas", apellido: "Tevez"} 
console.log(persona)

saludarPersona(persona)

console.log(persona)

function saludarPersona(objeto) {
    objeto.apellido = "gonzalez"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

saludar()

///

function imprimeNumero(numero = 7) { // Parametros por defecto
    console.log(numero)
}

imprimeNumero()

///

function imprimir(...parametros) {
    console.log(parametros)
}

imprimir(1, 2, 3, "hola", {id: 9})

///

function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const s = suma(1, 2, 3, 4, 9, 15, 16)

console.log(s)

///

let variable = "hola"

function multiplicar(a = 0, b = 0) {
    console.log(variable)
    let variable_interna = "adios"
    console.log(variable_interna)
    return a * b
}



console.log(multiplicar(4, 9))