import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  //Definición de variable para MANEJADOR DE ERRORES.
  loginError: string = '';
  
  //Objeto de FORMULARIO, con el servicio de fb crear los formControl y con la propiedad [formGroup] éste objeto de formularios y sus formcontrols, deben estar enlazados con el HTML.
  //formControls y VALIDACIÓN, usamos VALIDACIÓN SINCRONICA.
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]], //email requiere dos validaciones, por eso usamos [ARRAY].
    password: ['', Validators.required], //Para registro si otras validaciones.
  })
  
  //Importados e intectados con alias: una vez inyectados los servicios se pueden consumir. FormBuilder: Formularios, Router: la función te envía al componente, loginService: SERVICIO CREADO para comunicar con la API REST.
  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {}

  // Propiedad Getter, para acceder en los mensajes personalizados, porque email y password son parte de loginForm.
  get email() { return this.loginForm.controls.email; }
  get password() { return this.loginForm.controls.password; }

  // get email() { return this.loginForm.get('email'); }
  // get password() { return this.loginForm.get('password'); }

  // Formularios reactivos explícitos, para que funcionen creamos un método, que específicamos en el botón del login.html: click="login()"-> para que llame a la función.
  login(){
    if(this.loginForm.valid) {
      // console.log('Llamar al servicio de login');
      //Los SERVICIOS son clases que acceden a datos y lo entregan a los componentes, llamamos al servicio y le pasamos por parametro lo que tiene el formulario (loginForm)
      //Y con el LoginRequest nos aseguramos el formato en el que están los datos y al llamar al metodo login hay que subcribirse con el Observable y los tres métodos, que pueden llevar cualquier nombre como parámetro.
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError=errorData; //Específicación del error.
        },
        complete: () => {
          console.info('Login completo');
          this.router.navigateByUrl('/inicio');
          this.loginForm.reset();
          //Si todo va bien en la función te envía a otro componente, para eso inyectar el servicio de rutas y usamos el alias: router.
        }
      });
    }
    else {
    // Método para marcar todas las validaciones.
      this.loginForm.markAllAsTouched();
      // alert('Error al ingresar los datos de formulario');
    }
  }
}
