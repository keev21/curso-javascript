class Productos{
    // Propiedades privadas
    private nombre: string;
    private precio: number;
    private cantidad: number;
  
    // Constructor para inicializar las propiedades
    constructor(nombre: string, precio: number, cantidad: number) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  
    // Método público para obtener los detalles del producto
    public obtenerDetalles(): string {
      return `Producto: ${this.nombre}, Precio: $${this.precio}, Cantidad: ${this.cantidad}`;
    }
  
    // Método público para actualizar la cantidad en inventario
    public actualizarCantidad(nuevaCantidad: number): void {
      if (nuevaCantidad >= 0) {
        this.cantidad = nuevaCantidad;
      } else {
        console.error("La cantidad debe ser un número positivo.");
      }
    }
  }
  
  // Crear una instancia de la clase Producto
  const productoNuevo = new Productos("Laptop", 1200.99, 10);
  
  // Mostrar los detalles iniciales del producto
  console.log(productoNuevo.obtenerDetalles()); // Producto: Laptop, Precio: $1200.99, Cantidad: 10
  
  // Actualizar la cantidad en inventario
  productoNuevo.actualizarCantidad(15);
  
  // Mostrar los detalles actualizados del producto
  console.log(productoNuevo.obtenerDetalles()); // Producto: Laptop, Precio: $1200.99, Cantidad: 15
  