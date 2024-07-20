import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {UrlInterface} from "../shared/url-interface";
import {Pedido, Product} from "../shared/product-interface";

@Injectable({
  providedIn: 'root'
})
export class RegistrarPedidoService {

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getAllProducts() {
    const token = this.cookieService.get('Token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
    console.log(token)
    return this.http.get(UrlInterface.url + '/Producto/all', {
      headers
    });
  }

  getProductoByCodigo(codigo: string) {
    const token = this.cookieService.get('Token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
    return this.http.get(UrlInterface.url + '/Producto/StartWith/' + codigo, {
      headers
    });
  }

  savePedido(pedido: Pedido) {
    const token = this.cookieService.get('Token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
    return this.http.post(UrlInterface.url + '/Pedido/new', pedido, {
      headers
    });
  }
}
