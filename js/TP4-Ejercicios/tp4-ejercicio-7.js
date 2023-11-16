// TP4 - EJERCICIO 7 
// 7- Nos piden realizar una agenda telefónica de contactos.
// Un contacto está definido por un nombre y un teléfono. Se considera que un
// contacto es igual a otro cuando sus nombres son iguales.
// Una agenda de contactos está formada por un conjunto de contactos. Se podrá
// crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto
// (10).
// Los métodos de la agenda serán los siguientes:
// ● aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda
// no puede almacenar más contactos indicar por pantalla.
// ● existeContacto(Contacto): indica si el contacto pasado existe o no.
// ● listarContactos(): Lista toda la agenda
// ● buscarContacto(nombre): busca un contacto por su nombre y muestra su
// teléfono.
// ● eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se
// ha eliminado o no por pantalla
// ● agendaLlena(): indica si la agenda está llena.
// ● huecosLibres(): indica cuántos contactos más podemos ingresar.
// Crea un menú con opciones que serán seleccionadas por el usuario usando un
// prompt, las salidas de las operaciones seleccionadas por el usuario se pueden
// mostrar en pantalla y por consola.

// Creamos la clase Contacto
class Contacto {
    constructor(nombre,telefono){
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

// Creamos la clase agenda para añadir los contactos 
class Agenda {
    constructor(tamañoMaximo){
        this.tamañoMaximo = tamañoMaximo;
        this.contactos = [];
    }

    añadirContacto(Contacto){
        if (this.contactos.length !== this.tamañoMaximo) {
            this.contactos.push(Contacto);
            alert('Contacto agregado con éxito!')
        } else {
            alert('No se pueden agregar más contactos');
        }
    }

    existeContacto(Contacto){
        if (this.contactos.length > 0) {
            let encontrado = false;
            
            for (let i = 0; i < this.contactos.length; i++) {
                if (this.contactos[i].nombre === Contacto) {
                    encontrado = true;
                    break;
                }
            }
            if (encontrado === true) {
                alert(`El contacto '${Contacto}' sí existe en la agenda`);
            } else {
                alert(`El contacto '${Contacto}' NO existe en la agenda`);
            }
        } else {
            alert('No existen contactos por el momento');
        }
    }

    listarContactos (){
        document.write(`<h2>Contactos en la agenda</h2>`)

        if (this.contactos.length > 0) {
            document.write(`<ul>`);
            for (let i = 0; i < this.contactos.length; i++) {
                document.write(`<li>${this.contactos[i].nombre} <br>${this.contactos[i].telefono}<hr></li>`);
            }
            document.write(`</ul>`);

        } else {
            document.write(`<p style='color:#c00'>No hay contactos en la agenda</p>`);
        }
    }

    buscarContacto(nombre) {
        if (this.contactos.length > 0) {
            let encontrado = false;

            for (let i = 0; i < this.contactos.length; i++) {
                if (this.contactos[i].nombre === nombre) {
                    alert(`El número de teléfono del contacto ${nombre} es ${this.contactos[i].telefono}`);
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado === true) {
                alert(`No se encontró el contacto '${nombre}'`);
            }
        } else {
            alert('No existen contactos por el momento');
        }
    }

    eliminarContacto(contacto){
        if (this.contactos.length > 0) {
            let eliminado = false;

            for (let i = 0; i < this.contactos.length; i++) {
                if (this.contactos[i].nombre === contacto) {
                    this.contactos.splice(i, 1);
                    eliminado = true;
                }
            }
            if (eliminado === true) {
                alert(`Contacto ${contacto} eliminado`);
            } else {
                alert(`No se encontró el contacto '${contacto}' para eliminar`);
            }
        } else {
            alert('No existen contactos por el momento');
        }
    }

    agendaLlena(){
        if (this.contactos.length === 10) {
            alert(`La agenda esta llena (${this.contactos.length} contactos)`)
        } else {
            alert(`La agenda no esta llena (${this.contactos.length} contactos)`)
        }
    }

    huecosLibres(){
        let huecos = this.tamañoMaximo - this.contactos.length;
        alert(`Puedes agregar ${huecos} contactos más`);
    }

}

// Creamos la agenda 
const agenda = new Agenda(10);


// Creamos el menu de opciones de la agenda 
let opcion;

while(opcion !== '8' || opcion !== '3'){
    opcion = prompt('Bienvenido a la agenda, seleccione una opcion: \n1. Añadir un contacto. \n2. Verificar si existe un contacto. \n3. Ver todos los contactos. \n4. Buscar un número de contacto por su nombre. \n5. Eliminar un contacto. \n6. Ver si la agenda esta llena. \n7. Ver cuantos contáctos más podemos agregar. \n 8. Salir de la agenda.');
    
     
    if (opcion === null) { // Si se presiona "Cancelar"
        alert('Saliendo de la agenda...');
        break;
    }

    switch (opcion) {
        case '1':
            const nombre = prompt('Escriba el nombre del contacto');
            const numero = parseInt(prompt('Escriba el número'));
            let contacto = new Contacto(nombre,numero);
            agenda.añadirContacto(contacto);
            break;
        case '2':
            const nombreDelContacto = prompt('Escriba el nombre del contacto');
            agenda.existeContacto(nombreDelContacto);
            break;
        case '3':
            agenda.listarContactos();
            break;
        case '4':
            const nombreABuscar = prompt('Escriba el nombre del contacto');
            agenda.buscarContacto(nombreABuscar);
            break;
        case '5':
            const contactoAEliminar = prompt('Escriba el nombre del contacto');
            agenda.eliminarContacto(contactoAEliminar);
            break;
        case '6':
            agenda.agendaLlena();
            break;
        case '7':
            agenda.huecosLibres();
            break;
        case '8':
            alert('Saliendo de la agenda...');
            break;
        default:
            alert('Seleccione una opcion valida');
            break;
    }

    if (opcion === '3') {
        break; // Detiene el bucle después de mostrar los contactos
    }
}
