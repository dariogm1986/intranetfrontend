import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';


import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ActualidadComponent } from './actualidad/actualidad.component';
import { FormArticuloComponent } from './form-articulo/form-articulo.component';

const routes: Routes = [
    {
        path:'',
        component: PagesComponent,        
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'nosotros', component: NosotrosComponent },
            { path: 'servicios', component: ServiciosComponent },
            { path: 'actualidad', component: ActualidadComponent },
            { path: 'contactos', component: ContactosComponent },
            { canActivate: [AuthGuard], path: 'form-articulo', component: FormArticuloComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' },
        ]
    },
    
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }