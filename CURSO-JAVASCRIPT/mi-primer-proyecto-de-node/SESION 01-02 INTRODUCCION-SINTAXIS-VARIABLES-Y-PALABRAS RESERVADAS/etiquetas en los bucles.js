// breack y continue
// labels


let unidades = 0
let decenas = 0

BucleDecenas: while (true) {
BuclesUnidades: while (true) {
        console.log('el numero actual es: ${decenas}${unidades}')
        unidades++
        if (unidades === 10) {
            unidades = 0
            break BuclesUnidades
        }
        if (decenas === 2) {
            break BucleDecenas
        }
    }
    decenas++    
}
console.log("ya hemos terminado")