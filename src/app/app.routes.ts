import { Routes } from '@angular/router';
import {LoginPageComponent} from "./login/login-page/login-page.component";
import {RegisterPageComponent} from "./register/register-page/register-page.component";
import { RegistrarPedidoComponent } from './registrar-pedido/registrar-pedido.component';
import { ConsultarFichaComponent } from './consultar-ficha/consultar-ficha.component';
import { AgregarFichaComponent } from './agregar-ficha/agregar-ficha.component';
import { ActualizarInventarioComponent } from './actualizar-inventario/actualizar-inventario.component';
import { ConsultaPedidoComponent } from './consulta-pedido/consulta-pedido.component';
import { EstadoPedidoComponent } from './estado-pedido/estado-pedido.component';
import { ConsultaInventarioComponent } from './consulta-inventario/consulta-inventario.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'registrar-pedido',
    component: RegistrarPedidoComponent
  },
  {
    path: 'consultar-ficha',
    component: ConsultarFichaComponent
  },
  {
    path: 'agregar-ficha',
    component: AgregarFichaComponent
  },
  {
    path: 'actualizar-inventario',
    component: ActualizarInventarioComponent
  },
  {
    path: 'consulta-pedido',
    component: ConsultaPedidoComponent
  },
  {
    path: 'estado-pedido',
    component: EstadoPedidoComponent
  },
  {
    path: 'consulta-inventario',
    component: ConsultaInventarioComponent
  }
];
