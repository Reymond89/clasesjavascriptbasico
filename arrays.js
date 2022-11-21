
// Un array es una estructura de datos, es un objeto tipo lista de alto nivel.

// Los arrays son objetos de tipo lista cuyo prototipo tiene métodos para realizar operaciones de recorrido y mutación




const frutas = ["manzana", "platano", "cereza", "fresa"];

console.log(frutas);

// cantidad de arrays dentro .length los numera

console.log(frutas.length)
//4


// === Metodos para mutar arrays ===

// agregar elementos al array usando .push

const masFrutas = frutas.push("Uvas");

// elimnar el ultimo elemento usando el metodo .pop dentro de ([indice a eliminar])

const ultimo = frutas.pop("Uvas");

// agregar un elemento al inicio del arreglo usando .unshift 

const nuevaLongitud = frutas.unshift("Mora");

// eliminar un elemento que es de 1ro en la lista del Array

const borrarFruta = frutas.shift("Mora");

// posicion del array para saber su lugar devuelve el indice

const posicion = frutas.indexOf("platano");
