// TP4 - EJERCICIO 6 
// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ● ISBN
// ● Título
// ● Autor
// ● Número de páginas
// Crear sus respectivos métodos get y set correspondientes para cada propiedad.
// Crear el método mostrarLibro() para mostrar la información relativa al libro con el
// siguiente formato:
// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más página

// Creamos la clase libro
class Libro {
    #isbn;
    #titulo;
    #autor;
    #numeroDePaginas;
    constructor(isbn,titulo,autor,numeroDePaginas){
        this.#isbn = isbn;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#numeroDePaginas = numeroDePaginas;
    }

    // Creamos los metodos get y set para cada propiedad 
    get isbn(){
        return this.#isbn;
    }
    set isbn(nuevoISBN){
        this.#isbn = nuevoISBN;
    }

    get titulo (){
        return this.#titulo;
    }
    set titulo (nuevoTitulo){
        this.#titulo = nuevoTitulo;
    }

    get autor (){
        return this.#autor;
    }
    set autor (nuevoAutor){
        this.#autor = nuevoAutor;
    }

    get numeroDePaginas (){
        return this.#numeroDePaginas;
    }
    set numeroDePaginas (nuevoNumeroDePaginas){
        this.#numeroDePaginas = nuevoNumeroDePaginas;
    }

    mostrarLibro(){
        document.write(`<h2>El libro "${this.titulo}" con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numeroDePaginas} páginas.</h2>`);
    }

}

const libro1 = new Libro('978-1234567890','El Jardín Secreto','Frances Hodgson Burnett',250);
const libro2 = new Libro('978-0987654321','Cien Años de Soledad','Gabriel García Márquez',368);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.numeroDePaginas > libro2.numeroDePaginas) {
    document.write(`<p>El libro "${libro1.titulo}" tiene más páginas (${libro1.numeroDePaginas} páginas) que el libro "${libro2.titulo}" (${libro2.numeroDePaginas} páginas)</p>`)
} else if (libro2.numeroDePaginas > libro1.numeroDePaginas){
    document.write(`<p>El libro "${libro2.titulo}" tiene más páginas (${libro2.numeroDePaginas} páginas) que el libro "${libro1.titulo}" (${libro1.numeroDePaginas} páginas)</p>`)
} else{
    document.write(`<p>Los libros "${libro1.titulo}" y "${libro2.titulo}" tienen la misma cantidad de páginas (${libro1.numeroDePaginas} páginas)</p>`);
}
