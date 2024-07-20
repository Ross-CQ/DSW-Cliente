import {Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm: FormGroup

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      usuario: new FormControl(''),
      contrasenia: new FormControl('')
    })
  }

  @Output() loginEvent = new EventEmitter<any>();

  sendSession(session: any) {
    this.loginEvent.emit(session);
  }

  ngOnInit() {
    this.authService.authLogin().subscribe()
    console.log('llega al login-page component ts')
  }

  onSubmit() {
    console.log(this.loginForm.value)
    this.authService.getUserProfile(this.loginForm.value).subscribe({
      next: (response) => {
        this.sendSession(response);
        this.router.navigate(['/registrar-pedido']);
      }
    });
  }

}
