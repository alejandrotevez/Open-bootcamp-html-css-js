// Casos muy especificos - break, continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8,];



for (let i = 0; i < lista.length; i++) {
    
    console.log(lista[i]);

    if (lista[i] === 3); {
        continue;
    }

    let j = 50;
    const k = 100;
    console.log(j);
    console.log(k);
    console.log(lista[i]);

    if (lista[i] > 5) {
        break;
    }
}


// Cula es el ambito de un bucle
console.log(k);
console.log(j);
console.log(i);