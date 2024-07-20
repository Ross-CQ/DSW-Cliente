export class Product{
  alto: number;
  ancho: number;
  codigo: string;
  color: string;
  largo: number;
  precio: number;

  constructor(alto: number, ancho: number, codigo: string, color: string, largo: number, precio: number){
    this.alto = alto;
    this.ancho = ancho;
    this.codigo = codigo;
    this.color = color;
    this.largo = largo;
    this.precio = precio;
  }
}

export class ProductoConCantidad {
  producto: Product;
  cantidad: number;

  constructor(producto: Product, cantidad: number) {
    this.producto = producto;
    this.cantidad = cantidad;
  }
}

export class ProductoPedido{
  producto: string;
  cantidad: number;
  tipofabricacion: number;

  constructor(producto: string, cantidad: number){
    this.producto = producto;
    this.cantidad = cantidad;
    this.tipofabricacion = 1;
  }
}

export class ProductoPedidoWithSubTotal{
  Codigo: string;
  Cantidad: number;
  Tipofabricacion: number;
  Subtotal: number;

  constructor(producto: string, cantidad: number, subtotal: number){
    this.Codigo = producto;
    this.Cantidad = cantidad;
    this.Tipofabricacion = 1;
    this.Subtotal = subtotal;
  }

}

export class Pedido{
  cliente: string;
  productos: ProductoPedido[];

  constructor(cliente: string, productos: ProductoPedido[]){
    this.cliente = "Rosa Calderon";
    this.productos = productos;
  }
}

export class PedidoResponse{
  Cliente: string;
  Productos: ProductoPedidoWithSubTotal[];
  Codigo: number;
  Fecha: string;

  constructor(Cliente: string, Productos: ProductoPedidoWithSubTotal[], Codigo: number, Fecha: string){
    this.Cliente = Cliente;
    this.Productos = Productos;
    this.Codigo = Codigo;
    this.Fecha = Fecha;
  }
}

export class ProductoInventario {
  cantidadproceso: number;
  cantidadstock: number;
  cantidadtotal: number;
  codigo: string;
  descripcion: string;
  medidas: string;
  nombre: string;

  constructor(cantidadProceso: number, cantidadStock: number, cantidadTotal: number, codigo: string, descripcion: string, medidas: string, nombre: string) {
    this.cantidadproceso = cantidadProceso;
    this.cantidadstock = cantidadStock;
    this.cantidadtotal = cantidadTotal;
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.medidas = medidas;
    this.nombre = nombre;
  }
}

export class PedidoDetalle {
  cliente: string;
  codigo: number;
  estadoEntrega: number;
  estadoInsumo: number;
  estadoProduccion: number;
  fecha: string;

  constructor(cliente: string, codigo: number, estadoEntrega: number, estadoInsumo: number, estadoProduccion: number, fecha: string) {
    this.cliente = cliente;
    this.codigo = codigo;
    this.estadoEntrega = estadoEntrega;
    this.estadoInsumo = estadoInsumo;
    this.estadoProduccion = estadoProduccion;
    this.fecha = fecha;
  }
}

export class PedidoUpdate {
  codigo: number;
  estadoEntrega: number;
  estadoInsumo: number;
  estadoProduccion: number;

  constructor(codigo: number, estadoEntrega: number, estadoInsumo: number, estadoProduccion: number) {
    this.codigo = codigo;
    this.estadoEntrega = estadoEntrega;
    this.estadoInsumo = estadoInsumo;
    this.estadoProduccion = estadoProduccion;
  }
}
