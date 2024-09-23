import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeModule } from '../home/home.module';
import { BlogCustomPostComponent } from './components/blog-custom-post/blog-custom-post.component';
import { BlogLinkedinPostComponent } from './components/blog-linkedin-post/blog-linkedin-post.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogCustomPostComponent,
    BlogLinkedinPostComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    HomeModule
  ]
})
export class BlogModule { }
