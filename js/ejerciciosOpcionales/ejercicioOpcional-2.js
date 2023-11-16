// Ejercicios opcionales para practicar objetos con notación literal:

// 2- Objeto "Lista de Tareas": Crea un objeto listaTareas con una propiedad tareas que sea un array de tareas, y métodos como agregarTarea, completarTarea y listarTareas que realicen acciones sobre la lista de tareas.

// Creamos el objeto lista de tareas 
const listaDeTareas = {
    tareas: [],
    agregarTarea: function (nombreTarea) {
        this.tareas.push(nombreTarea);
    },
    completarTarea: function (nombreTarea) {
        if (this.tareas.includes(nombreTarea)) {

            let tareaCompletada = this.tareas.indexOf(nombreTarea);
            this.tareas.splice(tareaCompletada,1);

        } else {
            alert('No se encontro la tarea!')
        }
    },
    listarTareas: function () {
        document.write('<h2>Lista de tareas:</h2>');
        document.write('<ul>');
        this.tareas.map ((elemento) => document.write(`<li>${elemento}</li>`));
        document.write('</ul>');
    }
}

// Iniciamos los metodos 
listaDeTareas.agregarTarea('Tarea 1');
listaDeTareas.agregarTarea('Tarea 2');
listaDeTareas.agregarTarea('Tarea 3');
listaDeTareas.agregarTarea('Tarea 4');

listaDeTareas.listarTareas();

listaDeTareas.completarTarea('Tarea 2');
listaDeTareas.completarTarea('Tarea 3');

listaDeTareas.listarTareas();
