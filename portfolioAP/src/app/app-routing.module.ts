import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { Error404Component } from './components/error404/error404.component';
import { LoginComponent } from './components/login/login.component';

// Rutas parametrizadas, rutas hijas, por defecto, etc.
const routes: Routes = [
  { path:'inicio', component: IndexComponent },
  { path:'iniciar-sesion', component: LoginComponent },
  { path: '',   redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
