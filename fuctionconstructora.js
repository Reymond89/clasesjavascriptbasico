// inicializo las variables

let autos = [];
let cantidadAutos = 0;
let cantidadRegistrados = 0;

function Auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
  
// le solicitamos al usuario la cantidad de autos que va registrar

cantidadAutos = prompt('¿Cuantos autos desea registrar?');

// Ejecuto este ciclo mientras la cantidad de autos registrados sea menor 
// a la cantidad de autos que el usuario desea registrar

while (cantidadRegistrados < cantidadAutos){
    // defino variables con scope local
    let marca = prompt('marca del vehiculo: ');
    let modelo = prompt('modelo del vehiculo: ');
    let annio = prompt('annio del vehiculo: ');

    // paso las variables de scope local a la funcion constructora
    let autoNuevo = new Auto(marca, modelo, annio);

    // agrega el auto a mi arreglo de autos
    autos.unshift(autoNuevo);

    // incremento la cantidad de autos registrados en 1

    cantidadRegistrados++;
}

// retorno por consola el arreglo con todos los autos
// registrados por el usuario

console.log(autos);

