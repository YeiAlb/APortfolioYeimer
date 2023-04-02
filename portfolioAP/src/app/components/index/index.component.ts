import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { User } from 'src/app/services/auth/user';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  userLoginOn: boolean = false;
  userData?: User;

  //Subscripción del Servicio.
  constructor(private LoginService: LoginService) { }

  //Buena práctica, desubscribirse, para evitar fugas de memoria.
  ngOnDestroy():void {
    this.LoginService.currentUserData.unsubscribe();
    this.LoginService.currentUserLoginOn.unsubscribe();
  }

  //Al iniciar, la subscripción y asignación, de acuerdo al *ngIf
  ngOnInit():void {
    this.LoginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    })

    //También subcribimos la data pero debe crearse la varaible e importar User.
    this.LoginService.currentUserData.subscribe({
      next: (userData) => {
        this.userData=userData;
      }
    })
  }

}
