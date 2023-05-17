import { HttpClient } from '@angular/common/http'; //Hacemos peticiones (CRUD) y obtenemos respuesta.
import { Injectable } from '@angular/core'; //Servicio para ser usado (inyectado) en los componentes por subscripción en el constructor.
import { Observable } from 'rxjs';  //Subcripción para futuros eventos asíncronos.
import { Education } from '../model/education';


@Injectable({
  providedIn: 'root'
})
export class EducationService {
  //Primero el MODEL construido como CLASE, ahora se construye el SERVICIO.

  //Variable url (igual para todos los servicios) para identificar la conexión. = la ruta: viene del Controller del NetBeans --> SE REEMPLAZA POR LA RUTA RENDER.
  //url: string  = "http://localhost:8080/estudio/";
  url: string  = "https://portfoliobackend-x6ip.onrender.com/estudio/";
  
   
  //Inyectar el modulo HttpClient siempre en el constructo.
  constructor(private http:HttpClient) { }
  
  //-------MÉTODOS desde el NetBeans-------.
  //Importamos OBSERVABLES Y MODELS
  //Todos son métodos con retorno, no son tipo void.

  //Para CREAR o AGREGAR un ESTUDIO NUEVO.
  public saveEstudio(estudio: Education): Observable<any> {
    return this.http.post<any>(this.url + 'agregar', estudio);
  }
  
  //Para ELIMINAR a UN SOLO ESTUDIO. 
  public deleteEstudio(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `borrar/${id}`);
    }
  
  //Para EDITAR, ACTUALIZAR, por convención usamos PUT, podría ser POST.
  public updateEstudio(estudio: Education): Observable<any> {
      return this.http.put<any>(this.url + 'editar', estudio);
  }
  
  //DETALLE --> Para encontrar a UN SOLO ESTUDIO.
  public findEstudio(id: number): Observable<Education> {
      return this.http.get<Education>(this.url + `encontrar/${id}`);
  }
  
  //LISTA: Método para traer a TODOS LOS ESTUDIOS, 
  public getEstudios(): Observable<Education[]> {
      return this.http.get<Education[]>(this.url + 'lista');
  }

}
