const compra = ["Cereales", "Harina", "Huevos", "Fideos", "Mayonesa"]

compra.push("Aceite de Girasol")
compra.pop()

const peliculas = [
    {
        titulo: "En busca de la felicidad",
        director: "Gabriele Muccino",
        fecha: new Date(2007, 2, 01)
    },
    {
        titulo: "El Hombre Araña 3",
        director: "Sam Raimi",
        fecha: new Date(2007, 5, 03)
    },
    {
        titulo: "cars 3",
        director: "Brian Fee",
        fecha: new Date(2017, 7, 13)
    }
]

const peliculasNuevas = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))

const directores = peliculas.map(pelicula => {
    return pelicula.director
})
const titulos = peliculas.map(pelicula => {
    return pelicula.titulo
})

const directores_titulos = directores.concat(titulos)
console.log(directores_titulos)

const directores_titulos_prop = [...directores, ...titulos]
console.log(directores_titulos_prop)