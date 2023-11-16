// TP4 - EJERCICIO 2 
// -Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// ● Una propiedad titular con el valor "Alex".
// ● Una propiedad saldo, teniendo como valor inicial 0.
// ● Un método ingresar() que permita añadir dinero a la cuenta, pasando la
// cantidad como parámetro
// ● Un método extraer() que permita retirar la cantidad pasada como
// parámetro.
// ● Un método informar() que retorne la información del estado de la cuenta.
// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a
// mostrar la descripción del estado de la cuenta.


// Creamos el objeto cuenta 
let cuenta = {
    titular: 'Alex',
    saldo: 0,
    ingresar: function(cantidad){
        this.saldo+= cantidad;
    },
    extraer: function(cantidad){
        this.saldo-= cantidad;
    },
    informar: function(){
        document.write(`<h2>Información de la cuenta</h2>`);
        document.write(`<p>Titular: ${this.titular} <br>Saldo: $${this.saldo}</p>`);
    }
}

// Utilizamos los métodos 
cuenta.informar();
cuenta.ingresar(1000);
cuenta.ingresar(500);
cuenta.informar();
cuenta.extraer(700);
cuenta.informar();