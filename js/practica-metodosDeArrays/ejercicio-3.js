// EJERCICIO 3 
// Catálogo de biblioteca: Tienes un array que almacena títulos de libros en una biblioteca. Debes crear funciones que permitan a los usuarios buscar libros por título, verificar si un libro específico está disponible para préstamo y llevar un registro de la disponibilidad de los libros.

const biblioteca = [
    "El señor de los anillos - [Disponible para prestamo]",
    "El señor de los anillos (Edición especial)",
    "Cien años de soledad",
    "Cien años de soledad (Edición aniversario)",
    "1984 - [Disponible para prestamo]",
    "1984 (Edición ampliada)",
    "Harry Potter y la piedra filosofal",
    "Don Quijote de la Mancha - [Disponible para prestamo]",
    "Matar a un ruiseñor",
    "Orgullo y prejuicio - [AGOTADO]",
    "Crimen y castigo - [Disponible para prestamo]",
    "El Gran Gatsby - [AGOTADO]",
    "La odisea - [Disponible para prestamo]"
];

// Función para buscar los libros 
const buscarLibros = (biblioteca) => {
    const bibliotecaToLowerCase = biblioteca.map((elemento) => elemento.toLowerCase());  /* Hacemos que los elementos de la biblioteca se comviertan en minusculas para filtrar mejor la busqueda*/
    const libro = prompt(`Busque un libro por su titulo`);

    document.write(`<h2>Resultado de busqueda de: '${libro}'</h2>`);

    if (libro !== null && libro.length > 0) {
        const libroBuscado = bibliotecaToLowerCase.filter((elemento) => elemento.includes(libro.toLowerCase()));

        document.write(`<ul>`);
        libroBuscado.map((elemento) => document.write(`<li>${elemento}</li>`))
        document.write(`</ul>`);

    } else{
        document.write(`<h3 style='color:red;'>Libro no encontrado!</h3>`);
    }
}

// Función que muestra los libros que están disponibles para préstamo
const verificarLibrosPrestamo = (biblioteca) => {
    const librosPrestamos = biblioteca.filter((elemento) => elemento.includes('prestamo'));
    
    document.write(`<h2>Libros disponibles para prestamos</h2>`)
    document.write(`<ul>`);
    librosPrestamos.map((elemento) => document.write(`<li>${elemento}</li>`))
    document.write(`</ul>`);
}

// Registro de libros disponibles
const registroDeLibros = (biblioteca) => {
    const librosDisponibles = biblioteca.filter((elemento) => !elemento.includes('AGOTADO'));
    document.write(`<h2>Registro de libros disponibles</h2>`)
    document.write(`<ul>`);
    librosDisponibles.map((elemento) => document.write(`<li>${elemento}</li>`))
    document.write(`</ul>`);
}

// Declaramos una variable mensaje que le pregunte al usuario que opcion va a elegir 
const mensaje = parseInt(prompt(`Bienvenido/a a la biblioteca! Seleccione una opción: \n1. Buscar un libro. \n2. Ver libros disponibles para préstamo. \n3. Ver todos los libros disponibles`));

if (mensaje === 1) {
    buscarLibros(biblioteca)
} else if (mensaje === 2) {
    verificarLibrosPrestamo(biblioteca);
} else if (mensaje === 3) {
    registroDeLibros(biblioteca)
} else {
    alert('Por favor, seleccione una opción correcta');
}