function calcularfactorial(numero){
var numero
var resultado = 1;

for (var i=1; i <= numero; i++) {
    resultado = resultado *i;
    }
    return resultado;
}

console.log(calcularfactorial(10))