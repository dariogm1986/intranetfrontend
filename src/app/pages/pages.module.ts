import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PagesComponent } from './pages.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ActualidadComponent } from './actualidad/actualidad.component';
import { FormArticuloComponent } from './form-articulo/form-articulo.component';



@NgModule({
  declarations: [
    HomeComponent, 
    ServiciosComponent, 
    NosotrosComponent, 
    PagesComponent, 
    ContactosComponent, 
    ActualidadComponent, FormArticuloComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    ServiciosComponent,
    NosotrosComponent,
    PagesComponent
  ]
})
export class PagesModule { }
