import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../model/projects';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {
//Primero el MODEL construido como CLASE, ahora se construye el SERVICIO.

  //Variable url (igual para todos los servicios) para identificar la conexión. = la ruta: viene del Controller del NetBeans --> SE REEMPLAZA POR LA RUTA RENDER.
  // url:string= "http://localhost:8080/proyecto/";
  url:string= "https://portfoliobackend-x6ip.onrender.com/proyecto/";
  
   
  //Inyectar el modulo HttpClient siempre en el constructo.
  constructor(private http:HttpClient) { }
  
  //-------MÉTODOS desde el NetBeans-------.
  //Todos son métodos con retorno, no son tipo void.
  //Para CREAR o AGREGAR un PROYECTO NUEVO.
  public saveProyecto(proye: Projects): Observable<any> {
    return this.http.post<any>(this.url + 'agregar', proye);
  }
  
  //Para ELIMINAR a un solo PROYECTO. 
  public deleteProyecto(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `borrar/${id}`);
    }
  
  //Para EDITAR, ACTUALIZAR, por convención usamos PUT, podría ser POST.
  public updateProyecto(proye: Projects): Observable<any> {
      return this.http.put<any>(this.url + 'editar', proye);
  }
  
  //DETALLE --> Para encontrar a UN SOLO PROYECTO.
  public findProyecto(id: number): Observable<Projects> {
      return this.http.get<Projects>(this.url + `encontrar/${id}`);
  }
  
  //LISTA: Método para traer a TODOS LOS PROYECTOS.
  public getProyectos(): Observable<Projects[]> {
      return this.http.get<Projects[]>(this.url + 'lista');
  }


}
