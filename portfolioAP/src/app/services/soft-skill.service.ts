import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkill } from '../model/soft-skill';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillService {
//Primero el MODEL construido como CLASE, ahora se construye el SERVICIO.
  
  //Variable url (igual para todos los servicios) para identificar la conexión. = la ruta: viene del Controller del NetBeans --> SE REEMPLAZA POR LA RUTA RENDER.
  // url:string= "http://localhost:8080/softSkill/";
  url:string= "https://portfoliobackend-x6ip.onrender.com/softSkill/";
  

  constructor(private http:HttpClient) { }
  //Variable url (igual para todos los servicios) para identificar la conexión. = la ruta: viene del Controller del NetBeans --> SE REEMPLAZA POR LA RUTA RENDER.

  //-------MÉTODOS desde el NetBeans-------.
  //Todos son métodos con retorno, no son tipo void.
  //Para CREAR o AGREGAR  UNA SOFT SKILL NUEVA.
  public saveSoftSkill(hSkill: SoftSkill): Observable<any> {
    return this.http.post<any>(this.url + 'agregar', hSkill);
  }
  
  //Para ELIMINAR a UNA SOLA SOFT SKILL. 
  public deleteSoftSkill(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `borrar/${id}`);
    }
  
  //Para EDITAR, ACTUALIZAR, por convención usamos PUT, podría ser POST.
  public updateSoftSkill(hSkill: SoftSkill): Observable<any> {
      return this.http.put<any>(this.url + 'editar', hSkill);
  }
  
  //DETALLE --> Para encontrar a UNA SOLA SOFT SKILL.
  public findSoftSkill(id: number): Observable<SoftSkill> {
      return this.http.get<SoftSkill>(this.url + `encontrar/${id}`);
  }
  
  //LISTA: Método para traer a TODAS LAS SOFT SKILLS.
  public getSoftSkills(): Observable<SoftSkill[]> {
      return this.http.get<SoftSkill[]>(this.url + 'lista');
  }




}
