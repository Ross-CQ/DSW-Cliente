import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {UrlInterface} from "../../shared/url-interface";
import {AuthBackendInterface} from "../../shared/auth-backend-interface";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  authSubject = new BehaviorSubject<any>({
    Usuario: null,
    Perfil: null,
    Token: null
  })

  authLogin(): Observable<any> {
    return this.http.post(UrlInterface.url + "/Auth/login", AuthBackendInterface.AuthBackend).pipe(
      tap(response => {
          // @ts-ignore
          this.authSubject.next({Token: response.token, Usuario: null, Perfil: null})
        }
      )
    )
  }

  // Rosa14
  // 12345678

  getUserProfile(UserData: any): Observable<any> {
    const token = this.authSubject.getValue().Token;
    console.log(token)
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
    return this.http.post<any>(`${UrlInterface.url}/UserFrontend/login`, UserData, {
      headers
    }).pipe(
      tap(
        (response) => {
          console.log(response)
          const {Token, User} = response;
          console.log(Token.token);
          this.cookieService.set('Token', Token.token, 4);
          this.authSubject.next({Token:response.Token.Token, Usuario: response.Usuario,Perfil: response.Perfil})
        }
      ))
  }

  registerUser(UserData: any): Observable<any> {
    return this.http.post<any>(`${UrlInterface.url}/UserFrontend/register`, UserData).pipe(
      tap(
        (response) => {
          this.authSubject.next({Token:response.Token.Token, Usuario: response.Usuario,Perfil: response.Perfil})
        }
      ))
  }

  logout() {
    localStorage.clear()
    this.authSubject.next({})
    this.authLogin().subscribe()
  }
}
