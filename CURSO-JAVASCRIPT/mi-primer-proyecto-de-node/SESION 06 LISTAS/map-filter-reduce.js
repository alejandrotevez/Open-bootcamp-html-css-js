// Trabajar con metodos mas avanzados
// .map() . filter() .reduce()

const array = ["San sebastian", "Madrid", "Barcelona", "Alicante", "Bilbao" ]

const val = array.forEach(v => {
    console.log(v)
    return 4
})
console.log(val)

const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)
console.log(newArray)

const listaObjetos = [
    { nombre: "tomas", edad: 19},
    { nombre: "juan", edad: 35},
    { nombre: "omar", edad: 50},
    { nombre: "lucia", edad: 16},
    { nombre: "gabriel", edad: 30},
]
// const personasMayores = listaObjetos.filter(obj => {
//    if (obj.edad > 30) {
//        return true
//    } else {
//        return false
//    }
// })
const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores)

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "juan")
console.log(nuevaLista)

const valores = [3, 56, 23, 5, 90, 100]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})
console.log(suma)