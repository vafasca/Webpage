import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    HomeModule
  ]
})
export class BlogModule { }
