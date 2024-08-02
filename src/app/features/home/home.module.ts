import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeParalaxComponent } from './home-paralax/home-paralax.component';
import { HomeSloganComponent } from './home-slogan/home-slogan.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeCarouselComponent,
    HomeParalaxComponent,
    HomeSloganComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
