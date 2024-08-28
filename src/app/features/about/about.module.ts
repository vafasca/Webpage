import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutTimelineComponent } from './components/about-timeline/about-timeline.component';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';


@NgModule({
  declarations: [
    AboutComponent,
    AboutTimelineComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    AngularMaterialModule
  ]
})
export class AboutModule { }
