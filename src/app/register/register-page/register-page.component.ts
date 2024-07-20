import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  registerForm: FormGroup

  constructor(private authService: AuthService) {
    this.registerForm = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      dni: new FormControl(''),
      usuario: new FormControl(''),
      contrasenia: new FormControl(''),
      rol: new FormControl('')
    })
  }

  @Output() registerEvent = new EventEmitter<any>();


  sendRegister(register: any) {
    this.registerEvent.emit(register);
  }

  onSubmit() {
    console.log(this.registerForm.value)
    /*this.authService.registerUser(this.registerForm.value).subscribe({
      next: (response) => {
        this.sendRegister(response);
      }
    });*/
  }
}
