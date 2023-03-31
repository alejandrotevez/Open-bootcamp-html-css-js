const datos = {
    nombre: "Tomas",
    apellido: "Tevez",
    edad: 19,
    altura: 178,
    eresDesarrollador: true
}

const edad = datos.edad
const lista = [
    {
        ...datos
    },{
        nombre: "Mauro",
        apellido: "pais",
        edad: 20,
        altura: 176,
        eresDesarrollador: false
    },{
        nombre: "Santiago",
        apellido: "Gonzalez",
        edad: 21,
        altura: 177,
        eresDesarrollador: false
    }
]

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad)

console.log(listaOrdenada)