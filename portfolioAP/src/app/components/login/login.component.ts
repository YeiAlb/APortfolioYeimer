import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
   
  //Objeto de FORMULARIO, con el servicio de fb crear los formControl y con la propiedad [formGroup] éste objeto de formularios y sus formcontrols, deben estar enlazados con el HTML ==> [formGroup]="loginForm". Importar een APP.MODULE ==> ReactiveFormsModule.

  //formControls y VALIDACIÓN, usamos VALIDACIÓN SINCRONICA.
  loginForm = this.fb.group({
    correo: ['', [Validators.required, Validators.email]], //email requiere dos validaciones, por eso usamos [ARRAY].
    clave: ['', Validators.required], //MAX o MIN si para REGISTRO.
  })
  
  //Importados e intectados con alias: una vez inyectados los servicios se pueden consumir. FormBuilder: Formularios, Router: la función te envía al componente, autenticacionService: SERVICIO CREADO para comunicar con la API REST.
  constructor(private fb: FormBuilder, private route: Router, private authService: AutenticacionService) {}

  // Propiedad Getter, para acceder en los mensajes personalizados, porque email y password son parte de loginForm.
  get Correo() { return this.loginForm.controls.correo; }
  get Clave() { return this.loginForm.controls.clave; }

  // get email() { return this.loginForm.get('email'); }
  // get password() { return this.loginForm.get('password'); }

  // Formularios reactivos explícitos, para que funcionen creamos un método, que configuramos, con el dataBinding de evento, en el login.html: click="onEnviar()"-> para que llame a la función; esta función recibe como parámetro evento, para así llamar al preventDefault, que cancela el evento normal del SUBMIT, en el formulario.
  onEnviar(event: Event) {
    event.preventDefault();
    if(this.loginForm.valid) {
      //Nos subscribimos al método de autenticacion.
      this.authService.IniciarSesion(this.loginForm.value).subscribe(
        data => {               
          if (data === null || data === undefined) {
            alert("Credenciales no validas");
          } else {
            this.route.navigate(['/portfolio/' + data.id]);
          }
        },
        error => {
          alert("Credenciales no validas " + error);
        })
      } else {
        // Método para marcar todas las validaciones.
      this.loginForm.markAllAsTouched();
      sessionStorage.setItem('currentUser', "null");
      sessionStorage.setItem('idUser', "0");
      alert("Credenciales no validas");
      // alert('Error al ingresar los datos de formulario');
    }
  }

  onCerrar() {
    sessionStorage.setItem('currentUser', "null");
    sessionStorage.setItem('idUser', "0");  
    this.route.navigate(['/portfolio']);
  }

}



// this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
//   next: (userData) => {
//     console.log(userData);
//   },
//   error: (errorData) => {
//     console.error(errorData);
//     this.loginError=errorData; //Específicación del error.
//   },
//   complete: () => {
//     console.info('Login completo');
//     this.router.navigateByUrl('/portfolio');
//     this.loginForm.reset();
//     //Si todo va bien la función te envía a otro componente, para eso inyectar el servicio de rutas y usamos el alias: router.
//   }
// });
// }
// else {
// // Método para marcar todas las validaciones.
// this.loginForm.markAllAsTouched();
// // alert('Error al ingresar los datos de formulario');
// }
// }