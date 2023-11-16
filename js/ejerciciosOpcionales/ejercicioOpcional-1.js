// Ejercicios opcionales para practicar objetos con notación literal:

// 1- Objeto "Cuenta Bancaria": Crea un objeto llamado cuentaBancaria con propiedades como saldo y titular, y métodos como depositar y retirar que actualicen el saldo.

// Creamos el objeto cuenta bancaria 
const cuentaBancaria = {
    saldo: 0,
    titular: 'Martín',
    depositar: function (monto) {
        if (!isNaN(monto)) {
            this.saldo+= monto
        } else {
            alert('Ingrese un monto válido');
        }
    },
    retirar: function (monto) {
        if (!isNaN(monto) && this.saldo >= monto) {
            this.saldo-= monto;
        } else {
            alert(`Ingrese un monro válido o ingrese un monto menor al saldo de la cuenta: $${this.saldo}`);
        }
    }
}

// Iniciamos los metodos 
cuentaBancaria.depositar(12000);
cuentaBancaria.retirar(10000);

// Mostramos la info
document.write(`<h2>Datos de la cuenta</h2>`)
document.write(`
<ul>
    <li>Titular de la cuenta: ${cuentaBancaria.titular}</li>
    <li>Saldo: $${cuentaBancaria.saldo}</li>
</ul>`);

