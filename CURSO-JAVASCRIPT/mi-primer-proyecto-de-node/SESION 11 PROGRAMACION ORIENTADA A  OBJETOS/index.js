const persona = {
    nombre: "Tomas",
    edad: 19,
    isDeveloper: true,
    saludo: function() {
            console.log('hello')
    }
}

// console.log(persona)
persona.saludo()

const otra_persona = {
    nombre: "Miguel",
    edad: 15,
    isDeveloper: false,
    saludo: function() {
            console.log('hello')
    }
}

otra_persona.saludo()

const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, // nombre: nombre
        edad, // edad: edad
        isDeveloper,
        saludo: function() {
            console.log('hello')
        }
    }
}

const nueva_persona = creaPersona("juan", 23, true)
console.log(nueva_persona)

