import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-modal-about-me',
  templateUrl: './modal-about-me.component.html',
  styleUrls: ['./modal-about-me.component.css']
})
export class ModalAboutMeComponent {
  personaForm: FormGroup;
  personas: Persona[] = [];
  
  // trabajo: any;
  // id?: number;

  //Objeto de FORMULARIO, con el servicio de fb crear los formControl y con la propiedad [formGroup] éste objeto de formularios y sus formcontrols, deben estar enlazados con el HTML.
  //formControls y VALIDACIÓN, usamos VALIDACIÓN SINCRONICA.
 

  //Importados e inyectados con alias se pueden consumir. FormBuilder: Formularios, Router: la función te envía al componente, personaService: SERVICIO CREADO para comunicar con la API REST.
  constructor(private fb: FormBuilder, private persoServi: PersonaService) {
    //Grupo de controles para el formulario.
    this.personaForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      ocupacion: ['', Validators.required],
      sobre_mi: ['', Validators.required],
      img_perfil: ['', Validators.required],
    })
  }
  
  ngOnInit(): void {
    this.getPersonas();
  }

  
 // Propiedad Getter, para acceder a los atributos personalizados, son parte de trabajoForm.
  //Campos y validaciones
  get Nombre() {
    return this.personaForm.get("nombre");
  }
 
  get Apellido() {
    return this.personaForm.get("apellido");
  }

  get Ocupacion() {
    return this.personaForm.get("ocupacion");
  }

  get Sobre_mi() {
    return this.personaForm.get("sobre_mi");
  }

  get Img_perfil() {
    return this.personaForm.get("img_perfil");
  }


  
   //Para cargar la lista de trabajos completa con el metodo List(), desde el EducationService, es llamda desde el onInit.
   getPersonas(): void {
    this.persoServi.getPersonas().subscribe({
      next: (data) => {
        this.personas=data;
        console.log("Personas cargadas correctamente");
      },
      error: (e) => console.error(e),
      complete: () => console.info('Completado')
    })
  }


  reset() {
    console.log("Se limpió el formulario");
    this.personaForm.reset();
  }

}

  //Debería trababajar con Persona DTO, porque me da el error de atributos que faltan en persona, correo y calve, y no debería traerlos. Probaré con patchValue a ver.
  // //Guardar edición.
  // onUpdate() {
  //   //Obtenenmos los datos o valores ingresados por el usario en el modal del formulario 
  //   const valorNuevo = this.personaForm.value();

  //   //Actualizar los datos de la persona.
  //   const personaActualizada = {
  //     id: valorNuevo.id,
  //     nombre: valorNuevo.nombre,
  //     apellido: valorNuevo.apellido,
  //     ocupacion: valorNuevo.ocupacion,
  //     sobre_mi: valorNuevo.sobre_mi,
  //     img_perfil: valorNuevo.img_perfil,
  //   };

  //   //Guardamos los cambios en el servicio.
  //   this.persoServi.updatePersona(personaActualizada)
  // }



  // onDelete(id: number) {
  //   if (confirm("Deseas eliminar este trabajo?")) {
  //     this.persoServi.deletePersona(id).subscribe(data => {});
  //     window.location.reload();
  //     alert("Persona eliminada correctamente");
  //     this.getTrabajos();
  //     this.personaForm.reset();
  //     }
  //   }
  
    

