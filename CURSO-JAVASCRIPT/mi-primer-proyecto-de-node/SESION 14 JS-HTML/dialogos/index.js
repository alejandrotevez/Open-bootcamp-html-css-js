const boton = document.querySelector("#btn")

// console.log(boton)

boton.addEventListener("click", () => {
    // alert("Se ha hecho click")
    // confirm("Estas de acuerdo?") && console.log("OK")
    // confirm("Estas de acuerdo?") 
    //    ? console.log("OK")
    //    : console.log("NO!!")

    const respuesta = confirm("¿seguro?")
    if (respuesta) {
        console.log("Estas de acuerdo")
    } else {
        console.log("NO estas de acuerdo")
    }
})

const botoninfo = document.querySelector("#info")
botoninfo.addEventListener("click", () => {
    const nombre = prompt("Cual es tu nombre?")
    if (nombre) {
    console.log("Tu nombre es " + nombre)
    } else {
        console.log("No has introducido nada")
    }
})

const lista = [{
    nombre: "Tomas",
    edad: 19
},{
    nombre: "Julian",
    edad: 42
}, {
    nombre: "Marcos",
    edad: 28
}]

// console.log(lista)
console.table(lista)