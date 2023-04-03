import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  //Creamos una variable.
  miPortfolio: any;

  constructor(private dataBasePortfolio: PortfolioService) { }
  
  ngOnInit(): void {
    //Subcripción del inyectable, luego enlazar con DataBinding en el template.
    this.dataBasePortfolio.obtenerDatos().subscribe(data => {
      // console.log(data); // Observamos los datos llegando por consola.
      //Asignación de la variable a los datos.
      this.miPortfolio = data.personas;
      //data es un alias.
    } );
  }
}
