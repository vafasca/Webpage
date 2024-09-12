import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { AboutUsComponent } from './components/conoce-dh/about-us-container/about-us.component';
import { WowCultureContainerComponent } from './components/cultura-wow/wow-culture-container/wow-culture-container.component';

const routes: Routes = [
  { path: '', component: AboutComponent,
    children: [
    {
      path: 'sobre-nosotros', component: AboutUsComponent
    },
    {
      path: 'cultura-wow', component: WowCultureContainerComponent
    }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
