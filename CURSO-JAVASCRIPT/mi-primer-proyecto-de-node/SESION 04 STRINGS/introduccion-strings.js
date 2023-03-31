// Sesion 4 - Strings ( cadena de caracteres)
let str_sng = 'hola sot un texto con comillas simples';
let str_dbl = "Hola soy un texto";

console.log(str_sng);
console.log(str_dbl);

let str_comillas = "El otro dia me dijo literalmente \"ve a sacar la basura\""
let str_comillas_simples = 'El otro dia me dijo literalmente "ve a sacar la basura"'
let str_comillas_dobles = "El otro dia me dijo literalmente 've a sacar la basura'"
let str_comillas_simples_2 = 'El otro dia me dijo literalmente \'ve a sacar la basura\''

console.log(str_comillas)
console.log(str_comillas_simples)
console.log(str_comillas_dobles)


///////// Comillas invertidas (backticks)

let nombre = "tomas"
let saludo = `Hola, ${nombre} bienvenido`

console.log(saludo)

// Plantillas HTML
let plantilla = `
<html>
    <h1>Pagina web de ${nombre}</h1>
    <p> este es un parrafo </p>
</html>
`;

console.log(plantilla)



///////// Introduccion de variables en HTML
let libros = ["empieza por el por qué", "El monje que vendió su ferrari", "El poder del ahora"]
