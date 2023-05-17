import { Component } from '@angular/core';
import { Projects } from 'src/app/model/projects';
// import { PortfolioService } from 'src/app/services/portfolio.service';
import { ProyectsService } from 'src/app/services/proyects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  ///userLoginOn: boolean = false; //Para loguearse. En el component.html se trabaja con las directivas estructurales *ngIf y se especifican las variables --> !userLoginOn && userLoginOn

  //Instanciamos una VARIABLE TIPO ARRAY para conectar luego en HTML con el DataBinding.
  //estudiosList: any = []; Si dejamos sólo any trae cualquier cosa.
  proyectosList: Projects[] = [];

  //Se inyecta el servicio con la clase para exportar.
  constructor(private proServi: ProyectsService) { }

  ngOnInit() {
    //Subcripción del inyectable para el DataBinding o PropertyBinding.
    this.proServi.getProyectos().subscribe (data => {
      this.proyectosList = data;
      //this.nombre = data.nombre;
    })
  //Asignación de los datos requeridos del json a la variable.
  //data es un alias.
  }

  deleteProyecto(id?: number) {
  if (id !== undefined && confirm("Deseas eliminar este Proyecto?")) {
      this.proServi.deleteProyecto(id).subscribe(data => {});
      window.location.reload();
      alert("Proyecto eliminado correctamente");
    }
  }
}


// export class ProjectsComponent {

//   //Instanciamos la variable para usarla luego.
//   //nombre:string = '';
//   //Variable definida para el array proyectos.
//   //trabajosList: any = []; Si dejamos sólo any trae cualquier cosa.
//   proyectosList: any;

//   //Se inyecta el servicio con la clase para exportar.
//   constructor(private dataBasePortfolio: PortfolioService) { }

//   ngOnInit() {
//     //Subcripción del inyectable para el DataBinding o PropertyBinding.
//     this.dataBasePortfolio.obtenerDatos().subscribe (data => {
//       this.proyectosList = data.proyectos;
//       //this.nombre = data.nombre;
//     })
//   //Asignación de los datos requeridos del json a la variable.
//   //data es un alias.
//   }