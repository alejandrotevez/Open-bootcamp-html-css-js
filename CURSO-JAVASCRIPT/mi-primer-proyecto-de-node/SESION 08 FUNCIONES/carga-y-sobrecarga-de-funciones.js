// Carga y sobrecarga de funciones

function saludar() {
    hola()
}

function hola() {
    console.log("Hola! soy la funcion hola()")
}

saludar()

// 1- cargar la funcion global()
// 2- saludar() global()
// 3- hola() saludar() global()
// 4- saludar() gloabl()
// 5- gloabl()

// function recursivo() {
//    recursivo()
// }
// recursivo()