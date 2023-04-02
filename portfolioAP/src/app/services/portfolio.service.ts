import { HttpClient } from '@angular/common/http';
//Hacer las peticiones y CRUD.
import { Injectable } from '@angular/core';
//Servicio para ser usado por los componentes.
import { Observable } from 'rxjs';
//Subcripción para futuros eventos asíncronos.

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
//Nombre de la clase de exportación para inyectarlo a los componentes.
  
  //Inyectar el modulo HttpClient siempre en el constructor.
    constructor(private http:HttpClient) { }
    //En http:HttpClient, el http: es un alias--> ejem: alias:HttpClient y en el returno se especifica el alias.

  //Método observable para los componentes.
  obtenerDatos():Observable<any> {
    return this.http.get('./assets/data/data.json');
  }
    //Como retorno a través de un request, con el método GET -->this.alias.get se obtienen los datos desde una url para comunicarse, ahora desde un Json('entre paréntesis y comillas simples'), de manera asícrona;
    //También un CALLBACK, para observar la opción del problema para la conexión con el servidor.
    
    //Luego hay que subscrirse en el componente que requiere que la información sea inyectada.
}
