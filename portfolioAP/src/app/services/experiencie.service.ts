import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperiencieService {
//Variable que identifica la conexión.
// url:string= "http://localhost:8080/experiencia/";
url:string= "https://portfoliobackend-x6ip.onrender.com/experiencia/";

 //Inyectar el modulo HttpClient siempre en el constructor.
 constructor(private http:HttpClient) { }
 //En http:HttpClient, el http: es un alias

//-------MÉTODOS desde el NetBeans-------.
//Todos son métodos con retorno, no son tipo void, al final se agrega la ruta que se tiene en NETBEANS.
  //Para CREAR o AGREGAR UNA EXPERIENCIA LABORAL NUEVA; 
  public saveExperienciaLaboral(expelab: Experience): Observable<any> {
    return this.http.post<Experience>(this.url + 'agregar', expelab);
  }
  
  //Para eliminar a UNA EXPERIENCIA LABORAL. 
  public deleteExperienciaLaboral(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `delete/${id}`);
    }
  
  //Editar, por convención usamos PUT, podría ser POST.
  public updateExperienciaLaboral(expelab: Experience): Observable<any> {
    return this.http.put<any>(this.url + 'editar', expelab);
  }
  
  //Para encontrar a UNA SOLA EXPERIENCIA LABORAL.
  public findExperienciaLaboral(id: number): Observable<Experience> {
    return this.http.get<Experience>(this.url + `encontrar/${id}`);
  }
  
  //Método para traer a TODAS LAS EXPERIENCIAS LABORALES.
  public getExperienciasLaborales(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.url + 'lista');
  }
}

