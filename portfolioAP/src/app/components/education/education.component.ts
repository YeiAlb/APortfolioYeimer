import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';
// import { LoginService } from 'src/app/services/auth/login.service';
// import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  //userLoginOn: boolean = false; //Para loguearse. En el component.html se trabaja con las directivas estructurales *ngIf y se especifican las variables --> !userLoginOn && userLoginOn

  //Instanciamos una VARIABLE TIPO ARRAY para conectar luego en HTML con el DataBinding.
  //estudiosList: any = []; Si dejamos sólo any trae cualquier cosa.
  estudiosList: Education[] = [];
    
  //Se inyecta con un alias el SERVICIO de la CLASE para exportar.
  constructor(private educaServi: EducationService) { }

  ngOnInit():void {
    this.cargarEstudios();
  }
  
  //En este método se hace la subcripción del inyectable para el DataBinding o PropertyBinding.
  //El subscribe es un método que escucha, conecta el OBSERVER con algunos elementos que cambian.
  cargarEstudios(): void {
    this.educaServi.getEstudios().subscribe (data => {
      this.estudiosList = data;
    })
  }

  findEstudio(id?: number){
    if (id !== undefined){
      this.educaServi.findEstudio(id).subscribe(data => {});
    }
  }
    

  deleteEstudio(id?: number) {
    if (id !== undefined && confirm("Deseas eliminar este estudio?")) {
        this.educaServi.deleteEstudio(id).subscribe(data => {});
        window.location.reload();
        alert("Estudio eliminado correctamente");
      }
    }
}

  // //Instanciamos la variable para usarla luego.
  // //nombre:string = '';
  // //Variable definida para el array estudio.
  // //estudiosList: any = []; Si dejamos sólo any trae cualquier cosa.
  // //Variable definida para el array.
  // estudiosList: any;

  // //Se inyecta el servicio con la clase para exportar.
  // constructor(private dataBasePortfolio: PortfolioService) { }

  // ngOnInit():void {
  //   //Subcripción del inyectable para el DataBinding o PropertyBinding.
  //   this.dataBasePortfolio.obtenerDatos().subscribe (data => {
  //     this.estudiosList = data.estudios;
  //     //this.nombre = data.nombre;
  //   })
  //   //Asignación de los datos requeridos del json a la variable.
  //   //data es un alias.