import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  //Variable que identifica la conexión.
  // url:string= "http://localhost:8080/persona/autenticacion/login";
  url:string= "https://portfoliobackend-x6ip.onrender.com/persona/autenticacion/login";

  //El BehaviorSubject expone los métodos next, error, complete; y tiene el valor de estado, cuando nos subscribimos podemos acceder al último valor disponible; eso no lo hacen los OBSERVALES normales.
  //Inicializamos la variable en el constructor.
  currentUserSubject: BehaviorSubject<any>;
  
  constructor(private http: HttpClient) { 
    //console.log("El servicio de autenticacion esta corriendo");
    //Instanciamos el BehaviorSubject y lo almacenamos en el sessionStorage y que devuelva un JSON vacío.
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }  

  //Creamos el método de IniciarSesion que recibe como parámetro las credenciales del usuario; y lo específicamos como OBSERVABLE para que los controladores puedan subscribirse.
  //Desde este método hacemos la llamada a la API y retornar al Controlador, con el método POST(this.url, datos).métodoPIPE, que encadena operadores, (MAP(data => sesionStorage))
  //El STORAGE, un objeto, nos permite guardar los datos de manera local, sin conectar a la base de datos. Dos propiedades: localStorage,  de manera indefinida y sesionStorage;  mientras la pestaña del navegador esté abierta.
  IniciarSesion(credenciales: any): Observable<any> {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }

    return this.http.post<any>(this.url, credenciales, httpOptions).pipe(map(data => {
      //sessionStorage ('clave', valor) e inyectamos el servicio de autenticación en el componente.
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      // sessionStorage.setItem('idUser', JSON.stringify(data.id));
      this.currentUserSubject.next(data);
      console.log("authService está corriendo " + JSON.stringify(data));
      return data;
    }));        
  }

  //Esta propiedad retorna el valor de BehaviorSubject y en el INTERCEPTOR, creamos la variable currentUser.
  get usuarioAutenticado () {
    return this.currentUserSubject.value;
  }
}
