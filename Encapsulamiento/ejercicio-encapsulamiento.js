class CuentaBancaria {
    // Propiedad privada
    #saldo;
  
    constructor(saldoInicial) {
      this.#saldo = saldoInicial;
    }
  
    // Método para depositar dinero
    depositar(cantidad) {
      this.#saldo += cantidad;
      console.log(`Depósito exitoso. Nuevo saldo: $${this.#saldo}`);
    }
  
    // Método para retirar dinero
    retirar(cantidad) {
      if (cantidad > this.#saldo) {
        console.log("Fondos insuficientes para realizar el retiro.");
      } else {
        this.#saldo -= cantidad;
        console.log(`Retiro exitoso. Nuevo saldo: $${this.#saldo}`);
      }
    }
  
    // Método para ver el saldo actual
    verSaldo() {
      console.log(`Saldo actual: $${this.#saldo}`);
    }
  }
  
  // Ejemplo de uso
  const miCuenta = new CuentaBancaria(100);  // Cuenta con saldo inicial de $100
  
  miCuenta.verSaldo();          // Saldo actual: $100
  miCuenta.depositar(50);       // Depósito exitoso. Nuevo saldo: $150
  miCuenta.retirar(30);         // Retiro exitoso. Nuevo saldo: $120
  miCuenta.retirar(200);        // Fondos insuficientes para realizar el retiro
  miCuenta.verSaldo();          // Saldo actual: $120