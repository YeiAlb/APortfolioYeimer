import { Component, OnInit } from '@angular/core';
import { HardSkill } from 'src/app/model/hard-skill';
import { SoftSkill } from 'src/app/model/soft-skill';
import { HardSkillsService } from 'src/app/services/hard-skills.service';
import { SoftSkillService } from 'src/app/services/soft-skill.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  //userLoginOn: boolean = false; //Para loguearse. En el component.html se trabaja con las directivas estructurales *ngIf y se especifican las variables --> !userLoginOn && userLoginOn
  
  //VARIABLE que identifica al componente en el HTML.

  hardList: HardSkill[] = []; //Con el mismo nombre de CLASE del MODEL ó ENTITY COMO ARRAY.

  softList: SoftSkill[] = []; //Con el mismo nombre de CLASE del MODEL ó ENTITY COMO ARRAY.

  //Se inyectan los SERVICIOS DE HARD & SOFT SKILLS.
  constructor(private hardServi: HardSkillsService, private softServi: SoftSkillService) { }

  //Se traen los métodos creados de habilidades para cargar al inicio.
  ngOnInit() {
    this.cargarHardSkills();
    this.cargarSoftSkills();
  }
  

  //-------MÉTODOS -------.
  //Creamos métodos de tipo void(sin retorno) y llamamos al método en el Servicio.
  //Subcripción del inyectable para realizar el DataBinding o PropertyBinding en el HTML.
  //Usamos el ExperienceService con su alias y también como alias el data.
  cargarHardSkills(): void {
    this.hardServi.getHardSkills().subscribe (data => {
      this.hardList = data
    });
  }

  cargarSoftSkills(): void {
    this.softServi.getSoftSkills().subscribe (data => {
      this.softList = data
    });
  }

  deleteHardSkill(id?: number) {
    if (id !== undefined && confirm("Deseas eliminar esta Hard Skill?")) {
      this.hardServi.deleteHardSkill(id).subscribe(data => {});
      window.location.reload();
      alert("Hard Skill eliminada correctamente");
    }
  }

  deleteSoftSkill(id?: number) {
    if (id !== undefined && confirm("Deseas eliminar esta Hard Skill?")) {
      this.softServi.deleteSoftSkill(id).subscribe(data => {});
      window.location.reload();
      alert("Soft Skill eliminada correctamente");
    }
  }
  
}

// import { forkJoin } from 'rxjs';
// cargarSkills(): void {
//   forkJoin({
//     hardList: this.hardServi.list(),
//     softList: this.softServi.list()
//   }).subscribe(({ hardList, softList }) => {
//     this.hardList = hardList;
//     this.softList = softList;
//   });
// }

// En este código, forkJoin combina dos observables, uno para hardServi.list() y otro para softServi.list(), y espera a que ambos emitan su valor antes de emitir un objeto que contiene ambos valores. La llamada a subscribe() recibe este objeto y distribuye los valores en las variables correspondientes.




  // //Se inyecta el servicio con la clase para exportar.
  // constructor(private dataBasePortfolio: PortfolioService) { }

  // ngOnInit() {
  //   //Subcripción del inyectable para el DataBinding o PropertyBinding.
  //   this.dataBasePortfolio.obtenerDatos().subscribe (data => {
  //     this.hardList = data.hardSkills;
  //     this.softList = data.softSkills;
  //     //this.nombre = data.nombre;
  //   })
  // //Asignación de los datos requeridos del json a la variable.
  // //data es un alias.