import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-modal-education',
  templateUrl: './modal-education.component.html',
  styleUrls: ['./modal-education.component.css']
})
export class ModalEducationComponent {
  estudioForm: FormGroup;
  estudiosList: Education[] = [];
  
  // estudio!: Education;
  // id?: number;

  //Objeto de FORMULARIO, con el servicio de fb crear los formControl y con la propiedad [formGroup] éste objeto de formularios y sus formcontrols, deben estar enlazados con el HTML.
  //formControls y VALIDACIÓN, usamos VALIDACIÓN SINCRONICA.
 

  //Importados e inyectados con alias se pueden consumir. FormBuilder: Formularios, Router: la función te envía al componente, educationService: SERVICIO CREADO para comunicar con la API REST.
  constructor(private fb: FormBuilder, private educaServi: EducationService, private router: Router) {
    //Grupo de controles para el formulario.
    this.estudioForm = this.fb.group({
      id: [''],
      logo_institucional: ['', Validators.required],
      url_institucion: [''],
      nombre_institucion: ['', Validators.required],
      titulo_academico: ['', Validators.required],
      fecha_inicio: [''],
      fecha_fin: [''],
    })
  }
  
  ngOnInit(): void {
    this.getEstudios();
  }

  
 // Propiedad Getter, para acceder a los atributos personalizados, son parte de estudioForm.
  //Campos y validaciones
  get Logo_institucional() {
    return this.estudioForm.get("logo_institucional");
  }
 
  get Url_institucion() {
    return this.estudioForm.get("url_institucion");
  }
  
  get Nombre_institucion() {
    return this.estudioForm.get("nombre_institucion");
  }

  get Titulo_academico() {
    return this.estudioForm.get("titulo_academico");
  }

  get Fecha_inicio() {
    return this.estudioForm.get("fecha_inicio");
  }

  get Fecha_fin() {
    return this.estudioForm.get("fecha_fin");
  }
  
   //Para cargar la lista de estudios completa con el metodo: (List<Estudios> getEstudios()), desde el EducationService, es llamada en el onInit.
  getEstudios(): void {
    this.educaServi.getEstudios().subscribe({
      next: (data) => {
        this.estudiosList=data;
        console.log("Estudios cargados correctamente");
      },
      error: (e) => console.error(e),
      complete: () => console.info('Completado')
    })
  }
    
   
  saveEstudio() {
    let estudio = this.estudioForm.value;
    if (this.estudioForm.valid) {
      this.educaServi.saveEstudio(estudio).subscribe({
        next: (data) => {
          this.reset();
        },
        error: (e) => console.error(e),
        complete: () => console.info ('Completado')
      })
      window.location.reload();
      alert("Estudio cargado correctamente");
    }
    else {  
      // Método para marcar todas las validaciones, con el siguiente método se marca si algo falla.
      this.estudioForm.markAllAsTouched();
    }
  }


  updateEstudio():void{
    this.educaServi.updateEstudio(this.estudioForm.value).subscribe(data => {
      alert("Estudio modificado.");
      this.router.navigate(['']);
    }
    )
  }
    

  reset() {
    console.log("Se limpió el formulario");
    this.estudioForm.reset();
  }

}