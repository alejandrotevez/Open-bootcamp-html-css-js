const nombre = "Tomas"
const apellido = "Tevez"

const informacion = {
    nombre,
    apellido
}

sessionStorage.setItem("informacion", JSON.stringify(informacion))

localStorage.setItem("informacion", JSON.stringify(informacion))

const nueva = new Date()

document.cookie = `informacion=${JSON.stringify(informacion)};expires=${new Date(nueva.getTime() + 2 * 60000)}`

