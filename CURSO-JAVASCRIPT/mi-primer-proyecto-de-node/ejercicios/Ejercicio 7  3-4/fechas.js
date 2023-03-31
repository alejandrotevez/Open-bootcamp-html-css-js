const hoy = new Date()

const nacimiento = new Date(2003, 4, 14)
console.log(nacimiento)

const comparacion = hoy > nacimiento
console.log(hoy > nacimiento)

const diaNacimiento = nacimiento.getDate()
console.log(diaNacimiento)

const mesNacimiento = nacimiento.getMonth() + 1
console.log(mesNacimiento)

const anyoNacimiento = nacimiento.getFullYear()
console.log(anyoNacimiento)