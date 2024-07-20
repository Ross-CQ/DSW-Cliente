import {Component, Input} from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import {ConsultaInventarioService} from "./consulta-inventario.service";
import {ProductoInventario} from "../shared/product-interface";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-consulta-inventario',
  standalone: true,
  imports: [SidebarComponent, NgForOf],
  templateUrl: './consulta-inventario.component.html',
  styleUrl: './consulta-inventario.component.css'
})
export class ConsultaInventarioComponent {
  @Input() material: string = '';
  inventario: ProductoInventario[] = [];

  constructor(
    private consultaInventarioService: ConsultaInventarioService
  ) {
    this.getInventario();
  }

  actualizarMaterial(event: Event) {
    this.material = (event.target as HTMLInputElement).value;
  }

  getInventario() {
    this.consultaInventarioService.getInventario().subscribe({
      next: (response) => {
        this.inventario = response as ProductoInventario[];
        console.log(this.inventario);
      }
    });
  }

  getInventarioByMaterial() {
    this.consultaInventarioService.getInventarioByMaterial(this.material).subscribe({
      next: (response) => {
        this.inventario = response as ProductoInventario[];
        console.log(this.inventario);
      }
    });
  }
}
