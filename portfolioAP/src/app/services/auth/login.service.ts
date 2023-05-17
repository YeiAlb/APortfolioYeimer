import { HttpClient, HttpErrorResponse } from '@angular/common/http'; //Hacemos peticiones (CRUD) y obtenemos respuesta.
import { Injectable } from '@angular/core'; //Servicio para ser usado (inyectado) en los componentes por subscripción en el constructor.
import { catchError, Observable, throwError, BehaviorSubject, tap } from 'rxjs'; //Subcripción para futuros eventos asíncronos.
import { LoginRequest } from './loginRequest';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //COMUNICACIÓN entre componentes
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({id: 0, correo:''}); //Ahora informar el inicio de sesión con el método next, el momento que se hace la llamada.

  constructor(private http:HttpClient) { }

  //Creación del método login que se va a comunicar con la API REST, con (argumento: y <se identifica el tipo de datos>).
  //También debe inyectarse en el componente de login para ser usado.

  //Se crea, un contrato a cumplirse--> una INTERFACE dentro de la carpeta AUTH, un archivo nuevo (loginRequest.ts) que EXPORTA los atributos y métodos que encesita implementar, y así CAMBIAR el tipo de datos que identifica al argumento no sea ANY.

  //Realizar la petición http, PROGRAMACIÓN REACTIVA o ASINCRÓNICA --> la API o BackEnd es independiente del FrontEnd.
  
  //OBSERVABLES-->librería rxjs: trasmiten información asincrona y continua, se comunica como la BASE DE DATOS-->JSON; y RETORNA la solicitud.

  // El OBSERVABLE va a estar escuchando una API-Rest, con susbcribe, tres métodos: Next, Error, Complete.

  // Creamos un método login que se va a comunicar con la API Rest; y un argumento (credentials) para comprobar que los datos lleguen al servicio.

  //recordemos inyectar el servicio httpClient en el modulo.ts e IMPORTARLO para que sea INYECTADO en el constructor con un ALIAS. También trabajamos con un métodos propio de http: get..

  //Creamos la INTERFACE (user.ts) y así cambiar el tipo de datos <any> que identifica al OBSERVABLE.

  //login   (credentials:   any)   {    console.log(credentials);   }
  login(credentials: LoginRequest):Observable<User> {
    return this.http.get<User>('https://portfoliobackend-x6ip.onrender.com/persona/autenticacion/login').pipe(
      tap( (userData: User) => {
        //Emisión de información a los componentes subscritos, ahora las propiedades
        this.currentUserData.next(userData);
        this.currentUserLoginOn.next(true);
      } ),
      catchError(this.handleError) //Parte de rxjs.
    );
  }

  //MANEJADOR DE ERRORES correctamente, lo llamamos handleError--> Porque estamos trabajando con peticiones http y nos aseguramos.

  //Usamos el operador catchError de 'rxjs', librería, se usa para manejar los errores que ocurren al ejecutar un observable y pueden ser producto de la API REST.

  //Con el operador PIPE, encademos el manajedor de errores a la petición http. y también el operador catchError, para especificar cual va a ser ese manejador de errores, que se configuró con handleError.

  //Es importante que el usuario sepa donde está el error.

  //Hay que usar un método para manejar los errores hay muchas formas para trabajarlo, lo importante es que el usario sepa donde está el error, porque no estará revisando la consola. en el login.html, agregamos un párrafo y trabajamos con una variable (atributo) como loginError, además, hay que definirla en el login.component.ts., de tipo string, y le especificamos que no tiene ningun dato. Y si hay se produce un error, se actualiza y se específica en el método error, del login.componente.ts

  private handleError(error:HttpErrorResponse){
  //Identificamos el código de estado que devuelve el backend y usamos el operador PIPE. 
    if(error.status===0){
      //Indica el estado de la respuesta HTTP y concatenamos el error.
      console.error('Se ha producido un error ', error.error);
    }
    else{
      console.error('backend retornó el código de estado', error.status, error.error);
    }
    return throwError(() => new Error('Algo falló. Por favor intente nuevamente')); //Parte de rxjs.

    //Ahora, luego del manejador de errores, para que se entere del inicio de sesión hay que hacer la COMUNICACIÓN entre componentes, con BehaviorSubject, que tiene un valor inicial, también se puede hace con @input y @output.

    //1. Importamos la clase Bechavior Subject.
    //2. Creamos la instancia del Bechavior Subject, valor por defecto (false), es importante recordadr que en BehaviorSubject los datos se pasan por medio de argumentos.
    //3. Exponemos la instancia como observable mediante as Observable(); para que el resto de los componentes puedan subscribirse: dashboard y navbar.
    //4. Actualizar el valor BehaviorSubject, método next().
  }

  //Propiedades para la subscription en los componentes.
  get userData(): Observable<User> {
    return this.currentUserData.asObservable();
  }

  get userLoginOn(): Observable<boolean> {
    return this.currentUserLoginOn.asObservable();
  }

  //Finalmente como buena práctica desubscribir el observable, cuando el componente se destruye.

}
