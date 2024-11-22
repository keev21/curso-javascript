// Crear el objeto producto
let producto = {
    nombre: "Laptop",
    precio: 850.5,
    stock: 10,
  
    // Método para mostrar información del producto
    mostrarInfo: function() {
      console.log(`Producto: ${this.nombre}`);
      console.log(`Precio: $${this.precio}`);
      console.log(`Stock disponible: ${this.stock}`);
    },
  
    // Método para actualizar el stock
    actualizarStock: function(cantidad: number) {
      if (cantidad < 0) {
        console.log("No se puede reducir el stock con valores negativos.");
        return;
      }
      this.stock = cantidad;
      console.log(`Nuevo stock para ${this.nombre}: ${this.stock}`);
    }
  };
  
  // Usar los métodos del objeto
  producto.mostrarInfo(); // Muestra los detalles del producto
  producto.actualizarStock(15); // Actualiza el stock a 15
  producto.mostrarInfo(); // Muestra los detalles con el nuevo stock
  