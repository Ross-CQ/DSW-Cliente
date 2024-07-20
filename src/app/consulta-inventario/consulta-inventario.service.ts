import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {HttpClient} from "@angular/common/http";
import {UrlInterface} from "../shared/url-interface";
import {ProductoInventario} from "../shared/product-interface";

@Injectable({
  providedIn: 'root'
})
export class ConsultaInventarioService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  getInventarioByMaterial(material: string) {
    const token = this.cookieService.get('Token');
    return this.http.get(UrlInterface.url + `/Material/StartWith/${material}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  getInventario() {
    const token = this.cookieService.get('Token');
    return this.http.get(UrlInterface.url + `/Material/all`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  updateInventario(inventario: ProductoInventario) {
    const token = this.cookieService.get('Token');
    return this.http.post(UrlInterface.url + `/Material/Update`, inventario, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
