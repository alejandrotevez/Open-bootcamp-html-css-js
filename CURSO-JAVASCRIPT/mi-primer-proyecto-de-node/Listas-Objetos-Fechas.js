// Listas, array o arreglo
// EJEMPLO
const lista = [1, "hola", true, undefined, null]
const lista2 = new Array(2, "hola", true, undefined, null)
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento, index 0"
const lista4 = [lista, lista2, lista3]

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// Objetos
// EJEMPLO
const movil = {
    altura: 10,
    anchura: 5,
    marca: "xiaomi",
    isWhite: false,
    contactos: ["gorka", "martin", "raul"],
    tarjeta: {
        marca: "sandis",
        almacenamiento: 32
    }
}
movil.año = 2019;

console.log(movil.año)

//Fechas 
// Librerias de apoyo moment.js
// EJEMPLO
const ahora = new Date()
console.log(ahora);

const fecha_milis = new Date(10) // Utilizando los milisegundos
console.log(fecha_milis)

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena)

const fecha_valores = new Date(2022, 2, 15)
console.log(fecha_valores)

const dia = ahora.getDate()
const mes = ahora.getMonth()
const anyo = ahora.getFullYear()

console.log(dia, mes, anyo)
