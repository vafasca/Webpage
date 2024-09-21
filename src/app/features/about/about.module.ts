import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutTimelineComponent } from './components/conoce-dh/about-timeline/about-timeline.component';
import { AboutShortStoryComponent } from './components/conoce-dh/about-short-story/about-short-story.component';
import { AboutTecnologyCarouselComponent } from './components/conoce-dh/about-tecnology-carousel/about-tecnology-carousel.component';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { WowCultureComponent } from './components/cultura-wow/wow-culture-description/wow-culture.component';
import { AboutUsComponent } from './components/conoce-dh/about-us-container/about-us.component';
import { AboutEmployeeTestimonialComponent } from './components/cultura-wow/about-employee-testimonial/about-employee-testimonial.component';
import { WowCultureContainerComponent } from './components/cultura-wow/wow-culture-container/wow-culture-container.component';
import { InstinctCrazyContainerComponent } from './components/instinto-loco/instinct-crazy-container/instinct-crazy-container.component';
import { NotOutsourcingContainerComponent } from './components/no-outsourcing/not-outsourcing-container/not-outsourcing-container.component';
import { InstinctCrazyDescriptionComponent } from './components/instinto-loco/instinct-crazy-description/instinct-crazy-description.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    AboutComponent,
    AboutTimelineComponent,
    AboutShortStoryComponent,
    AboutTecnologyCarouselComponent,
    WowCultureComponent,
    AboutUsComponent,
    AboutEmployeeTestimonialComponent,
    WowCultureContainerComponent,
    InstinctCrazyContainerComponent,
    NotOutsourcingContainerComponent,
    InstinctCrazyDescriptionComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    AngularMaterialModule,
    HomeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutModule { }
