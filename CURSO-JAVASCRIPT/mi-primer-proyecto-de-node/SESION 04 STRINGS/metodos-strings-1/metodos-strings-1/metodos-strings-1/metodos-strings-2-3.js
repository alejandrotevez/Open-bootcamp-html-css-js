// Metodos de cadenas de texto (parte 2)

let input = "Escorpio"
let db = "escorpio"


// toLowerCase() - toUpperCase()
console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toLowerCase() === db.toLowerCase())
console.log(input.toUpperCase() === db.toUpperCase())

// Formas de concatenar dos cadenas de caracteres

let str_1 = "Hola soy la primera cadena."
let str_2 = "Y yo soy la segunda cadena."

console.log(str_1.concat(" ", str_2))
console.log(str_1 + " " + str_2)
console.log(`${str_1} ${str_2}`)

// Eliminar espacios al inicio y al final
let str_3 = "  Hola sot un string con un espacio al final.  "
console.log(str_3.length)
// trim()
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

// Obtener el caracter que hay en cierta posición
let str_4 = "Hola soy el string numero 4" // ["H", "o", "l", "a", " ", "s".......]

console.log(str_4.charAt(5))
console.log(str_4[5])

// Obtener la posicion de una palabra dentro de una cadena de caracteres

let str_5 = "hola soy tomas, mi nombre es tomas y mi apellido es tevez"
console.log(str_5.indexOf("tomas"))
console.log(str_5.charAt(9))
console.log(str_5.lastIndexOf("tomas"))