import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Projects } from 'src/app/model/projects';
import { ProyectsService } from 'src/app/services/proyects.service';

@Component({
  selector: 'app-modal-projects',
  templateUrl: './modal-projects.component.html',
  styleUrls: ['./modal-projects.component.css']
})
export class ModalProjectsComponent {
  proyectoForm: FormGroup;
  proyectosList: Projects[] = [];

  // proyecto: any;
  // id?: number;

  //Objeto de FORMULARIO, con el servicio de fb crear los formControl y con la propiedad [formGroup] éste objeto de formularios y sus formcontrols, deben estar enlazados con el HTML.
  //formControls y VALIDACIÓN, usamos VALIDACIÓN SINCRONICA.
 

  //Importados e inyectados con alias se pueden consumir. FormBuilder: Formularios, Router: la función te envía al componente, proyectoService: SERVICIO CREADO para comunicar con la API REST.
  constructor(private fb: FormBuilder, private proServi: ProyectsService) {
    //Grupo de controles para el formulario.
    this.proyectoForm = this.fb.group({   
      id: [''],
      imagen_proyecto: ['', Validators.required],
      url_proyecto: ['', Validators.required],
      titulo_proyecto: ['', Validators.required],
      descripcion: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.getProyectos();
  }

  // Propiedad Getter, para acceder a los atributos personalizados, son parte de proyectoForm.
  //Campos y validaciones
  get Imagen_proyecto() {
    return this.proyectoForm.get("imagen_proyecto");
  }
 
  get Url_proyecto() {
    return this.proyectoForm.get("url_proyecto");
  }
  
  get Titulo_proyecto() {
    return this.proyectoForm.get("titulo_proyecto");
  }

  get Descripcion() {
    return this.proyectoForm.get("descripcion");
  }

  //Para cargar la lista de estudios completa con el metodo: (List<Estudios> getProyectos()), desde el ProyectsService, es llamada en el onInit.
  getProyectos(): void {
  this.proServi.getProyectos().subscribe({
    next: (data) => {
      this.proyectosList=data;
      console.log("Proyectos cargados correctamente");
    },
    error: (e) => console.error(e),
    complete: () => console.info('Completado')
  })
  }

  findEstudio(id: number){
    this.proServi.findProyecto(id).subscribe({
      next: (data) => {
        this.proyectoForm.setValue(data);
      },
      error: (e) => console.error(e),
      complete: ()=> console.info('Completado')
    });
    console.log("Proyecto cargado correctamente");
  }

  saveProyecto() {
    let proyecto = this.proyectoForm.value;
    if (this.proyectoForm.valid) {
      this.proServi.saveProyecto(proyecto).subscribe({
        next: (data) => {
          this.reset();
        },
        error: (e) => console.error(e),
        complete: () => console.info ('Completado')
      })
      window.location.reload();
      alert("Proyecto cargada correctamente");
    }
    else {  
      // Método para marcar todas las validaciones, se marca si algo falla.
      this.proyectoForm.markAllAsTouched();
    }
  }


  updateProyecto() {
    this.proServi.updateProyecto(this.proyectoForm.value).subscribe({
      next: (data) => {
        this.reset();
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    window.location.reload();
    alert("Proyecto modificado correctamente");
  }

  reset() {
    console.log("Se limpió el formulario");
    this.proyectoForm.reset();
  }

}
