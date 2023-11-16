// TP4 - EJERCICIO 4 
// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar
// las propiedades código, nombre y precio, además del método imprime datos, el
// cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores
// de los tres objetos instanciados.


// Creamos la clase Producto 
class Producto {
    constructor(codigo,nombre,precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimirDatos(){
        document.write(`<h2>Detalles del producto</h2>`);
        document.write(`
        <ul>
            <li>Código: ${this.codigo}</li>
            <li>Nombre del producto: ${this.nombre}</li>
            <li>Precio: $${this.precio}</li>
        </ul>`);
    }
}

const arrayDeProductos = [];

// Creamos los objetos
const producto1 = new Producto(1,'Papel higiénico',1000);
const producto2 = new Producto(2,'Jabon en jarra',800);
const producto3 = new Producto(3,'Protector solar facial',7300);

// Agregamos los objetos creados al array 
arrayDeProductos.push(producto1,producto2,producto3);

for (let i = 0; i < arrayDeProductos.length; i++) {
    let producto = arrayDeProductos[i];
    producto.imprimirDatos();
}