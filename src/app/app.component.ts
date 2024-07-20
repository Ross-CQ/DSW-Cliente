import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthPageComponent} from "./auth/pages/auth-page/auth-page.component";
import {LoginPageComponent} from "./login/login-page/login-page.component";
import {AuthService} from "./auth/services/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AuthPageComponent,
    LoginPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontRC2';
  protected isLogin: any;
  Session: any = {};
  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.isLogin=false
    if(localStorage.getItem('Token') && localStorage.getItem('User')){
      this.isLogin=true;
    }
  }

  reciveSession(session: any) {
    this.Session= session;
    this.isLogin=true;
    localStorage.setItem('Token',session.Token.Token);
    localStorage.setItem('User',session.Usuario.Usuario);
    localStorage.setItem('Perfil',session.Perfil.Nombreperfil)
  }

  logout(logout: any) {
    if(logout){
      this.Session = null;
      this.isLogin = false;
    }
  }

  handleRouterActivate(component: any) {
    if (component && component.logout) {
      component.logout();
    }
  }
}
