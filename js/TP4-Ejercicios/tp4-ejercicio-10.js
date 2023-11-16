// TP4 - EJERCICIO 10 
// 10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de
// aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un
// objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre
// de un avión y devolverá información en caso de encontrarlo, si no lo encontró
// indicar con un mensaje.
// Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista
// de pasajeros. Los aviones tienen el método abordar el cual permite que un
// pasajero suba al avión solo si hay capacidad disponible en el mismo, caso
// contrario mostrar un mensaje que indique que el avión está lleno.
// Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3
// objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto,
// buscar un avión y usar el método abordar


// Creamos la clase  
class Aeropuerto {
    constructor(nombreAeropuerto){
        this.nombreAeropuerto = nombreAeropuerto;
        this.listaDeAviones = [];
    }


    agregarAvion(avion){
        this.listaDeAviones.push(avion);
        console.log(`Se agrego el avion ${avion.nombre} al aeropuerto`);
    }
    
    buscarAvion(avion){
        let avionBuscado = this.listaDeAviones;
        
        for (let i = 0; i < avionBuscado.length; i++) {
            if (avionBuscado[i].nombre === avion) { 
                document.write(`<p>Encontramos el avion '${avion}' dentro del aeropuerto</p>`);
                break;
            } else{
                document.write(`<p>NO encontramos el avion '${avion}' dentro del aeropuerto</p>`);
                break;
            }
        }
    }

    // Cree un metodo adicional que me muestre los aviones dentro del aeropuerto 
    mostrarAviones(){
        document.write(`<h2>Aviones dentro del aeropuerto:</h2>`)
        this.listaDeAviones.map((elemento) => document.write(`<ul><li/>${elemento.nombre}</li></ul>`))
    }

}

class Avion {
    constructor(nombre,capacidad,destino){
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.destino = destino;
        this.listaDePasajeros = [];
    }

    abordar(pasajero){
        let pasajeros = this.listaDePasajeros;

        if (pasajeros.length < this.capacidad) {
            pasajeros.push(pasajero);
            document.write(`<p>Se agrego a ${pasajero} dentro del avion '${this.nombre}'</p>`);
        } else {
            document.write(`<p style='color:#c00'>Lo sentimos, el avion esta lleno!`);
        }
    }
}

// Creamos el objeto aeropuerto 
const aeropuerto = new Aeropuerto('Aeropuerto Internacional');

// Creamos los objetos aviones  
const avion1 = new Avion('Boeing 737',100,'Barcelona');
const avion2 = new Avion('Airbus A380',200,'Paris');
const avion3 = new Avion('Boeing 777',150,'Rio de Janeiro');

// Agregamos los aviones a el aeropuerto con el metodo agregarAvion
aeropuerto.agregarAvion(avion1);
aeropuerto.agregarAvion(avion2);
aeropuerto.agregarAvion(avion3);

aeropuerto.mostrarAviones();

aeropuerto.buscarAvion('Boeing 737');
aeropuerto.buscarAvion('Boeing 214');

// Agregamos pasajeros a los aviones 
avion1.abordar('Pasajero 1');
avion1.abordar('Pasajero 2');

