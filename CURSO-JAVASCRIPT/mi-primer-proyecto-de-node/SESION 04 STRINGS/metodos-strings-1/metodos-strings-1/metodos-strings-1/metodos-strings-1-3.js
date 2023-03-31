// Metodos mas utilizados con cadenas de caracteres (strings)
// Como obtener la longitud de un string

let str = "Hola soy un string";
console.log(str.length)

// Obtener partes de cadena de caracteres
// slice() substring() subtr()
let slice_str = str.slice(0, 10)
console.log(slice_str)

let substring_str = str.substring(5, 10)
console.log(substring_str)

let substr_str = str.substr(5, 10)
console.log(substr_str)

// Remplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es tomas"
console.log(cadena)

// Al utilizar strings solo reemplaza la primera instancia
console.log(cadena.replace('tomas', 'alejandro'))


let texto_largo = "lionel Andrés Messi Cuccittini, conocido como lionel Messi, es un futbolista argentino que juega como delantero o centrocampista."
// Al utilizar strings solo reemplaza la primera instancia
console.log(texto_largo.replace('lionel', 'leo'))

// Al utilizar la expresion regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/lionel/g, 'leo'))

