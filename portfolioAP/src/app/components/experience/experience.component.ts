import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

    //Variable definida para el array experiencia laboral.
    trabajosList: any;

    //Se inyecta el servicio con la clase para exportar.
    constructor(private dataBasePortfolio: PortfolioService) { }

    ngOnInit() {
      //Subcripción del inyectable para el DataBinding o PropertyBinding.
    this.dataBasePortfolio.obtenerDatos().subscribe (data => {
      this.trabajosList = data.trabajos;
    })
    //Asignación de los datos requeridos del json a la variable.
    //data es un alias.
  }
}
