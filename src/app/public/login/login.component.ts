import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Importa RouterModule


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    loginForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });


    //falta inyectar el servicio de autenticación
    onSubmit() {
     if (this.loginForm.valid) {
      // Aquí implementarías la lógica para enviar los datos al backend
      console.log('Datos de inicio de sesión:', this.loginForm.value);
    }
  }
}
