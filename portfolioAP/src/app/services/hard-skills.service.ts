import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardSkill } from '../model/hard-skill';

@Injectable({
  providedIn: 'root'
})
export class HardSkillsService {
  //Primero el MODEL construido como CLASE, ahora se construye el SERVICIO.
  
  //Variable url (igual para todos los servicios) para identificar la conexión. = la ruta: viene del Controller del NetBeans --> SE REEMPLAZA POR LA RUTA RENDER.
  // url:string= "http://localhost:8080/hardSkill/";
  url:string= "https://portfoliobackend-x6ip.onrender.com/hardSkill/";

  constructor(private http:HttpClient) { }
  //Variable url (igual para todos los servicios) para identificar la conexión. = la ruta: viene del Controller del NetBeans --> SE REEMPLAZA POR LA RUTA RENDER.

  //-------MÉTODOS desde el NetBeans-------.
  //Todos son métodos con retorno, no son tipo void.
  //Para CREAR o AGREGAR  UNA HARD SKILL NUEVA.
  public saveHardSkill(hSkill: HardSkill): Observable<any> {
    return this.http.post<any>(this.url + 'agregar', hSkill);
  }
  
  //Para ELIMINAR a UNA SOLA HARD SKILL. 
  public deleteHardSkill(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `borrar/${id}`);
    }
  
  //Para EDITAR, ACTUALIZAR, por convención usamos PUT, podría ser POST.
  public updateHardSkill(hSkill: HardSkill): Observable<any> {
      return this.http.put<any>(this.url + 'editar', hSkill);
  }
  
  //DETALLE --> Para encontrar a UNA SOLA HARD SKILL.
  public findHardSkill(id: number): Observable<HardSkill> {
      return this.http.get<HardSkill>(this.url + `encontrar/${id}`);
  }
  
  //LISTA: Método para traer a TODAS LAS HARD SKILLS.
  public getHardSkills(): Observable<HardSkill[]> {
      return this.http.get<HardSkill[]>(this.url + 'lista');
  }
  
}
