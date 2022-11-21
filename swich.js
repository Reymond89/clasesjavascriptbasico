const numero = 1

switch (numero) {
    // si se cumple con el breakk deja de seguir validando
    case 1: 
        console.log("soy uno");
        break;
    case 10:
        console.log("Soy un 10!");
        break;
    case 100:
        console.log("Si soy un 100!");
        break;
        // se utiliza el defaault por si no se cumple ninguna de las anteriores
    default:
        console.log("No soy nada");
}

const opc1 = "piedra"
const opc2 = "papel"
const opc3 = "tijera"

function resultado(human, cpu) {
    switch(true){
        case human === cpu:
            console.log("Empate");
            break;
        case human == opc1 && cpu == opc2:
            console.log("cpu ha ganado con la opcion "+ opc2)
            break;
        case human == opc1 && cpu == opc3:
            console.log("human ha ganado con la opcion " +opc1)
            break;
        case human == opc2 && cpu == opc1:
            console.log("human ha ganado con la opcion " + opc2)
            break;
        case human == opc2 && cpu == opc3:
            console.log("cpu ha ganado con la opcion " + opc3)
            break;
        case human == opc3 && cpu == opc1:
            console.log("ha ganado el cpu con la opcion " + opc1)
            break;
        case human == opc3 && cpu == opc2:
            console.log("human ha ganado con la opcion " + opc3)
            break;
        default:
            console.log("valor incorrecto, vuelve a intertarlo")
    }
}

// forma mas resumida

const piedra = "piedra";
const papel = "papel";
const tijera = "tijera";
function resultado(user,cpu){
switch (true) {
    case ( user===cpu):
        console.log("empate");
        break;
    case (cpu=="piedra" && user=="tijera" || cpu=="papel"&&user=="piedra"||cpu=="tijera"&&user=="papel"):
        console.log("gana cpu!");
        break;
    default: 
        console.log("Gana Humano!");
}}