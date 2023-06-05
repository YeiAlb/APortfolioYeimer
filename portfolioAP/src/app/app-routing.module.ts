import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { Error404Component } from './components/error404/error404.component';
import { LoginComponent } from './components/login/login.component';
import { GuardGuard } from './services/guard.guard';

//Rutas virtuales, que entregan datos.
// Rutas parametrizadas, rutas hijas, por defecto, etc.
const routes: Routes = [
  { path:'portfolio', component: PortfolioComponent, canActivate: [GuardGuard] },
  { path:'iniciar-sesion', component: LoginComponent },
  { path: '', redirectTo: "/portfolio", pathMatch: 'full' },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
