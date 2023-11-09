// EJERCICIO 1
// Gestión de inventario en una tienda: Tienes dos arrays, uno que representa los productos en stock y otro que almacena los precios de los productos. Debes crear funciones que permitan agregar nuevos productos al inventario, eliminar productos agotados y calcular el valor total del inventario.

const productosCelulares = [
    'Motorola G23 128GB (AGOTADO)',
    'Xiaomi Redmi 10C 128GB',
    'ZTE Blade A33 Plus 32GB',
    'Motorola G13 128GB (AGOTADO)',
    'Samsung A04s 128GB',
    'Samsung Galaxy A14 128GB (AGOTADO)',
    'Motorola G72 128GB',
    'Xiaomi Redmi Note 11 128GB',
    'iPhone 13 Pro 256GB'
]

const preciosCelulares = [
    113000,
    120000,
    49000,
    110000,
    122000,
    135000,
    210000,
    145000,
    3070000
]

// Ver la lista de los productos en pantalla 
const verProductos = (titulo) => {
    document.write(`<h2>${titulo} (Total: ${productosCelulares.length} productos)</h2>`);
    document.write('<ul>');
    productosCelulares.map((elemento) => document.write(`<li>${elemento}</li>`));
    document.write('</ul>');
}

verProductos('Lista de productos original');


// Función para agregar nuevos productos 
const agregarproducto = (producto,precio) => {
    productosCelulares.push(producto);
    preciosCelulares.push(precio);
}

agregarproducto('Huawei Mate 20 Lite',50000);
verProductos('Lista de productos con el nuevo producto agregado');


// Función para eliminar productos agotados
const eliminarProductosAgotados = (producto) => {
    productosCelulares.splice(producto,1);
    preciosCelulares.splice(producto,1);
}

// Indicamos como argumento que posición del producto en el array se eliminará
eliminarProductosAgotados(0);
eliminarProductosAgotados(2);
eliminarProductosAgotados(3);
verProductos('Lista de productos actualizada con los productos agotados eliminados');


// Calculamos el valor total del inventario 
const valorTotalDelInventario = () => {
    let total = 0;

    for (let i = 0; i < preciosCelulares.length; i++) {
        total += preciosCelulares[i];
    }
    
    return total;
}

document.write(`<h3>El valor total del inventario es: $${valorTotalDelInventario()}</h3<`);