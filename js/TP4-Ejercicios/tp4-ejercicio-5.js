// TP4 - EJERCICIO 5
// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
// año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
// generación pertenece la persona creada y cual es el rasgo característico de esta
// generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones

// Creamos la clase persona 
class Persona {
    constructor (nombre,apellido,edad,dni,sexo,peso,altura,añoDeNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.añoDeNacimiento = añoDeNacimiento;
    }


    mostrarGeneracion() {
        let nacimiento = this.añoDeNacimiento;
        let frase = `${this.nombre} ${this.apellido} que nació en el año ${nacimiento} pertenece a la `;
    
        if (nacimiento >= 1994 && nacimiento <= 2010) {
            frase += 'Generación Z';
        } else if (nacimiento >= 1981 && nacimiento <= 1993) {
            frase += 'Generación Y';
        } else if (nacimiento >= 1969 && nacimiento <= 1980) {
            frase += 'Generación X';
        } else if (nacimiento >= 1949 && nacimiento <= 1968) {
            frase += 'Baby Boom';
        } else if (nacimiento >= 1930 && nacimiento <= 1948) {
            frase += 'Silent Generation (Los niños de la post guerra)';
        } else {
            document.write(`<p style='color:#c00'>No se pudo encontrar la generación, compruebe el año ingresado</p>`);
        }
    
        return document.write(`<p>${frase} <br></p>`);
    }

    esMayorDeEdad(){
        if (this.edad >= 18) {
            document.write(`<p>${this.nombre} es mayor de edad</p>`);
        } else if (this.edad < 18){
            document.write(`<p>${this.nombre} NO es mayor de edad</p>`);
        } else{
            document.write(`<p style='color:#c00'>No se pudo comprobar que la persona sea mayor de edad, por favor verifique la edad ingresada</p>`);
        }
    }

    mostrarDatos(){
        document.write(`<h2>${this.nombre} ${this.apellido}</h2>`);
        document.write(`
        <ul>
            <li>Edad: ${this.edad} años</li>
            <li>DNI: ${this.dni}</li>
            <li>Sexo: ${this.sexo}</li>
            <li>Peso: ${this.peso} Kg</li>
            <li>Altura: ${this.altura} m</li>
            <li>Año de nacimiento: ${this.añoDeNacimiento}</li>
        </ul> <hr>`);
    }

    generaDNI(){
        let nuevoDNI = Math.floor(Math.random() * 90000000) + 10000000;  //Creamos un numero random de 8 digitos
        document.write(`<p>Se modifico el numero de DNI de ${this.nombre} ${this.apellido}. <br>DNi Antiguo: ${this.dni} <br>DNI Nuevo: ${nuevoDNI}</p>`)
        this.dni = nuevoDNI;
    }

}

// Creamos las personas 
const persona1 = new Persona('Pedro','Rodriguez',40,12345678,'H',80,'1.80',1983);
const persona2 = new Persona('Maria','Perez',17,87654321,'M',60,'1.65',2006);

// Iniciamos los metodos 
persona1.mostrarDatos();
persona2.mostrarDatos();

persona1.mostrarGeneracion();
persona2.mostrarGeneracion();

persona1.esMayorDeEdad();
persona2.esMayorDeEdad();

persona2.generaDNI();
