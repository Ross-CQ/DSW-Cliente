import {Component, Input} from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import {RegistrarPedidoService} from "./registrar-pedido.service";
import {Pedido, Product, ProductoConCantidad, ProductoPedido} from "../shared/product-interface";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-registrar-pedido',
  standalone: true,
  imports: [SidebarComponent, ReactiveFormsModule, NgForOf],
  templateUrl: './registrar-pedido.component.html',
  styleUrl: './registrar-pedido.component.css'
})
export class RegistrarPedidoComponent {
  @Input() codigo: string = '';
  @Input() cantidad: number = 0;
  @Input() totalVenta: number = 0;
  @Input() nombreCliente: string = '';
  @Input() apellidoCliente: string = '';
  products: Product[] = [];
  tabla: ProductoConCantidad[] = [];

  constructor(
    private registrarPedidoService: RegistrarPedidoService
  ) {
    this.getAllProducts();
  }

  getAllProducts() {
    this.registrarPedidoService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response as Product[];
        console.log(this.products);
      }
    });
  }

  actualizarCantidad(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.cantidad = valor ? parseInt(valor, 10) : 0;
  }

  actualizarCodigo(event: Event) {
    this.codigo = (event.target as HTMLInputElement).value;
  }

  actualizarNombre(event: Event) {
    this.nombreCliente = (event.target as HTMLInputElement).value;
  }

  actualizarApellido(event: Event) {
    this.apellidoCliente = (event.target as HTMLInputElement).value;
  }

  addPedido() {
    this.registrarPedidoService.getProductoByCodigo(this.codigo).subscribe({
      next: (response) => {
        const product = (response as Product[])[0];
        this.tabla.push(new ProductoConCantidad(product, this.cantidad));
        this.totalVenta += product.precio * this.cantidad;
      }
    });
  }

  deletePedido(index: number) {
    this.totalVenta -= this.tabla[index].producto.precio * this.tabla[index].cantidad;
    this.tabla.splice(index, 1);
  }

  vaciarListado(){
    this.tabla = [];
    this.totalVenta = 0;
  }

  savePedido() {
    const productos: ProductoPedido[] = this.tabla.map(
      (producto) => new ProductoPedido(producto.producto.codigo, producto.cantidad)
    )

    const pedido = {
      cliente: `${this.nombreCliente} ${this.apellidoCliente}`,
      productos
    }

    this.registrarPedidoService.savePedido(pedido as Pedido).subscribe({
      next: (response) => {
        console.log(response);
      }
    });
  }
}
