// Sentencias Switch
// EJEMPLO

let nota = 2;

switch (nota) {
    case 5: 
        console.log("buen trabajo, sobresaliente");
        break;
    case 4:
        console.log("buen trabajo, pero podrias haberlo hecho mejor");
        break;
    case 3:
        console.log("has obtenido un suficiente");
        break;
    case 2:
        console.log("no has aprobado por poco");
        break;
    case 1:
        console.log("no has estudiado nada, estudia un poco mas para la proxima");
        break;
    default:
        console.log("error")
        break;
}