import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HardSkill } from 'src/app/model/hard-skill';
import { SoftSkill } from 'src/app/model/soft-skill';
import { HardSkillsService } from 'src/app/services/hard-skills.service';
import { SoftSkillService } from 'src/app/services/soft-skill.service';

@Component({
  selector: 'app-modal-skills',
  templateUrl: './modal-skills.component.html',
  styleUrls: ['./modal-skills.component.css']
})
export class ModalSkillsComponent implements OnInit{
  skillsForm: FormGroup;
  hardList: HardSkill[] = [];
  softList: SoftSkill[] = [];

  // skill: any;
  // id?: number;

  //Objeto de FORMULARIO, con el servicio de fb crear los formControl y con la propiedad [formGroup] éste objeto de formularios y sus formcontrols, deben estar enlazados con el HTML.
  //formControls y VALIDACIÓN, usamos VALIDACIÓN SINCRONICA.
 

  //Importados e inyectados con alias se pueden consumir. FormBuilder: Formularios, Router: la función te envía a los componentes, hardService y softService: SERVICIO CREADO para comunicar con la API REST.
  constructor(private fb: FormBuilder, private hardServi: HardSkillsService, private softServi: SoftSkillService) {
    //Grupo de controles para el formulario.
    this.skillsForm = this.fb.group({
      id: [''],
      nombre: ['',[Validators.required]],
      porcentaje: ['', [Validators.required, Validators.min(0), Validators.max(100)]], 
    })
  }


  ngOnInit(): void {
    this.getHardSkills();
    this.getSoftSkills();
  }

  // Propiedad Getter, para acceder a los atributos personalizados, son parte de trabajoForm.
  //Campos y validaciones
  get Nombre() {
    return this.skillsForm.get("nombre");
  }
  get NombreValid() {
    return this.Nombre?.touched && !this.Nombre?.valid;
  }
 
  get Porcentaje() {
    return this.skillsForm.get("porcentaje");
  }
   get PorcentajeValid() {
    return this.Porcentaje?.touched && !this.Porcentaje?.valid;
  }


  // --- HARD SKILLS ---
  //El siguiente método sirve para cargar la lista de habilidades completa con el metodo List(), desde el EducationService, es llamda desde el onInit.
  getHardSkills(): void{
    this.hardServi.getHardSkills().subscribe({
      next: (data) => {
        this.hardList = data;
        console.log("Hard Skills cargadas correctamente");
      },
    error: (e) => console.error(e),
    complete: () => console.info("completo")
    })
  }
  
  saveHardSkill() {
    let hSkill = this.skillsForm.value;
    if (this.skillsForm.valid) {
      this.hardServi.saveHardSkill(hSkill).subscribe({
        next: (data) => {
          this.reset();
        },
        error: (e) => console.error(e),
        complete: () => console.info ('Completado')
      })
      window.location.reload();
      alert("Hard Skill cargada correctamente");
    }
    else {  
      // Método para marcar todas las validaciones, se marca si algo falla.
      this.skillsForm.markAllAsTouched();
    }
  }

  updateHardSkill() {
    this.hardServi.updateHardSkill(this.skillsForm.value).subscribe({
      next: (data) => {
        this.reset();
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    window.location.reload();
    alert("Hard Skill modificada correctamente");
  }
    

  // --- SOFT SKILLS ---
  //El siguiente método sirve para cargar la lista de habilidades completa con el metodo List(), desde el EducationService, es llamda desde el onInit
  getSoftSkills(): void{
    this.softServi.getSoftSkills().subscribe({next: (data) => {
      this.softList = data;
      console.log("Soft Skill cargada correctamente");
    },
    error: (e) => console.error(e),
    complete: () => console.info("completo")
    })
  }
  
  saveSoftSkill() {
    let sSkill = this.skillsForm.value;
    if (this.skillsForm.valid) {
      this.softServi.saveSoftSkill(sSkill).subscribe({
        next: (data) => {
          this.reset();
        },
        error: (e) => console.error(e),
        complete: () => console.info ('Completado')
      })
      window.location.reload();
      alert("Soft Skill cargada correctamente");
    }
    else {  
      // Método para marcar todas las validaciones, con el siguiente método se marca si algo falla.
      this.skillsForm.markAllAsTouched();
    }
  }

  updateSoftSkill() {
    this.softServi.saveSoftSkill(this.skillsForm.value).subscribe({
      next: (data) => {
        this.reset();
      },
      error: (e) => console.error(e),
      complete: () => console.info('completado')
    });
    window.location.reload();
    alert("Soft Skill modificada correctamente");
  }

  reset() {
    console.log("Se limpió el formulario");
    this.skillsForm.reset();
  }


}
