// .some()
const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2]

const res = array.some(valor => valor < 0)

console.log(res)

const existe = array.some(valor => valor === 9)

console.log(existe)

const listaObjetos = [
    { nombre: "tomas", edad: 19},
    { nombre: "juan", edad: 13},
    { nombre: "omar", edad: 20},
    { nombre: "lucia", edad: 16},
    { nombre: "gabriel", edad: 29},
]

const existetomas = listaObjetos.some(persona => persona.nombre === "luciano")

console.log(existetomas)

// Como obtener una lista a partir de un objeto iterable
const str = "Hola soy Tomas"
console.log(str[5])

const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([2, 3, "hola", 4])
const ar_set = Array.from(set)

console.log(ar_set)

const keys = array.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)