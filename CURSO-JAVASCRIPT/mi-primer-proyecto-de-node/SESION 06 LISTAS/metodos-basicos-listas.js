// Como trabajar con listas (arrays, arreglos, vectores)
let var1 = 45
let array = [1, "hola", false, {id:5}, null, undefined, var1]

console.log(array)

// Acceder a los valores de un array a traves de su posicion
// Array[indice] =>0, 1, 2, 3, 4, 5, ....
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])

// Metodos para introduccir nuevos valores en nuestros arrays
// .push() .unshift() => mutan el valor de nuestro array
// Valores al final => push
array.push("final", 35, 100, false)
console.log(array)

// Valores al principio => unshift
array.unshift("inicio", 78, 86, 22)
console.log(array)

// Metodos para eliminar valores en nuestros arrays
// .pop() .shift => Mutan el valor del array


const array2 = [1, 3, "hola", false]
// Valores al final => pop
array2.pop()
console.log(array2)
// Valores al principio => shift
array2.shift()
console.log(array2)

// Metodos para eliminar, modificar o añadir valores en nuestro array
// .splice(x, y, z)
const array3 = [1, 2, 3, 4, 5, 6]


// Eliminar valores .splice(indice, numero-valores a eliminar)
array3.splice(2, 1)
console.log(array3)

// Añadir valores .splice(indice, 0, valores)

array3.splice(2, 0, "hola")
console.log(array3)

// Modificar valores .splice(indice, 1, valores)
array3.splice(2, 1, 3)
console.log(array3)