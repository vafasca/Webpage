import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Prueba1Component } from './prueba1/prueba1.component';
import { Prueba2Component } from './prueba2/prueba2.component';


@NgModule({
  declarations: [
    ContactComponent,
    Prueba1Component,
    Prueba2Component
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule { }
