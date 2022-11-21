const estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(const i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}


// otra manera 

const estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(const estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}
// VM2599:4 Hola, Maria
// VM2599:4 Hola, Sergio
// VM2599:4 Hola, Rosa
// VM2599:4 Hola, Daniel

// While

const estudiantes = ["Maria", "Pedro", "Jose", "Antonio"];

function saludarEstudiantes(estudiante){
    console.log(`Hola buen dia, ${estudiante}`)
}
  

while (estudiantes.length > 0) {   // Aquí la tarea se hará siempre y cuando sea true, cuando llegué a false, dejará de hacer la tarea
    var estudiante = estudiantes.shift();  // shift() es un método que saca un elemento del array de la posición 0 a la última, Pop() comienza de la última a la primera.
    saludarEstudiantes(estudiante);
}
// VM73:4 Hola buen dia, Maria
// VM73:4 Hola buen dia, Pedro
// VM73:4 Hola buen dia, Jose
// VM73:4 Hola buen dia, Antonio



const Materias = ["Python", "c++", "javascript", "Php"];

function materiasAsignadas(materia){
    console.log(`Materia asignada, ${materia}`)
}

while (Materias.length > 0){
    let materia = Materias.shift();
    materiasAsignadas(materia);
}

// Materia asignada, Python
// VM98:4 Materia asignada, c++
// VM98:4 Materia asignada, javascript
// VM98:4 Materia asignada, Php

let estudiantes = ["Andres", "Paola", "Camilo"];
let deathCount = 2;
let nuevo = ["Felipe"]

export function solution(estudiantes, deathCount, nuevo){
    
}

while (deathCount == 0){
    let nuevaLista = (estudiantes, nuevo.push);
    console.log(nuevaLista)
}































