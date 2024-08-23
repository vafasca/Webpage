import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeParalaxComponent } from './home-paralax/home-paralax.component';
import { HomeSloganComponent } from './home-slogan/home-slogan.component';
import { HomePartialAboutUsComponent } from './home-partial-about-us/home-partial-about-us.component';
import { HomePartialTalentProgramComponent } from './home-partial-talent-program/home-partial-talent-program.component';
import { HomePartialCareersComponent } from './home-partial-careers/home-partial-careers.component';
import { CardListCareerComponent } from './card-list-career/card-list-career.component';
import { CardCareerComponent } from './card-career/card-career.component';
import { HomeTestimonialComponent } from './home-testimonial/home-testimonial.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomePartialNewsComponent } from './home-partial-news/home-partial-news.component';
import { CardNewsComponent } from './card-news/card-news.component';
import { CardListNewsComponent } from './card-list-news/card-list-news.component';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeParalaxComponent,
    HomeSloganComponent,
    HomePartialAboutUsComponent,
    HomePartialTalentProgramComponent,
    HomePartialCareersComponent,
    CardListCareerComponent,
    CardCareerComponent,
    HomeTestimonialComponent,
    HomePartialNewsComponent,
    CardNewsComponent,
    CardListNewsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CarouselModule,
    AngularMaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
