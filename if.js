// condicionales
// si es verdadero
if (true){
    console.log("hola");

}
// si es falso
if (true){
    console.log("hola");
} else{
    console.log("soy falso");
}
// si hay mas cosas por validar 

if (true){
    console.log("hola");
} else if(false) {
    console.log("soy falso")
}

var edad = 18
// se cumple la primera condicion

if (edad === 18){
    console.log("puedes votar, sera tu 1ra votacion");
}else if (edad > 18){
    console.log("Puedes votar de nuevo");
}else{
    console.log("Aun no puedes votar")
}

var edad = 23
// se cumple la segunda condicion

if (edad === 18){
    console.log("puedes votar, sera tu 1ra votacion");
}else if (edad > 18){
    console.log("Puedes votar de nuevo");
}else{
    console.log("Aun no puedes votar")
}

var edad = 17
// se cumple la tercera condicion

if (edad === 18){
    console.log("puedes votar, sera tu 1ra votacion");
}else if (edad > 18){
    console.log("Puedes votar de nuevo");
}else{
    console.log("Aun no puedes votar")
}

// otra forma de validar 

var numero = 1;

var resultado = numero === 1 ? "Si soy un uno" : "No, no soy uno"

console.log(resultado)
// VM2460:1 Si soy un uno

// cambiando el valor por 2 entra en la segunda condicion
var numero = 2;

var resultado = numero === 1 ? "Si soy un uno" : "No, no soy uno"
undefined
console.log(resultado)
// VM2534:1 No, no soy uno

var opc1 = "piedra"
var opc2 = "papel"
var opc3 = "tijera"

var resultado = function (human , cpu) {
   if (human != cpu){
    if(human == opc1 && cpu == opc2){
        console.log("cpu ha ganado con la opcion " + opc2)
    }else if(human == opc1 && cpu == opc3){
        console.log("human ha ganado con la opcion " + opc1)
    }else if(human == opc2 && cpu == opc1){
        console.log("human ha ganado con la opcion " +opc2)
    }else if(human == opc2 && cpu == opc3){
        console.log("cpu ha ganado con la opcion " + opc3)
    }else if(human == opc3 && cpu == opc1){
        console.log("cpu ha ganado con la opcion " + opc1)
    }else if(human == opc3 && opc2){
        console.log("human ha ganado con la opcion " + opc3)
    }
   }else(human === cpu);{
    console.log("ES UN EMPATE")
   }

};

