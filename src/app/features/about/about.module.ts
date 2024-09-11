import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutTimelineComponent } from './components/about-timeline/about-timeline.component';
import { AboutShortStoryComponent } from './components/about-short-story/about-short-story.component';
import { AboutTecnologyCarouselComponent } from './components/about-tecnology-carousel/about-tecnology-carousel.component';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { WowCultureComponent } from './components/wow-culture/wow-culture.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutEmployeeTestimonialComponent } from './components/about-employee-testimonial/about-employee-testimonial.component';


@NgModule({
  declarations: [
    AboutComponent,
    AboutTimelineComponent,
    AboutShortStoryComponent,
    AboutTecnologyCarouselComponent,
    WowCultureComponent,
    AboutUsComponent,
    AboutEmployeeTestimonialComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    AngularMaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutModule { }
