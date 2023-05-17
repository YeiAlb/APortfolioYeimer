import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedSocial } from '../model/red-social';

@Injectable({
  providedIn: 'root'
})
export class RedSocialService {
  //Primero el MODEL construido como CLASE, ahora se construye el SERVICIO.
  
  //Variable url (igual para todos los servicios) para identificar la conexión. = la ruta: viene del Controller del NetBeans --> SE REEMPLAZA POR LA RUTA RENDER.
  // url:string= "http://localhost:8080/redSocial/";
  url:string= "https://portfoliobackend-x6ip.onrender.com/redSocial/";

  constructor(private http:HttpClient) { }
  //Variable url (igual para todos los servicios) para identificar la conexión. = la ruta: viene del Controller del NetBeans --> SE REEMPLAZA POR LA RUTA RENDER.

  //-------MÉTODOS desde el NetBeans-------.
  //Todos son métodos con retorno, no son tipo void.
  //Para CREAR o AGREGAR  UNA HARD SKILL NUEVA.
  public saveEstudio(hSkill: RedSocial): Observable<any> {
    return this.http.post<any>(this.url + 'agregar', hSkill);
  }
  
  //Para ELIMINAR a UNA SOLA HARD SKILL. 
  public deleteEstudio(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `borrar/${id}`);
    }
  
  //Para EDITAR, ACTUALIZAR, por convención usamos PUT, podría ser POST.
  public updateEstudio(hSkill: RedSocial): Observable<any> {
      return this.http.put<any>(this.url + 'editar', hSkill);
  }
  
  //DETALLE --> Para encontrar a UNA SOLA HARD SKILL.
  public findEstudio(id: number): Observable<RedSocial> {
      return this.http.get<RedSocial>(this.url + `encontrar/${id}`);
  }
  
  //LISTA: Método para traer a TODAS LAS HARD SKILL.
  public list(): Observable<RedSocial[]> {
      return this.http.get<RedSocial[]>(this.url + 'lista');
  }


}
