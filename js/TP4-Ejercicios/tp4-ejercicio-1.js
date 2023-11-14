// TP4 EJERCICIO 4 
// 1- Crea un objeto llamado auto que tenga algunas características como el color,
// marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
// permitir encender y apagar el auto.

const auto = {
    color: 'gris',
    marca: 'Peugeot',
    modelo: 2020,
    encendido: function () {
        alert('Auto encendido');
    },
    apagado: function () {
        alert('El auto se apago');
    }
};

auto.encendido();
auto.apagado();