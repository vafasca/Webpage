import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { AboutUsComponent } from './components/conoce-dh/about-us-container/about-us.component';
import { WowCultureContainerComponent } from './components/cultura-wow/wow-culture-container/wow-culture-container.component';
import { InstinctCrazyContainerComponent } from './components/instinto-loco/instinct-crazy-container/instinct-crazy-container.component';
import { NotOutsourcingContainerComponent } from './components/no-outsourcing/not-outsourcing-container/not-outsourcing-container.component';

const routes: Routes = [
  { path: '', component: AboutComponent,
    children: [
    {
      path: 'sobre-nosotros', component: AboutUsComponent
    },
    {
      path: 'cultura-wow', component: WowCultureContainerComponent
    },
    {
      path: 'confia-en-tu-instinto-loco', component: InstinctCrazyContainerComponent
    },
    {
      path: 'outsourcing-no-es-lo-nuestro', component: NotOutsourcingContainerComponent
    }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
