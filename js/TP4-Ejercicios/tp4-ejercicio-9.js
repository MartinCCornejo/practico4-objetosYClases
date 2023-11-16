// TP4 - EJERCICIO 9 
// 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y
// el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato"
// que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente,
// crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus
// métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.


// Creamos la clase animal 
class Animal {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    emitirSonido(){
        alert('*Sonido generico de un animal*');
    }
}

// Creamos las clases hijas que hereden la clase animal 
class Perro extends Animal{
    constructor(nombre,edad){
        super(nombre,edad);
    }

    emitirSonido(){
        alert('woof! woof!')
    }
}

class Gato extends Animal{
    constructor(nombre,edad){
        super(nombre,edad);
    }

    emitirSonido(){
        alert('miaaauuu, miaaauuu')
    }
}

// Creamos los objetos 
const perro = new Perro('Roco',4);
const gato = new Gato('Tyson',2);

perro.emitirSonido();
gato.emitirSonido();
