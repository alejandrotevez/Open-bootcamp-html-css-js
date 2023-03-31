// Funciones tipo flecha - funciones anonimas

const array = [1, 5, 6, 2, 7, 12, 8, 92]

const array2 = array.map((valor) => valor * 2) 

console.log(array2)

// const dobleDelvalor = valor => {
//    return valor * 2
// }

const dobleDelvalor = valor => valor * 2

console.log(doble(6))
console.log(dobleDelvalor(6))

const array3 = array.map(dobleDelvalor)

console.log(array3)

function doble(valor) {
    return valor * 2
}

