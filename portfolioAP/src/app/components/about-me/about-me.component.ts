import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  //userLoginOn: boolean = false; //Para loguearse. En el component.html se trabaja con las directivas estructurales *ngIf y se especifican las variables --> !userLoginOn && userLoginOn

  //Instanciamos una VARIABLE TIPO ARRAY para conectar luego en HTML con el DataBinding.
  //estudiosList: any = []; Si dejamos sólo any trae cualquier cosa.
  personas: Persona[]=[];
  personaForm: FormGroup;

    
  //Se inyecta con un alias el SERVICIO de la CLASE para exportar.
  constructor(private fb: FormBuilder, private persoServi: PersonaService) {
    this.personaForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      ocupacion: ['', Validators.required],
      sobre_mi: ['', Validators.required],
      img_perfil: ['', Validators.required],
    })
  }

  ngOnInit():void {
    this.cargarPersonas();
  }

  //Creamos el formulario para el modal 
  
  //En este método se hace la subcripción del inyectable para el DataBinding o PropertyBinding.
  //El subscribe es un método que escucha, conecta el OBSERVER con algunos elementos que cambian.
  cargarPersonas(): void {
    this.persoServi.getPersonas().subscribe (
      data => {
        this.personas = data
      });
  }

  findPersona(id: number){
    this.persoServi.findPersona(id).subscribe({
      next: (data) => {
        this.personaForm.setValue(data);
      },
      error: (e) => console.error(e),
      complete: ()=> console.info('complete')
    });
    console.log("Persona cargada correctamente");
  }

  

}




// Lo que hicimos con el JSON.
// export class AboutMeComponent implements OnInit {
//   //Creamos una variable.
//   persona: any;

//   constructor(private dataBasePortfolio: PortfolioService) { }
  
//   ngOnInit(): void {
//     //Subcripción del inyectable, luego enlazar con DataBinding en el template.
//     this.dataBasePortfolio.obtenerDatos().subscribe(data => {
//       // console.log(data); // Observamos los datos llegando por consola.
//       //Asignación de la variable a los datos.
//       this.persona = data.personas;
//       //data es un alias.
//     } );
//   }
// }