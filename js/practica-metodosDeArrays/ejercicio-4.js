// EJERCICIO 4 
// Gestión de proyectos en una empresa: Tienes dos arrays, uno para los nombres de proyectos y otro para los estados de los proyectos. Debes crear funciones que permitan agregar nuevos proyectos, cambiar el estado de un proyecto, asignar un responsable y generar un resumen de proyectos en curso.

const proyectos = [];
const estado = [];

const agregarProyecto = (nuevoProyecto,estadoDelProyecto) => {
    estadoDelProyecto = 'En curso...'
    proyectos.push(nuevoProyecto);
    estado.push(estadoDelProyecto);
}

// Cambiar el estado de un proyecto 
const cambiarEstado = (NombreDelProyecto,estado,nuevoEstado,arraysDeProyectos) => {
    let proyecto = arraysDeProyectos.indexOf(NombreDelProyecto);

    if (proyecto !== -1) {
        document.write(`<p>Se cambio el estado del proyecto: '${NombreDelProyecto}' <br>Estado antiguo: ${estado[proyecto]} <br>Nuevo estado: ${nuevoEstado} </p>`);
        estado[proyecto] = nuevoEstado;
    } else {
        document.write("<p style=color:red;>No se puedo cambiar el estado porque no encontramos el proyecto!</p>");
    }
}

// Función para asignar un responsable
const asignarResponsable = (NombreDelProyecto,responsable,arraysDeProyectos) => {
    let proyecto = arraysDeProyectos.indexOf(NombreDelProyecto);

    if (proyecto !== -1) {
        document.write(`<p>Se le asigno a la persona ${responsable} como responsable del proyecto '${NombreDelProyecto}'</p>`);
        arraysDeProyectos[proyecto]+= `<br>Responsable: ${responsable}`;
    } else {
        document.write("<p style=color:red;>No se puedo agregar un responsable porque no encontramos el proyecto!</p>");
    }
}

// Resumen de proyectos en curso
const proyectosEnCurso = (proyectos,estado) => {
    document.write(`<h2>Resumen de proyectos en curso</h2>`)

    if (estado.length > 0) {
        document.write(`<ol>`);
        for (let i = 0; i < estado.length; i++) {
            if (estado[i].includes('En curso...')) {
                document.write(`<li>Proyecto: ${proyectos[i]} <br>Estado: <span style='color:#ccaa00'>${estado[i]}</span></li>`);
            }
        }
        document.write(`</ol>`);
    } else{
        document.write('<p style=color:red;>No se encontraron proyectos en curso!</p>');
    }
}

// Función para ver todos los proyectos 
const verTodosLosProyectos = (proyectos,estado) => {
    document.write(`<h2>Todos los proyectos</h2>`)

    if (proyectos.length > 0) {
        document.write(`<ol>`);
        for (let i = 0; i < proyectos.length; i++) {
            document.write(`<li>Proyecto: ${proyectos[i]} <br>Estado: <span>${estado[i]}</span></li>`);
        }
        document.write(`</ol>`);
    } else {
        document.write("<p style=color:red;>No hay proyectos!</p>");
    }
}

// Agregamos proyectos 
agregarProyecto('Primer proyecto');
agregarProyecto('Segundo proyecto');
agregarProyecto('Tercer proyecto');
agregarProyecto('Cuarto proyecto');

// Asignar responsable a un proyecto 
asignarResponsable('Primer proyecto','Juan perez',proyectos);
asignarResponsable('Segundo proyecto','Pedro Ruiz',proyectos);

// Cambiar estadp de un proyecto 
cambiarEstado('Tercer proyecto',estado,'Terminado',proyectos);

// Ver proyectos en curso 
proyectosEnCurso(proyectos,estado)

// Ver todos los proyectos 
verTodosLosProyectos(proyectos,estado);


