import {Component, Input} from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import {ConsultaPedidoService} from "../consulta-pedido/consulta-pedido.service";
import {PedidoDetalle, PedidoUpdate} from "../shared/product-interface";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-estado-pedido',
  standalone: true,
  imports: [SidebarComponent, NgForOf],
  templateUrl: './estado-pedido.component.html',
  styleUrl: './estado-pedido.component.css'
})
export class EstadoPedidoComponent {

  @Input() codigo: number = 0;
  pedidos: PedidoDetalle[] = [];

  constructor(private consultaPedidoService: ConsultaPedidoService) {
    this.getAllStates();
  }

  getAllStates() {
    this.consultaPedidoService.getAllStates(0).subscribe({
      next: (response) => {
        this.pedidos = response as PedidoDetalle[];
        console.log(this.pedidos);
      }
    });
  }

  getState(){
    console.log(this.codigo);
    if (isNaN(this.codigo) ){
      this.codigo = 0;
    }
    this.consultaPedidoService.getAllStates(this.codigo).subscribe({
      next: (response) => {
        this.pedidos = response as PedidoDetalle[];
        console.log(this.pedidos);
      }
    });
  }

  estadoAValor(estado: number): string {
    switch (estado) {
      case 0: return 'default';
      case 1: return 'inpr';
      case 2: return 'pend';
      case 3: return 'completo';
      default: return 'default';
    }
  }

  actualizarPedido(pedido: PedidoDetalle) {

    const pedidoUpdate = new PedidoUpdate(pedido.codigo, pedido.estadoEntrega, pedido.estadoInsumo, pedido.estadoProduccion);

    this.consultaPedidoService.updatePedido(pedidoUpdate).subscribe({
      next: (response) => {
        console.log(response);
      }
    });
  }

  actualizarEstadoPedido(pedido: PedidoDetalle, event: Event, campo: string) {
    // Convertir el valor seleccionado a un estado numérico
    const nuevoValor = (event.target as HTMLSelectElement).value;
    let nuevoEstado: number;
    switch (nuevoValor) {
      case 'inpr': nuevoEstado = 1; break;
      case 'pend': nuevoEstado = 2; break;
      case 'completo': nuevoEstado = 3; break;
      default: nuevoEstado = 0; // 'default'
    }

    // Actualizar el estado del pedido basado en el campo especificado
    if (campo === 'insumo') {
      pedido.estadoInsumo = nuevoEstado;
    } else if (campo === 'produccion') {
      pedido.estadoProduccion = nuevoEstado;
    } else if (campo === 'entrega') {
      pedido.estadoEntrega = nuevoEstado;
    }
  }

  actualizarCodigo(event: Event) {
    this.codigo = parseInt((event.target as HTMLInputElement).value);
  }
}
