// Trabajando con fechas
const fecha = new Date()

console.log(fecha)


// Atencion - los meses inicializan en 0 (0 = ENERO, 11 = DICIEMBRE)
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192)

console.log(fecha2)

const fecha3 = new Date(1000000)
console.log(fecha3)

const fecha4 = new Date("October 13, 1979 12:15:15")
console.log(fecha4)

console.log(fecha < fecha2)

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192)
console.log(fecha5)

console.log(fecha2 === fecha5) // ERROR - No se pueden comparar fechas de esta manera

console.log(fecha.getTime() === fecha5.getTime()) // OK - Esta es la forma de comparar la igualdad entre fechas

// Obtener el dia, el mes y el año de una fecha
// Obtener el dia .getDate()
console.log(fecha2.getDate())

// Obtener el mes .getMonth() (0 = ENERO, 11 = DICIEMBRE)
console.log(fecha2.getMonth())

// Obtener el año .getFullYear()
console.log(fecha2.getFullYear())

console.log(fecha2)

// .toLocaleDateString

console.log(fecha2.toLocaleDateString())