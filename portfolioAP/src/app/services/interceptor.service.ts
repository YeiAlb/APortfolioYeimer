import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
//Para que se comporte como un INTERCEPTOR, implementamos en HttpInterceptor.
export class InterceptorService implements HttpInterceptor{

  constructor(private authService: AutenticacionService) { }


  //Implementamos el método INTERCEPT, que intercepta el Request le agregua el TOKEN y deja que siga su curso y al final un return, usamos el MANEJARDOR, que permita seguir su curso al REQUEST, para eso vamos capturarlo, para lo cual creamos una PROPIEDAD llamada USUARIO AUTENTICADO en AutenticacionService.
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //Creamos la variable que va a devolver los datos del último estado, como la propiedad de usuario autenticado viene del autenticacionService debemos inyectarlo en el constructor y validadmos o verificamos con el estrucutra del IF.
    var currentUser = this.authService.usuarioAutenticado;
    if (currentUser && currentUser.id) {
      request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.id}`
        }
      })
    }
    
    //console.log("Interceptor esta corriendo " + JSON.stringify(currentUser));
    return next.handle(request);

    // De esta manera, el INTERCEPTOR, hay que agregar en EL ARRAY de PROVIDERS, el proveedor HTTP_INTERCEPTORS, con su clase.
  }

}