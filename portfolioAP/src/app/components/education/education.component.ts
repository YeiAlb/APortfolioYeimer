import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  //Variable definida para el array.
  estudiosList: any;

  //Se inyecta el servicio con la clase para exportar.
  constructor(private dataBasePortfolio: PortfolioService) { }

  ngOnInit():void {
    //Subcripción del inyectable para el DataBinding o PropertyBinding.
    this.dataBasePortfolio.obtenerDatos().subscribe (data => {
      this.estudiosList = data.estudios;
    })
    //Asignación de los datos requeridos del json a la variable.
    //data es un alias.
  }
}
