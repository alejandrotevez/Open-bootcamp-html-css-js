function devuelveTrue() {
    return true
}

async function damePromesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

damePromesa()

function* idsPares() {
    let id = 0
    while(true) {
        yield id += 2
    }
}
const id = idsPares();

console.log(id.next())
console.log(id.next())
