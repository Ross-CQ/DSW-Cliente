import {Component, Input} from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import {ProductoInventario} from "../shared/product-interface";
import {ConsultaInventarioService} from "../consulta-inventario/consulta-inventario.service";

@Component({
  selector: 'app-actualizar-inventario',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './actualizar-inventario.component.html',
  styleUrl: './actualizar-inventario.component.css'
})
export class ActualizarInventarioComponent {
  @Input() material: string = '';
  @Input() descripcion: string = '';
  @Input() cantidad: number = 0;
  @Input() alto: string = '';
  @Input() ancho: string = '';
  @Input() largo: string = '';
  @Input() costo: number = 0;
  inventario: ProductoInventario = {} as ProductoInventario;
  medidas: string[] = [];

  constructor(
    private consultaInventarioService: ConsultaInventarioService
  ) {
  }

  actualizarMaterial(event: Event) {
    this.material = (event.target as HTMLInputElement).value;
  }

  getInventarioByMaterial() {
    this.consultaInventarioService.getInventarioByMaterial(this.material).subscribe({
      next: (response) => {
        this.inventario = (response as ProductoInventario[])[0];
        console.log(this.inventario);
        this.medidas = this.inventario.medidas.split("x");
      }
    });
  }

  actualizarDescripcion(event: Event) {
    this.descripcion = (event.target as HTMLInputElement).value;
    this.inventario.descripcion = this.descripcion;
  }

  actualizarCantidad(event: Event) {
    this.cantidad = parseInt((event.target as HTMLInputElement).value);
    this.inventario.cantidadstock = this.cantidad;
  }

  actualizarAlto(event: Event) {
    this.alto = (event.target as HTMLInputElement).value;
  }

  actualizarAncho(event: Event) {
    this.ancho = (event.target as HTMLInputElement).value;
  }

  actualizarLargo(event: Event) {
    this.largo = (event.target as HTMLInputElement).value;
  }

  actualizarCosto(event: Event) {
    this.costo = parseInt((event.target as HTMLInputElement).value);
    this.inventario.cantidadtotal = this.costo;
  }

  updateInventario() {
    if (this.alto === ''){
      this.alto = this.medidas[0];
    }
    if (this.ancho === ''){
      this.ancho = this.medidas[1];
    }
    if (this.largo === ''){
      this.largo = this.medidas[2];
    }
    this.inventario.medidas = `${this.alto}x${this.ancho}x${this.largo}`;
    this.consultaInventarioService.updateInventario(this.inventario).subscribe({
      next: (response) => {
        console.log(response);
      }
    });
  }

}
