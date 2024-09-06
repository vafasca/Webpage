import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutTimelineComponent } from './components/about-timeline/about-timeline.component';
import { AboutShortStoryComponent } from './components/about-short-story/about-short-story.component';


@NgModule({
  declarations: [
    AboutComponent,
    AboutTimelineComponent,
    AboutShortStoryComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
