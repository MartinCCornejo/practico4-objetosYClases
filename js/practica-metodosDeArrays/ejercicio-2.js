// // EJERCICIO 2
// // Registro de notas de estudiantes: Tienes dos arrays, uno con nombres de estudiantes y otro con sus respectivas notas en un curso. Debes crear funciones que calculen el promedio de notas por estudiante y muestren un resumen con los nombres de los estudiantes que aprobaron y reprobaron el curso.

const alumnos = [
    'María García',
    'Carlos Rodríguez',
    'Laura Pérez',
    'Alejandro Sánchez',
    'Ana Martínez',
    'Javier López',
    'Juan Soria'
];

// Ponemos un ejemplo que un estudiante recibio 4 calificaciones y sumamos esas 4 para luego promediarlas
const notas = [38,23,34,40,21,12,33];

// Función para calcular el promedio 
const calcularPromedio = (notas) => promedio = notas / 4;  /* Dividimos cada suma de calificaciones por 4 y nos dara el promedio*/

// Función para mostrar los aprobados y desaprobados 
const mostrarResumen = (alumnos,notas) => {
    document.write(`<h2>Notas de los alumnos</h2>`)
    document.write('<ol>');
    for (let i = 0; i < alumnos.length; i++) {
        let notasPromediadas = calcularPromedio(notas[i]);

        if (notasPromediadas >= 6) {
            document.write(`<li>${alumnos[i]} <br>Nota: ${notasPromediadas}<br><span style='color: #0c0'>APROBADO</span> <hr></li>`);
        } else {
            document.write(`<li>${alumnos[i]} <br>Nota: ${notasPromediadas}<br><span style='color: #c00'>DESAPROBADO</span> <hr></li>`);
        }
    }
    document.write('</ol>');

}

mostrarResumen(alumnos,notas);
