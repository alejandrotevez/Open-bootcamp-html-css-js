var variable;
let variableLet_;

const constante = "Hola soy una constante"

var a = 1;
console.log(a);

a = 4;
console.log(a)

console.log(constante)
// constante = "adios" // Nos da un error

let b = 3;
console.log(b);

b = 5;
console.log(b)




var variable = "Hola soy una variable VAR"

for (var i = 0; i < 3; i++) {
    var variable = "soy la segunda variable"
}

console.log(variable)

let variableLet = "Hola soy una variable LET"

for (var i = 0; i < 3; i++) {
    let variableLet = "soy la segunda variable LET"
}

console.log(variableLet)


//////////////////////////

var num = 4;

console.log(typeof num);

num = "soy un num";

console.log(typeof num);
