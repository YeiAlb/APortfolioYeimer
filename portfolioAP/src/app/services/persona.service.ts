import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
//Variable que identifica la conexión.
// url:string= "http://localhost:8080/persona/";
url:string= "https://portfoliobackend-x6ip.onrender.com/persona/";

//Inyectar el modulo HttpClient siempre en el constructor.
constructor(private http:HttpClient) { }
//En http:HttpClient, el http: es un alias

//-------MÉTODOS desde el NetBeans-------.
//Todos son métodos con retorno, no son tipo void, al final se agrega la ruta que se tiene en NETBEANS.
   //Para CREAR o AGREGAR UNA PERSONA NUEVA; 
   public savePersona(perso: Persona): Observable<any> {
     return this.http.post<Persona>(this.url + 'agregar', perso);
   }
 
 //Para eliminar a UNA PERSONA. 
 public deletePersona(id: number): Observable<any> {
   return this.http.delete<any>(this.url + `borrar/${id}`);
   }
 
 //Editar, por convención usamos PUT, podría ser POST.
 public updatePersona(perso: Persona): Observable<any> {
     return this.http.put<any>(this.url + 'editar', perso);
 }
 
 //Para encontrar a UNA SOLA PERSONA.
 public findPersona(id: number): Observable<Persona> {
     return this.http.get<Persona>(this.url + `encontrar/${id}`);
 }
 
 //Método para traer a TODAS LAS PERSONAS.
 public getPersonas(): Observable<Persona[]> {
     return this.http.get<Persona[]>(this.url + 'lista');
 }
}
