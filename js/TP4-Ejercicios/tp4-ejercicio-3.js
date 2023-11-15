// TP4 - EJERCICIO 3 
// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
// propiedades de alto y ancho, mas los métodos necesarios para modificar y
// mostrar sus propiedades, calcular el perímetro y el área


// Creamos la clase que nos permita crear objetos rectangulos
class Rectangulo {
    constructor(alto,ancho){
        this.alto = alto;
        this.ancho = ancho;
    }

    modificarPropiedades(nuevoAlto,nuevoAncho){
        this.alto = nuevoAlto;
        this.ancho = nuevoAncho;
    }

    verPropiedades(){
        let perimetro = 2 * (this.alto + this.ancho);
        let area = this.alto * this.ancho;

        document.write(`<h2>El rectangulo creado contiene las siguientes propiedades:</h2>`);
        document.write(`<p>Alto: ${this.alto} <br>Ancho: ${this.ancho}</p>`);
        document.write(`<p>Perímetro del rectángulo: ${perimetro} <br>Área del rectángulo: ${area} <hr></p>`)
    }
}

// Creamos los rectangulos especificando su largo y ancho como argumento
const rectangulo1 = new Rectangulo(5,10);
const rectangulo2 = new Rectangulo(5,3);

// Iniciamos los metodos 
rectangulo1.verPropiedades();
rectangulo1.modificarPropiedades(10,20)
rectangulo1.verPropiedades();

rectangulo2.verPropiedades();
rectangulo2.modificarPropiedades(7,20)
rectangulo2.verPropiedades();
