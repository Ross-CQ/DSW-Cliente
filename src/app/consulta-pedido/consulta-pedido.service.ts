import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {UrlInterface} from "../shared/url-interface";
import {PedidoDetalle, PedidoUpdate} from "../shared/product-interface";

@Injectable({
  providedIn: 'root'
})
export class ConsultaPedidoService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {}

  getPedidoByCodigo(codigo: string) {
    const token = this.cookieService.get('Token');
    return this.http.get(UrlInterface.url + `/Pedido/${codigo}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  getAllStates(id: number) {
    const token = this.cookieService.get('Token');
    return this.http.get(UrlInterface.url + `/Pedido/States/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
  })};

  updatePedido(pedido: PedidoUpdate){
    const token = this.cookieService.get('Token');
    return this.http.post(UrlInterface.url + `/Pedido/update`, pedido, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

}
