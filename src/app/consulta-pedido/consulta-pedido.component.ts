import {Component, Input} from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import {ConsultaPedidoService} from "./consulta-pedido.service";
import {Pedido, PedidoResponse} from "../shared/product-interface";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-consulta-pedido',
  standalone: true,
  imports: [SidebarComponent, NgForOf],
  templateUrl: './consulta-pedido.component.html',
  styleUrl: './consulta-pedido.component.css'
})
export class ConsultaPedidoComponent {
  @Input() codigo: string = '';

  pedido: PedidoResponse = {} as PedidoResponse;
  subTotal: number = 0;
  igv: number = 0;
  total: number = 0;

  constructor(
    private consultaPedidoService: ConsultaPedidoService
  ) {}

  actualizarCodigo(event: Event) {
    this.codigo = (event.target as HTMLInputElement).value;
  }

  getPedido() {
    this.consultaPedidoService.getPedidoByCodigo(this.codigo).subscribe({
      next: (response) => {
        this.pedido = response as PedidoResponse;
        console.log(this.pedido);
        console.log(response)
        this.subTotal = this.pedido.Productos.reduce((acc, producto) => acc + producto.Subtotal, 0);
        this.igv = this.subTotal * 0.18;
        this.total = this.subTotal + this.igv;
      }
    });
  }
}
