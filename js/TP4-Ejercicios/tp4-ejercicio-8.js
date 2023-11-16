// TP4 - EJERCICIO 8 
// 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y
// "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la
// clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos
// "saludar" y "despedirse".

// Creamos la clase persona 
class Persona {
    constructor(nombre,edad,profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    saludar(){
        document.write(`<h2>Hola! mi nombre es ${this.nombre}, tengo ${this.edad} años y trabajo de ${this.profesion}</h2>`);
    }

    despedirse(){
        document.write(`<h2>Adios! Que tengan un buen dia.</h2>`);
    }
}

// Creamos los objetos 
const persona1 = new Persona('Martín',21,'programador');
const persona2 = new Persona('Florencia',20,'actriz');

persona1.saludar();
persona1.despedirse();

document.write('<hr>')

persona2.saludar();
persona2.despedirse(); 
