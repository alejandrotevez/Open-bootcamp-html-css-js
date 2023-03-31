// Iterar los valores de una lista
const array = ["hola", 2, 5, 90, false, undefined]

// Forma antigua (poco efectiva)
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// Forma ES6 (mas eficiente) .forEach()
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19]
arrayNums.forEach(valor => {
    suma+= valor;
    console.log(valor)
})
console.log(suma)

// Busqueda de un valor dentro de una lista .find()
// Quiero encontrar el elemento 90
const variable = array.find(valor =>{
    if (valor === 90) {
    return true
    }
})

console.log(variable)

const listaObjetos = [
    { nombre: "tomas", edad: 19},
    { nombre: "juan", edad: 13},
    { nombre: "omar", edad: 20},
    { nombre: "lucia", edad: 16},
    { nombre: "gabriel", edad: 29},
]

//const objeto = listaObjetos.find(o => {
//    if (o.nombre === "tomas") {
//        return true
//    }
//})

const objeto = listaObjetos.find(o => o.nombre === "tomas")
console.log(objeto.edad)

const { edad } = listaObjetos.find(o => o.nombre === "lucia")
console.log(edad)