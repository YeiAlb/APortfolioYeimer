import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experience } from 'src/app/model/experience';
import { ExperiencieService } from 'src/app/services/experiencie.service';

@Component({
  selector: 'app-modal-experience',
  templateUrl: './modal-experience.component.html',
  styleUrls: ['./modal-experience.component.css']
})
export class ModalExperienceComponent {
  trabajoForm: FormGroup;
  trabajosList: Experience[] = [];
  
  // trabajo: any;
  // id?: number;

  //Objeto de FORMULARIO, con el servicio de fb crear los formControl y con la propiedad [formGroup] éste objeto de formularios y sus formcontrols, deben estar enlazados con el HTML.
  //formControls y VALIDACIÓN, usamos VALIDACIÓN SINCRONICA.
 

  //Importados e inyectados con alias se pueden consumir. FormBuilder: Formularios, Router: la función te envía al componente, experienceService: SERVICIO CREADO para comunicar con la API REST.
  constructor(private fb: FormBuilder, private expeServi: ExperiencieService) {
    //Grupo de controles para el formulario.
    this.trabajoForm = this.fb.group({
      id: [''],
      logo_empresarial: ['', Validators.required],
      url_empresa: [''],
      nombre_empresa: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: [''],
      cargo: [''],
    })
  }
  
  ngOnInit(): void {
    this.getTrabajos();
  }

  
 // Propiedad Getter, para acceder a los atributos personalizados, son parte de trabajoForm.
  //Campos y validaciones
  get Logo_empresarial() {
    return this.trabajoForm.get("logo_empresarial");
  }
 
  get Url_empresa() {
    return this.trabajoForm.get("url_empresa");
  }

  get Nombre_empresa() {
    return this.trabajoForm.get("nombre_empresa");
  }

  get Fecha_inicio() {
    return this.trabajoForm.get("fecha_inicio");
  }

  get Fecha_fin() {
    return this.trabajoForm.get("fecha_fin");
  }

  get Cargo() {
    return this.trabajoForm.get("cargo");
  }
  
   //Para cargar la lista de trabajos completa con el metodo List(), desde el EducationService, es llamda desde el onInit.
   getTrabajos(): void {
    this.expeServi.getExperienciasLaborales().subscribe({
      next: (data) => {
        this.trabajosList=data;
        console.log("Trabajos cargados correctamente");
      },
      error: (e) => console.error(e),
      complete: () => console.info('Completado')
    })
  }
   
     
  findEstudio(id: number){
    this.expeServi.findExperienciaLaboral(id).subscribe({
      next: (data) => {
        this.trabajoForm.setValue(data);
      },
      error: (e) => console.error(e),
      complete: ()=> console.info('Completado')
    });
    console.log("Trabajo cargado correctamente");
  }
   
   
  onSave() {
    let trabajo = this.trabajoForm.value;
    if (this.trabajoForm.valid) {
      this.expeServi.saveExperienciaLaboral(trabajo).subscribe({
        next: (data) => {
          this.reset();
        },
        error: (e) => console.error(e),
        complete: () => console.info ('Completado')
      })
      window.location.reload();
      alert("Trabajo cargado correctamente");
    }
    else {  
      // Método para marcar todas las validaciones, con el siguiente método se marca si algo falla.
      this.trabajoForm.markAllAsTouched();
    }
  }

  onUpdate() {
    let trabajo = this.trabajoForm.value;
    if (this.trabajoForm.valid) {
      this.expeServi.saveExperienciaLaboral(trabajo).subscribe({
        next: (data) => {
          this.reset();
        },
        error: (e) => console.error(e),
        complete: () => console.info ('Completado')
      })
      window.location.reload();
      alert("Trabajo cargado correctamente");
    }
    else {  
      // Método para marcar todas las validaciones, con el siguiente método se marca si algo falla.
      this.trabajoForm.markAllAsTouched();
    }
  }

  reset() {
    console.log("Se limpió el formulario");
    this.trabajoForm.reset();
  }


  // Editar experiencia laboral.
  // 1. Importamos ExperienceService.
  // 2. Dentro del método update llamamos al update del servicio, que tiene su parámetro.
  // 3. Usamos la función response si respuesta es exitosa o error, si no.

  

  // onDelete(id: number) {
  //   if (confirm("Deseas eliminar este trabajo?")) {
  //     this.expeServi.deleteExperienciaLaboral(id).subscribe(data => {});
  //     window.location.reload();
  //     alert("Trabajo eliminado correctamente");
  //     this.getTrabajos();
  //     this.trabajoForm.reset();
  //     }
  //   }
  
    
}

