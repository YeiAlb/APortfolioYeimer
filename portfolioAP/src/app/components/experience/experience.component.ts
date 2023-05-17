import { Component, OnInit } from '@angular/core';
import { ModalEducationComponent } from 'src/app/modals/modal-education/modal-education.component';
import { Experience } from 'src/app/model/experience';
import { ExperiencieService } from 'src/app/services/experiencie.service';
// import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
   // userLoginOn: boolean = false; //Para loguearse. En el component.html se trabaja con las directivas estructurales *ngIf y se especifican las variables --> !userLoginOn && userLoginOn

  
  // Inicializamos VARIABLE TIPO ARRAY.
  trabajosList: Experience[] = []; //Con el mismo nombre del MODEL ó ENTITY.
  

  // Se inyecta el SERVICIO de Experience (Experienceservice) con un ALIAS, con la clase para exportar.
  constructor(private expeServi: ExperiencieService) { }

  //Se trae el método (cargarExperiencia) al inicio.
  ngOnInit(): void {
    this.cargarExperiencias();
  }

  // -------MÉTODOS -------.
  // Creamos métodos de tipo void(sin retorno) y llamamos al método en el Servicio.
  // Subcripción del inyectable para realizar el DataBinding o PropertyBinding en el HTML.
  // Usamos el ExperienceService con su alias y también como alias el data.
  cargarExperiencias(): void {
    this.expeServi.getExperienciasLaborales().subscribe (data => {
      this.trabajosList = data
    }); //data es un alias.
  }



  // Borrar experiencia laboral.
  deleteExperienciaLaboral(id?: number) {
    if (id !== undefined && confirm("Deseas eliminar esta Hard Skill?")) {
      this.expeServi.deleteExperienciaLaboral(id).subscribe(data => {});
      window.location.reload();
      alert("Experiencia laboral eliminada correctamente");
    }
  }

  
}

// Comenté todo lo que había hecho con el JSON, para dejar limpio el ts para argegar la base de datos que traemos con models y servicios del NetBeans. de aquí en adelante, también lo copié en pryectos AP.

// export class ExperienceComponent implements OnInit {
//   //Instanciamos la variable para usarla luego.
//   //nombre:string = '';
//   //Variable definida para el array experiencia laboral.
//   //trabajosList: any = []; Si dejamos sólo any trae cualquier cosa.
//   trabajosList: any;

//   //Se inyecta el servicio con la clase para exportar.
//   constructor(private dataBasePortfolio: PortfolioService) { }

//   ngOnInit() {
//     //Subcripción del inyectable para el DataBinding o PropertyBinding.
//     this.dataBasePortfolio.obtenerDatos().subscribe (data => {
//       this.trabajosList = data.experienciasLaborales;
//       //this.nombre = data.nombre;
//     })
//   //Asignación de los datos requeridos del json a la variable.
//   //data es un alias.
//   }