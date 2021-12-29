import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NosotrosComponent} from './pages/nosotros/nosotros.component';
import {ContactoComponent} from './pages/contacto/contacto.component';
import {GaleriaComponent} from './pages/galeria/galeria.component';
import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';

const routes: Routes = [
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'galeria', component: GaleriaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
