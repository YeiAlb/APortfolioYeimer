import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {
  userLoginOn: boolean = false; //Para loguearse. En el component.html se trabaja con las directivas estructurales *ngIf y se especifican las variables --> !userLoginOn && userLoginOn

  //Subscripción del Servicio de Login.
  constructor(private LoginService: LoginService) { }

  //Buena práctica, desubscribirse, para evitar fugas de memoria.
  ngOnDestroy():void {
    this.LoginService.currentUserLoginOn.unsubscribe();
  }

  ngOnInit():void { //Al iniciar, la subscripción y asignación, de acuerdo al *ngIf
    this.LoginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    })
  }

}
