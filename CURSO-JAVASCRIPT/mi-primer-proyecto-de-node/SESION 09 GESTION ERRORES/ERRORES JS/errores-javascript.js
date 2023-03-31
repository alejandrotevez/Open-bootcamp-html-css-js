const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
     //return false;
    throw new Error("El valor debe ser de tipo numero")
}

// const elDoble = miFuncion("a")

const numero = "8";

try {
    // Codigo que puede fallar
    console.log("Esta ejecutandose de manera correcta")
    const doble = miFuncion(numero)
    console.log(doble)
} catch(e) {
    // En caso de fallar, quiero que ejecutes
    console.error(`El valor de e es: ${e}`)
    console.error("ERROR!")
} finally {
    console.log("Esto se va a ejecutar tanto si se produce error y tambien si no se produce ninguno")
}

// InternalError, SyntaxError, TypeError, RangerError y ReferenceError