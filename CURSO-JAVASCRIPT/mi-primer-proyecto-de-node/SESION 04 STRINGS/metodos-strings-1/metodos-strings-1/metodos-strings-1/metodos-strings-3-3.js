// Metodos de cadenas de texto (parte 3)
// https://regexr.com

let texto_largo = "lionel Andrés Messi Cuccittini, conocido como lionel Messi, es un futbolista argentino que juega como delantero o centrocampista."

console.log(texto_largo.match(/lionel/g))

// ¿existe la palabra dentro del texto?
console.log(texto_largo.includes("lionel"))

//Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith(""))

// Saber si un texto termina con otra palabra
console.log(texto_largo.endsWith("centrocampista."))