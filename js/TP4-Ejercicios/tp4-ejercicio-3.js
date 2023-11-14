// TP4 - EJERCICIO 3 
// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
// propiedades de alto y ancho, mas los métodos necesarios para modificar y
// mostrar sus propiedades, calcular el perímetro y el área


// Creamos el objeto para crear rectangulos
const crearRectangulo = {
    alto: 5,
    ancho: 10,
    modificarDatos: function(alto,ancho){
        this.alto = alto;
        this.ancho = ancho;
    },
    verPropiedades: function(){
        let perimetro = 2 * (this.alto + this.ancho);
        let area = this.alto * this.ancho;

        document.write(`<h2>Propiedades del rectangulo que tiene ${this.alto} de alto y ${this.ancho} de ancho</h2>`);
        document.write(`<p>Perímetro del rectángulo: ${perimetro} <br>Área del rectángulo: ${area}</p>`);
    }
}


// Iniciamos los metodos 
crearRectangulo.verPropiedades();
crearRectangulo.modificarDatos(10,20);
crearRectangulo.verPropiedades();
crearRectangulo.modificarDatos(5,3);
crearRectangulo.verPropiedades();
