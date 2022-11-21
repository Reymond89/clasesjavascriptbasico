let articulos = [
    {nombre: "bici", costo: 3000},
    {nombre:"tv", costo:  2500},
    {nombre: "libro", costo: 320},
    {nombre: "celular", costo: 10000},
    {nombre: "laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
]
// filter metodo para filtrar solo el costo

let articulosFiltrados = articulos.filter(function (articulo) {
    return articulo.costo <= 500
});
// ejercicio 2

let students = [
    {
      name: 'Alvaro',
      score: 10,
    },
    {
      name: 'Daniel',
      score: 16,
    },
    {
      name: 'Alexys',
      score: 12,
    },
    {
      name: 'Rafa',
      score: 17,
    },
    {
      name: 'Alejandro',
      score: 8,
    },
    {
      name: 'Sofia',
      score: 9,
    }
  ]

  let estudiantesAprobados = students.filter(function(nota){
    return nota.score >= 11
})
undefined
// estudiantesAprobados

// ejercicio 3

let numbers = [1,5,23,4,12,45,78,8,8.9,10,11,3.4,10.1,84,6]
undefined
let filtrarNumeros = numbers.filter(function(numeros){
    return numeros >= 10
})
undefined
filtrarNumeros
(8) [23, 12, 45, 78, 10, 11, 10.1, 84]









// Metodo para filtrar solo los nombres .map

let nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

// (7) ['bici', 'tv', 'libro', 'celular', 'laptop', 'Teclado', 'Audifonos']

let encontrarArticulo = articulos.find(function(articulo){
    return articulo.nombre === "laptop"

});

// encontrarArticulo
// {nombre: 'laptop', costo: 20000}

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})

// bici
// VM782:2 tv
// VM782:2 libro
// VM782:2 celular
// VM782:2 laptop
// VM782:2 Teclado
// VM782:2 Audifonos

let articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
// articulosBaratos
// true

let nombres = ["Jose", "Carlos", "Juan"];

function agregarNombres(){
    nombres.push("Adriana", "Josefa");
    console.log(nombres)
}

agregarNombres()
// (5) ['Jose', 'Carlos', 'Juan', 'Adriana', 'Josefa']

// METODO shift

let numeros = [1, 2, 3, 4, 5, 6];
undefined
function eliminarNumeros(){
    numeros.shift(1, 2);
    console.log(numeros)
}
undefined
eliminarNumeros()
VM1268:3 (5) [2, 3, 4, 5, 6]

// METODO FILTER

const cars = [
  {
    color: 'red',
    brand: 'Kia',
  },
  {
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
  },
  {
    licensePlate: 'RGB255',
  },
];
undefined
const cardsLicense = cars.filter(cars => cars.licensePlate);
    
undefined
cardsLicense
 
// {color: 'gray', brand: 'Chevrolet', licensePlate: 'AAA111'}
// 1

// {licensePlate: 'RGB255'}
// length
// : 
// 2