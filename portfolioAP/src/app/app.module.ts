import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress'; // Import ng-circle-progress

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { Error404Component } from './components/error404/error404.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { ModalAboutMeComponent } from './modals/modal-about-me/modal-about-me.component';
import { ModalEducationComponent } from './modals/modal-education/modal-education.component';
import { ModalExperienceComponent } from './modals/modal-experience/modal-experience.component';
import { ModalSkillsComponent } from './modals/modal-skills/modal-skills.component';
import { ModalProjectsComponent } from './modals/modal-projects/modal-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    Error404Component,
    LoginComponent,
    IndexComponent,
    ModalAboutMeComponent,
    ModalEducationComponent,
    ModalExperienceComponent,
    ModalSkillsComponent,
    ModalProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({})     // Specify ng-circle-progress as an import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
